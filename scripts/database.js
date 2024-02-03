const database = {
    fish: [
        {   
            image: "https://media.istockphoto.com/id/533130811/photo/great-white-shark-smile.jpg?b=1&s=612x612&w=0&k=20&c=uaMxTiulaKaoTPRBwiJC1antTvw1nVckooGezuNGqMk=",
            name: "Bruce",
            species: "Great White",
            food: "crustaceans",
            length: 3, 
            location: "Florida"
        }, 
        {
            image: "https://img.freepik.com/free-photo/majestic-blacktip-reef-shark-swimming-deep-water-generated-by-ai_188544-23063.jpg",
            name: "Zombie",
            species: "Great White",
            food: "everything",
            length: 12, 
            location: "California"
        }, 
        {
            image: "https://media.istockphoto.com/id/1425145124/photo/great-white-shark-carcharodon-carcharias-gansbaai-south-africa.webp?b=1&s=170667a&w=0&k=20&c=9-EJkn1mCnS0AgcmrkFMarV9oAYLqA29QzhlfwSP0YA=",
            name: "Sara",
            species: "Great White",
            food: "everything",
            length: 15, 
            location: "PNG"
        }, 
        {   
            image: "https://media.istockphoto.com/id/1454210728/photo/bull-shark-in-bimini-bahamas.jpg?s=612x612&w=0&k=20&c=KQCLMlO-LZhRNmaADvsSQoy29V5ld1zLh358wmQYPwM=",
            name: "Jones",
            species: "Sand Shark",
            food: "everything",
            length: 10, 
            location: "Cape Cod"
        }, 
        {   
            image: "https://media.istockphoto.com/id/1474749132/photo/black-fin-sharks-swimming-in-an-aquarium.jpg?s=612x612&w=0&k=20&c=JqyN24J4rrIAiP9_TcTqaRZZstzt05Kb54qJH0Af04M=",
            name: "Hank",
            species: "White Tip Shark",
            food: "everything",
            length: 13, 
            location: "South Africa"
        }, 
        {
            image: "https://media.istockphoto.com/id/1467643310/photo/japan-okinawa-ocean-animal.jpg?s=612x612&w=0&k=20&c=nATh9rODqc_qaVGQdoPF7Tg3MHPQ3FmalSPCKsdq800=",
            name: "Glen",
            species: "Whale Shark",
            food: "everything",
            length: 30, 
            location: "New Zealand"
        }
    ], 
    TipList : [
        {
            tank: "Keep it Clean.",
            salinity: "Test often.",
            temperature: "Consistency is key.", 
            size: "Select the correct tank size for your fish."
        }, 
        
    ], 
    locations : [
        "New Zealand", "California", "Florida", "South Africa"
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.TipList.map(TipList => ({...TipList}))
}

export const getLocations = () => {
    return [...database.locations];  
};