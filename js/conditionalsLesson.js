var pizzaPreference = prompt("What kind of pizza do you like?");

if (pizzaPreference == "pineapple and hot sauce") {
    alert(" What a coincidence, that's my favorite!");
} else if (pizzaPreference == "cheese") {
    alert(" Just plain cheese? Okay...");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!")
}

var pizzaPreferenceAgain = prompt("What kind of pizza do you like?");

if (pizzaPreferenceAgain === " pineapple and hot sauce") {
    alert(" What a coincidence, that's my favorite!");
} else if (pizzaPreferenceAgain === "cheese") {
    alert(" Just plain cheese? Okay...");
} else {
    alert(pizzaPreferenceAgain + " isn't my favorite, but let's order some!")
}

var sodaPreference = prompt("What kind of soda do you like?");

switch(sodaPreference) {
    case "cherry coke":
        alert(" What a coincidence, that's my favorite");
        break;
    case "coke":
        alert(" Just plain coke? Okay...");
        break;
    default:
        alert(sodaPreference + " isn't my favorite, but let's get some!");
        break;
}