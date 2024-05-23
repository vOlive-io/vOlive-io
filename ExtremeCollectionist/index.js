const commonItems = ['Pencil','Pen','Marker', 'Lump of cat hair','Air','Atom','Water','Fire','Deck of cards','$1 bill']
const uncommonItems = ['Earthworm (Alive)','Earthworm (Dead)','Wood','Boucey Ball','Meatballs']
const rareItems = ['Dial-up phone','Parasol','Wild Neanderthal','Marbles','Plexiglass','Tree','Dirty']
const epicItems = ['Fart in a jar','Sharktooth', 'Boba Tea Maker','Alphabet blocks']
const legendaryItems = ['Dragon Scale','Lightsaber','Red Panda Milk','1M pounds of silk']
const exoticItems = ['Bullet Ant Milk','Golden statue','Dreams']
const mithicItems = ['Diamond','Rhodochrosite','Real Wild Rown','ShophDaBoph']
const goddlyItems = ['Living Raspberry','Your soul','God']

commonItemsSlot = commonItems[Math.floor(Math.random() * commonItems.length)];
uncommonItemsSlot = uncommonItems[Math.floor(Math.random() * uncommonItems.length)];
rareItemsSlot = rareItems[Math.floor(Math.random() * rareItems.length)];
epicItemsSlot = epicItems[Math.floor(Math.random() * epicItems.length)];
legendaryitemsSlot = legendaryItems[Math.floor(Math.random() * legendaryItems.length)];
exoticItemsSlot = exoticItems[Math.floor(Math.random() * exoticItems.length)];
mithicItemsSlot = mithicItems[Math.floor(Math.random() * mithicItems.length)];
goddlyItemsSlot = goddlyItems[Math.floor(Math.random() * goddlyItems.length)];

console.log("You earned a Common: Jar of " + commonItemsSlot)
console.log("You earned a Uncommon: Jar of " + uncommonItemsSlot)
console.log("You earned a Rare: Jar of " + rareItemsSlot)
console.log("You earned a Epic: Jar of " + epicItemsSlot)
console.log("You earned a Legendary: Jar of " + legendaryitemsSlot)
console.log("You earned a Exotic: Jar of " + exoticItemsSlot)
console.log("You earned a Mithic: Jar of " + mithicItemsSlot)
console.log("You earned a Goddly: Jar of " + goddlyItemsSlot)
