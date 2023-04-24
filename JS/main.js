import { usuarios } from "./user.js"
const login = document.getElementById('login')
const pass = document.getElementById('password')
const user = document.getElementById('username')
const ver = document.querySelector('.bi')
const password = document.getElementById('password')

ver.addEventListener('click', ()=>{
    if (password.type == 'text'){
        password.type = 'password'
    }else{
        password.type = 'text'  
    }
});

login.addEventListener('click', (evento)=>{
    let flag = false
    evento.preventDefault()
    usuarios.forEach(item =>{
        if (user.value == item.username){
            if (pass.value == item.userpass){
                flag = true
            }
        }
    })
    if (flag == true){
        location.assign("../HTML/principal.html")
    }else{
        document.querySelector('.mensaje').style.opacity=1;
        setTimeout(()=>{
            document.querySelector('.mensaje').style.opacity=0;
        },4000)
    }
})