
var main =document.getElementById("main");
var inp =document.getElementById("inp");
function add(){
    console.log(inp.value);
    if(inp.value ==""){
        alert("please enter todo")
    }else{
        var li =document.createElement("li");
    var litext =document.createTextNode(inp.value);
    li.appendChild(litext);
    // li.setAttribute("class", "abc");
    // creating edit button
    var editBtn = document.createElement("button");
    var editBtntext = document.createTextNode("EDIT Todo");
    editBtn.setAttribute("onclick", "editTodo(this)");
    li.appendChild(editBtn);

    main.appendChild(li);

    inp.value = "";
}
    
   
}
function editTodo(element){
    var newValue = prompt("Enter updated Value");
    console.log(element.parentNode.firstchlid);
    element.parentNode.firstchlid;
}