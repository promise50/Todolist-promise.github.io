const todolist = document.getElementById("todolist")
const newtodoinput = document.getElementById("newtodoinput")
const addTodobot = document.getElementById("addTodobot")

addTodobot.addEventListener("click",()=>{

const newtodoText = newtodoinput.value;

if(newtodoText!==""){
    const newtodoitem = document.createElement("li");
    newtodoitem.innerText = newtodoText;
    const deleteTodobot = document.createElement("button")
    deleteTodobot.innerText = "X";

    deleteTodobot.classList.add("delete-todo-bot");
    deleteTodobot.addEventListener("click",function(){
        newtodoitem.remove();
    });

    newtodoitem.appendChild(deleteTodobot);
    todolist.appendChild(newtodoitem);
    newtodoinput.value = "";
}


})