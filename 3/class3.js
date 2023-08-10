
//Templat String
// var userName= "Shatha";
// var age=22;
// var output =`I'm ${userName} and I'm ${age++} Years Old`
// console.log(age);
// console.log(output);

//var
// function scope
// var number= 10
// function getNumber()
// {
//     var number=20
//     console.log(number)
// }
// getNumber()
// console.log(number)

//local scope
// var number= 10
// var x= true
// if(x===true)
// {
//     var number=20
// }
// console.log(number)

// for(var i=1; i<=10; i++)
// {
//     console.log(i);
//     //print 1 to 10
// }
// console.log(i);//lest valu in loop (11) prin 1 to 11

// var i="Mohamwd"
// for(var i=1; i<=10; i++)
// {
//     console.log(i);
// }
// console.log(i);

//redecler,reassigen
// var x =5
// var x =8
// console.log(x);

//Hoisting
// console.log(z);//undefined
// var z=10 ;
// console.log(z);

//let
// let number= 10
// function getNumber()
// {
//     let number=20
//     console.log(number)
// }
// getNumber()
// console.log(number)

// let i="Ali"
// for(let i=1; i<=10; i++)
// {
//     console.log(i);
// }
// console.log(i);



//const
// const number= 10
// function getNumber()
// {
//     const number=20
//     console.log(number)
// }
// getNumber()
// console.log(number)


//Arrow Function
// function getName(x)
// {
//     console.log(x)
// }
// getName("Hello")

// const get_Name = x => console.log(x);
// get_Name("Mohamed")

// const get_number = number =>{
//     for(let i=1; i<=number; i++)
//     {
//         if(i% 2===0)
//             {
//                 console.log(`${i} This umber Even`);
//             }
//         else
//             {
//                 console.log(`${i} This umber odd`);
//             }
//     }
// }
// console.log(get_number(40))

//spread operator
// const number1=[1,2,3,4,5,6]
// const number2= number1
// number1.push(20)
// console.log(number2)

// const number1=[1,2,3,4,5]
// const number2= [...number1]
// number2.push(44)
// console.log(number1)

// const number1=[1,2,3,4,5,6]
// const number2= [...number1,6,7,8,9]
// console.log(number1)

//array Dectracti
// const names =["shatha", "Ahmed", "Noor"]
// const [name1, name2, name3]= names
// console.log(name1)
// console.log(names[0])

// const names =["shatha", "Ahmed", "Noor"]
// const [name1, ...x]= names
// console.log(x)

// const names =["shatha", "Ahmed", "Noor"]
// const [ ,name1,...x]= names
// console.log(name1)
// console.log(x)



//obect Dectracti
// const user={
//     userName : "Shatha",
//     age : 23,
//     address : "Muscat"
// }
// const {userName, age, address}= user
// console.log(address)

// const user={
//     userName : "Shatha",
//     age : 23,
//     address : "Muscat"
// }
// const {userName, ...x}= user
// console.log(x)


// const user= [
//     {
//         userName : "Shatha",
//         age : 23,
//         mobile: ["01017866053","0111996336"]
//     }
// ]
// const [{mobile}]= user
// const [mob1, mob2]= mobile
// console.log(mob2)


//for each
//  const number=[1,2,3,4,5,6,7,8,9,10]
//  number.forEach(function(el,idx){
//     console.log(el)
//     console.log(idx)
//  })

// const name=["Shatha", "Noor", "Ahmed", "Ali", "Sara"]
// name.forEach((element,idx) => console.log(element,idx));

// const name=["Shatha", "Noor", "Ahmed", "Ali", "Sara"]
// name.map(element => console.log(element));

// const user= [
//     {
//         userName : "Shatha",
//         age : 23,
//         mobile: ["01017866053","0111996336"]
//     },
//     {
//         userName : "Noor",
//         age : 23,
//         mobile: ["01017866053","0111996336"]
//     },
//     {
//         userName : "Ahmed",
//         age : 23,
//         mobile: ["01017866053","0111996336"]
//     },
//     {
//         userName : "Ali",
//         age : 23,
//         mobile: ["01017866053","0111996336"]
//     },
//     {
//         userName : "Sara",
//         age : 23,
//         mobile: ["01017866053","0111996336"]
//     },
// ]
// const newUser = user.map (el=> console.log(el))
// console.log(newUser)


// const x=[1,2,3,4,5,6,7,8,9,10]
// const newX = x.map(el => el >5)
// console.log(newX);

// const x=[1,2,3,4,5,6,7,8,9,10]
// const newX = x.filter(el => el >5)
// console.log(newX);

// const nmber=(n1,n2,n3)=>
// {
//     if(n1>n2 && n2>n3)
//     {
//         console.log(`${n1} Max ${n3} min`) 
//     }
//     else if(n2>n1 && n1>n3)
//     {
//         console.log(`${n2} Max ${n1} min`) 
//     }
//     else if(n3>n1 && n1>n3)
//     {
//         console.log(`${n3} Max ${n1} min`) 
//     }
//     else if(n3>n1 && n1>n3)
//     {
//         console.log(`${n3} Max ${n1} min`) 
//     }
//     else if(n3>n1 && n1>n3)
//     {
//         console.log(`${n3} Max ${n1} min`) 
//     }
//     else 
//     {
//         console.log("All Equal") 
//     }
// }
// Number(3,8,9)

// console.log(Math.max(6,2,6));
// console.log(Math.min(9,4,1));


// const marks=(m1,m2,m3,m4,m5)=>{
//     Total=m1+m2+m3+m4+m5
//     Average=Total/5
//     percentage=Average*0.8
//     console.log(`Total Marks = ${Total}`)
//     console.log(`Average Marks = ${Average}`)
//     console.log(`percentage = ${percentage}`)
// }
// marks(90,88,77,89,79)

// const getmonth=(1,2,3,4,5,6,7,8,9,10,11,12)
// {
// const days=(28,30,31)
// switch(getmonth)
// {
//     case"1":
//     case"3":
//     case"5":
//     case"7":
//     case"8":
//     case"12":
//     days:31;
//     break;
//     case"4":
//     case"6":
//     case"9":
//     case"11":
//     days:30;
//     break;
//     case"2":
//     days:2;
//     break;
//     default:
//         console.log("Error")
//     break;
// }
// if (days){
//     console.log(`This Month ${getmonth} has ${days} days`)
// }
// getmonth(9)
// }