const className = document.getElementById('className');
const classTitle = document.getElementById('classTitle');
const form = document.querySelector('form');
const errormessage = document.getElementById('error');
const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');

form.addEventListener('submit', (e) => {
    let message = [];
    if (className.value == "" || classTitle.value == "") {
        message.push('Name or Title cannot be empty')
}
    if (select1.value == "" || select2.value == "") {
       message.push("Please choose an option")
}
    
    if(message.length > 0) {
        e.preventDefault()
        errormessage.innerText = message.join(', ')
    }
}
)

