import { generateFilledBoard } from './board';
import { generateMaze } from './maze';
import { dfsWrapper } from './maze/algorithms/DFS';
import { mazeToString } from './maze/formatters/mazeFormatters';
import { prims } from './maze/algorithms/prims';

const board = generateFilledBoard(50, 50);
const dfsMaze = generateMaze(board, dfsWrapper);

console.log(mazeToString(dfsMaze));

// something is wrong with this algo
const primsMaze = generateMaze(board, prims, [4, 4]);
console.log(mazeToString(primsMaze));
