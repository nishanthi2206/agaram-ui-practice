let mathsmark=55;
if(mathsmark>60){
  console.log("you are pass")
}
else
  {
    console.log("you are fail")
  }
let gender="female";
if (gender=="female"){
  console.log("color is pink")
}
else if(gender=="male"){
  console.log("color is blue")
}
else{
    console.log("color is red")
  }
let number=6;
let result=number%2
if(result==0){
  console.log(" number is even")
}
else{
  console.log("number is add")
}
  
let marks={
  m:90,
  t:80,
  e:60,
  sci:70,
  s:50
}
function addition(m,t,e,sci,s){
  return (m+t+e+sci+s)/5
}
let total= addition(marks.m,marks.t,marks.e,marks.sci,marks.s)

if(total>60){
  console.log(" you are elgble")
}
else{
  cosole.log("you are notelgble")
}


  