callSavedData_cookies();
checkScreenSize()
////////////////////////////////
///        VARIABLES         ///
////////////////////////////////
function checkScreenSize() {
  let screenSize = window.innerWidth;
  if (screenSize > 975) {
    document.body.style.display = "block";
    //document.getElementById('sizeCom').style.display = 'block';
    //size.innerText = screenSize + "px ";
  } else {
	document.body.style.display = "none";
    //document.getElementById('sizeCom').style.display = 'none';
  }
}



//Seeds array counts plants AND seeds in inventory
// ids * <number of item class type> . <number of item class > . <number of item subclass> . <item number>
//["<Item ID>*", "Seed Name", "Seed Description", <seeds owned: int>, <time to grow (seasons): int>, <off season: int>, <base value: dub>, <total planted: int>, <unlocked: bool>, <placed: bool>, <rareity: string>, <plant type: int>, <soil type: int>],

var seasonNum = 0;
var selectedSeed = "wheat";
var mon = 0.00;

var slotNum = 4;
var gardenValue = 1.00;
var seedsUnlocked = 3;
var seedsHarvested = 0;

var seedPackPrice = 5;
var commonPrice = 50;
var uncommonPrice = 500;
var rarePrice = 5000;
var epicPrice = 50000;
var mythicPrice = 100000;

var seasonTime = 15000;

var seedPackUp = 1.1;
var commonUp = 1.2;
var uncommonUp = 1.2;
var rareUp = 1.2;
var epicUp = 1.2;
var mythicUp = 1.5;

var newAch = "";

