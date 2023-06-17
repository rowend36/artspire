import range from "./range";
import uniq from "./uniq";

/**
 * @typedef {{
 *    cols: number,
 *    height: number,
 *    col?: number,
 *    i?: number,
 *    shrinkWeight: 1, // higher values are not shrunk widthwise eagerly
 *    aspectWeight: 1, // higher values are not expanded/shrunk heightwise eagerly
 *    preserveAspect: boolean // whether to preserve aspect
 * }} SizeInfo
 * @param {Array<SizeInfo>} sizes
 * @param {number} numColumns
 * @returns {Array<Array<SizeInfo>>} columns
 */
export default function masonry(
  sizes,
  numColumns,
  offsetWeight = 50,
  failHeight = 250
) {
  const columns = range(numColumns).map(() => []);
  const totalHeights = range(numColumns).map(() => 0);
  console.log({ sizes, numColumns });
  let stop = false;
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
      let { colSpan, cellHeight, targetHeight, col } = bestPosition(
        columns,
        totalHeights,
        sizes[i],
        offsetWeight
      );

      for (let k = 0; k < colSpan; k++) {
        const column = columns[col + k];
        const offset = targetHeight - totalHeights[col + k];
        if (offset > 0 && column[column.length - 1].col === col + k) {
          column[column.length - 1].height += offset;
        }
        totalHeights[col + k] = targetHeight + cellHeight;
        column.push({
          ...sizes[i],
          i,
          y: targetHeight,
          height: cellHeight,
          cols: colSpan,
          col: col,
        });
      }
    }
  }
  console.log(columns);
  return columns;
}

const bestPosition = (columns, heights, cell, offsetWeight) => {
  const minHeight = Math.min(...heights);
  let colSpan = cell.cols;
  let bestResult = null;
  // Try different widths
  for (let k = colSpan; k > 0; k--) {
    const cellHeight = cell.preserveAspect
      ? cell.height * (cell.cols / colSpan)
      : cell.height;
    // Try different cells
    for (let i = 0; i <= columns.length - colSpan; i++) {
      const result =
        scorePosition(
          columns.slice(i, i + colSpan),
          heights.slice(i, i + colSpan),
          i,
          cellHeight,
          minHeight,
          offsetWeight
        ) *
        (1 + colSpan - k) *
        (cell.shrinkWeight ?? 1);
      if (result && (!bestResult || result.score < bestResult.score)) {
        bestResult = result;
      }
    }
  }
  return bestResult;
};

const scorePosition = (
  columns,
  heights,
  start,
  cellHeight,
  min,
  offsetWeight
) => {
  const maxHeights = heights.slice().sort().reverse().filter(uniq);
  let bestScore = Infinity;
  let best = null;
  // Try different target heights
  for (let max of maxHeights) {
    if (columns.length === 1 || isLevelable(columns, heights, max, start)) {
      const score =
        scale(columns, heights, max, start) *
        (1 + max + cellHeight - min) *
        offsetWeight;
      if (score < bestScore) {
        bestScore = score;
        best = {
          targetHeight: max,
          col: start,
          cellHeight,
          colSpan: columns.length,
          score: bestScore,
        };
      }
    }
  }
  return best;
};

const isLevelable = (columns, heights, target, start) => {
  for (let i = 0; i < columns.length; i++) {
    if (heights[i] === target) continue;

    const cell = columns[columns.length - 1];
    if (
      !cell ||
      cell.preserveAspect ||
      cell.col < start ||
      cell.col + cell.cols > start + columns.length ||
      cell.height <= heights[i] - target
    )
      return false;
  }
  return true;
};

const scale = (columns, heights, target, start) => {
  let score = 0;
  for (let i = 0; i < columns.length; i++) {
    if (cell.col - start !== i || heights[i] === target) continue;
    const cell = columns[columns.length - 1];
    const diff = target - heights[i];
    const undistorted = Math.pow(
      diff > 0
        ? cell.height / (cell.height + diff)
        : (cell.height + diff) / cell.height,
      cell.aspectWeight ?? 1
    );
    score += 1 / undistorted;
  }
  return 1000000 / score;
};
