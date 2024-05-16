document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount');
    const deposit = parseFloat(depositAmount.value) ;

    const totalDeposit = document.getElementById('total-deposit');
    const currentDeposit = parseFloat(totalDeposit.innerText);
    
    totalDeposit.innerText = deposit + currentDeposit;

    const balance = document.getElementById('total-balance');
    const currentBalance = parseFloat(balance.innerText);

    balance.innerText = currentBalance + deposit;

    depositAmount.value = '';
})