var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");
var button=document.createElement("button");
button.setAttribute=("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML=("Book Search");
button.addEventListener("click",foo);
let isbn=document.createElement("div");
isbn.setAttribute("id","isbn");
let numberOfPages=document.createElement("div");
numberOfPages.setAttribute("id","numberOfPages");
let authors=document.createElement("div");
authors.setAttribute("id","authors");
let publisher=document.createElement("div");
publisher.setAttribute("id","publisher");
let released=document.createElement("div");
released.setAttribute("id","released");
let charactersname=document.createElement("div");
charactersname.setAttribute("id","charactersname");
div.append(input,button,isbn,numberOfPages,authors,publisher,released,charactersname);
document.body.append(div);
        
async function foo(){
    try{
    let bookname=document.getElementById("name").value;
    console.log(bookname);
    let url=`https://www.anapioficeandfire.com/api/books?name=${bookname}`;
    let res=await fetch(url);
    let res1=await res.json();
    console.log(res1);
    let index=res1.length-res1.length;
    isbn.innerHTML=`International Standard Book Number(Isbn) : ${res1[index].isbn}`;
    authors.innerHTML=`Authors of the Book : ${res1[index].authors}`;
    numberOfPages.innerHTML=`No. of Pages in the book : ${res1[index].numberOfPages}`;
    publisher.innerHTML=`Publisher of the book : ${res1[index].publisher}`;
    released.innerHTML=`Release Date of the book : ${res1[index].released}`;
    charactersname.innerHTML=`charactersname1: ${res1[index].characters[0]}<br>
    charactersname2: ${res1[index].characters[1]}<br>
    charactersname3: ${res1[index].characters[2]}<br>
    charactersname4: ${res1[index].characters[3]}<br>
    charactersname5: ${res1[index].characters[4]}`;
    }
    catch(error){
        console.log(error);
    }
}