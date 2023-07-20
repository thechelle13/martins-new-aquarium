const database = {
    fish: [
        {   
            image: "https://static.vecteezy.com/system/resources/previews/009/380/313/original/fish-drawing-clipart-design-illustration-free-png.png",
            name: "Bart",
            species: "Bass",
            food: "crustaceans",
            length: 3, 
            location: "Florida"
        }, 
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQCWQiJ-Inzf0LwQisXKP-WPOI-HZwoWPKMy-2t40AWuWmxowfgMCiw84rQHLj37kS7s&usqp=CAU",
            name: "Will",
            species: "Bass",
            food: "crustaceans",
            length: 3, 
            location: "Florida"
        }, 
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2xRGiGWLKAxCd-rSKT9-GzWnqxrVXpLt4STt2WCDX&s",
            name: "Sara",
            species: "Bass",
            food: "crustaceans",
            length: 3, 
            location: "Florida"
        }, 
        {   
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjchz0FSZMGF14Wo37L4-R5mrsDNKo3G9Xe3Jj6Z2eeQ9lxJ5H-F6kfCPkO2JLN9nu6fM&usqp=CAU",
            name: "Jones",
            species: "Bass",
            food: "crustaceans",
            length: 3, 
            location: "Florida"
        }, 
        {   
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUKlHEOdv5bMelf7p__c4Fv8pyt9oZkPUedk4STtjfm0-z_Sm4kyaNek-VBhE2y-hYR0&usqp=CAU",
            name: "Hank",
            species: "Bass",
            food: "crustaceans",
            length: 3, 
            location: "Florida"
        }, 
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk67R58yd1mGpmCtiNEQnojGtvlnjUSSIEEENy9IbO&s",
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