import { FilledBoard, MazeData, Point } from '../../shared/LabirynthTypes';

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

export function dfsWrapper(maze: FilledBoard, startPoint: Point): MazeData {
  dfs(maze, startPoint);
  return maze;
}
