// Funkcja generująca labirynt algorytmem Primsa
import { MazeData, Point } from '../../shared/LabirynthTypes';

export function prims(maze: MazeData, startPoint: Point): MazeData {

  const [startCol, startRow] = startPoint;

  const height = maze.length;
  if (height < 1) {
    throw Error('Height must be at least 1');
  }
  const width = maze[0].length;
  if (width < 1) {
    throw Error('Width must be at least 1');
  }

  maze[startRow][startCol] = ' '; // ' ' oznacza puste przejście

  // Lista punktów granicznych
  const frontier = [
    [startRow - 2, startCol], // Góra
    [startRow + 2, startCol], // Dół
    [startRow, startCol - 2], // Lewo
    [startRow, startCol + 2], // Prawo
  ];

  // Generuj labirynt
  while (frontier.length > 0) {
    // Wybierz losowy punkt graniczny
    const randomIndex = Math.floor(Math.random() * frontier.length);
    const [row, col] = frontier[randomIndex];

    // Usuń punkt graniczny z listy
    frontier.splice(randomIndex, 1);

    // Sprawdź, czy sąsiednie komórki są puste
    if (row >= 1 && maze[row - 1][col] === '#') {
      // Połącz z górną komórką
      maze[row - 1][col] = ' ';
      maze[row - 2][col] = ' ';
      frontier.push([row - 2, col]);
    }
    if (row < height - 2 && maze[row + 1][col] === '#') {
      // Połącz z dolną komórką
      maze[row + 1][col] = ' ';
      maze[row + 2][col] = ' ';
      frontier.push([row + 2, col]);
    }
    if (col >= 1 && maze[row][col - 1] === '#') {
      // Połącz z lewą komórką
      maze[row][col - 1] = ' ';
      maze[row][col - 2] = ' ';
      frontier.push([row, col - 2]);
    }
    if (col < width - 2 && maze[row][col + 1] === '#') {
      // Połącz z prawą komórką
      maze[row][col + 1] = ' ';
      maze[row][col + 2] = ' ';
      frontier.push([row, col + 2]);
    }
  }

  // Zwróć wygenerowany labirynt
  return maze;
}
