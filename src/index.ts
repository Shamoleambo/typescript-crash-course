let id: number = 5;
let company: string = "Monkey inc.";
let isPublished: boolean = true;
let x: any = "banana";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = ["mano", true, 1];

let tuple: [number, string, boolean] = [1, "tiago", true];
let tupleArray: [string, number][];
tupleArray = [
  ["jimmy", 1],
  ["mochi", 2],
];

let union: string | number = "could be a number";
union = 1;

enum Directions {
  Up,
  Down,
  Left,
  Right,
}
// console.log(Directions.Up, Directions.Down, Directions.Left, Directions.Right);
enum DirectionsString {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
// console.log(
//   DirectionsString.UP,
//   DirectionsString.DOWN,
//   DirectionsString.LEFT,
//   DirectionsString.RIGHT
// );

let object: {
  id: number;
  name: string;
};
object = {
  id: 22,
  name: "mano",
};

type User = {
  id: number;
  name: string;
};
let user: User = {
  id: 1,
  name: "mano",
};

let xyz: any = 1;
let typeAssertionNumberOne = <number>xyz;
let typeAssertionNumberTwo = xyz as number;

function addNumbers(x: number, y: number): number {
  return x + y;
}
// console.log(addNumbers(2, 3));
function log(message: number | string): void {
  console.log(message);
}
// log("mano");
// log(3);

interface UserInterface {
  readonly id: number;
  name: string;
  email: string;
  age?: number;
}
let user1: UserInterface = { id: 1, name: "mano", email: "mano@mail.com" };
interface MathFunc {
  (a: number, b: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
