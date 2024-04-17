function getNoun5() { if (isNaN(myage) || myage < 0 || myage> 100) alert("You MUST typa a number between 0 and 100")
  else alert("You are a lucky man, MUST to clean up bathrooms in a huge cast") 
}
function getStory() { 
var castle=document.getElementById("noun1").value;
var pool=document.getElementById("noun2").value;
var rich=document.getElementById("adjective").value;
var family=document.getElementById("noun3").value;
var clean=document.getElementById("verb").value;
var theend=document.getElementById("noun4").value;
var myage=document.getElementById("noun5").value;
var story = "Once upon in a time I was in a dream. My dream started in a huge "+castle+".The "+castle+"had a big "+pool+", and a lot of rooms. I felt like a "+rich+" man, and my "+family+" was very happy. The problem started when we had to "+clean+"all rooms. None in my "+family+" didn't want "+clean+" these huge rooms and bathrooms!!!. The "+theend+" of this story is when you type how old you are.Tell me your age and I will tell you something funny .";
document.getElementById("getStory").innerHTML = story;
console.log("story" + story);
// Line 11 & 12 are saving the completed story element as a string data in the database 
// From line 15 to 25 we are going to save the story in the database.
var storyData = {
  timestamp: Date.now(),
  story: story,
  castle: castle,
  pool: pool,
  adjective: adjective,
  family: family,
  verb: verb,
  theend: theend,
  myage: myage,
}
//From 28 we save data in JSON format ( easy to share and print to console)
var storyJSON = JSON.stringify(storyData);
console.log("storyJSON: " + storyJSON);
return storyJSON;
}