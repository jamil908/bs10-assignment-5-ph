function getInputValueById(id){
    const inputValue =document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber

}
function getInnerTextById(id){
    const textValue =document.getElementById(id).innerText
    const textValueNumber =parseFloat(textValue);
    return textValueNumber;
}