<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        /*Creating the PURPLE BORDER*/
        *{
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            box-sizing: border-box;
        }
        .container{
            width: 100%;
            min-height: 100vh;
            background: linear-gradient(135deg, #153677, #4e085f);
            padding: 10px;
        }
        /*WHITE BORDER*/
        .todo-app{
            width: 100%;
            max-width: 540px;
            background: #fff;
            margin: 100px auto 20px;
            padding: 40px 30px 70px;
            border-radius:  10px;
        }
        .todo-app h2{/*Writing*/
            color:#002765;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }
        .todo-app h2 img{ /*Icon - Image*/
            width: 30px;
            margin-left: 10px;
        }
        .row{ /*Gray bar- Border*/
            display: flex;
            align-items:center;
            justify-content: space-between;
            background: #edeef0;
            border-radius: 30px;
            padding-left: 20px;
            margin-bottom: 25px;
        }
        .row input{
            flex: 1;
            border: none;
            outline: none;
            background: transparent;
            padding: 10px;
            font-weight: 14px;
        }
        .row button { /*Orange Button*/
            border: none;
            outline: none;
            padding: 16px 50px;
            background: #ff5945;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            border-radius: 40px;
        }
        ul li{/*Tasks list*/
            list-style: none;
            font-size: 17px;
            padding: 12px 8px 12px 50px;
            user-select: none;
            cursor: pointer;
            position: relative;
        }
        ul li::before{
            content: '';
            position: absolute;
            height: 28px;
            width: 28px;
            border-radius: 50%;
            background-image: url("To-Do\ List_images/unchecked.png");
            background-size: cover;
            background-position: center;
            top:12px;
            left: 8px;
        }
        ul li.checked{
            color: #555;
            text-decoration: line-through; 
        }
        ul li.checked::before{
            background-image: url("To-Do\ List_images/checked.png")
        }
        ul li span{
            position: absolute;
            right: 0;
            top: 5px;
            width: 40px;
            height: 40px;
            font-size: 22px;
            color: #555;
            line-height: 40px;
            text-align: center;
            border-radius: 50%;
        }
        ul li span:hover{
            background: #edeef0;
        }
    </style>
</head>
<body>
    <div class="container"><!--Creating the BORDER-->
        <div class="todo-app"><!--Inserting ICONS-->
            <h2>To-Do List<img src="To-Do List_images/icon.png"></h2><!--Image icons-->
            <div class="row"><!--Creation of text box-->
                <input type="text" id="input-box" placeholder="Add your text">
                <button onclick="addTask()">Add</button>
            </div>
            <ul id="list-container">
                <!-- <li class="checked">Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li> -->
            </ul>
        </div>
    </div>

    <script>
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
    </script>
</body>
</html>
