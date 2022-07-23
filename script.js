function eraseChar(){

    let displayInput = document.getElementById("displayText").innerText;
    console.log(displayInput);
    let newDisplayInput = displayInput.slice(0,-1);
    console.log(newDisplayInput);
    if(newDisplayInput.length == 0){
        document.getElementById("displayText").innerText = "0";
    } else{
    document.getElementById("displayText").innerText = newDisplayInput;
}
}

function clearDisplay(){
    document.getElementById("displayText").innerText = "0";
    document.getElementById('displayTextError').innerText = '\xa0';
}

//Gotta take care of the other input combinations
function writeChar(character){
    let displayInput = document.getElementById("displayText").innerText;
    if(displayInput.length >= 10){
        document.getElementById('displayTextError').innerText = 'Input size exceeded';
    }
    else{
        if(document.getElementById("displayText").innerText == "0"){
            document.getElementById("displayText").innerText = character;
        }else{
        document.getElementById("displayText").innerText += character;
    }
    console.log("calculator input: "  + displayText.innerText);
}
}

function processInput(displayText, symbol){
    
    let displayTextArray = displayText.split('\xa0');

    switch(displayTextArray[1]){
        case "+":
            add(displayTextArray[0],displayTextArray[2]);
            writeChar('\xa0'.repeat(1)+symbol+'\xa0'.repeat(1));
            break;
        case "-":
            subtract(displayTextArray[0],displayTextArray[2]);
            writeChar('\xa0'.repeat(1)+symbol+'\xa0'.repeat(1));
            break;
        case "×":
            multiply(displayTextArray[0],displayTextArray[2]);
            writeChar('\xa0'.repeat(1)+symbol+'\xa0'.repeat(1));
            break;
        case "÷":
            if(displayTextArray[2] == 0){
                document.getElementById("displayTextError").innerText = "Cannot divide by 0"
            } else{          
            divide(displayTextArray[0],displayTextArray[2]);
            writeChar('\xa0'.repeat(1)+symbol+'\xa0'.repeat(1));
        }
            break;
        default:
            writeChar('\xa0'.repeat(1)+symbol+'\xa0'.repeat(1));
    }

    console.log("array output: " + displayTextArray);
}

function add(num1, num2){
    let output = Number(num1) + Number(num2);
    document.getElementById('displayText').innerText = output;
}

function subtract(num1, num2){
    let output = Number(num1) - Number(num2);
    document.getElementById('displayText').innerText = output;
}

function multiply(num1,num2){
    let output = Number(num1) * Number(num2);
    document.getElementById('displayText').innerText = output;
}

function divide(num1,num2){
    let output = Number(num1) / Number(num2);
    document.getElementById('displayText').innerText = output.toString().slice(0,9);
}

function operate(displayText){
    let displayTextArray = displayText.split('\xa0');
    console.log(displayTextArray);

    if(displayTextArray[2] == "" || displayTextArray.length <= 2){
        document.getElementById('displayTextError').innerText = "Incomplete expression";
    }
    else{
        document.getElementById('displayTextError').innerText = '\xa0';
        processInput(displayText,displayTextArray[1]);
    }
}