import { MazeData } from '../../shared/LabirynthTypes';

export function mazeToString(maze: MazeData): string {
  return maze.reduce((previousValue, currentValue) => {
    return previousValue.concat(currentValue.toString(), `\n`);
  }, '').replaceAll(',', '');
}
