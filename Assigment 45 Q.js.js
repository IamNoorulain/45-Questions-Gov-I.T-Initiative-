// Personal Message
var personName1 = "Eric";
console.log("Hello ".concat(personName1, ", would you like to learn some Python today?"));
// Name Cases
var personName = "John Doe";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
// Famous Quote
var famousQuote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(famousQuote, "\""));
// Famous Quote 2
var famousPerson = "Albert Einstein";
var message = "".concat(famousPerson, " once said, \"").concat(famousQuote, "\"");
console.log(message);
// Stripping Names
var nameWithWhitespace = "\t  John Doe \n";
console.log(nameWithWhitespace);
console.log(nameWithWhitespace.trim());
// Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Favorite Number
var favoriteNumber = 7;
console.log("My favorite number is ".concat(favoriteNumber, "."));
// Names
var names = ["Alice", "Bob", "Charlie"];
names.forEach(function (name) { return console.log(name); });
// Greetings
var greetings = "Hello!";
names.forEach(function (name) { return console.log("".concat(greetings, " ").concat(name)); });
// Your Own Array
var transportation = ["car", "bicycle", "train"];
transportation.forEach(function (item) { return console.log("I would like to own a ".concat(item, ".")); });
// Guest List
var guests = ["Leonardo da Vinci", "Albert Einstein", "Marie Curie"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. #sellwithMatt #SunshineCoastLife"));
});
// Changing Guest List
console.log("".concat(guests[2], " can't make it to the dinner."));
guests[2] = "Nikola Tesla";
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", the dinner invite still stands. Looking forward to it! #sellwithMatt #SunshineCoastLife"));
});
// More Guests
console.log("Great news, everyone! I found a bigger dinner table. #sellwithMatt #SunshineCoastLife");
// Add new guests
guests.unshift("Ada Lovelace");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Steve Jobs");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I\u2019m pleased to invite you to dinner at a bigger table! #sellwithMatt #SunshineCoastLife"));
});
// Shrinking Guest List
console.log("Unfortunately, I can invite only two people to dinner. #sellwithMatt #SunshineCoastLife");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner anymore. #sellwithMatt #SunshineCoastLife"));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to my dinner. #sellwithMatt #SunshineCoastLife"));
});
guests.splice(0, guests.length);
console.log(guests); // This will print `[]`, confirming the list is now empty.
// Seeing the World
var placesToVisit = ["Tokyo", "Paris", "Machu Picchu", "Great Barrier Reef", "Grand Canyon"];
console.log(placesToVisit.join(", "));
console.log(placesToVisit.sort().join(", "));
console.log(placesToVisit.join(", "));
console.log(placesToVisit.sort().reverse().join(", "));
console.log(placesToVisit.join(", "));
placesToVisit.reverse();
console.log(placesToVisit.join(", "));
placesToVisit.reverse();
console.log(placesToVisit.join(", "));
placesToVisit.sort();
console.log(placesToVisit.join(", "));
console.log(placesToVisit.sort().reverse().join(", "));
// Dinner Guests
console.log("We are inviting ".concat(guests.length, " people to dinner."));
// Array
var mountains = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
// TypeScript Object
var favoriteThings = {
    mountains: "Everest",
    rivers: "Nile",
    countries: "Japan",
    cities: "Paris",
    languages: "JavaScript"
};
// Intentional Error
var arr = [1, 2, 3];
console.log(arr[3]); // Intentional error: Index out of bounds
// Conditional Tests
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// More Conditional Tests
var string1 = "Hello";
var string2 = "hello";
console.log("Test for equality with strings:");
console.log(string1 == string2); // False
console.log("Test using the lower case function:");
console.log(string1.toLowerCase() == string2); // True
var num1 = 10;
var num2 = 5;
console.log("Numerical tests involving equality and inequality:");
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False
console.log("Tests using 'and' and 'or' operators:");
console.log(num1 > num2 && num1 < 20); // True
console.log(num1 < num2 || num1 < 20); // True
var fruits = ["apple", "banana", "orange"];
console.log("Test whether an item is in an array:");
console.log(fruits.includes("banana")); // True
console.log("Test whether an item is not in an array:");
console.log(!fruits.includes("pineapple")); // True
// Alien Colors #1
var alien_color_1 = 'green';
if (alien_color_1 === 'green') {
    console.log("The player just earned 5 points.");
}
else {
    console.log("No points earned.");
}
// Alien Colors #2
var alien_color_2 = 'red';
if (alien_color_2 === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// Alien Colors #3
var alien_color_3 = 'yellow';
if (alien_color_3 === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color_3 === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color_3 === 'red') {
    console.log("The player earned 15 points.");
}
// Stages of Life
var age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Favorite Fruit
var favorite_fruits = ["banana", "apple", "mango"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
// Hello Admin
var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (username) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
// No Users
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
// Checking Usernames
var current_users = ["John", "Jane", "Alice", "Bob", "Admin"];
var new_users = ["Adam", "Jane", "Eve", "ADMIN", "Chris"];
new_users.forEach(function (user) {
    if (current_users.map(function (u) { return u.toLowerCase(); }).includes(user.toLowerCase())) {
        console.log("Sorry, the username ".concat(user, " is already taken. Please choose a different one."));
    }
    else {
        console.log("Congratulations, the username ".concat(user, " is available."));
    }
});
// Ordinal Numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var ordinal;
    switch (number) {
        case 1:
            ordinal = "st";
            break;
        case 2:
            ordinal = "nd";
            break;
        case 3:
            ordinal = "rd";
            break;
        default:
            ordinal = "th";
            break;
    }
    console.log("".concat(number).concat(ordinal));
});
// Pizzas
var favoritePizzas = ["Pepperoni", "Margherita", "Supreme"];
favoritePizzas.forEach(function (pizza) { return console.log("I like ".concat(pizza, " pizza.")); });
console.log("I really love pizza!");
// Animals
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) { return console.log("A ".concat(animal, " would make a great pet.")); });
console.log("Any of these animals would make a great pet!");
// T-Shirt
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Size: ".concat(size, ", Message: ").concat(message));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Hello, World!");
// Cities
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("London", "UK");
describe_city("Beijing", "China");
// City Names
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Sydney", "Australia"));
// Function to create an album object
function make_album(artistName, albumTitle, tracks) {
    var album = { artistName: artistName, albumTitle: albumTitle };
    if (tracks !== undefined) {
        album.tracks = tracks; // Only add tracks if it's provided
    }
    return album;
}
// Creating three different album objects without the number of tracks
var album1 = make_album("Artist One", "The First Album");
var album2 = make_album("Artist Two", "The Second Album");
var album3 = make_album("Artist Three", "The Third Album");
// Printing the album objects to show their information
console.log(album1);
console.log(album2);
console.log(album3);
// Creating an album object with the number of tracks
var albumWithTracks = make_album("Artist Four", "The Fourth Album", 12);
// Printing the album object with tracks to show its information
console.log(albumWithTracks);
// Magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
show_magicians(["Harry Houdini", "David Copperfield", "Penn & Teller"]);
// Great Magicians
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
magicians = make_great(magicians);
show_magicians(magicians);
// Unchanged Magicians
var originalMagicians = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
var greatMagicians = make_great(originalMagicians.slice());
show_magicians(originalMagicians);
show_magicians(greatMagicians);
// Sandwiches
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich summary:");
    items.forEach(function (item) { return console.log("- ".concat(item)); });
}
make_sandwich("ham", "cheese", "lettuce");
make_sandwich("turkey", "bacon");
make_sandwich("peanut butter", "jelly");
// Cars
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
console.log(car_info("Toyota", "Camry", "color: blue", "sunroof: yes"));
