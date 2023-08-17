let userEmail =document.getElementById('email');
let password =document.getElementById('psw');
let registerbtn =document.getElementsByClassName('registerbtn');

let arrRegaster=[];

if(localStorage.getItem('register') !== null)
{
    arrRegaster = JSON.parse(localStorage.getItem('register'));
    loopData();
}

registerbtn.addEventListener('click',()=>{
    let registerData={
        email:userEmail.value,
        pass:password.value,
    };
    arrRegaster.push(registerData);
    loopData();
    clearData();
    localStorage.setItem('register', JSON.stringify(registerData));
})

function loopData(){
    let dataTable =""
    let x=0

    for(i=0; i<arrRegaster.length; i++)
    {
        dataTable +=`
            <tr>
                <td>${++x}</td>
                <td>${arrRegaster[i].email}</td>
                <td>${arrRegaster[i].pass}</td>
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
    localStorage.setItem('register', JSON.stringify(arrRegaster));
}

function clearData(){
    email.value="";
    pass.value="";
}