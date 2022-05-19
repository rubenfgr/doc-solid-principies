import { ItemTypeEnum } from "./ItemType.enum";

export class ItemName {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  isAgedBrie(): boolean {
    return this.value === ItemTypeEnum.ITEM_AGED_BRIE;
  }

  isBackstagePasses(): boolean {
    return this.value === ItemTypeEnum.ITEM_BACKSTAGE_PASSES;
  }

  isSulfuras(): boolean {
    return this.value === ItemTypeEnum.ITEM_SULFURAS;
  }
}
