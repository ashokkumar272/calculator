const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const newele1 = document.createElement('div');
newele1.className = 'exp';
const newele2 = document.createElement('div');
newele2.className = 'answer';



buttons.forEach(button =>{
    button.addEventListener('click', function(){
        const value = button.getAttribute('data-value');
        handleInput(value);
    });
});


function handleInput(value){
    if(value === "="){
        calculateResult();
    }
    else if(value === "ac"){
        newele1.innerText = '';
    }
    else if(value === "<"){
        back();
    }
    else{
        updateDisplay(value)
    }

}

function updateDisplay(value){
    newele1.innerText += value;
    display.appendChild(newele1);
}

function calculateResult() {
    try {
      newele1.innerText += "\n = " + eval(newele1.innerText);
    //   display.appendChild(newele2);
    } catch (error) {
        newele1.innerText = "Error";
    }
  }

  function back(){
    display.innerText = display.innerText.slice(0, -1);
  }

  