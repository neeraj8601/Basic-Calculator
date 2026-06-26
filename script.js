const btnE1 = document.querySelectorAll("button");
const inputE1= document.getElementById("input");

for(let i = 0; i<btnE1.length; i++){
    btnE1[i].addEventListener('click',()=>{
        const btnValue=btnE1[i].textContent;
        if(btnValue === "AC"){
            clearResult();
        } else if(btnValue === "="){
            calculateResult();
        } else if(btnValue === "C"){
            clearOneByOne();
        } else if(btnValue === "()"){
            toggleBracket();
        } else {
            appendValue(btnValue);
        }
    });
}
function clearResult(){
    inputE1.value ="";
}
function clearOneByOne(){
    inputE1.value = inputE1.value.slice(0,-1);
}

function calculateResult(){
    inputE1.value = eval(inputE1.value);
}

function appendValue(btnValue){
    const operator=["+","-","*","/","%"];
    let current = inputE1.value;
    if(operator.includes(btnValue)){
        let lastChar = current.slice(-1);
        if(operator.includes(lastChar)){
            inputE1.value = current.slice(0,-1)+ btnValue
            return;
        }
    }
    inputE1.value += btnValue;

}
function toggleBracket(){
    let exp = inputE1.value;
    let open = (exp.match(/\(/g)||[]).length;
    let close = (exp.match(/\)/g)||[]).length;
    if(open>close){
        inputE1.value +=")";
    }else{
        inputE1.value +="(";
    }
}