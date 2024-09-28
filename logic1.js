const input = document.getElementById("Input");
const AddButton = document.getElementById("Add");
const ListContainer = document.getElementById("list");


getData();

AddButton.addEventListener("click", ()=>{
    if(!input.value.trim()){
        alert("Enter an item");
    }
    else{
        let enteredValue = input.value;
        const listItem = document.createElement("li");
        listItem.innerHTML = `${enteredValue} <i class="fa-regular fa-trash-can fa-style" id="delete"></i>`;
        ListContainer.append(listItem);
        input.value = "";
        input.placeholder = "Enter your item";

    }
});

ListContainer.addEventListener("click", (event)=>{
    // console.log(event.target.tagName);
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }

    else if(event.target.tagName === "I"){
        event.target.parentElement.remove();
    }
    saveData();
});

function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}

function getData(){
    ListContainer.innerHTML = localStorage.getItem("data");
}