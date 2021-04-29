var x = document.getElementById("email");
var p = document.getElementById("password");

document.getElementById("form").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    if (x.value=="team1@gmail.com" && p.value=="qwerty"){
        Swal.fire({
            icon: 'success',
            title: 'Welcome',
            text: 'Access Granted'
          });
            setTimeout(() => {
                loadPage();
            }, 3000);
    } else{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Access Denied'
          });
    }
    function loadPage(){
        window.location.href="./admin.html";
    }
});