// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"


export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="things">'

    htmlString += `<section class="details">
                            <h2>Fish List</h2>
                        </section>`;

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="details">
            <div><img src="${fish.image}" /></div>
            <div>Name: ${fish.name}</div>
            <div>Species: ${fish.species}</div>
            <div>Length: ${fish.length}</div>
            <div>Harvest Location: ${fish.location}</div>
            <div>Food: ${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}



// In FishList.js
export const mostHolyFish = () => {
    const holyFish = [];
    const theseFish = getFish();

    let fishHTML = `<article class="things">
                        <h2>Holy Fish</h2>
                        <ul>`;

    for (let fish of theseFish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish.name);
            fishHTML += `<li>${fish.name} - ${fish.length} inches</li>`;
        }
    }

    fishHTML += `</ul>
                </article>`;

    return fishHTML;
};

export const soldierFish = () => {
    const soldiers = [];
    const theseFish = getFish();

    let fishHTML = `<article class="things">
                        <h2>Soldier Fish</h2>
                        <ul>`;

    for (let fish of theseFish) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish.name);
            fishHTML += `<li>${fish.name} - ${fish.length} inches</li>`;
        }
    }

    fishHTML += `</ul>
                </article>`;

    return fishHTML;
};

export const nonHolyFish = () => {
    const regularFish = [];
    const theseFish = getFish();

    let fishHTML = `<article class="things">
                        <h2>Regular Fish</h2>
                        <ul>`;

    for (let fish of theseFish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish.name);
            fishHTML += `<li>${fish.name} - ${fish.length} inches</li>`;
        }
    }

    fishHTML += `</ul>
                </article>`;

    return fishHTML;
};



