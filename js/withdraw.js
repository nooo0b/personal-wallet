document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdraw = parseFloat(withdrawAmount.value);
    if (isNaN(withdraw) || withdraw < 0) {
        alert('Please Provide A Valid Number');
        return;
    }

    const totalWithdraw = document.getElementById('total-withdraw');
    const currentWithdraw = parseFloat(totalWithdraw.innerText);

    const balance = document.getElementById('total-balance');
    const totalBalance = parseFloat(balance.innerText);

    withdrawAmount.value = '';

    if(withdraw > totalBalance)
        {
            alert("You Don't Have Enough Balance To Withdraw!");
        }
    else{
            totalWithdraw.innerText = withdraw + currentWithdraw;
            balance.innerText = totalBalance - withdraw;
        }
    withdrawAmount.value = '';
})
