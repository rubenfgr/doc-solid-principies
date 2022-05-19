"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const File_1 = require("./File");
const Song_1 = require("./Song");
const song = new Song_1.Song(20, 6);
const file = new File_1.File(30, 5);
console.log(`Song sent length percentage: ${song.getSentLengthPercentage()}%`);
console.log(`File sent length percentage: ${file.getSentLengthPercentage()}%`);
