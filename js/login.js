document.getElementById('btn-submit').addEventListener('click', function(){
    const mail = document.getElementById('user-mail').value;
    const pass = document.getElementById('user-pass').value;
    // Warning! testing basic things, not recommended at all!!!

    if(mail==='mypersonal@wallet.com' && pass==='12345'){
        window.location.href = 'wallet.html';
    }
    else{
        alert('Invalid User');
    }
})