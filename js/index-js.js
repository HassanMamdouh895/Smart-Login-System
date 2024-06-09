
// All Varibales
var box = []
 var signUp 
var signIn 
var passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
var emailRegex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var userNameRegex = /^(^[a-zA-Z\s0-9]{3,})$/;
var signInRegex = { 
    emailUser:document.getElementById("emailIdd"),
    passwordUser: document.getElementById("passwordIdd"),
}
var signupRegex = { 
    userInput:document.getElementById("nameId"),
    emailInput:document.getElementById("emailId"),
    passwordInput: document.getElementById("passwordId"),
}
var btnSignIn =document.getElementById("signIn")
var btnSignUp= document.getElementById("signUp")
var btnVisit= document.getElementById("signlink")

// All Varibales End

// Visit Function  
btnVisit.addEventListener("click",function(){


        
        document.getElementById("loginIn").classList.add("sign")
        document.getElementById("loginIn").classList.remove("sign-in-up")

        document.getElementById("loginUp").classList.add("sign-in-up")
        document.getElementById("loginUp").classList.remove("sign")

})
// End Function  






// localStorage conditional 
if (localStorage.getItem("signupData") != null) {
    box = JSON.parse(localStorage.getItem("signupData"));
};
// localStorage conditional 


// Sign Up Function
btnSignUp.addEventListener("click",function(){


    signUp 
    ={
        
        userName:document.getElementById("nameId").value,
        email:document.getElementById("emailId").value,
        password: document.getElementById("passwordId").value,
    }



if(signUp.userName==""|signUp.email==""|signUp.password=="")
    {
        document.querySelector(".messege-signup").innerHTML="Please Fill All Inputs"
        document.getElementById("nameId").classList.add("is-invalid")
        document.getElementById("emailId").classList.add("is-invalid")
        document.getElementById("passwordId").classList.add("is-invalid")

    }

if (box.length == 0 &&userNameRegex.test(signupRegex.userInput.value)==true && emailRegex.test(signupRegex.emailInput.value)==true && passwordRegex.test(signupRegex.passwordInput.value)==true){
        box.push(signUp)
        localStorage.setItem("signupData", JSON.stringify(box))
        
        
        
        document.getElementById("loginUp").classList.remove("sign-in-up")
            document.getElementById("loginUp").classList.add("sign")

        document.getElementById("loginIn").classList.add("sign-in-up")
        document.getElementById("loginIn").classList.remove("sign")
        clear()
    
    } 
    
else{
    box.forEach(function (element) {



        
        if(signUp.email == element.email && signUp.userName == element.userName && signUp.password == element.password){
            
            document.querySelector(".messege-signup").innerHTML="Email Already Exists";
            document.getElementById("nameId").classList.add("is-invalid")
            document.getElementById("nameId").classList.remove("is-valid")
            document.getElementById("emailId").classList.add("is-invalid")
            document.getElementById("emailId").classList.remove("is-valid")
            document.getElementById("passwordId").classList.add("is-invalid")
            document.getElementById("passwordId").classList.remove("is-valid")
            
            return;
        
        }



        else if(userNameRegex.test(signupRegex.userInput.value)==true && emailRegex.test(signupRegex.emailInput.value)==true && passwordRegex.test(signupRegex.passwordInput.value)==true) {
            box.push(signUp)
            localStorage.setItem("signupData", JSON.stringify(box))
            clear()
            document.getElementById("loginUp").classList.remove("sign-in-up")
            document.getElementById("loginUp").classList.add("sign")

            document.getElementById("loginIn").classList.add("sign-in-up")
            document.getElementById("loginIn").classList.remove("sign")
 
        }
    });
}
    
})

// Sign Up Function



// Sign in function

