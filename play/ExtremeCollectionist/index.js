var commonItems = [
  ["1.1.1.1", "HB Pencil", "Item Description", "School Supplies", 0],
  ["1.1.1.2", "Pen", "Item Description", "School Supplies", 0],
  ["1.1.1.3", "Marker", "Item Description", "School Supplies", 0],
  ["1.1.1.4", "Highlighter", "Item Description", "School Supplies", 0],
  ["1.1.1.5", "Sticky Notes", "Item Description", "School Supplies", 0],
  ["1.1.1.6", "Scissors", "Item Description", "School Supplies", 0],
  ["1.1.1.7", "Pencil Sharpener", "Item Description", "Collection Name", 0],
  ["1.1.1.8", "Three Ringed Paper", "Item Description", "Collection Name", 0],
  ["1.1.1.9", "Three Ringed Folder", "Item Description", "Collection Name", 0],
  ["1.1.1.10", "Three Ringed Binder", "Item Description", "Collection Name", 0],
  ["1.1.1.11", "Apple", "Item Description", "Food", 0],
  ["1.1.1.12", "Pear", "Item Description", "Food", 0],
  ["1.1.1.13", "Banana", "Item Description", "Food", 0],
  ["1.1.1.14", "Grapes", "Item Description", "Food", 0],
  ["1.1.1.15", "Orange", "Item Description", "Food", 0],
  ["1.1.1.16", "Potato", "Item Description", "Food", 0],
  ["1.1.1.17", "Carrot", "Item Description", "Food", 0],
  ["1.1.1.21", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.22", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.23", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.24", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.25", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.26", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.27", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.28", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.29", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.30", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.31", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.32", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.33", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.34", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.35", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.36", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.37", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.38", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.39", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.40", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.41", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.42", "Item name", "Item Description", "Collection Name", 0],
  ["1.1.1.43", "Water in a Jar", "Item Description", "Collection Name", 0],
  ["1.1.1.44", "Pickles in a Jar", "Item Description", "Collection Name", 0],
  ["1.1.1.45", "Air in a Jar", "Item Description", "In a Jar", 0],
  ["1.1.1.46", "$1 bill", "Item Description", "Money", 0],
  ["1.1.1.47", "Flyswatter", "Item Description", "Collection Name", 0],
  ["1.1.1.48", "Snowglobe", "Item Description", "Collection Name", 0],
  ["1.1.1.49", "Snowglobe", "Item Description", "Collection Name", 0],
  ["1.1.1.50", "Toilet", "Item Description", "Collection Name", 0]
];
var uncommonItems = [
  ["1.1.2.1", "Earthworm (Alive)", "Item Description", "Collection Name", 0],
  ["1.1.2.1", "Earthworm (Alive)", "Item Description", "Collection Name", 0],
  ["1.1.2.2", "Earthworm (Dead)", "Item Description", "Collection Name", 0],
  ["1.1.2.3", "Wood", "Item Description", "Collection Name", 0],
  ["1.1.2.4", "Boucey Ball", "Item Description", "Collection Name", 0],
  ["1.1.2.5", "Meatballs", "Item Description", "Collection Name", 0],
  ["1.1.2.6", "Rubber Duck", "Item Description", "Collection Name", 0],
  ["1.1.2.7", "Mouse Pad", "Item Description", "Collection Name", 0],
  ["1.1.2.8", "Salt Shaker", "Item Description", "Collection Name", 0],
  ["1.1.2.9", "Pepper Shaker", "Item Description", "Collection Name", 0]
];
var rareItems = [
  ["1.1.3.1", "$5 Bill", "Item Description", "Money", 0],
  ["1.1.3.1", "Dial-up phone", "Item Description", "Collection Name", 0],
  ["1.1.3.2", "Parasol", "Item Description", "Collection Name", 0],
  ["1.1.3.3", "Wild Neanderthal", "Item Description", "Collection Name", 0],
  ["1.1.3.4", "Marble", "Item Description", "Collection Name", 0],
  ["1.1.3.5", "Plexiglass", "Item Description", "Collection Name", 0],
  ["1.1.3.6", "Tree", "Item Description", "Collection Name", 0]
];
var epicItems = [
  ["1.1.4.1", "$10 Bill", "Item Description", "Money", 0],
  ["1.1.4.1", "Fart in a jar", "Item Description", "Collection Name", 0],
  ["1.1.4.2", "Sharktooth", "Item Description", "Collection Name", 0],
  ["1.1.4.3", "Boba Tea Maker", "Item Description", "Collection Name", 0],
  ["1.1.4.4", "Alphabet blocks", "Item Description", "Collection Name", 0]
];
var legendaryItems = [
  ["1.1.5.1", "$50 Bill", "Item Description", "Money", 0],
  ["1.1.5.1", "Dragon Scale", "Item Description", "Collection Name", 0],
  ["1.1.5.2", "Lightsaber", "Item Description", "Collection Name", 0],
  ["1.1.5.3", "Red Panda Milk", "Item Description", "Collection Name", 0],
  ["1.1.5.4", "1M pounds of silk", "Item Description", "Collection Name", 0]
];
var mythicItems = [
  ["1.1.6.1", "$100 Bill", "Item Description", "Money", 0],
  ["1.1.6.1", "Diamond", "Item Description", "Collection Name", 0],
  ["1.1.6.2", "Rhodochrosite", "Item Description", "Collection Name", 0]
];
var goddlyItems = [
  ["1.1.7.1", "$∞ Dollar Bill", "Collection Name", 0],
  ["1.1.7.2", "Your soul", "Item Description", "Collection Name", 0],
  ["1.1.7.3", "God", "Item Description", "Collection Name", 0]
];

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
