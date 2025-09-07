var commonItems = [
  ["Pencil", "Item Description", 0],
  ["Pen", "Item Description", 0],
  ["Marker", "Item Description", 0],
  ["Lump of cat hair", "Item Description", 0],
  ["Jar of air", "Item Description", 0],
  ["Atom", "Item Description", 0],
  ["Water", "Item Description", 0],
  ["Fire", "Item Description", 0],
  ["Deck of cards", "Item Description", 0],
  ["$1 bill", "Item Description", 0],
  ["Flyswatter", "Item Description", 0],
  ["Snowglobe", "Item Description", 0],
  ["Toilet", "Item Description", 0]
];

const uncommonItems = ["Earthworm (Alive)","Earthworm (Dead)","Wood","Boucey Ball","Meatballs","Rubber Duck","Mouse Pad","Salt Shaker","Pepper Shaker"]
const rareItems = ["Dial-up phone","Parasol","Wild Neanderthal","Marble","Plexiglass","Tree"]
const epicItems = ["Fart in a jar","Sharktooth", "Boba Tea Maker","Alphabet blocks"]
const legendaryItems = ["Dragon Scale","Lightsaber","Red Panda Milk","1M pounds of silk"]
const mythicItems = ["Diamond","Rhodochrosite"]
const goddlyItems = ["","Your soul","God"]

var money = 5.00;
var rollCost = 1.50;

var totalCommon = 0;
var totalUncommon = 0;
var totalRare = 0;
var totalEpic = 0;
var totalLegendary = 0;
var totalMythic = 0;
var totalGoddly = 0;
var totalItems = 0;

function rollingItem() {
  const roll = Math.random() * 100000; 
    if (roll > 99995) {
      totalGoddly++;
    } else if (roll > 99500) {
      totalMythic++;
    } else if (roll > 95000) {
      totalLegendary++;
    } else if (roll > 90000) {
      totalEpic++;
    } else if (roll > 75000) {
      totalRare++;
    } else if (roll > 50000) {
      totalUncommon++;
    } else {
      totalCommon++;
    }
}
function totals() {
  alert("You have earned a total of: \n"
       + totalCommon + " Common Items \n" 
       + totalUncommon + " Uncommon Items \n"
       + totalRare + " Rare Items \n"
       + totalEpic + " Epic Items \n"
       + totalLegendary + " Legondary Item \n"
       + totalExotic + " Exotic Items \n"
       + totalMythic + " Mythic Items \n"
       + totalGoddly + " Goddly Items \n" 
       + " Coming to a grand total of " + totalItems + " Items!"
       );
}


/* --- IGNORE --- will be removed in next update! ---
function rollingItem() {
  if (money>rollCost) {
  money = money - rollCost;
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
  console.log("You earned a Mythic " + mythicItemsSlot)
} else {
  totalGoddly++;
  totalItems++;
  goddlyItemsSlot = goddlyItems[Math.floor(Math.random() * goddlyItems.length)];
  console.log("You earned a Godly " + goddlyItemsSlot)
        }
       }
      }
     }
    }
   } 
  } 
        } else {
 alert("You broke, get money")
  }
}


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
*/
