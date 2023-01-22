let users  = JSON.parse(localStorage.getItem('registered_users'));
console.log(users)

document.querySelector('#submit').addEventListener('click',function(){
    event.preventDefault();
    login();
})
function login(){
    let flag=0;
    let email= document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    console.log(email,password)
    for(let i=0; i<users.length; i++){
        if(users[i].email==email && users[i].password==password){
            
                alert('login Successful');
                flag++;
                break;
            
        }
    }
    if(flag==1){
        window.location.href="products.html";
    }
if(flag==0){
    alert("login failed, Wrong Credentials ")
}
}