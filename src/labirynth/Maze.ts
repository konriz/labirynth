import { AllBlocked, MazeData, Point } from './LabirynthTypes';

export class Maze {

  private mazeData: MazeData = [];

  constructor(
    width: number, height: number,
    generator: (plainMaze: MazeData, startPoint: Point) => MazeData,
  ) {
    const plainMaze: AllBlocked = (() => {
      const maze: AllBlocked = [];
      for (let i = 0; i < height; i++) {
        maze[i] = [];
        for (let j = 0; j < width; j++) {
          maze[i][j] = '#'; // '#' oznacza blokowaną komórkę
        }
      }
      return maze;
    })();

    this.mazeData = generator(plainMaze, [0, 0]);

    // Funkcja rekurencyjna realizująca algorytm DFS

  }

  print() {
    let printedMaze = '';
    this.mazeData.forEach(row => {
      printedMaze = printedMaze.concat(row.toString(), `\n`)
    });
    return printedMaze.replaceAll(',', '');
  }
}
