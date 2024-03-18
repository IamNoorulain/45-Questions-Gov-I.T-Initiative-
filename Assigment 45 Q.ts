// Personal Message
let personName1: string = "Eric";
console.log(`Hello ${personName1}, would you like to learn some Python today?`);

// Name Cases
let personName2: string = "John Doe";
console.log(personName2.toLowerCase());
console.log(personName2.toUpperCase());
console.log(personName2.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());

// Famous Quote
let famousQuote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";
console.log(`${author} once said, "${famousQuote}"`);

// Famous Quote 2
let famousPerson: string = "Albert Einstein";
let message: string = `${famousPerson} once said, "${famousQuote}"`;
console.log(message);

// Stripping Names
let nameWithWhitespace: string = "\t  John Doe \n";
console.log(nameWithWhitespace);
console.log(nameWithWhitespace.trim());

// Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Favorite Number
let favoriteNumber: number = 7;
console.log(`My favorite number is ${favoriteNumber}.`);

// Names
let names: string[] = ["Alice", "Bob", "Charlie"];
names.forEach(name => console.log(name));

// Greetings
let greetings: string = "Hello!";
names.forEach(name => console.log(`${greetings} ${name}`));

// Your Own Array
let transportation: string[] = ["car", "bicycle", "train"];
transportation.forEach(item => console.log(`I would like to own a ${item}.`));

// Guest List
let guests = ["Leonardo da Vinci", "Albert Einstein", "Marie Curie"];

guests.forEach(guest => {
  console.log(`Dear ${guest}, you are cordially invited to dinner. #sellwithMatt #SunshineCoastLife`);
});


// Changing Guest List
console.log(`${guests[2]} can't make it to the dinner.`);

guests[2] = "Nikola Tesla";

guests.forEach(guest => {
  console.log(`Dear ${guest}, the dinner invite still stands. Looking forward to it! #sellwithMatt #SunshineCoastLife`);
});


// More Guests
console.log("Great news, everyone! I found a bigger dinner table. #sellwithMatt #SunshineCoastLife");

// Add new guests
guests.unshift("Ada Lovelace");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Steve Jobs");

guests.forEach(guest => {
  console.log(`Dear ${guest}, I’m pleased to invite you to dinner at a bigger table! #sellwithMatt #SunshineCoastLife`);
});

// Shrinking Guest List
console.log("Unfortunately, I can invite only two people to dinner. #sellwithMatt #SunshineCoastLife");

while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner anymore. #sellwithMatt #SunshineCoastLife`);
}

guests.forEach(guest => {
  console.log(`Dear ${guest}, you're still invited to my dinner. #sellwithMatt #SunshineCoastLife`);
});

guests.splice(0, guests.length);

console.log(guests); // This will print `[]`, confirming the list is now empty.

// Seeing the World
let placesToVisit: string[] = ["Tokyo", "Paris", "Machu Picchu", "Great Barrier Reef", "Grand Canyon"];
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
console.log(`We are inviting ${guests.length} people to dinner.`);

// Array
let mountains: string[] = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];

// TypeScript Object
let favoriteThings: { [key: string]: string } = {
    mountains: "Everest",
    rivers: "Nile",
    countries: "Japan",
    cities: "Paris",
    languages: "JavaScript"
};

// Intentional Error
let arr: number[] = [1, 2, 3];
console.log(arr[3]); // Intentional error: Index out of bounds

// Conditional Tests
let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// More Conditional Tests
let string1: string = "Hello";
let string2: string = "hello";
console.log("Test for equality with strings:");
console.log(string1 == string2); // False
console.log("Test using the lower case function:");
console.log(string1.toLowerCase() == string2); // True
let num1: number = 10;
let num2: number = 5;
console.log("Numerical tests involving equality and inequality:");
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False
console.log("Tests using 'and' and 'or' operators:");
console.log(num1 > num2 && num1 < 20); // True
console.log(num1 < num2 || num1 < 20); // True
let fruits: string[] = ["apple", "banana", "orange"];
console.log("Test whether an item is in an array:");
console.log(fruits.includes("banana")); // True
console.log("Test whether an item is not in an array:");
console.log(!fruits.includes("pineapple")); // True

