const openGen = () => {
let inputLogin=document.getElementById("log").value.trim();
let pass=document.getElementById("pas").value;

 function codeLog(){
  let login = inputLogin.replace(/[^a-z]+/gi, '')
  let abet="1234567890abcdefghijklmnopqrstuvwxyz".split("");
  let ret = document.getElementById("ret");
  let code = document.getElementById("code");
  pass.split("");
  login.split("");
  

  let pN = {
   p1 : parseInt(pass[0]),
   p2 : parseInt(pass[1]),
   p3 : parseInt(pass[2]),
   p4 : parseInt(pass[3]),
   p5 : parseInt(pass[4]),
   p6 : parseInt(pass[5])
  };
  let xN = pN.p1 + pN.p2 + pN.p3 + pN.p4 + pN.p5 + pN.p6 + login.length + pN.p1;
  let sLg = {
   l1 : abet.indexOf(login[0]) + xN,
   l2 : abet.indexOf(login[1]) + xN,
   l3 : abet.indexOf(login[2]) + xN,
   l4 : abet.indexOf(login[3]) + xN,
   l5 : abet.indexOf(login[4]) + xN,
   l6 : abet.indexOf(login[5]) + xN,
   l7 : abet.indexOf(login[6]) + xN,
   l8 : abet.indexOf(login[7]) + xN,
  };
  let s5 = Math.ceil((sLg.l1 * 2) / 10 + (sLg.l2 * 2) / 10);
  let s6 = Math.ceil((sLg.l3 * 2) / 10 + (sLg.l4 * 2) / 10);
  let s7 = Math.ceil((sLg.l1 * 3) / 10 + (sLg.l2 * 3) / 10);
  let s8 = Math.ceil((sLg.l3 * 3) / 10 + (sLg.l4* 3) / 10);
  
  if(login.length === 4){
   sLg.l5 = s5
   sLg.l6 = s6
   sLg.l7 = s7
   sLg.l8 = s8
  } else if(login.length === 5){
   sLg.l6 = s6
   sLg.l7 = s7
   sLg.l8 = s8
  } else if(login.length === 6){
   sLg.l7 = s7
   sLg.l8 = s8
  } else if(login.length === 7){
   sLg.l8 = s8
  }
  
 if(login.length > 8){
  code.style.display="none";
  ret.innerHTML ="Login should be less then 8 characters"
 } else if(login.length < 4){
  code.style.display="none"
  ret.innerHTML ="Login should be more then 4 characters"
 } else if(pass === "000000"){
  code.style.display="none"
  ret.innerHTML ="Password can't be 000000"
 } else if(pass.length != 6){
  code.style.display="none"
  ret.innerHTML ="Password should be 6 numbers"
 } else {
  ret.innerHTML="Your uniqe code is: "
  code.style.display="block";
  code.style.cursor="text";
  code.innerHTML = sLg.l1 +"-"+ sLg.l2 +"-" + sLg.l3 +"-"+ sLg.l4 +"-"+ sLg.l5 +"-"+ sLg.l6 +"-"+ sLg.l7 +"-"+ sLg.l8
  }  
 } codeLog()
}
// CodeGen ver: 2.1
// Date: 15.06.2022
