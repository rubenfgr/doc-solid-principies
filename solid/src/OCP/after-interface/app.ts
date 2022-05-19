import { File } from "./File";
import { Progress } from "./Progress";
import { Song } from "./Song";

const song: Song = new Song(20, 6);
const file: File = new File(30, 5);

const progress: Progress = new Progress();

console.log(
  `Song sent length percentage: ${progress.getSentLengthPercentage(song)}%`
);
console.log(
  `File sent length percentage: ${progress.getSentLengthPercentage(file)}%`
);
