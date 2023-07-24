
import { getFish } from './database.js'

import { FishList } from './FishList.js'

import { TipsList } from './tips.js'

import { localList } from './locations.js'

//import { mostHolyFish, soldierFish, nonHolyFish } from './FishList.js'
const allFish = getFish()
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
const parentHTMLElement = document.querySelector(".things")

parentHTMLElement.innerHTML = FishList()

const holyHTMLElement = document.querySelector(".content")

holyHTMLElement.innerHTML = TipsList()


const localHTMLElement = document.querySelector(".where")

const localHTML =`<h2>Locations Harvested</h2>`

localHTMLElement.innerHTML = localList()


