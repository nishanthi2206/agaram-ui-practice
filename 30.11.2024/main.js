let amount=9999

if(amount>=500){
 let notes=Math.floor(amount/500);
 console.log("500 no.notes is"+notes)
 amount=amount%500;
 
}
if(amount>=200){
 let notes= Math.floor(amount/200);
console.log("200 no.notes is"+notes)
amount=amount%200;
}
if(amount>=100){
 let notes=Math.floor(amount/100);
console.log("100 no.notes is"+notes)
amount=amount%100;
}
if(amount>=50){
 let notes=Math.floor(amount/50);
console.log("50 no.notes is"+notes)
amount=amount%50;
}
if(amount>=20){
 let notes=Math.floor(amount/20);
console.log("20 no.notes is"+notes)
amount=amount%20;
}
if(amount>=10){
 let notes=Math.floor(amount/10);
console.log("10 no.notes is"+notes)
amount=amount%10;
}
if(amount>=5){
 let notes=Math.floor(amount/5);
console.log("5 no.notes is"+notes)
amount=amount%5;
}
if(amount>=2){
 let notes=Math.floor(amount/2);
console.log("2 no.notes is"+notes)
amount=amount%2;
}
if(amount>=1){
 let notes=Math.floor(amount/1);
console.log("1 no.notes is"+notes)
amount=amount%1;
}
let basicsalary=12000
let hra=0;
let da=0;
if (basicsalary<=1000){
  hra=20;
  da=80;
}
else if (basicsalary<=2000){
  hra=25;
  da=90;
}
else if (basicsalary>2000){
  hra=30;
  da=95;
}
  hra=basicsalary*hra/100;
  da=basicsalary*da/100;
  let final=basicsalary+hra+da;
  console.log(final)
  //units
  let units=500;
  let price=0;
if(units>250){
   price=25+75+120+(units-250)*1.5
  }
   else if(units>150){
     price=25+75+(units-150)*1.2
   }
else if(units>100){
     price=25+(units-50)*0.75
   }
else if(units>50){
     price=25+(units-50)*0.75
   }
else{
  price=units*0.5
}
let surcharge=price*20/100

console.log(surcharge)

   //  loop

let colors=["red","blue","green","white","yellow"]
for(let each of colors){
  
  if(each !="white" && each !="red"){
    if(each=="blue"){
      console.log("yellow")
    }
    else if(each=="yellow"){
      console.log("blue")
    }
    
   else{
   console.log(each)
  }
  
}
}
let marks =[90,80,85,50,80,50];
let total=0;
for(let a in marks){

  
  
  total=total+marks[a];
 
}
console.log(total)

let students=[{
    names:"stu 1",
    age:20,
    marks:[90,80,100,80,50]
  },
                {
    names:"stu 2",
    age:25,
    marks:[100,80,70,60,50]              
  },
                {
    names:"stu 3",
    age:29,
    marks:[80,80,70,60,50]
  },
  ]
  let result=0;
  for(let student of students)
    {
     
   for(let m of student.marks)
    {
      
      result=result+m
    }
      
      console.log(student.names+" mark is" +result)
      result=0;
      
    }
    let students=[{
      name:"stu1",
      age:20,
      marks:[90,80,100,80,50]
    },
                  {
      name:"stu2",
      age:25,
      marks:[100,80,70,60,50]              
    },
                  {
      name:"stu3",
      age:29,
      marks:[80,80,70,60,50]
    },
    ]
    
    
    //for(let student of students)
     // {
        // let result=0;
       // if(student.age>=25)
        //  {
         //  student.eligble=true
         // }
       // else {
          //student.eligble=false
        //}
        //  console.log(student)
         
          
       // }
            
        
        
   // for(let m of student.marks)
     // {
        
      //  result=result+m;
    //  }
       
        
       // console.log(student.names+"  mark is  "+ result)
       // result=0;
  let a=[]
        
        for(let student of students)
          {
            if(student.age>=25){
              a.push(student.name)
            }
            
          }
  console.log(a)
        
        
      
  
  
    