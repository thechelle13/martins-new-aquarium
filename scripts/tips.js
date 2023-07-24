import { getTips } from "./database.js";

export const TipsList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let tipsHtmlString = '<article class="tips">'

    // Create HTML representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        tipsHtmlString += `<article class="content">

        <aside class="content__details">
            <h2>Aquarium Tips</h2>
            <div class="Tips">
                <ul style="list-style-type: square;">
                    <li>Check ph often</li>
                    <li>Have a feeding schedule</li>
                    <li>Do not tap the glass</li>
                </ul>
            </div>
        </aside>`

    }
    tipsHtmlString += `</article>`

    return tipsHtmlString
}

