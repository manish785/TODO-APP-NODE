let  tasks = [{done:false,text:'gym',id:1}];
const tasksList= document.getElementById("list");  //this is list
const addTaskInputBox= document.getElementById("add-task"); //this is inputbox,user will put data here



function addTodo (task){
   tasks.push(task);
   renderList();
}


function deleteTodo (taskId){
   const newTasks = tasks.filter(function(task){
       return task.id !== taskId;
   })
   tasks=newTasks;
   renderList();
}


function renderList(){
    tasksList.innerHTML=' ';
    for(let i=0;i<tasks.length;i++){
        const li=document.createElement('li');
        const task=tasks[i];

        li.innerHTML =`
         <input type="checkbox" id="${task.id}"/>
        <label for="${tasks[i].id}"> ${task.text}</label>
        <button data-tasksId="${task.id}" data-test="test" class="delete">Delete</button>
        `;
        tasksList.appendChild(li);
    }
}

function checkTodo (taskId){
    const taskIndex = tasks.findIndex(function(task){
        return task.id=taskId;
    })
    tasks[taskIndex].done=!tasks[taskIndex].done;
}


function handleclick(event){
   console.log(event.target.className);
   if(event.target.className==='delete'){
       const taskid=Number(event.target.dataset.dataset);
       console.log(taskid);
       deleteTodo(taskid);
   }
}




function intialize(){
    document.addEventListener('click',handleclick);
    document.addEventListener('keyup',function(e){
        const text=e.target.value;
        if(e.key==='Enter'){
        const task={
            text:text,
            id:Date.now(),
            done:false
        }
        addTodo(task);
    }
    })
    renderList();
}
intialize();