// let element= document.createElement('div')
// element.classList.add('box')
// // element.setAttribute('class','box')
// element.setAttribute('id','x')
// document.body.appendChild(element)


// let divElement= document.createElement('div')
// divElement.setAttribute('id','x')
// divElement.classList.add('box')

// let hElement = document.createElement('h1')
// hElement.innerHTML="Welcome"

// divElement.appendChild(hElement)
// document.body.appendChild(divElement)


let prodectName =document.getElementById('name')
let prodectPrice =document.getElementById('price')
let prodectCatogory =document.getElementById('catogory')
let prodectDescription =document.getElementById('description')
let addBtn =document.getElementById('add')

let arrProdect=[]

if(localStorage.getItem('prodect') !== null)
{
    arrProdect = JSON.parse(localStorage.getItem('prodect'));
    loopData();
}

addBtn.addEventListener('click',()=>{
    let prodectData={
        pname:prodectName.value,
        pprice:prodectPrice.value,
        pcatogory:prodectCatogory.value,
        pdescription:prodectDescription.value,
    };

    arrProdect.push(prodectData);
    loopData();
    clearData();
    localStorage.setItem('prodect', JSON.stringify(prodectData));
})

function loopData(){
    let dataTable =""
    let x=0

    for(i=0; i<arrProdect.length; i++)
    {
        dataTable +=`
            <tr>
                <td>${++x}</td>
                <td>${arrProdect[i].pname}</td>
                <td>${arrProdect[i].pprice}</td>
                <td>${arrProdect[i].pcatogory}</td>
                <td>${arrProdect[i].pdescription}</td>
                <td><button id="delet" onclick="deleteData(${i})">Delete</button></td>
                <td><button id="updete">Updete</button></td>
            </tr>
        `
        document.getElementById('countries').innerHTML=dataTable;
    }
}

function deleteData(y)
{
    arrProdect.splice(y,1)
    loopData();
    localStorage.setItem('prodect', JSON.stringify(arrProdect));
}

function clearData(){
    pname.value="";
    pprice.value="";
    pcatogory.value="";
    pdescription.value="";
}