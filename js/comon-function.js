
function getInputValueById(id){
    const inputValue =document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;

}
function getInnerTextById(id){
    const textValue =document.getElementById(id).innerText
    const textValueNumber =parseFloat(textValue);
    return textValueNumber;
}


function getAlert(addMoney,totalMoney){
    // addMoney= parseFloat(addMoney)
    if(!isNaN(addMoney) && totalMoney>0 && totalMoney > addMoney){
        document.getElementById('my_modal_1').showModal();
       
        return true;
    }
    if( isNaN(addMoney) || totalMoney<0 || addMoney < 0 || totalMoney < addMoney){
        
        alert('You have failed to donate')
        document.getElementById('my_modal_1').close();
        // document.getElementById('my_modal_2').close();
        // document.getElementById('my_modal_3').close();
        return false
       
    }

    return true;
  
   
}



