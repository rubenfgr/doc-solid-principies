export class ItemQualityOutOfRangeException extends Error {
  constructor(rawQuality: number, min: number, max: number) {
    super(`Item quality ${rawQuality} is out of range [${min}, ${max}]`);
  }
}
