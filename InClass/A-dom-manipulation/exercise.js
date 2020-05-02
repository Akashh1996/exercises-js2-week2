/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6   node means the elements inside tags like all p tags are all p nodes 

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/



var div = document.querySelector("div")
console.log(div);


var element = document.querySelector("#jumbotron-text")
console.log(element);

var allel = document.querySelectorAll(".primary-content p")
console.log(allel);


//or no 4 can be done with two steps

var first = document.querySelector(".primary-content")
var second = first.querySelectorAll("p")
console.log(second);



/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var alertBtn = document.querySelector("#alertBtn")
alertBtn.addEventListener("click", alertMessage)

function alertMessage(){
    alert("thanks for visiting garibau ka page")
}


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

var alertBtn = document.querySelector("#bgrChangeBtn")
alertBtn.addEventListener("click", chageColor)
var myBody = document.querySelector("body")

function chageColor(){
    myBody.style.backgroundColor = "orange";

}


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var box = document.querySelector(".jumbotron")

var addTextBtn = document.querySelector("#addTextBtn")
addTextBtn.addEventListener("click", addtext)
var num = 1
//if you write append and create outside it only adds the new text once but if inside function it add as much time as clicked
function addtext(){
    var newPgp = document.createElement("p")
    box.appendChild(newPgp)
    newPgp.innerText = "this is paragraph " + num
    num++

}


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/


var large = document.querySelector("#largerLinksBtn")
large.addEventListener("click",zoom)
 

var fontSize = 1

function zoom(){
    var alla = document.querySelectorAll("a");
    console.log(alla);
    
    for (var i = 0; i < alla.length; i++) {
    alla[i].style.fontSize = fontSize + "em";
}
fontSize ++
}


