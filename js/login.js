document.getElementById('btn-submit').addEventListener('click', function(){
    const mail = document.getElementById('user-mail');
    const userMail = mail.value;
    const pass = document.getElementById('user-pass');
    const userPass = pass.value;

    pass.value = '';
    mail.value = '';

    // Warning! testing basic things, not recommended at all!!!
    
    if(userMail==='mypersonal@wallet.com' && userPass==='12345'){
        window.location.href = 'wallet.html';
    }
    else{
        alert('Invalid User');
    }
    
})
