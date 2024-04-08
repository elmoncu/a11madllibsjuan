var castle = prompt("Please enter the name of an old building");
var pool = prompt("Please enter a place where you can take a bath outside");
var adjective = prompt("Enter an adjective");
var family = prompt(" Enter the name of a group that life together in the same house");
var verb = prompt("Enter a verb");
var theend = prompt("Enter a very common way to say the story is done");
var myage = prompt("Enter your age"); 
function myage2() 
  {if(isNaN(myage)||myage<0||myage>100) alert ("You are a lucky man, you do not have to clean up bathrooms in a huge castle");}
myage2();

document.write(" Once upon in a time I was in an  dream. My dream started in a huge " + castle + ". The castle had a big " + pool + ". It has a lot of rooms. I felt like a " + adjective + " man, and my " + family + " was very happy. The problem started when we had to " + verb + " all rooms. I didn't want to clean these huge rooms and bathrooms!!!. The " + theend + " of this story: when you say how old you are.Tell me your age and I will tell you something you don't know?"+myage+".");