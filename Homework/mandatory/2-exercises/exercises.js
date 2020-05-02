/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
 function exerciseOne(arrayOfPeople) {
  for (let index = 0; index < arrayOfPeople.length; index++) {
    let content = document.querySelector("#content");
    let h1 = document.createElement("h1")
    let h2 = document.createElement("h2")
      h1.innerText = arrayOfPeople[index].name
      h2.innerText = arrayOfPeople[index].job
      content.appendChild(h1)
      content.appendChild(h2)
    
  } 

}
 
/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

let ul = document.createElement("ul")
ul.className = "items"
ul.style.listStyleType = "none"
function exerciseTwo(shopping) {
  //Write your code in here
  let content = document.querySelector("#content");
   for (let index = 0; index < shopping.length; index++) {
    let li = document.createElement("li")
    li.className = "list-items"
    li.innerHTML = shopping[index]
    content.appendChild(ul).appendChild(li)
   
  }

} 

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/

let secondUl = document.createElement("ul")
secondUl.style.listStyleType = "none"

function exerciseThree(books) {
  let content = document.querySelector("#content");
  var images = ["https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SY291_BO1,204,203,200_QL40_ML2_.jpg","https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg","https://m.media-amazon.com/images/I/41uPjEenkFL._SX260_.jpg"]
  for (let index = 0; index < books.length; index++) {
    let p = document.createElement("p")
  
    let img = document.createElement("img")
    var li = document.createElement("li")
    li.className = "list"
    p.innerText = books[index].title + "-" + books[index].author
    img.src = images[index]
    img.style.width = 200
    img.style.height = 200
    li.style.width = 400
    li.style.height = 300
    li.style.float = "left"
    li.style.margin = 10
    img.style.marginTop = 20
    
    content.appendChild(secondUl).appendChild(li).appendChild(p).appendChild(img)
    if(books[index].alreadyRead){
      li.style.backgroundColor = "green"
    }else{
      li.style.backgroundColor = "red"
    }
    
  }

} 

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

 exerciseOne(people);
 
let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);
 
let books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);

