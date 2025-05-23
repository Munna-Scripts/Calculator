let Display = document.querySelector('.result')

function DisplayResult(Input){

    Display.innerHTML += Input
}

function ClearDisplay(){
    Display.innerHTML = ''
}

function Calculate(){
    try{
        Display.innerHTML = eval(Display.innerHTML)
    }
    catch(error){
        Display.innerHTML = 'Error'
    }
}