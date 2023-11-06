//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList = ["Nelson Mandela", "Oprah Winfrey", "Leonardo da Vinci"];
let newGuest1 = "Marie Curie";
let newGuest2 = "William Shakespeare";
let newGuest3 = "Stephen Hawking";
console.log("Good news! We found a bigger dinner table.");
guestList.unshift(newGuest1);
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuest2);
guestList.push(newGuest3);
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to a dinner at my place. It would be an honor to have you as our guest.`);
});
export {};
