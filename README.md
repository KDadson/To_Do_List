<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="To-Do List.css">
</head>
<body>
    <div class="container"><!--Creating the BORDER-->
        <div class="todo-app"><!--Inserting ICONS-->
            <h2>To-Do List<img src="To-Do List_images\icon.png"></h2><!--Image icons-->
            <div class ="row"><!--Creation of text box-->
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

    <script> src="To-Do List.js"</script>

</body>
</html>
