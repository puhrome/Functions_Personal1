/**
 * Functions Personal Created by Phirom Yim on 5/31/14.
 */

//Creating a Function to gather user input to see how much television is being watched a week
//  V A L I D A T I O N

var tvTime = prompt("How many hours on average do you watch TV a day? \nType in a number.");

//validate that the user typed a number and didn't leave it blank

//isNan() = true if it is a text string and false if it not a number

while(isNaN(tvTime || tvTime === " ")){//as long as this is not a number or a text string

    //re-prompt the user for a number
    tvTime = prompt("Type in a NUMBER.");
}

var days = prompt("How many days a week do you watch TV?");
//validate that the user typed a number and didn't leave it blank

while(isNaN(days || days === " ")){//print if true
    //re-prompt the user for a number
    days = prompt("Type in a NUMBER");
}


// F U N C T I O N

function weeklyTel (tvTime,days ){//parameters go here
    //average tv is user input of tvTime times user input of days divided by 7 days a week
    var averageTV = Math.round(tvTime * days / 7);//put Number in from will turn text string into number
    console.log(averageTV);//print to console


    //Insert ternary
    //check if between 20 and 100
    (averageTV>= 20 && averageTV <=100) ? console.log(alert("Television is taking up" + averageTV + " hours of your life!")): console.log (alert("Good job with time management!"));
    //return the average TV variable
    return averageTV;
}


//function call
//arguments go INSIDE of the () of a function call

//catch the returned value of our function
var results = weeklyTel(tvTime, days);//get sent inside of function
console.log(results);//print to console
alert("You watch an average of " + results + " hour(s) of TV a week.");// alert results with concatenation

