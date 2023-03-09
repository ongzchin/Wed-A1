// function Welcome()
// {
//   alert("Welcome , Please Fill In the Form Correctly !");
// }

function focusme(x)
{
  // let x= document.getElementById("nametxt");
  x.style.backgroundColor="#ffffe6";//access style through DOM
}

function blurme(x){
  // let x= document.getElementById("nametxt");
  x.style.backgroundColor="White";//access style through DOM
}

function selectgender()
{
  let x=document.getElementById("select").value;
  alert(x);
}

function checklength(x){
  if(x.value.length<3){
    alert("The length is less than 3 digit");
    x.style.backgroundColor="#ffffe6";
  }
  else{
    blurme(x);
  }
}

function checkValidation(){
  let name=document.getElementById("name");
  let email=document.getElementById("emailtxt");
  let address=document.getElementById("add");
  let phone1=document.getElementById("phone1");
  let phone2=document.getElementById("phone2");
  let user=document.getElementById("username");
  let pass=document.getElementById("password");
  let height=document.getElementById("height");

  if(name.value==""){
    alert(name.name+"Must be filled");
  }
  if(email.value==""){
    alert(email.name+"Must be filled");
  }
  if(email.value.indexOf("@",0)<0){
    alert("Please enter a valid e-mail address");

  }
  let p=password.getAttributes("[A-Za-z0-9!@#$%^*()]{8}");
  let testpattern=RegExp(p);//register expression (js)
  if(!testpattern(password.value)){
    alert("password not match");
    password.focus();
    return false;
  }
  return true;

}
