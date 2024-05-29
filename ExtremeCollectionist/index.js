const commonItems = ['Pencil','Pen','Marker', 'Lump of cat hair','Jar of air','Atom','Water','Fire','Deck of cards','$1 bill','Flyswatter','Snowglobe','toilet']
const uncommonItems = ['Earthworm (Alive)','Earthworm (Dead)','Wood','Boucey Ball','Meatballs','Rubber Duck','Mouse Pad','Salt Shaker','Pepper Shaker']
const rareItems = ['Dial-up phone','Parasol','Wild Neanderthal','Marble','Plexiglass','Tree']
const epicItems = ['Fart in a jar','Sharktooth', 'Boba Tea Maker','Alphabet blocks']
const legendaryItems = ['Dragon Scale','Lightsaber','Red Panda Milk','1M pounds of silk']
const exoticItems = ['Bullet Ant Milk','Golden statue','Dreams in a jar']
const mythicItems = ['Diamond','Rhodochrosite','Real Wild Rown','ShophDaBoph']
const goddlyItems = ['','Your soul','God']

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
  commonItemsSlot = commonItems[Math.floor(Math.random() * commonItems.length)];
  console.log("You earned a Common " + commonItemsSlot)
} else {
  if (Math.random() * 100 < 50) {
  totalUncommon++;
  totalItems++;
  uncommonItemsSlot = uncommonItems[Math.floor(Math.random() * uncommonItems.length)];
  console.log("You earned a Uncommon " + uncommonItemsSlot)
} else {
  if (Math.random() * 100 < 50) {
  totalRare++;
  totalItems++;
  rareItemsSlot = rareItems[Math.floor(Math.random() * rareItems.length)];
  console.log("You earned a Rare " + rareItemsSlot)
} else {
  if (Math.random() * 100 < 50) {
  totalEpic++;
  totalItems++;
  epicItemsSlot = epicItems[Math.floor(Math.random() * epicItems.length)];
  console.log("You earned a Epic " + epicItemsSlot)
} else {
  if (Math.random() * 100 < 60) {
  totalLegondary++;
  totalItems++;
  legendaryitemsSlot = legendaryItems[Math.floor(Math.random() * legendaryItems.length)];
  console.log("You earned a Legendary " + legendaryitemsSlot)
} else {
  if (Math.random() * 100 < 70) {
  totalExotic++;
  totalItems++;
  exoticItemsSlot = exoticItems[Math.floor(Math.random() * exoticItems.length)];
  console.log("You earned a Exotic " + exoticItemsSlot)
} else {
  if (Math.random() * 100 < 70) {
  totalMythic++;
  totalItems++;
  mythicItemsSlot = mythicItems[Math.floor(Math.random() * mythicItems.length)];
  console.log("You earned a Mithic " + mythicItemsSlot)
} else {
  totalGoddly++;
  totalItems++;
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

