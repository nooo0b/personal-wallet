document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount');
    const deposit = parseFloat(depositAmount.value) ;
    depositAmount.value = '';
    if (isNaN(deposit) || deposit < 0) {
        alert('Please Provide A Valid Number');
        return;
    }

    const totalDeposit = document.getElementById('total-deposit');
    const currentDeposit = parseFloat(totalDeposit.innerText);
    
    totalDeposit.innerText = deposit + currentDeposit;

    const balance = document.getElementById('total-balance');
    const currentBalance = parseFloat(balance.innerText);

    balance.innerText = currentBalance + deposit;
})
