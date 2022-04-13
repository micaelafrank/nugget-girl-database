/*const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);


const piQuestion = document.getElementById('buttonColor');
if (piQuestion.click === true){
    console.log('Button Clicked');
}

function changeLanguage(){
    const piQuestion = document.getElementById('buttonColor');
    piQuestion.addEventListener('click', piAlert);
}

    function piAlert(){
        piQuestion.innerHTML = '35 digits!';
        alert('35 digits!');
}
*/

function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', showMessage);
}

function showMessage(){
    alert('Thanks for coming!');
}

input.addEventListener('click', showMessage);

