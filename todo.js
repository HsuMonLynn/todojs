

var inputItem = document.getElementById("inputItem");
var add = document.getElementById("add");
var list = document.getElementById("list");
var tasks = [];

// adds input Item to list
add.addEventListener('click', function() {
    tasks.push({'name': inputItem.value, completed: false})
    localStorage.setItem('tasks', JSON.stringify(tasks));
    showTask();
})

function showTask() {
    var output = JSON.parse(localStorage.getItem('tasks'));
    let html = '';
    output.forEach(function(item, index){
        
        console.log(html)
        if (item.completed == false){            
            itemName = '<div class="row mb-2"><input id="done" type="checkbox" class="col-md-2" onclick="done('+index+')"><label class="col-md-8">'+item.name+'</label><button class="btn btn-danger col-md-2" onclick="remove('+index+')">Delete</button></div>'    
        }
        else{
            itemName = '<div class="row mb-2"><input id="done" type="checkbox" class="col-md-2" onclick="done('+index+')" checked><label class="col-md-8" style="text-decoration: line-through">'+item.name+'</label><button class="btn btn-danger col-md-2" onclick="remove('+index+')">Delete</button></div>'
        }
        html += itemName;
    })
    list.innerHTML = html;
}
showTask();
function remove(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTask();
  }
function done(index) {
    let getTask = localStorage.getItem("tasks");
    tasks = JSON.parse(getTask);
    var done = document.getElementById("done");
    if(done.checked == true){
      tasks[index].completed = true;
    }else{
      tasks[index].completed = false;
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTask();
}
// function remove() {
//     var task = this.event.currentTarget.parentNode;
//     list.removeChild(task);
//     localStorage["list"] = list.innerHTML // updating localstorage
//     }

