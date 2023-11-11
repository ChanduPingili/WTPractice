let myEmails= [];
let size = 0;

class Users{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
}

let user = [new Users()];
function validation(){
    let ema= document.getElementById("inputEmail3");
    let email= ema.value;
    let pass= document.getElementById("inputPassword3");
    let password = pass.value;
    if(email==="" || password===""){
      ema.classList.add("is-invalid");
      pass.classList.add("is-invalid");
    }
    else if(validEmail(email) == -1){
      user[size] = new Users(email,password);
      console.log(user);
      size++;
      ema.classList.remove("is-invalid");
      pass.classList.remove("is-invalid");
      ema.classList.add("is-valid");
      pass.classList.add("is-valid");
      alert("Registered Successfully");
    }
    else{
      ema.classList.add("is-invalid");
      alert("User already exists");
    }
}

function validEmail(email){
    for(i = 0;i<size;i++){
        if(user[i].email===email)
            return i;
    }
    return -1;
}

function validationSign(){
    let ema = document.getElementById("inputEmail3");
    let pass = document.getElementById("inputPassword3");
    let email = ema.value;
    let password = pass.value;
    if(-1 != (i = validEmail(email))){
      if(user[i].password === password)
        window.open("index.html")
      else{
        pass.classList.add("is-invalid");
        alert("incorrect password");
      }
    }
    else{
      ema.classList.add("is-invalid");
      alert("Register first")
    }
}
