//button click event
var addButton = document.getElementById("add");
var taskInput = document.getElementById("task");
var tasklist = document.getElementById("taskList");
var clearButton = document.getElementById("clear");
//var doneButton = document.getElementById("done");

//add new item to task list
addButton.addEventListener("click", function(){
    var task = taskInput.value;
    //Don't add an empty string
    if(task.trim()){
        //add new task list item
        var newItem = document.createElement("LI");
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        //clear text input box
        taskInput.value = "";
        //add remove option for new item
        var removeButton = document.createElement("BUTTON");
        taskList.appendChild(newItem);
        //when the done button is clicked, remove the list
        taskText.createElement("clear");
        

    } else {
        alert("Task cannot be empty");
    }
});

//clear the entire list
clearButton.addEventListener("click", function(){
    taskList.innerHTML=" "; 
});

//remove a task from the list
doneButton.addEventListener("click", function(){
    taskList.innerHTML=" ";
});