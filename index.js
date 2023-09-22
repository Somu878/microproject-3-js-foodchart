//Importing JSON file
const foodata = require('./food.json')

//Task-1 List of all Food items.
function foodItemsList(arr){
    return arr.map((items)=>
    console.log(items));
}


foodItemsList(foodata);

// Comman function to list all the food items with input category.
function ListBycat(arr,cat){
    return arr.filter((items)=>items.category==cat).map((items)=>
    console.log(items));
}
//Task-2 List all the food items with Vegetable category.
ListBycat(foodata,'Vegetable');
//Task-3 List all the food items with Fruit category.
ListBycat(foodata,'Fruit');
//Task-4 List all the food items with protein category.
ListBycat(foodata,'Protein');
//Task-5 List all the food items with Nuts category
ListBycat(foodata,'Nuts');
//Task-6 List all the food items with Grain category.
ListBycat(foodata,'Grain');
//Task-7 List all the food items with dairy  category.
ListBycat(foodata,'Dairy');
//Task-8 list all the food items with calorie below 100
function calorieAbove(arr){
    return arr.filter((items)=>items.calorie>=100).map((items)=>console.log(items));
}
calorieAbove(foodata);

//Task-9 list all the food items with calorie below 100
function calorieBelow(arr){
    return arr.filter((items)=>items.calorie<100).map((items)=>console.log(items));
}
calorieBelow(foodata);

//Task -10 list all the food items with highest protien content to lowest
function sortProtein(arr) {
    const sortedpro= arr.sort((a, b) => b.protiens- a.protiens );
    console.log(sortedpro);
}
sortProtein(foodata);

//Task-11 List all the food items with lowest cab content to highest
function sortcabs(arr){
    const sortedcabs = arr.sort((a,b)=>a.cab - b.cab);
    console.log(sortedcabs);
}
sortcabs(foodata);




