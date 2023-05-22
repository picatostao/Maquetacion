
let compra=[]

jQuery(()=>{

$("#boton1").on("click",()=>{
    let card1={
        prenda:"Pantalones talle alto",
        precio:20
    }
    compra.push(card1)
    console.log(compra)
    .prepend(compra)
})


$("#boton2").on("click",()=>{
    let card2={
        prenda:"Vestido tunico",
        precio:18
    }
    compra.push(card2)
    $("#carr").prepend(compra)
    console.log(compra)
})


$("#boton3").on("click",()=>{
    let card3={
        prenda:"Falda print",
        precio:12
    }
    compra.push(card3)
    $("#carr").prepend(compra)
    console.log(compra)
})


$("#boton4").on("click",()=>{
    let card4={
        prenda:"Cardigan largo rayas",
        precio:20
    }
    compra.push(card4)
    $("#carr").prepend(compra)
    console.log(compra)
})


$("#boton5").on("click",()=>{
    let card5={
        prenda:"Falda mini cebra",
        precio:20
    }
    compra.push(card5)
    $("#carr").prepend(compra)
    console.log(compra)
})


$("#boton6").on("click",()=>{
    let card6={
        prenda:"Mono overol",
        precio:20
    }
    compra.push(card6)
    $("#carr").prepend(compra)
    console.log(compra)
})


$("#boton7").on("click",()=>{
    let card7={
        prenda:"Vestido jersey",
        precio:20
    }
    compra.push(card7)
    $("#carr").prepend(compra)
    console.log(compra)
})


$("#boton8").on("click",()=>{
    let card8={
        prenda:"Pantalon ancho",
        precio:15
    }
    compra.push(card8)
    console.log(compra)
})


$("#buy").on("click",()=>{
    for(let i=0;i<compra.length;i++)
    $("#carr").append( `<li>${compra[i].prenda}  -  ${compra[i].precio}€<li>`)
    let total=0
    for(let i=0;i<compra.length;i++)
    total+=compra[i].precio
    $("#totalprice").append(total+"€")
    compra=[]
})
$("#reset").on("click",()=>{
    
})

})


    
