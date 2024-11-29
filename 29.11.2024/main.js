//maxmium two number
let a=60;
let b=70;
if(a>b){
  console.log("a is maxmium")
}
else{
  console.log("b is small maxmium")
}


//maxmium three number
let x=10;
let y=30;
let z=20;
if(x>y && x>z)
  {
    console.log("x is maxmium number")
  }
else if(x<y && y>z)
  {
    console.log("y is maxmium number")
  }
else
  {
    console.log("z is maxmium number")
  }


//positive negative zero
let number=-1
if(number>0)
  {
    console.log("number is passitive")
  }
else if(number<0)
  {
    console.log("number is negative")
  }
else{
  console.log("number is zero")
}
//number is divisible
let num=5

if(num%5==0 && num%11==0){
  console.log("divisible in 5 and 11")
}
else if(num % 5 == 0)
  {
    console.log ( "divisible by5")
  }
else if(num % 11 == 0)
  {
    console.log(" divisible by11")
  }

else
  {
   cosole.log("  not divisible")
  }


//add or even
let value=6
if(value%2==0)
  {
    console.log("value is even")
  }
else
  {
    console.log("value is add")
  }


 //year is leap year or not
let year=2001
if (year%4==0){
  console.log("leap year")
}
else {
  console.log("not leap year")
}


//alphat
let alpha="b"
if(alpha>="A" && alpha<="Z" || alpha>="a" && alpha<="z")
  {
    console.log("a character is alphabet")
  }
else
  {
    console.log("a character is not alphabet")
  }


//vowels
let vowel="b"
if(vowel=="a"||vowel=="e"||vowel=="i"||vowel=="o"||vowel=="u"){
  console.log ("vowel")
}
else{
  console.log("consonant")
}


//alphabet,digit or specialcharacter
let values=8
if(values>="A" && values<="Z" || values>="a" && values<="z")
{
 console.log("alphabet")
}
else if(values>=0 && values<=9){
  console.log("digit")
}
else
  {
    console.log("special character")
  }


//uppearcase or lower case
let alphabet="b"
if(alphabet>="A" && alphabet<="Z")
  {
    console.log("uppercase")
  }
else if(alphabet>="a" && alphabet<="z")
  {
    console.log("lowercase")
  }
else{
  console.log("check the value")
}

//week number and print week days
let week=2
if(week==1){
  console.log("sunday")
}
else if(week==2){
  console.log("monday")
}
else if(week==3){
  console.log("tuesday")
}
else if(week==4){
  console.log("wendesday")
}
else if(week==5){
  console.log("thursday")
}
else if(week==6){
  console.log("friday")
}
else if(week==7){
  console.log("saturday")
}
else
  {
    console.log("check the value")
  }
//month number and print number or days in that month
let month=2
if(month==1){
  console.log("january are 31 days")
}
else if(month==2){
  console.log("february are 28 days")
}
else if(month==3){
  console.log("march are 31 days")
}
else if(month==4){
  console.log("april are 30 days ")
}
else if(month==5){
  console.log("may are 31 days ")
  }
else if(month==6){
  console.log("june are 30 days ")
}
else if(month==7){
  console.log("july are 31 days")
}
else if(month==8){
   console.log("augest are 31 days")
}
else if(month==9){
   console.log("september are 30 days")
}
else if(month==10){
   console.log("october are 31 days")
}
else if(month==11){
   console.log("november are 30 days")
}
else if(month==12){
   console.log("december are 31 days")
}
//angles of a triangle and check whether triangle is valid or not
let angel1=60
let angel2=60
let angel3=60
let total=angel1+angel2+angel3
if(total==180)
  {
    console.log("triangel")
  }
else
  {
    console.log("not valided")
  }
  //the triangle is equailateral,isoscles or scalene triangle
  let r=60
  let s=70
  let t=80
  if(r==s&&s==t)
    {
      console.log("equailateral")
    }
  else if(r==s || s==t || t==r)
    {
      console.log("isoscles")
    }
  else
    {
      console.log("scalene triangle")
    }
    //to allside of a triangle
let side1=60
let side2=60
let side3=140
if(side1+side2<side3){
  console.log("triangle")
}
else
  {
    console.log("not triangle")
  }
//profit or loss
let s1=3000
let s2=2999
let t1=s2-s1
if(t1>0)
  {
    console.log("profit")
  }
else if(t1<0)
{
  console.log("loss")
}
else
  {
    console.log("equal")
  }
  





