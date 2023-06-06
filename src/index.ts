// Funkcja generująca labirynt o podanych wymiarach
import * as fs from 'fs';
import { dfsWrapper } from './labirynth/DFS';
import { Maze } from './labirynth/Maze';

const maze = new Maze(50, 50, dfsWrapper);
console.log(maze.print());
fs.promises.writeFile('./generated/labyrinth.txt', maze.print()).then(() => console.log('Done'));
