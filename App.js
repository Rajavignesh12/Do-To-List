let enteredlist = document.querySelector('.entered-list');
let addlist = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

enteredlist.addEventListener('keyup',() =>{
    if(enteredlist.value.trim() != 0){
        addlist.classList.add('active')
    }
    else{
        addlist.classList.remove('active')
    }    
})

//add new items

addlist.addEventListener('click', () =>{
    if(enteredlist.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${enteredlist.value} </p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-sharp fa-solid fa-xmark"></i>
        </div>
        `
        tasks.appendChild(newItem);
        enteredlist.value = '';
        enteredlist.focus()
    }else{
        alert('Please Enter a Text')
    }
})

// delete items 

tasks.addEventListener('click', (d) => {
    if(d.target.classList.contains('fa-xmark')){
       d.target.parentElement.parentElement.remove();
    }
})

// mark completed items

tasks.addEventListener('click', (d) => {
    if(d.target.classList.contains('fa-pen-to-square')){
       d.target.parentElement.parentElement.classList.toggle('completed')
    }
})


