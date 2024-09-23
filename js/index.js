


let totalMoney =parseFloat( document.getElementById('total-amount').innerHTML)
console.log(typeof totalMoney)


// for 1st section 

document.getElementById('donate-money').addEventListener('click',function (){
    const addMoney = getInputValueById('input-field-number')

    totalMoney = totalMoney - addMoney;
   
     document.getElementById('total-amount').innerText = totalMoney.toFixed(2)
     const addDonateMoney= getInnerTextById('add-donate')
     const newAddDonateMoney =addDonateMoney+ addMoney;
     document.getElementById('add-donate').innerText =newAddDonateMoney.toFixed(2)
     
})  

// for 2nd section

document.getElementById('donate-money-two').addEventListener('click',function (){
    console.log('donate now click')
    const addMoney = getInputValueById('input-field-number-two')

    totalMoney = totalMoney - addMoney;
   
     document.getElementById('total-amount').innerText = totalMoney.toFixed(2)
     const addDonateMoney= getInnerTextById('add-donate-two')
     const newAddDonateMoney =addDonateMoney+ addMoney;
     document.getElementById('add-donate-two').innerText =newAddDonateMoney.toFixed(2)
     
})  

// for 3rd section
document.getElementById('donate-money-third').addEventListener('click',function (){
    console.log('donate now click')
    const addMoney = getInputValueById('input-field-number-third')

    totalMoney = totalMoney - addMoney;
   
     document.getElementById('total-amount').innerText = totalMoney.toFixed(2)
     const addDonateMoney= getInnerTextById('add-donate-third')
     const newAddDonateMoney =addDonateMoney+ addMoney;
     document.getElementById('add-donate-third').innerText =newAddDonateMoney.toFixed(2)
     
})  






 historyTab = document.getElementById('history-btn')
 historyTab.addEventListener('click',function(){
    historyTab.classList.add(  'font-semibold',  'backdrop-blur-sm', 'text-black', 'bg-lime-400',)
    const donateBtn =document.getElementById('donate-btn')
        donateBtn.classList.remove('bg-lime-400',  'font-semibold',  'backdrop-blur-sm', 'text-black', )

    
})




