function getDrinkByProfession(param) {
    const normalizedParam = param.toLowerCase();
    switch (normalizedParam) {
        case "jabroni":
            return "Patron Tequila";
        case "school counselor":
            return "Anything with Alcohol";
        case "programmer":
            return "Hipster Craft Beer";
        case "bike gang member":
            return "Moonshine";
        case "politician":
            return "Your tax dollars";
        case "rapper":
            return "Cristal";
        default:
            return "Beer"; // Default case
    }
}

// Testing the function
console.log(getDrinkByProfession("Jabroni")); // Logs: "Patron Tequila"
console.log(getDrinkByProfession("sChool CoUnSelor")); // Logs: "Anything with Alcohol"
console.log(getDrinkByProfession("PROGRAMMER")); // Logs: "Hipster Craft Beer"
console.log(getDrinkByProfession("Bike Gang Member")); // Logs: "Moonshine"
console.log(getDrinkByProfession("Politician")); // Logs: "Your tax dollars"
console.log(getDrinkByProfession("Rapper")); // Logs: "Cristal"
console.log(getDrinkByProfession("Doctor")); // Logs: "Beer"
