var collections = [
                  "Food", 1, 
                  "Office Supplies", 2,
                  "In a Jar", 3,
                  "Toys", 4, 
                  "Tools", 5,
                  "Money", 6,
                  "Lucky Charms", 7,
                  "Animals", 8,
                  "Spiritual", 9,
                  "Exclusive", 10
                ];
var commonItems = [
  ["1.1.1.1", 1, "Apple", "Item Description", 0],
  ["1.1.1.2", 1, "Pear", "Item Description", 0],
  ["1.1.1.3", 1, "Banana", "Item Description", 0],
  ["1.1.1.4", 1, "Grapes", "Item Description", 0],
  ["1.1.1.5", 1, "Orange", "Item Description", 0],
  ["1.1.1.6", 1, "Potato", "Item Description", 0],
  ["1.1.1.7", 1, "Carrot", "Item Description", 0],
  ["1.1.1.8", 1, "Lettuce", "Item Description", 0],
  ["1.1.1.9", 2, "HB Pencil", "Item Description", 0],
  ["1.1.1.10", 2, "Pen", "Item Description", 0],
  ["1.1.1.11", 2, "Marker", "Item Description", 0],
  ["1.1.1.12", 2, "Highlighter", "Item Description", 0],
  ["1.1.1.13", 2, "Sticky Notes", "Item Description", 0],
  ["1.1.1.14", 2, "Scissors", "Item Description", 0],
  ["1.1.1.15", 2, "Pencil Sharpener", "Item Description", 0],
  ["1.1.1.16", 2, "Three Ringed Paper", "Item Description", 0],
  ["1.1.1.17", 2, "Three Ringed Folder", "Item Description", 0],
  ["1.1.1.18", 2, "Three Ringed Binder", "Item Description", 0],
  ["1.1.1.19", 3, "$1 bill", "Item Description", 0],
  ["1.1.1.20", 3, "Penny", "Item Description", 0],
  ["1.1.1.21", 4, "Bread Crumbs in a Jar", "Item Description", 0],
  ["1.1.1.22", 4, "String in a Jar", "Item Description", 0],
  ["1.1.1.23", 4, "Plastic Scraps in a Jar", "Item Description", 0],
  ["1.1.1.24", 4, "Water in a Jar", "Item Description", 0],
  ["1.1.1.25", 4, "Pickles in a Jar", "Item Description", 0],
  ["1.1.1.26", 4, "Air in a Jar", "Item Description", 0],
  ["1.1.1.27", 4, "Item name", "Item Description", 0],
  ["1.1.1.28", 4, "Item name", "Item Description", 0],
  ["1.1.1.29", 4, "Item name", "Item Description", 0],
  ["1.1.1.30", 4, "Item name", "Item Description", 0],
  ["1.1.1.31", 4, "Item name", "Item Description", 0],
  ["1.1.1.32", 4, "Item name", "Item Description", 0],
  ["1.1.1.33", 4, "Item name", "Item Description", 0],
  ["1.1.1.34", 4, "Item name", "Item Description", 0],
  ["1.1.1.35", 4, "Item name", "Item Description", 0],
  ["1.1.1.36", 4, "Item name", "Item Description", 0],
  ["1.1.1.37", 4, "Item name", "Item Description", 0],
  ["1.1.1.38", 4, "Item name", "Item Description", 0],
  ["1.1.1.39", 4, "Item name", "Item Description", 0],
  ["1.1.1.40", 4, "Item name", "Item Description", 0],
  ["1.1.1.41", 4, "Item name", "Item Description", 0],
  ["1.1.1.42", 4, "Item name", "Item Description", 0],
  ["1.1.1.43", 4, "Item name", "Item Description", 0],
  ["1.1.1.43", 4, "Item name", "Item Description", 0],
  ["1.1.1.45", 4, "Item name", "Item Description", 0],
  ["1.1.1.46", 7, "Rusty Horseshoe", "Item Description", 0],
  ["1.1.1.47", 5, "Flyswatter", "Item Description", 0],
  ["1.1.1.48", 4, "Snowglobe", "Item Description", 0],
  ["1.1.1.49", 4, "Snowglobe", "Item Description", 0],
  ["1.1.1.50", 5, "Toilet", "Item Description", 0]
];
var uncommonItems = [
  ["1.1.2.1", "Earthworm (Alive)", "Item Description", 0],
  ["1.1.2.1", "Earthworm (Alive)", "Item Description", 0],
  ["1.1.2.2", "Earthworm (Dead)", "Item Description", 0],
  ["1.1.2.3", "Wood", "Item Description", 0],
  ["1.1.2.4", "Boucey Ball", "Item Description", 0],
  ["1.1.2.5", "Meatballs", "Item Description", 0],
  ["1.1.2.6", "Rubber Duck", "Item Description", 0],
  ["1.1.2.7", "Mouse Pad", "Item Description", 0],
  ["1.1.2.8", "Salt Shaker", "Item Description", 0],
  ["1.1.2.9", "Pepper Shaker", "Item Description", 0]
];
var rareItems = [
  ["1.1.3.1", "$5 Bill", "Item Description", 0],
  ["1.1.3.1", "Dial-up phone", "Item Description", 0],
  ["1.1.3.2", "Parasol", "Item Description", 0],
  ["1.1.3.3", "Wild Neanderthal", "Item Description", 0],
  ["1.1.3.4", "Marble", "Item Description", 0],
  ["1.1.3.5", "Plexiglass", "Item Description", 0],
  ["1.1.3.6", "Tree", "Item Description", 0]
];
var epicItems = [
  ["1.1.4.1", "$10 Bill", "Item Description", 0],
  ["1.1.4.1", "Fart in a jar", "Item Description", 0],
  ["1.1.4.2", "Sharktooth", "Item Description", 0],
  ["1.1.4.3", "Boba Tea Maker", "Item Description", 0],
  ["1.1.4.4", "Alphabet blocks", "Item Description", 0]
];
var legendaryItems = [
  ["1.1.5.1", "$50 Bill", "Item Description", 0],
  ["1.1.5.1", "Dragon Scale", "Item Description", 0],
  ["1.1.5.2", "Lightsaber", "Item Description", 0],
  ["1.1.5.3", "Red Panda Milk", "Item Description", 0],
  ["1.1.5.4", "1M pounds of silk", "Item Description", 0]
];
var mythicItems = [
  ["1.1.6.1", "$100 Bill", "Item Description", 0],
  ["1.1.6.1", "Diamond", "Item Description", 0],
  ["1.1.6.2", "Rhodochrosite", "Item Description", 0]
];
var goddlyItems = [
  ["1.1.7.1", "$∞ Dollar Bill", 0],
  ["1.1.7.2", "Your soul", "Item Description", 0],
  ["1.1.7.3", "God", "Item Description", 0]
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
