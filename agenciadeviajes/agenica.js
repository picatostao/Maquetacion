

let user=[]

function getuser(){
    let name= document.getElementById(`name`).value
    let mail= document.getElementById(`mail`).value
    let dest= document.getElementById(`dest`).value 
let viaje={
    nombre:name,
    correo:mail,
    dest:dest,
};
user.push(viaje)
document.getElementById("form").reset()
console.log(user)
}

function reserva(){
    let overbooking=[`canarias`,`mallorca`,`galicia`]
    let name_= document.getElementById(`name`).value
    let mail_= document.getElementById(`mail`).value
    let dest_= document.getElementById(`dest`).value.toLowerCase()
    let user_=[]
    let viaje_={
        nombre:name_,
        correo:mail_,
        dest:dest_,
    }

    
    if(overbooking.includes(dest_))
    {   user.push(viaje_)
        console.log(user)
        document.getElementById("resp").innerHTML="lo sentimos "+name_+
            " en este momento no disponemos de reservas en "+
            dest_+" cuando tengamos reservas disponibles le enviaremos un correo a: "+mail_
        }else if(name_==""||mail_=="" ||dest_==""){
        document.getElementById("resp").innerHTML="por favor introduzca los datos en todos los campos"

        }else{
        document.getElementById("resp").innerHTML="muchas gracias "+name_+" en unos instantes recibirá un correo a "
            +mail_+" con la solicitud de reserva"
        }
        document.getElementById("form").reset()
    }


// function reservaa(){
//     let overbooking=[`canarias`,`mallorca`,`galicia`]
//     let name_= document.getElementById(`name`).value
//     let mail_= document.getElementById(`mail`).value
//     let dest_= document.getElementById(`dest`).value
//     if(overbooking.includes(dest_))
//     {
//         console.log("lo sentimos "+name_+
//             " en este momento no disponemos de reservas en "+
//             dest_+" cuando tengamos reservas disponibles le enviaremos un correo a"+mail_)
//         }else{
//             console.log("muchas gracias "+name_+" en unos instantes recibirá un correo a"
//             +mail_+" con la solicitud de reserva")
//         }
//     }
    










