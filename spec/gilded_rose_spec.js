var {Shop} = require('../src/gilded_rose.js');
var {Item} = require('../src/item.js');

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("decreases the quality of item", function() {
    const gildedRose = new Shop([ new Item("foo", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9);
  });

  it("quality of the item is never negative", function() {
    const gildedRose = new Shop([ new Item("foo", 10, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  });

  it("quality of item never higher than 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50)
  });

  it("aged brie increases in quality", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(6)
  });

  it("once sell by date passed, quality decreases", function(){
    const gildedRose = new Shop([new Item("foo", 0, 4) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2)
  });

  it("sulfuras never sold or decrease quality", function(){
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(10)
    expect(items[0].sellIn).toEqual(10)
  });

  it("backstage passes increase in quality as sell in date approaches", function(){
    var gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5) ]);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8)
    var gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5) ]);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(7)
    var gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5) ]);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  });

  it("conjured items should decrease in quality twice as fast as normal items", function() {
    const gildedRose = new Shop([new Item("Conjured", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8)
  });
});
