


let totalMoney =parseFloat( document.getElementById('total-amount').innerHTML)
console.log(typeof totalMoney)




document.getElementById('donate-money').addEventListener('click',function(){
    const addMoney = getInputValueById('input-field-number')

    totalMoney = totalMoney - addMoney;
   
     document.getElementById('total-amount').innerText = totalMoney.toFixed(2)
     const addDonateMoney= getInnerTextById('add-donate')
     const newAddDonateMoney =addDonateMoney+ addMoney;
     document.getElementById('add-donate').innerText =newAddDonateMoney.toFixed(2)
     
})  