"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const File_1 = require("./File");
const Progress_1 = require("./Progress");
const Song_1 = require("./Song");
const song = new Song_1.Song(20, 6);
const file = new File_1.File(30, 5);
const progress = new Progress_1.Progress();
console.log(`Song sent length percentage: ${progress.getSentLengthPercentage(song)}%`);
console.log(`File sent length percentage: ${progress.getSentLengthPercentage(file)}%`);
