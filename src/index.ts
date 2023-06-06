import { generateFilledBoard } from './board';
import { generateMaze } from './maze';
import { dfsWrapper } from './maze/algorithms/DFS';
import { mazeToString } from './maze/formatters/mazeFormatters';

const board = generateFilledBoard(50, 50);
const maze = generateMaze(board, dfsWrapper);

console.log(mazeToString(maze));
