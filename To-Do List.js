/* Selecting the input box and list container elements */
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/* Function to add a new task */
function addTask(){
    /* If the input box is empty, show an alert */
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        /* Otherwise, create a new list item and add it to the list container */
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        /* Create a span element for the delete button and add it to the list item */
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
        li.appendChild(span);
    }
    /* Clear the input box */
    inputBox.value = "";
    /* Save the updated list to local storage */
    saveData();
}

/* Add event listener to the list container to handle checking/unchecking and deleting tasks */
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        /* Toggle the 'checked' class for the list item */
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        /* Remove the list item if the delete button (span) is clicked */
        e.target.parentElement.remove();
        saveData();
    }
}, false);

/* Function to save the current list to local storage */
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

/* Function to load and display the saved list from local storage */
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

/* Display the saved list when the page loads */
showTask();