btnSignIn.addEventListener("click",function(){
    signIn 
    ={
        
        emailUser:document.getElementById("emailIdd").value,
        passwordUser: document.getElementById("passwordIdd").value,
    }

    // if(signIn.emailUser==""|signIn.passwordUser=="")
    //     {
    //         document.querySelector(".messege-signIn").innerHTML="Please fill all inputs"
    //         console.log("hello")
    //     }

     if(signIn.emailUser==""|signIn.passwordUser==""){
        document.querySelector(".messege-signIn").innerHTML="Please Fill All Inputs";
        document.getElementById("emailIdd").classList.add("is-invalid")  
        document.getElementById("passwordIdd").classList.add("is-invalid")
            

    }





    // if the user try to sign in before sign up and there no local storge or data

    if(localStorage.getItem("signupData") == null){
        document.querySelector(".messege-signIn").innerHTML="Password or Email is wrong";
        document.getElementById("emailIdd").classList.add("is-invalid")  
        document.getElementById("passwordIdd").classList.add("is-invalid")


    }
    // if the user try to sign in before sign up and there no local storge or data
   else
   {
    box.forEach(element => {
        if(signIn.emailUser == element.email && signIn.passwordUser == element.password){


            document.querySelector(".messege-signIn").innerHTML="success";
            document.querySelector(".messege-signIn").classList.add("success")
            document.querySelector(".messege-signIn").classList.remove("wrong")
            window.open("home.html","_self")
            clear()
    
        
        }

        

        else
        {
            document.querySelector(".messege-signIn").innerHTML="Password or Email is wrong";
            document.getElementById("emailIdd").classList.add("is-invalid")
            document.getElementById("emailIdd").classList.remove("is-valid")
            document.getElementById("passwordIdd").classList.add("is-invalid")
            document.getElementById("passwordIdd").classList.remove("is-valid")
            document.querySelector(".messege-signIn").classList.add("wrong")
            document.querySelector(".messege-signIn").classList.remove("success")
            
        }
    });
   }

    

    

    


})

// Sign in function End






// input Function sign up && sign in

signupRegex.userInput.addEventListener("input",function(){
    if (userNameRegex.test(signupRegex.userInput.value)) {
        document.getElementById("nameId").classList.add("is-valid")
        document.getElementById("nameId").classList.remove("is-invalid")
        document.querySelector(".messege-signup").innerHTML=""
    }
    else {
        document.getElementById("nameId").classList.add("is-invalid")
        document.getElementById("nameId").classList.remove("is-valid")
        document.querySelector(".messege-signup").innerHTML=""
    }



})

signupRegex.emailInput.addEventListener("input",function(){
    if (emailRegex.test(signupRegex.emailInput.value)) {
        document.getElementById("emailId").classList.add("is-valid")
        document.getElementById("emailId").classList.remove("is-invalid")
        document.querySelector(".login-box span").innerHTML=""
    }
    else {
        document.getElementById("emailId").classList.add("is-invalid")
        document.getElementById("emailId").classList.remove("is-valid")
        document.querySelector(".login-box span").innerHTML=""
    }



})


signupRegex.passwordInput.addEventListener("input",function(){
    if (passwordRegex.test(signupRegex.passwordInput.value)) {
        document.getElementById("passwordId").classList.add("is-valid")
        document.getElementById("passwordId").classList.remove("is-invalid")
       
    }
    else {
        document.getElementById("passwordId").classList.add("is-invalid")
        document.getElementById("passwordId").classList.remove("is-valid")
        
    }



})

// clear Function
function clear() {
    document.getElementById("nameId").value=""
    document.getElementById("emailId").value=""
    document.getElementById("passwordId").value=""
    document.getElementById("nameId").classList.remove("is-valid")
    document.getElementById("nameId").classList.remove("is-invalid")
    document.getElementById("emailId").classList.remove("is-valid")
    document.getElementById("emailId").classList.remove("is-invalid")
    document.getElementById("passwordId").classList.remove("is-valid")
    document.getElementById("passwordId").classList.remove("is-invalid")
    document.getElementById("emailIdd").value=""
    document.getElementById("passwordIdd").value=""
    document.getElementById("emailIdd").classList.remove("is-valid")
    document.getElementById("emailIdd").classList.remove("is-invalid")
    document.getElementById("passwordIdd").classList.remove("is-valid")
    document.getElementById("passwordIdd").classList.remove("is-invalid")

    
}

// clear Function End


// validistion sign up && sign in
signInRegex.emailUser.addEventListener("input",function(){
    if (emailRegex.test(signInRegex.emailUser.value)) {
        document.getElementById("emailIdd").classList.add("is-valid")
        document.getElementById("emailIdd").classList.remove("is-invalid")
        
    }
    else {
        document.getElementById("emailIdd").classList.add("is-invalid")
        document.getElementById("emailIdd").classList.remove("is-valid")
        
    }})



    signInRegex.passwordUser.addEventListener("input",function(){
        if (passwordRegex.test(signInRegex.passwordUser.value)) {
            document.getElementById("passwordIdd").classList.add("is-valid")
            document.getElementById("passwordIdd").classList.remove("is-invalid")
            
        }
        else {
            document.getElementById("passwordIdd").classList.add("is-invalid")
            document.getElementById("passwordIdd").classList.remove("is-valid")
            
        }



})

// validistion sign up && sign in End


















































































