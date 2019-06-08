
class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.updateSellIn(i)
      this.decreaseQuality(i)
      if(this.items[i].sellIn < 0) {
        this.decreaseQuality(i)
      }
      if (this.items[i].name == 'Aged Brie') {
        this.updateBrie(i);
      }
      if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.increaseQuality(i);
        this.increaseQuality(i);
        this.updateBackstage(i)
        }
      }
    return this.items;
  }

  updateBrie(index) {
    this.increaseQuality(index);
    if(this.items[index].sellIn < 0) {
      this.increaseQuality(index)
    }
  }

  updateBackstage(index) {
    if(this.items[index].sellIn < 11) {
      this.increaseQuality(index);
    }
    if(this.items[index].sellIn < 6) {
      this.increaseQuality(index);
    }
    if(this.items[index].sellIn < 0) {
      this.items[index].quality = 0
    }
  }

  updateSellIn(index) {
    if (this.items[index].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[index].sellIn = this.items[index].sellIn - 1;
    }
  }

  increaseQuality(index) {
    if (this.items[index].quality < 50) {
      this.items[index].quality += 1
    }
  }

  decreaseQuality(index) {
    if ((this.items[index].name != 'Aged Brie') && (this.items[index].name != 'Sulfuras, Hand of Ragnaros')) {
      if (this.items[index].quality > 0) {
        this.items[index].quality -= 1
      }
    }
  }
}
module.exports = {
  Shop
}
