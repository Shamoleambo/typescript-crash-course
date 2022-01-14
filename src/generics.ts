function getArray<T>(items: T[]): T[] {
  return Array().concat(items);
}

const numArray = getArray([1, 2, 3, 4]);
const strArray = getArray(["chris", "jill", "leon", "claire"]);
numArray.push(2);
strArray.push("eita");
