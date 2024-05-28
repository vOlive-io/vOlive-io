const commonItems = ['Pencil','Pen','Marker', 'Lump of cat hair','Jar of air','Atom','Water','Fire','Deck of cards','$1 bill','Flyswatter','Snowglobe','toilet']
const uncommonItems = ['Earthworm (Alive)','Earthworm (Dead)','Wood','Boucey Ball','Meatballs','Rubber Duck','Mouse Pad','Salt Shaker','Pepper Shaker']
const rareItems = ['Dial-up phone','Parasol','Wild Neanderthal','Marbles','Plexiglass','Tree']
const epicItems = ['Fart in a jar','Sharktooth', 'Boba Tea Maker','Alphabet blocks']
const legendaryItems = ['Dragon Scale','Lightsaber','Red Panda Milk','1M pounds of silk']
const exoticItems = ['Bullet Ant Milk','Golden statue','Dreams in a jar']
const mythicItems = ['Diamond','Rhodochrosite','Real Wild Rown','ShophDaBoph']
const goddlyItems = ['','Your soul','God']

commonItemsSlot = commonItems[Math.floor(Math.random() * commonItems.length)];
uncommonItemsSlot = uncommonItems[Math.floor(Math.random() * uncommonItems.length)];
rareItemsSlot = rareItems[Math.floor(Math.random() * rareItems.length)];
epicItemsSlot = epicItems[Math.floor(Math.random() * epicItems.length)];
legendaryitemsSlot = legendaryItems[Math.floor(Math.random() * legendaryItems.length)];
exoticItemsSlot = exoticItems[Math.floor(Math.random() * exoticItems.length)];
mythicItemsSlot = mythicItems[Math.floor(Math.random() * mythicItems.length)];
goddlyItemsSlot = goddlyItems[Math.floor(Math.random() * goddlyItems.length)];

console.log("You earned a Common " + commonItemsSlot)
console.log("You earned a Uncommon " + uncommonItemsSlot)
console.log("You earned a Rare " + rareItemsSlot)
console.log("You earned a Epic " + epicItemsSlot)
console.log("You earned a Legendary " + legendaryitemsSlot)
console.log("You earned a Exotic " + exoticItemsSlot)
console.log("You earned a Mithic " + mythicItemsSlot)
console.log("You earned a Goddly " + goddlyItemsSlot)

var totalCommon = 0;
var totalUncommon = 0;
var totalRare = 0;
var totalEpic = 0;
var totalLegondary = 0;
var totalExotic = 0;
var totalMythic = 0;
var totalGoddly = 0;
var totalItems = 0;


function tiers() {
  if (Math.random() * 100 < 50) {
  totalCommon++;
  totalItems++;
  console.log("You earned a Common Item")
  commonItemsSlot = commonItems[Math.floor(Math.random() * commonItems.length)];
  console.log("You earned a Common " + commonItemsSlot)
} else {
  if (Math.random() * 100 < 50) {
  totalUncommon++;
  totalItems++;
  console.log("You earned a Uncommon Item")
  uncommonItemsSlot = uncommonItems[Math.floor(Math.random() * uncommonItems.length)];
  console.log("You earned a Uncommon " + uncommonItemsSlot)
} else {
  if (Math.random() * 100 < 50) {
  totalRare++;
  totalItems++;
  console.log("You earned a Rare Item")
  rareItemsSlot = rareItems[Math.floor(Math.random() * rareItems.length)];
  console.log("You earned a Rare " + rareItemsSlot)
} else {
  if (Math.random() * 100 < 50) {
  totalEpic++;
  totalItems++;
  console.log("You earned a Epic Item")
  epicItemsSlot = epicItems[Math.floor(Math.random() * epicItems.length)];
  console.log("You earned a Epic " + epicItemsSlot)
} else {
  if (Math.random() * 100 < 50) {
  totalLegondary++;
  totalItems++;
  console.log("You earned a Legondary Item")
  legendaryitemsSlot = legendaryItems[Math.floor(Math.random() * legendaryItems.length)];
  console.log("You earned a Legendary " + legendaryitemsSlot)
} else {
  if (Math.random() * 100 < 50) {
  totalExotic++;
  totalItems++;
  console.log("You earned a Exotic Item")
  exoticItemsSlot = exoticItems[Math.floor(Math.random() * exoticItems.length)];
  console.log("You earned a Exotic " + exoticItemsSlot)
} else {
  if (Math.random() * 100 < 50) {
  totalMythic++;
  totalItems++;
  console.log("You earned a Mythic Item")
  mythicItemsSlot = mythicItems[Math.floor(Math.random() * mythicItems.length)];
  console.log("You earned a Mithic " + mythicItemsSlot)
} else {
  if (Math.random() * 100 < 50) {
  totalGoddly++;
  totalItems++;
  console.log("You earned a Goddly Item")
  goddlyItemsSlot = goddlyItems[Math.floor(Math.random() * goddlyItems.length)];
  console.log("You earned a Goddly " + goddlyItemsSlot)
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

function totals() {
  alert("You have earned a total of: \n"
       + totalCommon + " Common Items \n" 
       + totalUncommon + " Uncommon Items \n"
       + totalRare + " Rare Items \n"
       + totalEpic + " Epic Items \n"
       + totalLegondary + " Legondary Item \n"
       + totalExotic + " Exotic Items \n"
       + totalMythic + " Mythic Items \n"
       + totalGoddly + " Goddly Items \n" 
       + " Coming to a grand toal of " + totalItems + " Items!"
       );
}

