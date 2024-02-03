import { FishList, mostHolyFish, nonHolyFish, soldierFish } from './FishList.js'

import { TipsList } from './tips.js'

import { localList } from './locations.js'

//import { mostHolyFish, soldierFish, nonHolyFish } from './FishList.js'
// const allFish = getFish()
//const tankCare = TipsList()


// for (const fish of allFish) {
//     console.log(fish)
// }


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".things");

    // Displaying all fish
parentHTMLElement.innerHTML = FishList();
    
    // Displaying most holy fish
parentHTMLElement.innerHTML += mostHolyFish();

// Displaying non-holy fish
parentHTMLElement.innerHTML += nonHolyFish();

// Displaying soldier fish
parentHTMLElement.innerHTML += soldierFish();
    

const holyHTMLElement = document.querySelector(".content")

holyHTMLElement.innerHTML = TipsList()

const localHTMLElement = document.querySelector(".where")
localHTMLElement.innerHTML = localList()

