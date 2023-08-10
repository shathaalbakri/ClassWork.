/*var n1= 5;
var n2= 7;
var char='%'
switch('%')
{
    case '+':
        console.log(n1+n2);
    break;
    case '*':
        console.log(n1*n2);
    break;
    case '-':
        console.log(n1-n2);
    break;
    case '/':
        console.log(n1/n2);
    break;
    case '%':
        console.log(n1%n2);
    break;
    default:
        console.log("Thank you")
}
*/

/*
var n=1;
while(n<=10)
{
    console.log(n);
    n++;
}

var m=[1,2,3,4,5,6,7,8,9,10];
while(m[0]<=m[9])
{
    console.log(m);
    m++;
}

var s=[1,2,3,4,5,6,7,8,9,10];
var counter=0
while(counter <= s.length)
{
    console.log(s[counter]);
    counter++;
}
*/
/*
for(var i=1; i<=10; i++)
{
    console.log(i)
}

var number=[1,2,3,4,5,6,7,8,9,10];
for(var i=0; i<= number.length; i++)
{
    console.log(number[i])
}

var name=['Ali','Nor','Ahmed','rawn','shatha']
for(var i=0; i< name.length; i++)
{
    console.log(name[i])
}

*/
/*
function sum(n1,n2,char)
{
    switch(char)
{
    case '+':
        return n1+n2;
    break;
    case '*':
        return n1*n2;
    break;
    default:
        return "Error"
}
}
console.log(sum(5,7,'*'));
*/
 
/*
function sayYesOrNo(number)
{
    if(number % 3 ===0 && number % 4 ===0)
    {
        return " Yes ";
    }
    else
    {
        return " No ";
    }
}
console.log(sayYesOrNo(12))
*/

/*
function getMaxNumber(n1,n2)
{
    if(n1>n2)
    {
        return " Number1 is The Max " +n1
    }
    else if(n2>n1)
    {
        return " Number2 is The Max " +n2
    }
    else
    {
        return " Number1 is equal to number2 "
    }
}
console.log(getMaxNumber(20,20))
*/
/*
function getNagPos(n){
    if(n<0)
    {
        return " Negative";
    }
    else if(n>0)
    {
        return " Positive";
    }
    else
    {
        return " Equal to Zerro";
    }
}
console.log(getNagPos(-1))
*/
/*
function MaxMin(n1,n2,n3)
{
    if(n1>n2 && n1>n3)
    {
        return "Max Number =" +n1 
    }
    else if(n1<n2 && n1<n3)
    {
        return "Min Number =" +n1 
    }
    else if(n2>n1 && n2>n3)
    {
        return "Max Number =" +n2 
    }
    else if(n2<n1 && n2<n3)
    {
        return "Min Number =" +n2 
    }
    else if(n3>n1 && n3>n2)
    {
        return "Max Number =" +n3 
    }
    else (n3<n1 && n3<n2)
    {
        return "Min Number =" +n3 
    }

}
console.log(MaxMin(10,3,4))
*/
/*
function MaxMin(n1,n2,n3)
{
    if(n1>n2 && n1>n3 && n2>n3)
    {
        return "Max Number =" +n1 +"Min Number =" +n2 
    }
    else if(n2>n1 && n2>n3 && n1>n3)
    {
        return "Max Number =" +n2 +"Min Number =" +n3 
    }
    else (n3>n1 && n3>n2 && n2>n1 )
    {
        return "Max Number =" +n3 +"Min Number =" +n1 
    }
     

}
console.log(MaxMin(10,3,4))
*/

/*
function getEvenOdd(n){
    if(n% 2===0)
    {
        return " Even";
    }
    else
    {
        return " Odd";
    }
    
}
console.log(getEvenOdd(8))
*/

// function volwel(s)
// {
//     if(s[0]=='a' || s[0]=='e' || s[0]=='i' || s[0]=='o' ||s[0]=='u' )
//     {
//         return " Vowel "
//     }
//     else
//     {
//         return " Consonant "
//     }
// }
// console.log(volwel('ahmed'))

// function print(x)
// {
//     for(var i=1; i<=x; i++ )
//     {
//         console.log(i)
//     }
// }
// console.log(print(6))


// function Multipli(x)
// {
//     for(var i=1; i<=12; i++ )
//     {
//         console.log(x*i)
//     }
// }
// console.log(Multipli(7))


//  function Even(n)
//  {
//     for(var i=1; i<=n; i++)
//     {
//         if(i% 2===0)
//         {
//             console.log(i);
//         }
//     }
//  }
//  Even(12)