document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid amount');
        return
    }
    

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;


    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Your do not have this amount in your bank')
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = currentBalanceTotal;


   
})