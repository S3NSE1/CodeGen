const openGen = () => {
 let login= document.getElementById("logInput").value;
 let password= document.getElementById("pasInput").value;
 
 function leChifre(){
 login.split("")
 password.split("")
 
 var lec1 = parseInt(password[0]) +
            parseInt(password[1]) +
            parseInt(password[2]) +
            parseInt(password[3]) +
            parseInt(password[4]) +
            parseInt(password[5]);
 var lec2 = parseInt(password.length) + lec1;
 var lec3 = parseInt(login.length + lec2 + lec1);
 var lec4 = parseInt(login.length + lec2 + lec1 * 3 /7)
 var lec5 = parseInt(lec1 *15/8)
 var lec6 = parseInt(lec2 + lec4 / lec3 - lec2)
 var lec7 = parseInt(lec1 *15/7);
 var lec8 = parseInt(password[0]) +
            parseInt(password[1]) +
            parseInt(password[2]) + lec1
  
 let keyss =[
 is4 ={
 k1 :login[0] = lec2,
 k2: login[1] = lec1,
 k3: login[2] = lec3,
 k4: login[3] = lec1,
 k5: lec5,
 k6: lec6,
 k7: lec7,
 k8: lec8
 },
 is5 ={
 k1 :login[0] = lec2,
 k2: login[1] = lec1,
 k3: login[2] = lec3,
 k4: login[3] = lec1,
 k5 :login[4] = lec2,
 k6: lec6,
 k7: lec7,
 k8: lec8
 },
 is6 ={
 k1 :login[0] = lec2,
 k2: login[1] = lec1,
 k3: login[2] = lec3,
 k4: login[3] = lec1,
 k5 :login[4] = lec2,
 k6: login[5] = lec1,
 k7: lec7,
 k8: lec8
 },
 is7 ={
 k1 :login[0] = lec2,
 k2: login[1] = lec1,
 k3: login[2] = lec3,
 k4: login[3] = lec1,
 k5 :login[4] = lec2,
 k6: login[5] = lec1,
 k7: login[6] = lec3,
 k8: lec8
 },
 is8 ={
 k1 :login[0] = lec2,
 k2: login[1] = lec1,
 k3: login[2] = lec3,
 k4: login[3] = lec1,
 k5 :login[4] = lec2,
 k6: login[5] = lec1,
 k7: login[6] = lec3,
 k8: login[7] = lec1 
 }]
return (is4, is5, is6, is7, is8)
} leChifre()        
 
 function openCodeShow(){
 let hh = 
   login.length === 4 ? is4 :
   login.length === 5 ? is5 :
   login.length === 6 ? is6 :
   login.length === 7 ? is7 :
   login.length === 8 ? is8 : NaN 
   
 login.length > 8 ? document.getElementById("ret").innerHTML="Login should be less then 8 characters" :
 login.length < 4 ? document.getElementById("ret").innerHTML="Login should be more then 4 characters":
 password.length != 6 ? document.getElementById("ret").innerHTML="Password should be 6 numbers":
 document.getElementById("ret").innerHTML="Your uniqe code is: "+ hh.k1 +"-"+ hh.k2 +"-"+ hh.k3 +"-"+ 
 hh.k4 +"-"+ hh.k5 +"-"+ hh.k6 +"-"+ hh.k7 +"-"+ hh.k8;
 } openCodeShow()     
} 
