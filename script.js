//set up firebase app and firestore database
const firebaseConfig = {
  apiKey: "AIzaSyDznKF5z6yqfExm24se0msIYYmuXGZIjgg",
  authDomain: "madlibsjuan.firebaseapp.com",
  projectId: "madlibsjuan",
  storageBucket: "madlibsjuan.appspot.com",
  messagingSenderId: "802590992860",
  appId: "1:802590992860:web:9d5e5f423e15fbce95c719",
  measurementId: "G-SN5L7T2G0T"
};
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
console.log("firebase setup complete!");


function getNoun5() {
  var myage = document.getElementById("noun5").value;
  if (isNaN(myage) || myage < 0 || myage > 100) alert("You MUST typa a number between 0 and 100");
}
function getStory() {
  var castle = document.getElementById("noun1").value;
  var pool = document.getElementById("noun2").value;
  var rich = document.getElementById("adjective").value;
  var family = document.getElementById("noun3").value;
  var clean = document.getElementById("verb").value;
  var theend = document.getElementById("noun4").value;
  var myage = document.getElementById("noun5").value;
  var storyname = document.getElementById("noun6").value;
  var story = "Once upon in a time I was in a dream. My dream started in a huge " + castle + ".The " + castle + "had a big " + pool + ", and a lot of rooms. I felt like a " + rich + " man, and my " + family + " was very happy. The problem started when we had to " + clean + "all rooms. None in my " + family + " didn't want " + clean + " these huge rooms and bathrooms!!!. The " + theend + " of this story is when you type how old you are.Tell me your age. The name of the story is " + storyname + ".";
  document.getElementById("output").innerHTML = story;
  console.log("output" + story);
  // Line 11 & 12 are saving the completed story element as a string data in the database 
  // From line ... we are going to save the story in the database.
  var storyData = {
    timestamp: Date.now(),
    noun1: castle,
    noun2: pool,
    adjective: rich,
    noun3: family,
    verb: clean,
    noun4: theend,
    noun5: myage,
    storyName: storyname,
    story: story,
  }
  return storyData;
}

//function createMadLibstory() {
  // create a story button
  //var storyData = getStory();
  //console.log("storydata: " + storyData)
//}

function saveMadLib() {
  //first, get the storyData object from crateMadLib()
  var storyData = getStory();
  var storyname = document.getElementById("noun6").value;
  //this method saves the madilib to the database
  console.log("saveMadLib()" + storyData);
  //them, save the storyName and storyData object to the database
  db.collection("madlibsjuan").doc(storyData.storyName).set(storyData);
  alert(storyData.storyName + " saved to database!");
}

function retrieveMadLib() {
  //first, ask the used the type the storyname they want to retrieve
  var storyName = prompt("Enter story name to retrieve:"); db.collection("madlibsjuan")
    .doc(storyName)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        var storyData = doc.data();
        console.log("storyName: " + storyData.storyName);
        document.getElementById("noun1").value = storyData.noun1;
        document.getElementById("noun2").value = storyData.noun2;
        document.getElementById("adjective").value = storyData.adjective;
        document.getElementById("noun3").value = storyData.noun3;
        document.getElementById("verb").value = storyData.verb;
        document.getElementById("noun4").value = storyData.noun4;
        document.getElementById("noun5").value = storyData.noun5;
        document.getElementById("noun6").value = storyData.storyName;
      } else {
        //doc.data()will be undefined in this case
        console.log("No such document!");
        document.getElementById("noun6").value = "Story not found";
      }
      //this method retrieves an existing madilib from the database
      console.log("retrieveMadlib()" + storyName);
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      document.getElementById("noun6").innerHTML = "Story not found";
    });
}
function editMadLib() {
  //this methos allow the user to edit an existing madilib in the database
  console.log("editMadlib()" + storyData);
  //first , ask the user to retrieve an existing madlib from database
  var storyData = prompt("Enter story name to edit:"); db.collection("madlibsjuan")
    .doc(storyData)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        var storyData = doc.data();
        //if story is found, display all the previous inputs for the story , else, display " Story not found"
        document.getElementById("noun1").innerHTML = storyData.castle;
        document.getElementById("noun2").innerHTML = storyData.pool;
        document.getElementById("adjective").innerHTML = storyData.rich;
        document.getElementById("noun3").innerHTML = storyData.family;
        document.getElementById("verb").innerHTML= storyData.clean;
        document.getElementById("noun4").innerHTML = storyData.theend;
        document.getElementById("noun5").innerHTML = storyData.myage;
        document.getElementById("noun6").innerHTML = storyData.storyname;
      } else {
        //doc.data() will be undefined in this case
        console.log("No such document!");
        document.getElementById("noun6").value = "Story not found";
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      document.getElementById("noun6").value = "Story not found";
    })
}

function deleteMadLib() {
  // this method deletes an existing madilib from the database and delete it.
  console.log("deleteMadlib() called");
  //first  ask the user to type the story name they want to delete.\
  var storyName= prompt("Enter story name to delete:");
  db.collection("madlibsjuan")
    .doc(storyName)
    .get()
    .then((doc) => {
      // if the story exists in the database, delete it. Else, display "Story not found"
      if (doc.exists) {
        console.log("Document data:", doc.data());
        var storyData = doc.data();
        document.getElementById("noun6").innerHTML =
          storyData.storyName + " deleted from database!";
        db.collection("madlibsjuan").doc(storyName).delete();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        document.getElementById("noun6").innerHTML = "Story not found";
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      document.getElementById("noun6").innerHTML = "Story not found";
    });
}
