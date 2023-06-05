// Funkcja generująca labirynt o podanych wymiarach
import * as fs from 'fs';

type Blocked = '#';

type Open = ' ';

type Field = Open | Blocked;

type Wall = Blocked[];

type AllBlocked = Wall[]

type Row = Field[];

type MazeData = Row[];

type Point = [number, number];

class Maze {

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

function dfs(maze: MazeData, startPoint: Point) {
  const height = maze.length;
  if (height < 1) {
    throw Error('Height must be at least 1');
  }
  const width = maze[0].length;
  if (width < 1) {
    throw Error('Width must be at least 1');
  }

  const [row, col] = startPoint;
  maze[row][col] = ' ';

  // Utwórz tablicę losowej kolejności kierunków
  const directions = ['up', 'right', 'down', 'left'];
  directions.sort(() => Math.random() - 0.5);

  // Przejdź przez wszystkie kierunki
  for (let direction of directions) {
    let newRow = row;
    let newCol = col;

    // Zmień pozycję w zależności od kierunku
    if (direction === 'up' && newRow > 1) {
      newRow -= 2;
    } else if (direction === 'right' && newCol < width - 2) {
      newCol += 2;
    } else if (direction === 'down' && newRow < height - 2) {
      newRow += 2;
    } else if (direction === 'left' && newCol > 1) {
      newCol -= 2;
    }

    // Jeżeli nowa pozycja jest blokowaną komórką
    if (maze[newRow][newCol] === '#') {
      maze[(row + newRow) / 2][(col + newCol) / 2] = ' '; // Usuń ścianę między obecną i nową komórką
      dfs(maze, [newRow, newCol]); // Wywołaj rekurencyjnie dla nowej pozycji
    }
  }
}

function dfsWrapper(maze: MazeData, startPoint: Point): MazeData {
  const clonedMaze = JSON.parse(JSON.stringify(maze));
  dfs(clonedMaze, startPoint);
  return clonedMaze;
}


// Przykładowe użycie
const maze = new Maze(50, 50, dfsWrapper);
console.log(maze.print());
await fs.promises.writeFile('./generated/labyrinth.txt', maze.print());
