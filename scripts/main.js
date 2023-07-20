
import { getFish } from './database.js'

import { FishList } from './FishList.js'


const allFish = getFish()
const more = FishList()

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
