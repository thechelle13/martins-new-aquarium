import { getLocations } from "./database.js"

export const localList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getLocations()

    // Start building a string filled with HTML syntax
    let localHTMLString = '<article class="where">'

    // Create HTML representations of each fish here
    for (const location of fishes) {

        // Why is there a backtick used for this string?
        localHTMLString += `<section class="details">
            <div>${location}</div>
            
        </section>
`
    }
    localHTMLString += `</article>`

    return localHTMLString
}