var seeds = [
	["Start of seeds", ["Seed Types", [
		[0, "Garden Produce", 0],
		[1, "Herbs & Spices", 0],
		[2, "Roots & Bulbs", 0],
		[3, "Grains", 0],
		[4, "Berries, Fruits & Nuts", 0],
		[5, "Trees", 0],
		[6, "Flowers", 0]
	]]],
	["Common Seeds", [
		["1.1.1.1", "Wheat", "Grows into an unprocessed flower, a great start to a small garden!", 5, 1, 3, 2.00, 0, "soil", true, "Starter", 3],
		["1.1.1.2", "Corn", "Time for a BBQ, with some corn-on-the-COB!", 0, 1, 3, 3.00, 0, "soil", false, "Common", 0],
		["1.1.1.3", "Potato", "P-O-T-A-T-O that spells POTATO!", 0, 1, 3, 3.00, 0, "soil", false, "Common", 0],
		["1.1.1.4", "Fennel", "Reminds me of California trails, and rivers.", 0, 1, 3, 3.50, 0, "sand", false, "Common", 0],
		["1.1.1.5", "Cabbage", "A filling vegetable, that could probably only last me a day", 0, 1, 1, 4.00, 0, "soil", false, "Common", 0],
		["1.1.1.6", "Cattail", "Very messy, but very pretty......", 0, 1, 3, 5.00, 0, "water", false, "Common", 0],
		["1.1.1.7", "Mint", "A great and classic herb to grow, now don't let it get out of control.", 0, 1, 3, 3.00, 0, "soil", false, "Common", 1],
		["1.1.1.8", "Thyme", "Great addition to an herb garden.", 0, 1, 3, 5.00, 0, "sand", false, "Common", 1],
		["1.1.1.9", "Basil", "Now it's time for you to make some pesto!", 0, 1, 3, 5.00, 0, "soil", false, "Common", 1],
		["1.1.1.10", "Carrot", "Classic, never gets old..... until it does.", 0, 1, 3, 4.00, 0, "soil", false, "Common", 2],
		["1.1.1.11", "Radish", "If you pickle it, it tastes great with sushi.", 0, 1, 1, 6.00, 0, "sand", false, "Common", 2],
		["1.1.1.12", "Oats", "A healthy replacement to cereal, but I doubt any of us care.", 0, 1, 3, 3.00, 0, "soil", false, "Common", 3],
		["1.1.1.13", "Rice", "It might not look nice when harvested, but rest assured, when cooked or steamed right, you will get great food.", 0, 1, 3, 6.50, 0, "water", false, "Common", 3],
		["1.1.1.14", "Sunflower", "A pretty flower to start your garden growing journey. Looks pretty and has great seeds.", 0, 2, 3, 7.50, 0, "soil", false, "Common", 6],
		["1.1.1.15", "Dune Sunflower", "A rarer variety of a classic sunflower, in fact, this will grow even in sand.", 0, 2, 3, 7.50, 0, "sand", false, "Common", 6]
	]],
	["Uncommon Seeds", [
		["1.1.2.1", "Bell Pepper", "A bell pepper is the fruit of a flowering plant, a cultivar of Capsicum annuum. While used as a vegetable in culinary.........", 0, 2, 3, 7.00, 0, "soil", false, "Uncommon", 0],
		["1.1.2.2", "Rhubarb", "My mom makes great strawberry and rhubarb pie..... hint hint", 0, 2, 3, 8.00, 0, "soil", false, "Uncommon", 0],
		["1.1.2.3", "Oyster Mushroom", "Seed Description", 0, 0.5, 3, 5.00, 0, "water", false, "Uncommon", 0],
		["1.1.2.4", "Seaweed", "Seed Description", 0, 0, 3, 0.00, 0, "water", false, "Rare", 0],
		["1.1.2.5", "Prickly Pear", "Seed Description", 0, 1, 3, 7.00, 0, "sand", false, "Uncommon", 1],
		["1.1.2.6", "Sugar", "Seed Description", 0, 2, 3, 15.00, 0, "soil", false, "Uncommon", 1],
		["1.1.2.7", "Lavender", "Seed Description", 0, 2, 3, 25.00, 0, "sand", false, "Uncommon", 1],
		["1.1.2.8", "Parsley", "Seed Description", 0, 1, 3, 20.00, 0, "soil", false, "Uncommon", 1],
		["1.1.2.9", "Garlic", "Seed Description", 0, 3, 3, 40.00, 0, "soil", false, "Uncommon", 1],
		["1.1.2.10", "Wasabi", "Seed Description", 0, 0, 3, 0.00, 0, "soil", false, "Uncommon", 2],
		["1.1.2.11", "White Onion", "Seed Description", 0, 2, 3, 40.00, 0, "soil", false, "Uncommon", 2],
		["1.1.2.12", "Avocado", "Seed Description", 0, 4, 3, 50.00, 0, "soil", false, "Uncommon", 5]
	]],
	["Rare Seeds", [
		["1.1.3.1", "Vanilla", "Seed Description", 0, 0, 3, 0.00, 0, "soil", false, "Rare", 1],
		["1.1.3.2", "Saffron", "Seed Description", 0, 0, 3, 0.00, 0, "soil", false, "Epic", 1],
		["1.1.3.3", "Strawberry", "Seed Description", 0, 0, 3, 0.00, 0, "soil", false, "Rare", 4],
		["1.1.3.4", "Blueberry", "Seed Description", 0, 0, 3, 0.00, 0, "soil", false, "Rare", 4],
		["1.1.3.5", "Blackberry", "Seed Description", 0, 0, 3, 0.00, 0, "soil", false, "Rare", 4],
		["1.1.3.6", "Lotus", "Seed Description", 0, 0, 3, 0.00, 0, "water", false, "Rare", 4],
		["1.1.3.7", "Watermelon", "Seed Description", 0, 0, 3, 0.00, 0, "soil", false, "Rare", 4],
		["1.1.3.8", "Maple", "Seed Description", 0, 0, 3, 0.00, 0, "soil", false, "Rare", 5],
		["1.1.3.9", "Cacao", "Seed Description", 0, 0, 3, 0.00, 0, "soil", false, "Rare", 5],
		["1.1.3.10", "Rose", "Praised for the looks and smell, but......  I don't smell anything, but they look beautiful", 0, 4, 3, 10.00, 0, "soil", false, "Rare", 6]
	]],
	["Epic Seeds", [
		["1.1.4.1", "Aloe Vera", "Seed Description", 0, 0, 3, 0.00, 0, "sand", false, "Epic", 0],
		["1.1.4.2", "Coconut", "While often referred to as a nut in culinary contexts, it is not a nut. In contrast, the FDA classifies coconut as a tree nut for food allergen labeling purposes. But scientifically speaking, it is a fruit, specifically a drupe, which is a type of fruit with a shell covering surrounding a seed. Which begs the question, where is the coconut seed?", 0, 0, 3, 0.00, 0, "sand", false, "Epic", 5],
		["1.1.4.3", "Apple", "Seed Description", 0, 0, 3, 0.00, 0, "soil", false, "Epic", 5],
		["1.1.4.4", "Date Palm", "Seed Description", 0, 0, 3, 0.00, 0, "sand", false, "Epic", 5],
		["1.1.4.5", "Mango", "Seed Description", 0, 0, 3, 0.00, 0, "soil", false, "Epic", 5],
		["1.1.4.6", "Cherry", "Seed Description", 0, 0, 3, 0.00, 0, "soil", false, "Epic", 5],
		["1.1.4.7", "Banana", "Seed Description", 0, 2, 3, 20.00, 0, "sand", false, "Epic", 5],
		["1.1.4.8", "Ocotillo", "Seed Description", 0, 0, 3, 0.00, 0, "sand", false, "Epic", 6]
	]],
	["Mythic Seeds", [
		["1.1.5.1", "King Coconut", "Fiery red, passionate and powerful are the perfect words to describe the King Coconut (or me, you could say both). Primarily found in Sri Lanka, a beautiful place in South Asia, they make a name for themselves with their refreshing taste. They are commonly turned into cocktails, smoothies, and ice cream. The meat, once scooped out can added to dishes, or eaten raw. In all the king coconut is a very versatile fruit.", 0, 0, 3, 0.00, 0, "sand", false, "Mythic", 4, "#f5bc42"],
		["1.1.5.2", "Pomegranate", "My personal favorite fruit to eat, my personal least favorite to clean up. Pomegranates have tons of seeds and in various cultures, they often represent fertility, abundance, and prosperity. The red pigment inside of them, can stain almost anything and is very hard to remove. When dranken as a juice it has positive effects on cardiovascular health, cognitive function, and can even have cancer prevention!", 0, 0, 3, 0.00, 0, "soil", false, "Mythic", 4, "#9c0034"],
		["1.1.5.3", "Bamboo", "Found primarily in warm and moist tropical and temperate climates bamboo is a strong, green, tall, delicious (to pandas) and majestic plant. It covers a total of 0.38% of the earth. ", 0, 0, 3, 0.00, 0, "soil", false, "Mythic", 5, "#c1df51"],
		["1.1.5.4", "Deadly Nightshade", "A beautiful flower, but it packs a scarry punch: berries that can cause blurred vision, headaches, hallucinations, and death. This deadly plant's berries are commonly mistaken as edible; the consequences are grave.", 0, 0, 3, 0.00, 0, "soil", false, "Mythic", 5, "#d395ff"],
		["1.1.5.5", "Shenzhen Nongke Orchid", "Coming in hot with world fame, and an auction price higher than my salary for ten years, this orchid is renowned for its beautiful shape, stunning colors, and the fact that it only blooms once every few years.", 0, 0, 3, 0.00, 0, "soil", false, "Mythic", 6, "#ebffc7"],
		["1.1.5.6", "Black Bat Flower", "This flower bears a stunning resemblance to a bat. The black bat flower is considered poisonous, to pets, and humans, and everything, so, don't eat it.", 0, 0, 3, 0.00, 0, "soil", false, "Mythic", 6, "#785691"]
	]],
	["Alchemy Seeds", [
		["1.1.6.1", "Tree of Eternal Truths", "Seed Description", 0, 0, 3, 0.00, 0, "super", false, "Alchemy", 5],
		["1.1.6.2", "Spine Vine", "Seed Description", 0, 0, 3, 0.00, 0, "sand", false, "Alchemy", 5],
		["1.1.6.3", "Sherical Hexflower", "Seed Description", 0, 0, 3, 0.00, 0, "any", false, "Alchemy", 6]
		["1.1.6.4", "Soulbloom Lily", "Seed Description", 0, 0, 3, 0.00, 0, "water", false, "Alchemy", 6]
	]],
	["Tools Seeds/Soils", [
		["1.1.7.1", "Soil Bed", "Sets the type of soil to garden soil, a mixture of fertilizer little bit of mulch and normal dirt.", 0, 0, 3, "soil", 0, "any", false, "Tool", 7],
		["1.1.7.2", "Water Bed", "Sets the type of soil to water, somehow all the water is still contained in the bed will not spilling out, the water you use has a mixture of nutrients and soils and sands to let all plants get routed into the ground.", 0, 0, 3, "water", 0, "any", false, "Tool", 7],
		["1.1.7.3", "Sand Bed", "Sets the type of soil to garden sand, straight from the deserts and sand dunes this high quality luxury sand refreshes all of your desert plants and gives them the perfect biome.", 0, 0, 3, 0, "sand", 0, "any", false, "Tool", 7],
		["1.1.7.4", "Super Soil", "Sets the type of soil to super soil, a magic mystery mixture of soil that somehow combines all the elements of water sand and fertilize soil into one blend that'll last any kind of plant to grow inside of it.", 0, 0, 3, "super", 0, "any", false, "Tool", 7]
		//["1.1.7.5", "", "Seed Description", 0, 0, 3, "soil", 0, "any", false, "Tool", 7]
	]]
];
//ACHEVMENTS
var achievements = [
	["Start of Achevments", ["Achievement Types", [
	 [1, "Seeds Planted", 15],
	 [2, "Seeds Unlocked", 0],
	 [2, "Recipes", 0],
	 [2, "Achievement Type", 0]
	]]],
	//<id> <name> <what to do> <discription>, <unlocked>, <spieshal>
	["Seeds Planted", [
		["2.1.1.1", "Getting Started", "Plant your first seed!", "Achievement Description", false, 1],
		["2.1.1.2", "Microscopic Garden", "Plant 5 seeds!", "Achievement Description",false, 5],
		["2.1.1.3", "Tiny Garden", "Plant 10 seeds!", "Achievement Description", false, 10],
		["2.1.1.4", "Small Garden", "Plant 25 seeds!", "Achievement Description", false, 25],
		["2.1.1.5", "Humble Garden", "Plant 50 seeds!", "Achievement Description", false, 50],
		["2.1.1.6", "Average Garden", "Plant 100 seeds!", "Achievement Description", false, 100],
		["2.1.1.7", "Mediocre Garden", "Plant 250 seeds!", "Achievement Description", false, 250],
		["2.1.1.8", "Big Garden", "Plant 500 seeds!", "Achievement Description", false, 500],
		["2.1.1.9", "Large Garden", "Plant 1,000 seeds!", "Achievement Description", false, 1000],
		["2.1.1.10", "Huge Garden", "Plant 2,500 seeds!", "Achievement Description", false, 2500],
		["2.1.1.11", "Giant Garden", "Plant 5,000 seeds!", "Achievement Description", false, 5000],
		["2.1.1.12", "Massive Garden", "Plant 10,000 seeds!", "Achievement Description", false, 10000],
		["2.1.1.13", "Humongus Garden", "Plant 25,000 seeds!", "Achievement Description", false, 25000],
		["2.1.1.14", "Enormous Garden", "Plant 50,000 seeds!", "Achievement Description", false, 50000],
		["2.1.1.15", "Divine Garden", "Plant 100,000 seeds!", "Achievement Description", false, 100000]
	]],
	["Seeds Unlocked", [
		["2.1.2.1", "Achievement Name", "Achievement Criteria", "Achievement Description", false],
		["2.1.2.2", "Achievement Name", "Achievement Criteria", "Achievement Description", false],
	 	["2.1.2.3", "Achievement Name", "Achievement Criteria", "Achievement Description", false]
	]],
	["Seed Recipes", [
		["2.1.2.1", "Strawberry Rhubarb Pie", "Grow: 5 Strawberries, 3 Rhubarb, 3 Sugar, 2 Wheat, and 1 Vanilla.", "Achievement Description", false, false],
		["2.1.2.2", "Fruit Cup", "Grow: 5 Strawberries, 4 Blueberries, 3 Mangos, 2 Watermelons, and 1 Ruby Roman Grape", "Achievement Description", false, false],
	 	["2.1.2.3", "Banana Foster Waffles", "Grow: 5 Wheat, 4 Sugar, 4 Bananas, 3 Maple, (put more here)", "Achievement Description", false, false],
		["2.1.2.4", "Pancake", "Grow: 5 Wheat, 4 Sugar, 4 Maple, 3 Vanilla, 2 Strawberries, and 1 ....", "Achievement Description", false, false],
		["2.1.2.5", "Pancake Stack", "Grow: 25 Wheat, 20 Sugar, 20 Maple, 15 Vanilla, 10 Strawberries, and 5 ....", "Achievement Description", false, false],
		["2.1.2.6", "Pancake Tower", "Grow: 50 Wheat, 40 Sugar, 40 Maple, 30 Vanilla, 20 Strawberries, and 10....", "Achievement Description", false, false],
		["2.1.2.7", "Apple Crisp", "Grow: 5 Red Apple, 5 Green Apple, 5 Black Diamond Apple, and 4 Sugar.", "Achievement Description", false, false],
		["2.1.2.8", "Golden Apple Crisp", "Grow: 10 Golden Apple, 10 Red Apple, 10 Green Apple, 10 Black Diamond Apple, and 8 Sugar.", "Achievement Description", false, false],
		["2.1.2.9", "Pesto Pasta", "Grow: 5 Wheat, 4 Basil, 2 Garlic, 1 Sugar.", "Achievement Description", false, false],
		["2.1.2.10", "Vegetable Soup", "Grow: 3 Carrot (Orange), 3 Celery, 3 Cabbage, 3 Potato, and 1 Onion.", "Achievement Description", false, false],
		["2.1.2.11", "Sushi", "Grow: 10 Rice, 8 Seaweed, 4 Avocado and 1 Wasabi.", "Achievement Description", false, false],
		["2.1.2.12", "Avocado Toast", "Grow: 5 Wheat, 4 Avocado, 2 Onion and 1 Sugar.", "Achievement Description", false, false]


	]]
];
function unlockAchievements() {
	//Seeds planted
	for(i = 0; i < achievements[1][1].length; i++) {
		if (seedsHarvested >= achievements[1][1][i][5] && achievements[1][1][i][4] == false) {
			achievements[1][1][i][4] = true;
			newAch = achievements[1][1][i][1];
			createNewGardenSlot();
			makeAlert(5);
		}
	}
	if((true) && achievements[3][1][1][5] == false){

	}
	//seeds unlocked
	//recipes
	//
}
function displayAchievements() {
	document.getElementById("achGallaryWing").innerHTML = "";	
	for(i = 1; i < achievements.length; i++) {
		if (achievements[1][1][i][5] == true) {
			const achContainer = document.createElement("div");
			const ach_h1 = document.createElement("h1");
			const ach_p = document.createElement("p");
			const ach_h1_text = document.createTextNode(achievements[1][1][i][1]);
			const ach_1_text = document.createTextNode(achievements[1][1][i][3]);
			ach_h1.appendChild(ach_h1_text);
			ach_p.appendChild(ach_p_text);
			achContainer.appendChild(ach_h1);
			achContainer.appendChild(ach_p);
			document.getElementById("achGallaryWing").appendChild(achContainer);
		} else {

	
		}
	}
	
}	

