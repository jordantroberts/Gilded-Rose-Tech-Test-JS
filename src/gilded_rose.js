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
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        this.decreaseQuality();
      } else {
          this.increaseQuality();
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              this.increaseQuality();
            }
            if (this.items[i].sellIn < 6) {
              this.increaseQuality();
            }
          }
        }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            this.decreaseQuality();
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          this.increaseQuality();
        }
      }
    }
    return this.items;
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
