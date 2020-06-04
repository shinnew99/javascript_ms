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
        removeButton.innerHTML = "DONE";
        removeButton.className = "remove";
        removeButton.addEventListener("click", removeTask);
        newItem.appendChild(removeButton);
        taskList.appendChild(newItem);       
    } else {
        alert("Task cannot be empty");
    }
});

//clear the entire list
clearButton.addEventListener("click", function(){
    taskList.innerHTML=" "; 
});

//remove a task from the list
function removeTask(e){
    //get the parent list item to remove
    var taskItem = e.target.parentElement;
    tasklist.removeChild(taskItem);
}