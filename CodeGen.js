const openGen = () => {
 let login= document.getElementById("logInput").value;
 let password= document.getElementById("pasInput").value;
 
 function leChifreFinal(){
 login.split("")
 password.split("")
 let result = password.split("")
 var leChifre1 =
  parseInt(result[0]) +
  parseInt(result[1]) +
  parseInt(result[2]) +
  parseInt(result[3]) +
  parseInt(result[4]) +
  parseInt(result[5]);    
 var leChifre2 = parseInt(password.length) + leChifre1;
 var leChifre3 = parseInt(login.length + leChifre2 + leChifre1);
 var leChifre4 = parseInt(login.length + leChifre2 + leChifre1 * 3 /7)
 var leChifre5 = parseInt(leChifre1 *15/8)
 var leChifre6 = parseInt(leChifre5 + leChifre4 / leChifre3 - leChifre2)
 var leChifre7 = parseInt(leChifre1 *15/7);
 var leChifre8 = parseInt( leChifre6 /7 *9)
 
 let keyss =[
 is4 ={
 k1 :login[0] = leChifre2,
 k2: login[1] = leChifre1,
 k3: login[2] = leChifre3,
 k4: login[3] = leChifre1,
 k5: leChifre5,
 k6: leChifre6,
 k7: leChifre7,
 k8: leChifre8
 },
 is5 ={
 k1 :login[0] = leChifre2,
 k2: login[1] = leChifre1,
 k3: login[2] = leChifre3,
 k4: login[3] = leChifre1,
 k5 :login[4] = leChifre2,
 k6: leChifre6,
 k7: leChifre7,
 k8: leChifre8
 },
 is6 ={
 k1 :login[0] = leChifre2,
 k2: login[1] = leChifre1,
 k3: login[2] = leChifre3,
 k4: login[3] = leChifre1,
 k5 :login[4] = leChifre2,
 k6: login[5] = leChifre1,
 k7: leChifre7,
 k8: leChifre8
 },
 is7 ={
 k1 :login[0] = leChifre2,
 k2: login[1] = leChifre1,
 k3: login[2] = leChifre3,
 k4: login[3] = leChifre1,
 k5 :login[4] = leChifre2,
 k6: login[5] = leChifre1,
 k7: login[6] = leChifre3,
 k8: leChifre8
 },
 is8 ={
 k1 :login[0] = leChifre2,
 k2: login[1] = leChifre1,
 k3: login[2] = leChifre3,
 k4: login[3] = leChifre1,
 k5 :login[4] = leChifre2,
 k6: login[5] = leChifre1,
 k7: login[6] = leChifre3,
 k8: login[7] = leChifre1 
 }]
 
 return (is4, is5, is6, is7, is8)
 
} leChifreFinal()         //<---ФУНКЦИЯ
 
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
   
 } openCodeShow()        //<---ФУНКЦИЯ
}
// у нас есть 3 функции
//  leChifreFinal шифрует
// openCodeShow отображает и фильтрует ошибки
