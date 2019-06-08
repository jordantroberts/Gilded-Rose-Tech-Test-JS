class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.maxQuality = 50;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.updateSellIn()
    for (var i = 0; i < this.items.length; i++) {
      this.decreaseQuality()
      if(this.items[i].sellIn < 0) {
        this.decreaseQuality()
      }
      if (this.items[i].name == 'Aged Brie') {
        // this.updateBrie(i);
        this.increaseQuality()
        if(this.items[i].sellIn < 0) {
          this.increaseQuality()
        }
      }
      if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.increaseQuality();
        this.increaseQuality();
        this.updateBackstage(i)
        }
      }
    return this.items;
  }

  updateBrie(index) {
    if (this.items[index].quality < 50) {
      this.items[index].quality += 1
      this.items[index].sellIn -= 1
    }
  }

  updateBackstage(index) {
    if(this.items[index].sellIn < 11) {
      this.increaseQuality();
    }
    if(this.items[index].sellIn < 6) {
      this.increaseQuality();
    }
    if(this.items[index].sellIn < 0) {
      this.items[index].quality = 0
    }
  }

  updateSellIn() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
    }
  }

  increaseQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].quality < 50) {
        this.items[i].quality += 1
      }
    }
  }

  decreaseQuality() {
    for (var i = 0; i < this.items.length; i++ ) {
      if ((this.items[i].name != 'Aged Brie') && (this.items[i].name != 'Sulfuras, Hand of Ragnaros')) {
        if (this.items[i].quality > 0) {
          this.items[i].quality -= 1
        }
      }
    }
  }
}
module.exports = {
  Item,
  Shop
}
