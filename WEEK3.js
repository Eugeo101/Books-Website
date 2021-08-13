const title = document.querySelector("#title");
const authorName = document.querySelector("#authorName");
const URRL = document.querySelector("#URRL");
const addBtn = document.querySelector("#add");
const Booklist = document.querySelector(".grid");

const Books = [];
const onClicked = () => {
    if (title.value && authorName.value && URRL.value)
    {
        Booklist.innerHTML = "";
        Books.push({title: title.value, authorName: authorName.value, URRL: URRL.value});
        Books.forEach( (Book) =>  {
            Booklist.innerHTML += `<div class="book">
            <img src="${Book.URRL}" class="img"/>
            <li> <p>Book Title: ${Book.title}</p> </li>
            <li> <p>Book Author: ${Book.authorName}</p> </li>
        </div>`;
        });
        title.value ="";
        authorName.value ="";
        URRL.value ="";
    }
};
addBtn.onclick = onClicked;

