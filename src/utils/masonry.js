import range from "./range";
import uniq from "./uniq";

/**
 * @typedef {{
 *    cols: number,
 *    height: number,
 *    col?: number,
 *    i?: number,
 *    shrinkWeight: 4, // higher values are not shrunk widthwise eagerly
 *    aspectWeight: 1, // higher values are not expanded/shrunk heightwise eagerly
 *    preserveAspect: true|false|"balanced", // how to preserve aspect vs maintain size
 *    minHeight: 1
 * }} SizeInfo
 * @param {Array<SizeInfo>} sizes
 * @param {number} numColumns
 * @returns {Array<Array<SizeInfo>>} columns
 */
export default function masonry(
  sizes,
  numColumns = 3,
  offsetWeight = 7, // When is it okay to super shrink an image to fill an empty cell
  failHeight = 250
) {
  const columns = range(numColumns).map(() => []);
  const totalHeights = range(numColumns).map(() => 0);
  const _t = sizes.filter((e) => e.height);
  const averageCellHeight = _t.reduce((s, e) => s + e.height, 0) / _t.length || 1;
  // console.log({ sizes, numColumns });
  let stop = false;
  sizes = [
    ...sizes,
    {
      cols: numColumns,
      height: 1,
      shrinkWeight: offsetWeight,
      aspectWeight: offsetWeight,
      minHeight: 1,
      isStub: true,
    },
  ];
  for (let i = 0; i < sizes.length; i++) {
    stop = stop || sizes[i].height === undefined;
    if (stop) {
      //Stop computing columns that might still change
      columns[i % numColumns].push({
        ...sizes[i],
        i,
        cols: 1,
        y: totalHeights[i % numColumns],
        height: failHeight,
        col: i % numColumns,
      });
      totalHeights[i % numColumns] += failHeight;
    } else {
      console.log({
        columns,
        totalHeights,
        "sizes[i]": sizes[i],
        sizes,
        offsetWeight,
        averageCellHeight
      });
      const { colSpan, cellHeight, _y, col } = bestPosition(
        columns,
        totalHeights,
        sizes[i],
        offsetWeight,
        averageCellHeight
      );
      const cell = {
        ...sizes[i],
        i,
        y: _y,
        height: cellHeight,
        cols: colSpan,
        col: col,
        _original: sizes[i],
      };
      for (let k = 0; k < colSpan; k++) {
        const column = columns[col + k];
        const offset = _y - totalHeights[col + k];
        if (offset !== 0 && column[column.length - 1].col === col + k) {
          column[column.length - 1].height += offset;
        }
        totalHeights[col + k] = _y + cellHeight;
        if (!cell.isStub) column.push(cell);
      }
    }
  }
  return columns;
}

const bestPosition = (
  columns,
  heights,
  cell,
  offsetWeight,
  averageCellHeight
) => {
  const minBase = Math.min(...heights);
  let colSpan = cell.cols;
  let bestResult = null;
  // Try different widths
  for (let k = colSpan; k > 0; k--) {
    const ratio = cell.preserveAspect
      ? cell.preserveAspect === "balanced"
        ? (1 + k / colSpan) / 2
        : k / colSpan
      : 1;
    // Try different cells
    // console.log({ colspan: k + "/" + colSpan });
    for (let i = 0; i <= columns.length - k; i++) {
      const result = scorePosition(
        columns.slice(i, i + k),
        heights.slice(i, i + k),
        i,
        Math.max(cell.minHeight, cell.height * ratio),
        minBase,
        offsetWeight,
        averageCellHeight
      );
      if (!result) continue;
      // console.log("raw score " + result.score);
      result.score *= Math.pow(colSpan / k, cell.shrinkWeight ?? 4) / ratio;
      // console.log("result", result);
      if (!bestResult || result.score < bestResult.score) {
        bestResult = result;
      }
    }
  }
  // console.log("best result", bestResult);
  return bestResult;
};

const scorePosition = (
  columns,
  heights,
  start,
  cellHeight,
  min,
  offsetWeight,
  avgCellHeight
) => {
  const m = Math.min(...heights);
  const M = Math.max(...heights);
  const p = M - m;

  const maxHeights = [...heights, m + p * 0.5, m + p * 0.75, m + p * 0.875]
    .sort()
    .reverse()
    .filter(uniq);

  let bestScore = Infinity;
  let best = null;
  // Try different target heights
  for (let max of maxHeights) {
    if (columns.length === 1 || isLevelable(columns, heights, max, start)) {
      const score =
        checkDistortion(columns, heights, max, start) +
        Math.pow(
          (1 + max + Math.min(max - min, cellHeight) - min) / avgCellHeight,
          offsetWeight
        );
      if (score < bestScore) {
        bestScore = score;
        best = {
          _y: max,
          col: start,
          cellHeight,
          colSpan: columns.length,
          score: bestScore,
        };
      }
    }
    // else
    //   console.log(
    //     `skipped col ${start} for _y = ${max} and colSpan=${columns.length}`
    //   );
  }
  return best;
};

const isLevelable = (columns, heights, target, start) => {
  for (let i = 0; i < columns.length; i++) {
    if (heights[i] === target) continue;

    const cell = columns[i][columns[i].length - 1];
    if (
      !cell ||
      cell.col < start ||
      cell.col + cell.cols > start + columns.length ||
      cell.height - cell.minHeight <= heights[i] - target
    )
      return false;
  }
  return true;
};

const checkDistortion = (columns, heights, target, start) => {
  let score = 1;
  if (target === 0) return score;
  for (let i = 0; i < columns.length; i++) {
    const cell = columns[i][columns[i].length - 1];
    if (
      /* Bigger cols should hate distortion more: cell.col - start !== i ||*/ heights[
      i
      ] === target
    )
      continue;
    const diff = target - heights[i];
    const perfectHeight =
      (cell._original.height / cell._original.cols) * cell.cols;
    const undistorted = Math.pow(
      cell.height + diff > perfectHeight
        ? perfectHeight / (cell.height + diff)
        : (cell.height + diff) / perfectHeight,
      cell.aspectWeight ?? 1
    );
    score += 1 / undistorted;
  }
  // console.log({
  //   distortion: score,
  //   col: start,
  //   colsSpan: columns.length,
  //   _y: target,
  // });
  return score;
};
