export default function handle404(to) {
  if (to.hash.length > 1) {
    const join = (root, child) => {
      if (root.slice(-1) !== "/") root += "/";
      if (child[0] === "/") child = child.slice(1);
      return root + child;
    };
    return {
      ...to,
      name: undefined,
      hash: "",
      path: join(to.path, to.hash.substring(1)),
    };
  }
}
