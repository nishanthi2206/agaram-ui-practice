let details={
    name:"agaram",
    age:1,
    skills:["python","react","mysql"],
    batches:[{ name:"batch1",
              year:2022,
              
                student:[{name:"bhuvana" ,age:22,skills:["python","aws"]},
                       {name:"renisha" ,age:21,skills:["html","Es6"]},
                       {name:"bhuvana" ,age:20,skills:["js","mysql"]},
                       ]
                      },
                    { name:"batch2",
                         year:2023,
             
                      student: [{name:"adi" ,age:24,skills:["css","datastructure"]},
                       {name:"nishanthi" ,age:25,skills:["html","Es6"]},
                       {name:"remya" ,age:26,skills:["js","mysql"]},
                       ]
                    }
             
              
              ]
  }
             
  details.batches[0].student[1].skills.push("java")
  console.log(details.batches[0].student[1].skills)
  let tmp1 = details.batches[0].student;
  console.log(tmp1[0].skills[0]+","+tmp1[0].skills[1]+","+tmp1[1].skills[0]+","+tmp1[1].skills[1])
  if(details.batches[0].student[0].age==20){
      console.log(details.batches[0].student[0].name)
    }
  
  if(details.batches[0].student[1].age==20){
      console.log(details.batches[0].student[1].name)
    }
  
  if(details.batches[0].student[2].age==20){
      console.log(details.batches[0].student[2].name)
    }
  
  if(details.batches[1].student[0].age==20){
      console.log(details.batches[1].student[0].name)
    }
  details.batches.push({ name:"batch3",
                         year:2025,
             
                      student: [{name:"adi" ,age:24,skills:[" css ","datastructure"]},
                       {name:"nishanthi" ,age:25,skills:["html","Es6"]},
                       {name:"remya" ,age:26,skills:["js","mysql"]},
                       ]
                    });
  console.log(details.batches)
  details.batches[0].student[1].name="nivi"
  console.log(details.batches[0].student[1])
  details.batches[1].student[1].age="21"
  console.log(details.batches[1].student[1])
  details.skills.push("java")
  console.log(details.skills)
     
  let marks={
    tamil:90,
    maths:100,
    english:70,
    computerscience:81,
    physics:60,
    chemsitry:50
  }
  if(marks.maths>70 || marks.computerscience>70){
    console.log("you are eligible")
  }
  else
    {
      console.log("you are not eliigible")
    }
  
  
  if((marks.maths>70 && marks.physics>70 && marks.chemsitry>70) || (marks.maths>80 && marks.computerscience>80))
    {
      console.log("you are eligible")
    }
  
  else
    {
      console.log("you are not eligible")
    }
  let mark={
    maths:70,
    physics:80,
    chemsitry:90,
    biology:70,
    computerscience:70,
    
  }
  let total=mark.maths+mark.physics+mark.chemsitry+mark.biology+mark.computerscience;
  let percentage=total/5;
  console.log(percentage)
  console.log(total)
  if(percentage>=90){
    console.log("Grade A")
    
  }
  else if(percentage>=80){
    console.log("Grade B")
    
  }
  else if(percentage>=70){
    console.log("Grade c")
    
  }
  else if(percentage>=60){
    console.log("Grade D")
    
  }
  else if(percentage>=40){
    console.log("Grade E")
    
  }
  else if(percentage<40){
    console.log("Grade F")
    
  }
  else{
    console.log("check your value")
  }
  
  
             