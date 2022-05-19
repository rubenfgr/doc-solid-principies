import { File } from "./File";
import { Song } from "./Song";

const song: Song = new Song(20, 6);
const file: File = new File(30, 5);

console.log(`Song sent length percentage: ${song.getSentLengthPercentage()}%`);
console.log(`File sent length percentage: ${file.getSentLengthPercentage()}%`);
