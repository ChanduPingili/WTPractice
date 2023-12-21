//prototypal inheritence
let person={
  name:"Chandu",
  age:20
};

let employee={
  role:"Developer",
  __proto__:person
};
//closure
function calAge(born,present){
  function calc(){
          return present-born;
      };
  return calc();
}

//callbacks
function validAge(age){
  return age>=20;
}

function age(age, callback){
  console.log(`Employee is set for job : ${callback(age)}`)
}

//async, await
async function salInc(sal,exp){
  let val= true;
  if(exp >= 5)
      val = false;
  await checkExp(sal,val).then(function(result){
      console.log(result);
      return result;
  }).catch(function(result){
      console.log(result)});
}
//promises
function checkExp(value,error){
  return new Promise((resolve,reject) =>{
      if(!error){
          resolve(`Salary incremented from ${value} to ${value+value/10} as he has more than 5 years of experience`);
      }else
          reject("Salary can't be increased due to lack of experience");
  });
};

console.log(`Employee Name : ${employee.name}`)
console.log(`Employee age : ${calAge(2003,2023)}`);
age(employee.age, validAge)
salInc(10000,5);
