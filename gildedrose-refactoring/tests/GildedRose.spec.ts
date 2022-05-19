import { GildedRose } from "../src/GildedRose";
import { Item } from "../src/Item";
import { ItemFactory } from "../src/ItemFactory";
import { ItemQuality } from "../src/ItemQuality";
import { ItemSellIn } from "../src/ItemSellIn";
import { ItemTypeEnum } from "../src/ItemType.enum";

describe("Gilded Rose", () => {
  it("testThatSellInValueIsDecreased", () => {
    const whateverItem: Item = ItemFactory.basedOn("whatever", 10, 0);

    const gildedRose: GildedRose = new GildedRose([whateverItem]);
    gildedRose.updateQuality();

    const expected = new ItemSellIn(9);
    expect(whateverItem.sellIn).toEqual(expected);
  });

  it("testThatQualityValueIsDecreased", () => {
    const whateverItem: Item = ItemFactory.basedOn("whatever", 1, 10);

    const gildedRose: GildedRose = new GildedRose([whateverItem]);
    gildedRose.updateQuality();

    const expected = new ItemQuality(9);
    expect(whateverItem.quality).toEqual(expected);
  });

  it("testThatQualityDecreasesTwiceAsMuchWhenSellByIsPassed", () => {
    const whateverItem: Item = ItemFactory.basedOn("whatever", 0, 10);

    const gildedRose: GildedRose = new GildedRose([whateverItem]);
    gildedRose.updateQuality();

    const expected = new ItemQuality(8);
    expect(whateverItem.quality).toEqual(expected);
  });

  it("testThatQualityIsNeverNegative", () => {
    const whateverItem: Item = ItemFactory.basedOn("whatever", 0, 0);

    const gildedRose: GildedRose = new GildedRose([whateverItem]);
    gildedRose.updateQuality();

    const expected = new ItemQuality(0);
    expect(whateverItem.quality).toEqual(expected);
  });

  it("testAgedBrieIncreasesQualityWithAge", () => {
    const agedBrie: Item = ItemFactory.basedOn(
      ItemTypeEnum.ITEM_AGED_BRIE,
      5,
      1
    );

    const gildedRose: GildedRose = new GildedRose([agedBrie]);
    gildedRose.updateQuality();

    const expected = new ItemQuality(2);
    expect(agedBrie.quality).toEqual(expected);
  });

  it("testQualityNeverIncreasesPastFifty", () => {
    const agedBrie: Item = ItemFactory.basedOn(
      ItemTypeEnum.ITEM_AGED_BRIE,
      5,
      50
    );

    const gildedRose: GildedRose = new GildedRose([agedBrie]);
    gildedRose.updateQuality();

    const expected = new ItemQuality(50);
    expect(agedBrie.quality).toEqual(expected);
  });

  it("testSulfurasNeverChanges", () => {
    const sulfuras: Item = ItemFactory.basedOn(
      ItemTypeEnum.ITEM_SULFURAS,
      0,
      25
    );

    const gildedRose: GildedRose = new GildedRose([sulfuras]);
    gildedRose.updateQuality();

    const expectedQuality = new ItemQuality(25);
    expect(sulfuras.quality).toEqual(expectedQuality);

    const expectedSellIn = new ItemSellIn(0);
    expect(sulfuras.sellIn).toEqual(expectedSellIn);
  });

  it("testBackstagePassIncreasesQualityByOneIfSellByGreaterThenTen", () => {
    const backstagePasses: Item = ItemFactory.basedOn(
      ItemTypeEnum.ITEM_BACKSTAGE_PASSES,
      11,
      20
    );

    const gildedRose: GildedRose = new GildedRose([backstagePasses]);
    gildedRose.updateQuality();

    const expected = new ItemQuality(21);
    expect(backstagePasses.quality).toEqual(expected);
  });

  it("testBackstagePassIncreasesQualityByTwoIfSellBySmallerThanTen", () => {
    const backstagePasses: Item = ItemFactory.basedOn(
      ItemTypeEnum.ITEM_BACKSTAGE_PASSES,
      6,
      20
    );

    const gildedRose: GildedRose = new GildedRose([backstagePasses]);
    gildedRose.updateQuality();

    const expected = new ItemQuality(22);
    expect(backstagePasses.quality).toEqual(expected);
  });

  it("testBackstagePassIncreasesQualityByThreeIfSellBySmallerThanFive", () => {
    const backstagePasses: Item = ItemFactory.basedOn(
      ItemTypeEnum.ITEM_BACKSTAGE_PASSES,
      5,
      20
    );

    const gildedRose: GildedRose = new GildedRose([backstagePasses]);
    gildedRose.updateQuality();

    const expected = new ItemQuality(23);
    expect(backstagePasses.quality).toEqual(expected);
  });

  it("testBackstagePassLosesValueAfterSellByPasses", () => {
    const backstagePasses: Item = ItemFactory.basedOn(
      ItemTypeEnum.ITEM_BACKSTAGE_PASSES,
      0,
      20
    );

    const gildedRose: GildedRose = new GildedRose([backstagePasses]);
    gildedRose.updateQuality();

    const expected = new ItemQuality(0);
    expect(backstagePasses.quality).toEqual(expected);
  });
});
