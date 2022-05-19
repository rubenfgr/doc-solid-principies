export class Potato {
  name: string;
  category: string;
  quality: number;

  constructor(name: string, category: string, quality: number) {
    this.name = name;
    this.category = category;
    this.quality = quality;
  }

  cook(): void {
    console.log(
      `Cooking ${this.name} potato [${this.category}, ${this.quality}]`
    );
  }
}
