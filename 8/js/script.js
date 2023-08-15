// setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             setTimeout(()=>{
//                 console.log("Wellcom")
//             },2000)
//         },3000)
//     },5000)
// },4000)


// let box =document.getElementById('box')
// let btn =document.getElementById('btn')
// btn.addEventListener('click',()=>{
//     clearTimeout(x)
// })

// setTimeout(()=>{
//     box.style.display='block'
// },3000)
// console.log(x)


// setInterval(()=>{
//     console.log("fhedxkfndsn ")
// },3000)
//loop


// let red=document.getElementById('red')
// let green=document.getElementById('green')
// let  blue=document.getElementById('blue')
// let  yellow=document.getElementById('yellow')
// setTimeout(()=>{
//     red.style.display='block'
// },1000)
// setTimeout(()=>{
//     green.style.display='block'
// },2000)
// setTimeout(()=>{
//     blue.style.display='block'
// },3000)
// setTimeout(()=>{
//     yellow.style.display='block'
// },4000)


// let header=document.getElementById('header')
// let nav=document.getElementById('nav')
// window.addEventListener('scroll',()=>{
//     if(window.scrollY)
//     {
//         nav.style.width="100%";
//     }
//     else{
//         nav.style.width="70px";
//     }

// let box =document.getElementById('box2');
// let img =document.getElementsByTagName('img')

// for(let i=0; i< img.length; i++)
// {
//     img[1].addEventListener('click',()=>{
        
//         let xy =img[i].getAttribute('x')
//         box.setAttribute('x', xy)
//     })
// }

let box =document.getElementById('box2');
let img =document.getElementsByClassName('imags')
if(localStorage.getItem('color') !== null)
{
    let y = JSON.parse(localStorage.getItem('color'));
    box.setAttribute('src' , y)
}
for(let i=0; i< img.length; i++)
{
    img[1].addEventListener('click',function(){
        
        let x =img[i].getAttribute('src')
        box.setAttribute('src' , x)
        localStorage.setItem('color', JSON.stringify(x))
    })
}