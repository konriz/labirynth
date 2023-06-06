import { FilledBoard } from '../shared/LabirynthTypes';

export function generateFilledBoard(width: number, height: number): FilledBoard {
  const maze: FilledBoard = [];
  for (let i = 0; i < height; i++) {
    maze[i] = [];
    for (let j = 0; j < width; j++) {
      maze[i][j] = '#'; // '#' oznacza blokowaną komórkę
    }
  }
  return maze;
}
