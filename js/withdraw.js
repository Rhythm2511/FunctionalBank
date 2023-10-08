document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    if(isNaN(newWithdrawAmount)){
        alert('Please enter a number')
    }
    else{
        const previousWithdrawTotal = getTextElementValueById('withdraw-total');
        const previousBalanceTotal = getTextElementValueById('balance-total');
        if(newWithdrawAmount > previousBalanceTotal){

            alert('Sorry, you can not withdraw more than your balance');
            return;
        }
        else{
            const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
            setTextElementValueById('withdraw-total', newWithdrawTotal);
            const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
            if(newBalanceTotal >= 0){
                setTextElementValueById('balance-total', newBalanceTotal);
            
            }
        }
        
    }
    
    
})