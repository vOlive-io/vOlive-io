//const tires = ['common','uncommon','rare', 'epic','legendary','exsotic','mithic','goddly']
const commonItems = ['Pencil','Pen','Marker', 'Lump of cat hair','Jar of air','Atom','Water','Fire','Deck of cards','$1 bill','Flyswatter','Snowglobe','toilet']
const uncommonItems = ['Earthworm (Alive)','Earthworm (Dead)','Wood','Boucey Ball','Meatballs','Rubber Duck','Mouse Pad','Salt Shaker','Pepper Shaker']
const rareItems = ['Dial-up phone','Parasol','Wild Neanderthal','Marbles','Plexiglass','Tree']
const epicItems = ['Fart in a jar','Sharktooth', 'Boba Tea Maker','Alphabet blocks']
const legendaryItems = ['Dragon Scale','Lightsaber','Red Panda Milk','1M pounds of silk']
const exoticItems = ['Bullet Ant Milk','Golden statue','Dreams in a jar']
const mythicItems = ['Diamond','Rhodochrosite','Real Wild Rown','ShophDaBoph']
const goddlyItems = ['','Your soul','God']

//choosenTire = tires[Math.floor(Math.random() * tires.length)];
commonItemsSlot = commonItems[Math.floor(Math.random() * commonItems.length)];
uncommonItemsSlot = uncommonItems[Math.floor(Math.random() * uncommonItems.length)];
rareItemsSlot = rareItems[Math.floor(Math.random() * rareItems.length)];
epicItemsSlot = epicItems[Math.floor(Math.random() * epicItems.length)];
legendaryitemsSlot = legendaryItems[Math.floor(Math.random() * legendaryItems.length)];
exoticItemsSlot = exoticItems[Math.floor(Math.random() * exoticItems.length)];
mythicItemsSlot = mythicItems[Math.floor(Math.random() * mythicItems.length)];
goddlyItemsSlot = goddlyItems[Math.floor(Math.random() * goddlyItems.length)];


console.log("You earned a " + choosenTire + " Item")
console.log("You earned a Common " + commonItemsSlot)
console.log("You earned a Uncommon " + uncommonItemsSlot)
console.log("You earned a Rare " + rareItemsSlot)
console.log("You earned a Epic " + epicItemsSlot)
console.log("You earned a Legendary " + legendaryitemsSlot)
console.log("You earned a Exotic " + exoticItemsSlot)
console.log("You earned a Mithic " + mythicItemsSlot)
console.log("You earned a Goddly " + goddlyItemsSlot)

var choosenTire;
var totalCommon = 0;
var totalUncommon = 0;
var totalRare = 0;
var totalEpic = 0;
var totalLegondary = 0;
var totalExotic = 0;
var totalMythic = 0;
var totalGoddly = 0;



function tiers() {
  if (Math.random() * 100 < 50) {
  alert("common");
  console.log("You earned a Common Item")
} else {
  if (Math.random() * 100 < 50) {
  alert("uncommon");
  console.log("You earned a Uncommon Item")
} else {
  if (Math.random() * 100 < 50) {
  alert("rare");
  console.log("You earned a Rare Item")
} else {
  if (Math.random() * 100 < 50) {
  alert("epic");
  console.log("You earned a Epic Item")
} else {
  if (Math.random() * 100 < 50) {
  alert("legondary");
  console.log("You earned a Legondary Item")
} else {
  if (Math.random() * 100 < 50) {
  alert("exotic");
  console.log("You earned a Exotic Item")
} else {
  if (Math.random() * 100 < 50) {
  alert("mythic");
  console.log("You earned a Mythic Item")
} else {
  if (Math.random() * 100 < 50) {
  alert("goddly");
  console.log("You earned a Goddly Item")
        }
       }
      }
     }
    }
   } 
  } 
 }
}
      
tiers();

