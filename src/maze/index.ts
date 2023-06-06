import { FilledBoard, Point, StartPointGenerator } from '../shared/LabirynthTypes';

export function generateMaze(
  board: FilledBoard, generator: StartPointGenerator, startPoint: Point = [0, 0]) {
  const clonedBoard = JSON.parse(JSON.stringify(board));
  return generator(clonedBoard, startPoint);
}
