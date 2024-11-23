let toDoList = [
    {
        name : 'Anup',
        duedate: '2022-05-30'
        
    },
    {
        name: 'Adesh',
        duedate: '2022-07-13'
    }
];
console.log(toDoList);
renderFunction();
function renderFunction(){
    let toAdd = '';
    for(let i= 0;i<toDoList.length;i++){
        const {name, duedate} = toDoList[i];
        toAdd+= `<div>${name}</div>
                 <div>${duedate}</div>
                <button onclick = "
                    toDoList.splice(${i},1);
                    renderFunction();
                " class="delete-button">
                    Detete
                </button> 
                `;
    }
    document.querySelector('.addElement').innerHTML = toAdd;
}
function addOneElement () {
    const name = document.querySelector('.js-name-input').value;
    const duedate = document.querySelector('.input-date').value;
    if((name!=='') && (duedate !== '')) toDoList.push({name, duedate});
    document.querySelector('.js-name-input').value='';
    document.querySelector('.input-date').value='';
    renderFunction();
}
