type Blocked = '#';

type Open = ' ';

type Field = Open | Blocked;

type Wall = Blocked[];

export type AllBlocked = Wall[]

export type Row = Field[];

export type MazeData = Row[];

export type Point = [number, number];
