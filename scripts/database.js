const database = {
    fish: [
        {   
            name: "Bart",
            species: "Bass",
            food: "crustaceans",
            length: 3, 
            location: "Florida"
        }, 
        {
            name: "Will",
            species: "Bass",
            food: "crustaceans",
            length: 3, 
            location: "Florida"
        }, 
        {
            name: "Sara",
            species: "Bass",
            food: "crustaceans",
            length: 3, 
            location: "Florida"
        }, 
        {
            name: "Jones",
            species: "Bass",
            food: "crustaceans",
            length: 3, 
            location: "Florida"
        }, 
        {
            name: "Hank",
            species: "Bass",
            food: "crustaceans",
            length: 3, 
            location: "Florida"
        }, 
        {
            name: "Glen",
            species: "Bass",
            food: "crustaceans",
            length: 3, 
            location: "Florida"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}