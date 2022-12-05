export type Point = {
  readonly x: number;
  y?: number;
};

export type Mapped<T> = {
  +readonly [P in keyof T]-?: T[P];
};

export type Mapped2<T> = {
  -readonly [P in keyof T]-?: T[P];
};

export type Result = Mapped<Point>;
// --

// export type team = { name: string };
// export type game = { count: number };
//
// type Union = team | game;
// type Intersection = team & game;
//
// const name = { name: 'Mahi' };
// const count = { count: 10 };
// const nameAndcount = { name: 'kohli', count: 9 };
//
// let union: Union;
// union = name;
// union = count;
// union = nameAndcount;
//
// let intersection: Intersection;
// intersection = nameAndcount;
// intersection = name; // error
// intersection = count; // error

// ---
