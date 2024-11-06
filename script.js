let btn=document.querySelector('#btn');
let input=document.querySelector('#task');
let ul=document.querySelector('#ul');

btn.addEventListener("click",function (){
    let item=document.createElement("li");
    let taskText = document.createElement("span");
    taskText.innerText = input.value;
    taskText.classList.add("task");
    item.appendChild(taskText);

    let del = document.createElement("button");
    del.innerText = "delete";
    del.classList.add("delete");

    item.appendChild(del);
    ul.appendChild(item);
    input.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }
})
// let btn1=document.querySelectorAll('.delete');
// for(del2 of btn1){
//     del2.addEventListener("click",function (){
//         let par =this.parentElement;
//         par.remove();
//     });
// }