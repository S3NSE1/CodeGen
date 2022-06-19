const openGen = () => {
let inputLogin=document.getElementById("log").value.trim();
let pass=document.getElementById("pas").value;

 function codeLog(){
  let login = inputLogin.replace(/[^a-z]+/gi, '')
  let abet="abcdefghijklmnopqrstuvwxyz".split("");
  let ret = document.getElementById("ret");
  let code = document.getElementById("code");
  
  pass.split("");
  login.split("");
  
  function retAnim(){
   ret.style.animationPlayState="running";
   code.style.display="none";
   setTimeout(()=>{ret.style.animationPlayState="paused"}, 760);
   ret.style.transform="none"
  }
  
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
   l1 : Math.ceil(abet.indexOf(login[0]) + xN),
   l2 : Math.ceil(abet.indexOf(login[1]) + xN),
   l3 : Math.ceil(abet.indexOf(login[2]) + xN),
   l4 : Math.ceil(abet.indexOf(login[3]) + xN),
   l5 : Math.ceil(abet.indexOf(login[4]) + xN),
   l6 : Math.ceil(abet.indexOf(login[5]) + xN),
   l7 : Math.ceil(abet.indexOf(login[6]) + xN),
   l8 : Math.ceil(abet.indexOf(login[7]) + xN),
  };
  let s5 = Math.ceil((sLg.l1 * 2) / 3 + (sLg.l2 * 2) / 5);
  let s6 = Math.ceil((sLg.l3 * 2) / 3 + (sLg.l4 * 3) / 5);
  let s7 = Math.ceil((sLg.l2 * 3) / 3 + (sLg.l3 * 4) / 5);
  let s8 = Math.ceil((sLg.l1 * 3) / 3 + (sLg.l4 * 5) / 5);
  
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
  retAnim();
  ret.innerHTML ="Login should be less then 8 characters";
 } else if(login.length < 4){
  retAnim();
  ret.innerHTML ="Login should be more then 4 characters";
 } else if(pass === "000000"){
  retAnim();
  ret.innerHTML ="Password can't be 000000";
 } else if(pass.length != 6){
  retAnim();
  ret.innerHTML ="Password should be 6 numbers";
 } else {
  ret.style.transform.rotate="0deg";
  ret.innerHTML="Your uniqe code is: ";
  code.style.display="block";
  code.innerHTML = sLg.l1 +""+ sLg.l2 +"-" + sLg.l3 +""+ sLg.l4 +"-"+ sLg.l5 +""+ sLg.l6 +"-"+ sLg.l7 +""+ sLg.l8
  }  
 } codeLog()
}

// CodeGen ver: 2.2
// Date: 13.06.2022
