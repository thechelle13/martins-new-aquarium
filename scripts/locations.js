import { getLocations } from "./database.js";

export const localList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations();

    // Start building a string filled with HTML syntax
    let localHTMLString = '<article class="where">';

    localHTMLString += `<section class="details">
                            <h2>Harvest Locations</h2>
                        </section>`;

    // Create HTML representations of each location here
    for (const location of locations) {
        localHTMLString += `<section class="details">
            <li>${location}</li>
        </section>`;
    }

    localHTMLString += `</article>`;

    return localHTMLString;
};
