// Import the function that returns a copy of the fish array

import { getFish } from "./database"

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    const htmlString = '<article class="fish_details">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish.card">
            <div class="fish.name">${fish.name}</div>
            <div class="fish.species">${fish.species}</div>
            <div class="fish.length">${fish.length}</div>
            <div class="fish.location">${fish.location}</div>
            <div class="fish.diet">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}