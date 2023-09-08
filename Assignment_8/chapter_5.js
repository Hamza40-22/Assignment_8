//question # 1
// var num1= parseFloat(prompt("Enetr first number"));
// var num2= parseFloat(prompt("Enetr second number"));
// var sum = num1 + num2;

// document.write("addition of first: " +num1+" and second number "+num2+ "\t is "+sum);


// ***************************************************     ***************************************************

//question # 2
// Subtraction:-
// var num1= parseFloat(prompt("Enetr first number"));
// var num2= parseFloat(prompt("Enetr second number"));
// var result = num1 - num2;

// document.write("subtraction of first: " +num1+" and second number "+num2+ "\t is "+result);


// Multiplication:-
// var num1= parseFloat(prompt("Enetr first number"));
// var num2= parseFloat(prompt("Enetr second number"));
// var result = num1 * num2;

// document.write("subtraction of first: " +num1+" and second number "+num2+ "\t is "+result);


// Division:-
// var num1= parseFloat(prompt("Enetr first number"));
// var num2= parseFloat(prompt("Enetr second number"));
// var result = num1 / num2;

// document.write("subtraction of first: " +num1+" and second number "+num2+ "\t is "+result);

// Modulus:-
// var num1= parseFloat(prompt("Enetr first number"));
// var num2= parseFloat(prompt("Enetr second number"));
// var result = num1 * num2;

// document.write("subtraction of first: " +num1+" and second number "+num2+ "\t is "+result);


// ***************************************************     ***************************************************


var hello;
document.write("Value after variable declaration is: ", hello)
document.write(`<br>`)
hello=5
document.write("Initial Value: ", hello)
document.write(`<br>`)
hello++
document.write("Value after increment is: ",hello)
document.write(`<br>`)
hello+=7
document.write("Value after addition is: ",hello)
document.write(`<br>`)
hello--
document.write("Value after decrement is: ",hello)
document.write(`<br>`)
hello%=3
document.write("The remainder is: ",hello) 

// ***************************************************     ********************************************

//question #4

// var movie_Ticket = 600 
// var buyers= parseFloat(prompt("1 Ticket = 600 \n How many tickets u want?"));

// var bought = movie_Ticket * buyers

// document.write("Total cost of buying " +buyers+" to a movie is: "+bought+ "PKR");

// ***************************************************     *****************************************

// //question #5
// for (i=1;i<=10;i++){
//     document.write("4 x "+i+ "=" + 4*i  )
// }

// //question #6

// var temp=parseFloat(prompt("Press 1 for Celsius temperature into Fahrenheit  or \n Press 2 for Fahrenheit temperature into Celsius")); 
// if (temp == 1) {
//    var Celsius= parseFloat(prompt("Enter a Celsius temperature to convert into Fahrenheit:")); 
//     var result = (Celsius-32)*5/9;
//    document.write("In Fahrenheit:"+result);
// }
// else if (temp === 2) {
//     var Fahrenheit= parseFloat(prompt("Enter a Fahrenheit temperature to convert into Celsius:"));
//     var result = (Fahrenheit*9/5)+32;
//    document.write("In Celsius:"+result);
// }



// ***************************************************     *****************************************

//question #7

// var Price_of_item_1 = 100;
// var Price_of_item_2 =  200;
// var  Ordered_quantity_item_1=5;
// var  Ordered_quantity_item_2=10;
// var Shipping_charges = 3; 
// var Total_cost = (Price_of_item_1 * Ordered_quantity_item_1)+ (Price_of_item_2*Ordered_quantity_item_2)+Shipping_charges;
// document.write("Price of item 1 = 100 \n  Ordered quantity of item 1= 5 \n  Price of item 2 =  200\n . Ordered Quantity of item 2=10 \n Shipping_charges = 3");
// document.write("\n \t the total cost"+ Total_cost);


// ***************************************************     *****************************************

//question #8


// var Total_Marks=+prompt("Enter  your Total Marks")
// var Obtained_Marks=+prompt("Enter your Obtained marks")
// var percantage= (Obtained_Marks/Total_Marks)*100
// document.write("Mark-Sheet\n")
// document.write("Total Marks "+Total_Marks)

// document.write("Obtained Marks "+Obtained_Marks)

// document.write("Your Percentage is "+percantage)

// ***************************************************     *****************************************

//question #9


// var USD=+"10"
// var Saudi_Riyals=+"25"
// var Total= (USD*104.80)+(Saudi_Riyals*28);
// document.write("Currency In PKR");
// document.write("<br>");
// document.write("Total Currency in PKR: ",Total);

// ***************************************************     *****************************************

//question #10

// var num=5;
// var ans=((num+5)*10)/2
// document.write(ans);


// ***************************************************     *****************************************

//question #11


// var year="2023";
// var birth_year="2002";
// var my_age=year-birth_year;
// document.write("My age is ",my_age-=1," or ",my_age+=1);


// ***************************************************     *****************************************

//question #12

// var Radius=+prompt("Enter Radius");
// var pie=3.14;
// document.write("The Geometrizer");
// document.write(`<br>`);
// var circle=2*pie*Radius;
// var area= pie*(Radius**2);
// document.write("Radius of circle ",Radius);
// document.write(`<br>`);
// document.write("The Circumference is: ",circle);
// document.write(`<br>`);
// document.write("The area is: ",area);


//  ***************************************************     *****************************************

//question #13



// var favorite_snack=prompt("Enter Favourtie Snack")
// var current_Age=+prompt("Enter Current Age")
// var  Max_Age=+prompt("Enter Estimated Max Age")
// var estimated_snack=+prompt("Enter Amount Of snack Per day")
// var Calculate=((Max_Age-current_Age)*365)*estimated_snack
// document.write("The Life Time Supply Calculator")
// document.write(`<br>`)
// document.write("Favourite Snack: "+favorite_snack)
// document.write(`<br>`)
// document.write("Current Age: "+current_Age)
// document.write(`<br>`)
// document.write("Estimated Maximum Age: "+Max_Age)
// document.write(`<br>`)
// document.write("Amount of Snacks Per day: "+estimated_snack)
// document.write(`<br>`)
// document.write(`You will need ${Calculate} ${favorite_snack} to last you until the ripe old age of ${Max_Age}`)