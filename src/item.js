class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.maxQuality = 50;
  }
}
module.exports = {
  Item
}
