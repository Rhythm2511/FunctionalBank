document.getElementById('btn-submit').addEventListener('click', function(){
    const emailAddress = document.getElementById('user-email');
    const email = emailAddress.value;
    //console.log(email);
    const passwordUser = document.getElementById('user-password');
    const password = passwordUser.value;

    if(email === 'abc@gmail.com' && password === '123'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user')
    }
})