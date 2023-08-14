// let element = document.getElementById('ele');
// element.innerHTML="Shatha";

// let text= "<h1> Ahmed </h1>";
// element.innerHTML=text;

// console.log(element);

// let btn=document.getElementById('btn');

// btn.addEventListener('click',function(){
//     let input1=document.getElementById('inp1');
//     let input2=document.getElementById('inp2');
//     let text=document.getElementById('text');

//     let output=input1.value +" "+input2.value;
//     text.innerHTML=output;
// })


// let btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    let input1=document.getElementById('inp1');
    let input2=document.getElementById('inp2');
    let text=document.getElementById('text');

    let result=parseInt(input1.value) + parseInt(input2.value);
    text.innerHTML=result;
})



let btn = document.getElementById('btn')
btn.addEventListener('click',function(){
    let box =document.getElementById('box')
        box.style.backgroundColor='red';
            box.classList.add('x')
})


// let btn = document.getElementById('btn')
// btn.addEventListener('click',function(){
//     let box =document.getElementById('box')
//             box.classList.toggle('x')
// })

window.addEventListener('keydown', function (letter){
    if(letter.key === ArrowRight)
    {
        document.style.background='green'
        console.log(letter.key)
    }
    
})

window.addEventListener('keydown',function (letter){
    console.log(letter.key)
})

let box = document.getElementById('box')
setTimeout(function(){
    box.style.display="block";
},3000)