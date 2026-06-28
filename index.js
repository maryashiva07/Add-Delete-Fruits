// Add the Edit Button:

let li = document.querySelectorAll(".fruit");
let edit = document.createElement("button");


li.forEach((fr) => {
    let edit = document.createElement("button");
    edit.className = "edit-btn";
    edit.innerText = "Edit";

    fr.appendChild(edit);
})

// Implement the code as in video but with one extra 'Edit' button in 'li'

let form = document.querySelector("form");
let add = document.querySelector("#fruit-to-add");
let list = document.querySelector(".fruits");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let frName = add.value;

    let li = document.createElement("li");
    li.className = "fruit";
    li.innerText = frName;

    let delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.innerText = "x";

    let edit = document.createElement("button");
    edit.className = "edit-btn";
    edit.innerText = "Edit";

    li.appendChild(delBtn);
    li.appendChild(edit);

    list.appendChild(li);

    add.value = "";
})

//delete

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
     }
})


