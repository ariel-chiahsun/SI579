const addTask = function(description, dueTime=false) {
    const taskList = document.querySelector('#task_list');
    const item = document.createElement('li');
    item.onclick = function(){item.remove();};
    const date = new Date(dueTime);
    if (dueTime){
        item.innerHTML += `${description}<span class="due">due ${date.toLocaleString()}</span><button class="btn btn-sm btn-outline-danger done" type="button">Done</button>`;
        taskList.appendChild(item);
    }else{
        item.innerHTML += `${description}<button class="btn btn-sm btn-outline-danger done" type="button">Done</button>`;
        taskList.appendChild(item);
    } 
   
    

    console.log('function addTask called');
}

addTask('Go grocery shopping', 1644613200000);
addTask('Buy Ariel roses and chocolates', 1644879600000);
addTask('Problem set 04', 1645045200000);

//Time Convertor
function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}
//Bottom
const addTaskBottom = document.querySelector('#add_task');

addTaskBottom.addEventListener('click', e =>{
    const task_description_input = document.querySelector('#task_description_input').value;
    const duedate_input = document.querySelector('#duedate_input');
    const duetime_input = document.querySelector('#duetime_input');

    if (task_description_input=='' && duedate_input=='' && duetime_input==''){
        console.log('invalid inputs');
        return false;
    }else if(duedate_input=='' || duetime_input==''){
        console.log('due date not specified');
        addTask(task_description_input);

    }else{
        console.log('valid inputs')
        const dateTimeInput = dateAndTimeToTimestamp(duedate_input, duetime_input);
        console.log(dateTimeInput);
        addTask(task_description_input, dateTimeInput);
    }
    
    document.querySelector('#task_description_input').value='';
    duedate_input.value='';
    duetime_input.value='';
    console.log('add task bottom clicked')

});

const enterKey = document.querySelector('#task_description_input');
enterKey.addEventListener('keydown', e=>{
    if (e.keyCode===13){
        document.querySelector('#add_task').click();
    }
});


