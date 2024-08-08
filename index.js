const prompt = require('prompt-sync')()
// REMINDER: Run your code to make sure there are no errors before submitting!
// Create an object that represents your favorite show with the following keys: name (string), genre (string), rating (number) (2 pts)
let favShow = {
  name: "Attack on Titan",
  genre :"Dark Fantasy",
  rating: "4.9"
};

// Console log the show's name using the object (1 pt)
console.log(favShow.name)


// Add a new key called watched and put in a boolean with whether you have seen it (1 pt)
favShow.watched = true


// Change the rating of the show to increase it by one (2 pt)
favShow.rating++



// Loop through the object and print every key and element. (2 pt)
// It should look like: 
// name is Ted Lasso
// genre is comedy
// rating is 4.5
// watched is true
for (let key in favShow){
  console.log(key)
  console.log(favShow)
}



// EXTRA CREDIT
// Make two more show objects and put them all in an array
// Loop through the array and print the names of the shows





