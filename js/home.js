
// TO Welcome User  with his name from data save in local storge

(localStorage.getItem("signupData"))
var x = JSON.parse(localStorage.getItem("signupData"))
for(i=0 ; i<x.length;i++)
    {
        v=x[i].userName
       var nameUser= document.getElementById("h2")
        nameUser.innerHTML= x[i].userName
    }

// TO Welcome User  with his name from data save in local storge