// Alien Colors #1
let alien_color_1: string = 'green';
if (alien_color_1 === 'green') {
    console.log("The player just earned 5 points.");

} else {
    console.log("No points earned.");
}

// Alien Colors #2
let alien_color_2: string = 'red';
if (alien_color_2 === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// Alien Colors #3
let alien_color_3: string = 'yellow';
if (alien_color_3 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color_3 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color_3 === 'red') {
    console.log("The player earned 15 points.");
}

// Stages of Life
let age: number = 30;
if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// Favorite Fruit
let favorite_fruits: string[] = ["banana", "apple", "mango"];
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
let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(username => {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
}
});

// No Users
if (usernames.length === 0) {
    console.log("We need to find some users!");
}

// Checking Usernames
let current_users: string[] = ["John", "Jane", "Alice", "Bob", "Admin"];
let new_users: string[] = ["Adam", "Jane", "Eve", "ADMIN", "Chris"];

new_users.forEach(user => {
    if (current_users.map(u => u.toLowerCase()).includes(user.toLowerCase())) {
        console.log(`Sorry, the username ${user} is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations, the username ${user} is available.`);
    }
});

// Ordinal Numbers
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(number => {
    let ordinal;
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
    console.log(`${number}${ordinal}`);
});

// Pizzas
let favoritePizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];
favoritePizzas.forEach(pizza => console.log(`I like ${pizza} pizza.`));
console.log("I really love pizza!");

// Animals
let animals: string[] = ["dog", "cat", "rabbit"];
animals.forEach(animal => console.log(`A ${animal} would make a great pet.`));
console.log("Any of these animals would make a great pet!");

// T-Shirt
function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Size: ${size}, Message: ${message}`);
}

make_shirt();
make_shirt("medium");
make_shirt("small", "Hello, World!");

// Cities
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("London", "UK");
describe_city("Beijing", "China");

// City Names
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Sydney", "Australia"));

// Album
// Defining the Album interface to type-check the album objects
interface Album {
    artistName: string;
    albumTitle: string;
    tracks?: number; // Optional property for the number of tracks
  }
  
  // Function to create an album object
  function make_album(artistName: string, albumTitle: string, tracks?: number): Album {
    const album: Album = { artistName, albumTitle };
    if (tracks !== undefined) {
      album.tracks = tracks; // Only add tracks if it's provided
    }
    return album;
  }
  
  // Creating three different album objects without the number of tracks
  const album1 = make_album("Artist One", "The First Album");
  const album2 = make_album("Artist Two", "The Second Album");
  const album3 = make_album("Artist Three", "The Third Album");
  
  // Printing the album objects to show their information
  console.log(album1);
  console.log(album2);
  console.log(album3);
  
  // Creating an album object with the number of tracks
  const albumWithTracks = make_album("Artist Four", "The Fourth Album", 12);
  
  // Printing the album object with tracks to show its information
  console.log(albumWithTracks);
  
// Magicians
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => console.log(magician));
}

show_magicians(["Harry Houdini", "David Copperfield", "Penn & Teller"]);

// Great Magicians
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
magicians = make_great(magicians);
show_magicians(magicians);

// Unchanged Magicians
let originalMagicians: string[] = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
let greatMagicians: string[] = make_great(originalMagicians.slice());
show_magicians(originalMagicians);
show_magicians(greatMagicians);

// Sandwiches
function make_sandwich(...items: string[]) {
    console.log("Sandwich summary:");
    items.forEach(item => console.log(`- ${item}`));
}

make_sandwich("ham", "cheese", "lettuce");
make_sandwich("turkey", "bacon");
make_sandwich("peanut butter", "jelly");

// Cars
function car_info(manufacturer: string, model: string, ...options: string[]) {
    let car: any = { manufacturer, model };
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}

console.log(car_info("Toyota", "Camry", "color: blue", "sunroof: yes"));
