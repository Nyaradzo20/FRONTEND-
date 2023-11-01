const notesContainer =  document.querySelector(".notes-container");
const createBtn =  document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}


showNotes();
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("P");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "https://img.icons8.com/?size=50&id=7703&format=png";
    notesContainer.appendChild(inputBox).appendChild(img);

});
 notesContainer.addEventListener("click", function(e)
 
    {

if(e.target.tagName === "IMG")
{
    e.target.parentElement.remove();
    updateStorage();

}
else if(e.target.tagname === "P")
{
   notes = document.querySelectorAll(".input-box");
   notes.forEach(nt => {
    nt.onkeyup = function(){
updateStorage();
    }
   {
    updateStorage();


   }
})
}
})