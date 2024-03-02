const btnsignIn= document.getElementById("sign-in"),
       btnsignup= document.getElementById("sign-up");
       formRegister =document.querySelector(".register"),
       fomrLogin=document.querySelector(".login");


       btnsignIn.addEventListener("click", e =>{
        formRegister.classList.add("hide");
        fomrLogin.classList.remove("hide");
       })

       btnsignup.addEventListener("click", e =>{
        fomrLogin.classList.add("hide");
        formRegister.classList.remove("hide");
       })