// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="things">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="details">
            <div><img src="${fish.image}" /></div>
            <div>${fish.name}</div>
            <div>${fish.species}</div>
            <div>${fish.length}</div>
            <div>${fish.location}</div>
            <div>${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}



export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    let theseFish = database.fish
    for (fish of fish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
            }
    return holyFish
}
}



export const soldierFish = () => {
    soldiers = []
    let theseFish = database.fish
    for (fish of fishes) {
        if (fish.length % 5 === 0){
            soldiers.push(fish)
        }
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
}
}

export const nonHolyFish = () => {
    regularFish = []
    let theseFish = database.fish
    for (fish of fish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0){
            regularFish.push(fish)
        }
    // 5, 10, 15, 20, 25, etc... fish
    return regularFish
}
}
