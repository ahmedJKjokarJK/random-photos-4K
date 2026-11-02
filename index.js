const btnEl = document.querySelector(".btn");
const inputEl =document.getElementById("input");
const copyiconEl =document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");

btnEl.addEventListener("click",()=>{
createpassword()
})

copyiconEl.addEventListener("click",()=>{
    copypassword();
    if(inputEl.value){
    alertContainer.classList.add("active")
    setTimeout(() => {
            alertContainer.classList.remove("active");
        }, 2000);
    }
   
});

function createpassword(){
    const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 14;
    let password = ""
    for(let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
        }
inputEl.value = password;
 alertContainer.innerText = password + " copied!"
}

function copypassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputEl.value);

}