////////////////////////////////
///       BOOT-UP GAME       ///
////////////////////////////////
document.getElementById("mon-spot").innerHTML = "You have " + mon + "$";
document.getElementById("value-spot").innerHTML = "Garden Value: " + gardenValue + "x";
unlockSeedInArray();
refreshDropdown();
setInterval(makeSavedData_cookies, 1000);
setInterval(refreshVitals, 1000);
setInterval(changeSeason, 15000);
setInterval(checkScreenSize, 1000);

//setInterval(refreshDropdown, 1000);
document.getElementById('garden-slots').addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') { 
		const gardenBedLocation = event.target; 
		console.log("Button ID:", gardenBedLocation.id);
		plantSeed(gardenBedLocation);
	}
});

////////////////////////////////
///       GAME FRONT         ///
////////////////////////////////
function changeSeason() {
	let seasonColors = ["#c2f7ab", "#ffe066","#ffc58f","#b5f1ff"];
	let seasonNames = ["Spring", "Summer", "Autumn", "Winter"];
	seasonNum = (seasonNum + 1) % seasonColors.length; 

	let garden = document.getElementById("gardenUI");
	let label = document.getElementById("seasonName");
	let newColor = seasonColors[seasonNum];
	garden.style.backgroundColor = newColor;
	seasonName.innerHTML = seasonNames[seasonNum];
}
function unlockSeedInArray() {
	document.getElementById("seed-slots").innerHTML = "";
	document.getElementById("super-seed-slots").innerHTML = "";	
	for (let i = 1; i < seeds.length; i++) {
		for (let i3 = 0; i3 < seeds[i][1].length; i3++) {
			if (seeds[i][1][i3][9] == true) {
				const seedContainer = document.createElement("div");
				const seed_h1 = document.createElement("h1");
				const seed_h1_text = document.createTextNode(seeds[i][1][i3][1] + " (" + seeds[i][1][i3][3] + "x)");
				seed_h1.appendChild(seed_h1_text);
				seasonNameInput = "winter";
				if (seeds[i][1][i3][5] == 2) {seasonNameInput = "autumn";}
				if (seeds[i][1][i3][5] == 1) {seasonNameInput = "summer";}
				if (seeds[i][1][i3][5] == 0) {seasonNameInput = "spring";}

				const seed_p = document.createElement("ul");
                const seed_li = document.createElement("li");
                const seed_li_1 = document.createElement("li");
                const seed_li_2 = document.createElement("li");
                const seed_li_3 = document.createElement("li");
                
				const p_part_1 = "Grows slower in " + seasonNameInput + ".";
				const p_part_2 = "Grows for " + (seeds[i][1][i3][6]*gardenValue) + "$" + " (" + seeds[i][1][i3][6] + " * garden value)"; 
				const p_part_3 = "Takes " + seeds[i][1][i3][4] + " season(s) to grow"; 
				const seed_p_text = document.createTextNode(seeds[i][1][i3][2]);
				const seed_p_text_1 = document.createTextNode(p_part_1);
				const seed_p_text_2 = document.createTextNode(p_part_2);
				const seed_p_text_3 = document.createTextNode(p_part_3);
				
				const seedImageAsset = "assets/" + seeds[i][1][i3][1] + ".png";
				const seedImage = document.createElement("img");
				
				seedImage.src = seedImageAsset;
					
                seed_li.appendChild(seed_p_text);
                seed_li_1.appendChild(seed_p_text_1);
                seed_li_2.appendChild(seed_p_text_2);
                seed_li_3.appendChild(seed_p_text_3);
                

				seed_p.appendChild(seed_li);
				seed_p.appendChild(seed_li_1);
				seed_p.appendChild(seed_li_2);
				seed_p.appendChild(seed_li_3);
                
				seedContainer.appendChild(seed_h1);
				seedContainer.appendChild(seed_p);
				seedContainer.appendChild(seedImage);
				
				const placement = "seed-" + seeds[i][1][i3][0];
				seedContainer.id = placement;
				
				if (seeds[i][1][i3][10] == "Mythic") {
					document.getElementById("super-seed-slots").appendChild(seedContainer);
					document.getElementById(placement).classList.add('unlockedSeedsSuper');
					document.getElementById(placement).style.background = seeds[i][1][i3][12];
					document.getElementById(placement).style.border = "#000000 groove 8px";
				} else { 
					document.getElementById("seed-slots").appendChild(seedContainer);
					document.getElementById(placement).classList.add('unlockedSeedsNormal');
					document.getElementById(placement).style.background = "#fff3d6";
					document.getElementById(placement).style.border = "#5e502d groove 8px";
  
				}
				document.getElementById(placement).classList.add(selectedSeed[10]+"Seeds");
			}
		}
	}
}
//["<Item ID>*", "Seed Name", "Seed Description", <seeds owned: int>, <time to grow (seasons): int>, <off season: int>, <base value: dub>, <total planted: int>, <unlocked: bool>, <placed: bool>, <rareity: string>, <plant type: int>, <soil type: int>],
function refreshDropdown() {
    const seedContainer = document.createElement("select");
    for (let i = 1; i < seeds.length; i++) {
        const groupName = seeds[i][0]; 
        const seed_option = document.createElement("option");
        const seed_option_text = document.createTextNode("--- " + groupName + " ---");
        seed_option.disabled = true;
        seed_option.appendChild(seed_option_text);
        seedContainer.appendChild(seed_option);
        for (let i3 = 0; i3 < seeds[i][1].length; i3++) {
            if (seeds[i][1][i3][9] == true) {
                const seed_option = document.createElement("option");
                const seed_option_text = document.createTextNode(seeds[i][1][i3][1]); // seed name
                seed_option.appendChild(seed_option_text);
                seedContainer.appendChild(seed_option);
            }
        }
    }
    seedContainer.id = "seed-list";
    document.getElementById("seed-list").replaceWith(seedContainer);
}
function refreshVitals() {
	document.getElementById("mon-spot").innerHTML = "You have " + mon + "$";
	document.getElementById("value-spot").innerHTML = "Garden Value: " + gardenValue + "x";
	
	if (commonPrice == 0) {document.getElementById("common-unlock-pack-price").innerHTML = "SOLD OUT!";}
	else {document.getElementById("common-unlock-pack-price").innerHTML = commonPrice + "$";}
	
	if (uncommonPrice == 0) {document.getElementById("uncommon-unlock-pack-price").innerHTML = "SOLD OUT!";}
	else {document.getElementById("uncommon-unlock-pack-price").innerHTML = uncommonPrice + "$";}
	
	if (rarePrice == 0) {document.getElementById("rare-unlock-pack-price").innerHTML = "SOLD OUT!";}
	else {document.getElementById("rare-unlock-pack-price").innerHTML = rarePrice + "$";}
	
	if (epicPrice == 0) {document.getElementById("epic-unlock-pack-price").innerHTML = "SOLD OUT!";}
	else {document.getElementById("epic-unlock-pack-price").innerHTML = epicPrice + "$";}
	
	if (mythicPrice == 0) {document.getElementById("mythic-unlock-pack-price").innerHTML = "SOLD OUT!";} 
	else {document.getElementById("mythic-unlock-pack-price").innerHTML = mythicPrice + "$";}
	
	document.getElementById("seed-pack-price").innerHTML = seedPackPrice + "$";
	unlockSeedInArray()
	findSeed();
	unlockAchievements()
	
}
function createNewGardenSlot() {
	slotNum++;
	const newSlot = document.createElement("div");
	newSlot.id = "garden-slot-" + slotNum;
	const newButton = document.createElement("button");
	newButton.id = "garden-slot-" + slotNum + "-button";
	const newButtonText = document.createElement("p");
	newButtonText.id = "garden-slot-" + slotNum + "-button-text";
    newButton.innerHTML = "Plant Here";
	newSlot.appendChild(newButton);
	newSlot.appendChild(newButtonText);
	newSlot.classList.add("soil");

	document.getElementById("garden-slots").appendChild(newSlot);
	gardenValue = gardenValue + 0.5;
}
function unlockTemplate() {
	const achContainer = document.createElement("li");
	const ach_h1 = document.createElement("h1");
	const ach_h1_text = document.createTextNode("Lemonaid");
	ach_h1.appendChild(ach_h1_text);
	const ach_p = document.createElement("p");
	const ach_p_text = document.createTextNode("yum");
	ach_p.appendChild(ach_p_text);
	achContainer.appendChild(ach_h1);
	achContainer.appendChild(ach_p);
	document.getElementById("myList").appendChild(achContainer);
}
function findSeed() {
	let seedSelect = document.getElementById("seed-list");
	if (!seedSelect || seedSelect.selectedIndex < 0 || !seedSelect.options[seedSelect.selectedIndex]) {
		// Can't proceed if select or selection is missing
		return;
	}
	const seedName = seedSelect.options[seedSelect.selectedIndex].text.toLowerCase();	
	const allIndividualSeeds = seeds.slice(1).flatMap(categoryEntry => categoryEntry[1]);	
	selectedSeed = allIndividualSeeds.find(seed => {
		return Array.isArray(seed) && seed[1].toLowerCase() === seedName.toLowerCase();
	});
	if (selectedSeed) {
    		//console.log(selectedSeed);
			document.getElementById("seed-num").innerHTML = "You have " + selectedSeed[3] + "x seeds left";
	} else {
	    console.log("shit");
	}
}
//["<Item ID>*", "Seed Name", "Seed Description", <seeds owned: int>, <time to grow (seasons): int>, <off season: int>, <base value: dub>, <total planted: int>, <unlocked: bool>, <placed: bool>, <rareity: string>, <plant type: int>, <soil type: int>],
function plantSeed(gardenBedLocation) {
	let bedData = [document.getElementById(([gardenBedLocation.id.substr(0, gardenBedLocation.id.length-7)])), document.getElementById(gardenBedLocation.id), document.getElementById(gardenBedLocation.id + "-text")];
	findSeed();
	if (selectedSeed[3] > 0) {
		if(bedData[0].classList.contains(selectedSeed[8])||bedData[0].classList.contains("super")){
			selectedSeed[3]--;
			bedData[2].innerHTML = selectedSeed[1] + " is growing";
			bedData[1].style.display = "none";
			refreshVitals();
			if(selectedSeed[11] == 7) {
				document.getElementById(bedData[0]).classList = "";
				document.getElementById(bedData[0]).classList.add(selectedSeed[6]);
			}
			if (seasonNum == selectedSeed[5]) {
				bedData[0].style.border = "10px red groove";
				setTimeout(harvest, seasonTime*(selectedSeed[4]+1), selectedSeed, bedData);
			} else {
				bedData[0].style.border = "10px green groove";
				setTimeout(harvest, seasonTime*selectedSeed[4], selectedSeed, bedData);
			}
		} else {makeAlert(6);}
	} else {makeAlert(1);}
}
function harvest(seed, bedData) {
	bedData[1].style.display = "block";
	bedData[2].innerHTML = "";
	bedData[0].style.border = "10px white groove";
	seed[7]++;
	mon = mon + (seed[6]*gardenValue);
	seedsHarvested++;
	refreshVitals();
}
function buySeed(pack) {
    if(pack == 0) {
        if (mon >= seedPackPrice) {
            let allIndividualSeeds = seeds.slice(1).flatMap(categoryEntry => categoryEntry[1]);
            let lockedSeeds = allIndividualSeeds.filter(seed => seed[9] == true);
            if (lockedSeeds.length === 0) {
				seedPackPrice = 0;
                makeAlert(4);
                return;
            }
            let unlockSeed = lockedSeeds[Math.floor(Math.random() * lockedSeeds.length)];
			unlockSeed[3] = unlockSeed[3] + 10;
     		mon = mon - seedPackPrice;
        	seedPackPrice = Math.round(seedPackPrice * seedPackUp);
        } else { makeAlert(2); }
    }
    if(pack == 1) {
        if (commonPrice == 0) {
            makeAlert(4);
        } else {
            if (mon >= commonPrice) {
                let allIndividualSeeds = seeds[1][1];
                let lockedSeeds = allIndividualSeeds.filter(seed => seed[9] == false);
                if (lockedSeeds.length === 0) {
					commonPrice = 0;
                    makeAlert(4);
                    return;
                }
                let unlockSeed = lockedSeeds[Math.floor(Math.random() * lockedSeeds.length)];
                unlockSeed[9] = true;
       			unlockSeed[3] = unlockSeed[3] + 5;
        		mon = mon - commonPrice;
        		commonPrice = Math.round(commonPrice * commonUp);
            } else { makeAlert(2); }
        }
    }
    if(pack == 2) { 
        if (uncommonPrice == 0) {
            makeAlert(4);
        } else {
            if (mon >= uncommonPrice) {
                let allIndividualSeeds = seeds[2][1];
                let lockedSeeds = allIndividualSeeds.filter(seed => seed[9] == false);
                if (lockedSeeds.length === 0) {
					uncommonPrice = 0;
                    makeAlert(4);
                    return;
                }
                let unlockSeed = lockedSeeds[Math.floor(Math.random() * lockedSeeds.length)];
                unlockSeed[9] = true;
        		unlockSeed[3] = unlockSeed[3] + 5;
        		mon = mon - uncommonPrice;
        		uncommonPrice = Math.round(uncommonPrice * uncommonUp);
            } else { makeAlert(2); }
        }
    }
    if(pack == 3) {
        if (rarePrice == 0) {
            makeAlert(4);
        } else {
            if (mon >= rarePrice) {
                let allIndividualSeeds = seeds[3][1];
                let lockedSeeds = allIndividualSeeds.filter(seed => seed[9] == false);
                if (lockedSeeds.length === 0) {
					rarePrice = 0;
                    makeAlert(4);
                    return;
                }
                let unlockSeed = lockedSeeds[Math.floor(Math.random() * lockedSeeds.length)];
                unlockSeed[9] = true;
     			unlockSeed[3] = unlockSeed[3] + 5;
        		mon = mon - rarePrice;
        		rarePrice = Math.round(rarePrice * rareUp);
            } else { makeAlert(2); }
        }
    }
    if(pack == 4) {
        if (epicPrice == 0) {
            makeAlert(4);
        } else {
            if (mon >= epicPrice) {
                let allIndividualSeeds = seeds[4][1];
                let lockedSeeds = allIndividualSeeds.filter(seed => seed[9] == false);
                if (lockedSeeds.length === 0) {
					epicPrice = 0
                    makeAlert(4);
                    return;
                }
                let unlockSeed = lockedSeeds[Math.floor(Math.random() * lockedSeeds.length)];
                unlockSeed[9] = true;
        		unlockSeed[3] = unlockSeed[3] + 5;
        		mon = mon - epicPrice;
        		epicPrice = Math.round(epicPrice * epicUp);
            } else { makeAlert(2); }
        }
    }
    if(pack == 5) {
        if (mythicPrice == 0) {
            makeAlert(4);
        } else {
            if (mon >= mythicPrice) {
                let allIndividualSeeds = seeds[5][1];
                let lockedSeeds = allIndividualSeeds.filter(seed => seed[9] == false);
                if (lockedSeeds.length === 0) {
					mythicPrice = 0;
                    makeAlert(4);
                    return;
                }
                let unlockSeed = lockedSeeds[Math.floor(Math.random() * lockedSeeds.length)];
                unlockSeed[9] = true;
        		unlockSeed[3] = unlockSeed[3] + 5;
        		mon = mon - mythicPrice;
        		mythicPrice = Math.round(mythicPrice * mythicUp);
            } else { makeAlert(2); }
        }
    }
	refreshVitals();
}
function makeAlert(alertCode) {
	if (alertCode == 0) {
		document.getElementById("alert").style.display = "none";
		document.getElementById("alert-h").innerHTML = "No Alert Yet!";
		document.getElementById("alert-p").innerHTML = "This means nothing bad has happened yet or no errors have been triggered! This is a good sign.";
	}
	if (alertCode == 1) {
		document.getElementById("alert-h").innerHTML = "Not Enough Seeds!";
		document.getElementById("alert-p").innerHTML = "You do not have enough " + selectedSeed[1] + " seeds in your inventory! If you want more, buy them in the store.";
		document.getElementById("alert").style.background = "#ffc9ba";
		document.getElementById("alert").style.display = "block";
	} 
	if (alertCode == 2) {
		document.getElementById("alert-h").innerHTML = "Not Enough Money!";
		document.getElementById("alert-p").innerHTML = "You dont have enough money! If you want more, try planting seeds in the garden.";
		document.getElementById("alert").style.background = "#ffc9ba";
		document.getElementById("alert").style.display = "block";
	}
	if (alertCode == 3) {
		document.getElementById("alert-h").innerHTML = "Wrong type of bed!";
		document.getElementById("alert-p").innerHTML = "This is the wrong type of bed, try plating in a diffrent bed, or if you dont own any of the right kinds of beds then you may have to restart....";
		document.getElementById("alert").style.background = "#ffc9ba";
		document.getElementById("alert").style.display = "block";
	}
	if (alertCode == 4) {
		document.getElementById("alert-h").innerHTML = "Sold Out!";
		document.getElementById("alert-p").innerHTML = "This pack is sold out! You cannot buy anymore from this pack, try buying some other seeds instead.";
		document.getElementById("alert").style.background = "#";
		document.getElementById("alert").style.display = "block";
	}
	if (alertCode == 5) {
		document.getElementById("alert-h").innerHTML = "NEW ACHIEVEMENT: " + newAch +"!";
		document.getElementById("alert-p").innerHTML = "You just earned a brand new achievement: " + newAch + "! Good job!";
		document.getElementById("alert").style.background = "#fffead";
		document.getElementById("alert").style.display = "block";
	}
	if (alertCode == 6) {
		document.getElementById("alert-h").innerHTML = "Wrong Soil";
		document.getElementById("alert-p").innerHTML = "Try plant this plant is different soil!";
		document.getElementById("alert").style.background = "#ffc9ba";
		document.getElementById("alert").style.display = "block";}
	if (alertCode == 7) {
		document.getElementById("alert-h").innerHTML = "Already There!";
		document.getElementById("alert-p").innerHTML = "Your are trying to put some soil spot with that same kind of soil, try again somewhere else!";
		document.getElementById("alert").style.background = "#ffc9ba";
		document.getElementById("alert").style.display = "block";}

}
////////////////////////////////
///         COOKIES          ///
////////////////////////////////
function makeSavedData_cookies() {
	const data = {
		//User Cookies
		//user: user,
		//username: username,
		//SEED COOKIES
		seeds: seeds,
	};
	localStorage.setItem('savedData', JSON.stringify(data));
}
function callSavedData_cookies() {
	//const
	savedData = JSON.parse(localStorage.getItem('savedData'));
	if (savedData) {
		//User Cookies
		//user = savedData.user || false;
		//username = savedData.username || "guest";
		//SEED COOKIES		
		seeds = savedData.seeds || seeds;
	}
}

changeSeason();


