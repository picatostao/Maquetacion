class Movie{
    constructor(title, releaseYear, nationality, genere,){
        this.title=title
        this.releaseYear=releaseYear
        this.actors= []
        this.nationality=nationality
        this.director=""
        this.writer=""
        this.language="" 
        this.plataforma=""
        this.isMCU=false
        this.mainCharacterName=""
        this.producer=""
        this.distributor=""
        this.genere=genere
        this.photo=""
    }

toString(){
    return `<div class="peli"><div style="font-family: monaco;font-size: 50px;text-decoration-line: underline;">${this.title}<br></div>
    <div><img style="max-width: 20%;height: auto;" src=${this.photo} alt="" style="scale: 0.7;"></div>
    <div>año:${this.releaseYear}</div>
    <div>nacionalidad:${this.nationality}</div>
    <div>Director:${this.director}</div>
    <div>Guionista:${this.writer}</div>
    <div>Idioma:${this.language}</div>
    <div>plataforma:${this.plataforma}</div>
    <div>es de marvel?:${this.isMCU=false}</div>
    <div>protagonista:${this.mainCharacterName}</div>
    <div>productor:${this.producer}</div>
    <div>distribuidor:${this.distributor}</div>
    <div>genero:${ this.genere}</div>
    <div>actores:${this.actors}<br><br><br><br><br></div></div>`       
    }
}
let movie1= new Movie ("El gran Lebowski",1998,"Estados Unidos","Comedia")
movie1.director="Hermanos Coen"
movie1.writer="Hermanos coen"
movie1.language="Ingles"
movie1.plataforma="HBO"
movie1.isMCU=false
movie1.mainCharacterName="El Nota"
movie1.producer="Working Title Films"
movie1.distributor="PolyGram Filmed Entertainment"
movie1.photo="elGran.jpg"
movie1.actors.push("Jeff Bridges")
movie1.actors.push("Steve Buscemi")

    

let movie2= new Movie ("Reservoir Dogs",1992,"Estados unidos","Crimen-Robos-Trriller")
movie2.director="Quentin Tarantino"
movie2.writer="Quentin Tarantino"
movie2.language="inglés"
movie2.plataforma="netflix"
movie2.isMCU=false
movie2.mainCharacterName="Señor naranja"
movie2.producer="Laurance Bender-Hearvey Keitel"
movie2.distributor="Miramax Films"
movie2.photo="images.jpg"
movie2.actors.push("Tim Roth")
movie2.actors.push("Steve Buscemi")

let boxId= document.getElementById("boxId")
        
let pelicula1web=movie1.toString() 
let pelicula2web=movie2.toString()     
 boxId.innerHTML=`<h2><br><br>PELICULAS<br><br><br></h2>
<div class="in">${pelicula1web}</div>
 <div class="in">${pelicula2web}</div>`

 let nuevaPeli=[]
function insert(){
    let name= document.getElementById(`name`).value
    let year= document.getElementById(`year`).value
    let nac= document.getElementById(`nac`).value
    let dir= document.getElementById(`dir`).value 
    let guio= document.getElementById(`guio`).value
    let idi= document.getElementById(`idi`).value
    let plat= document.getElementById(`plat`).value
    let marv= document.getElementById(`marv`).value
    let prot= document.getElementById(`prot`).value 
    let prod= document.getElementById(`prod`).value
    let dist= document.getElementById(`dist`).value
    let gen= document.getElementById(`gen`).value
    let photo= document.getElementById(`img`).value
    
    
    let peli={
        nombre:name,
        año:year,
        nacionalidad:nac,
        director:dir,
        guionista:guio,
        idioma:idi,
        plataforma:plat,
        esmarvel:marv,
        protagonist:prot,
        productor:prod,
        distribuidor:dist,
        genero:gen,
        photo:photo
    }
    nuevaPeli.push(peli)
    let peliculas=""
    for(let i=0; i < nuevaPeli.length; i++ ){
        peliculas+=`<div class="peli"><div style="font-family: monaco;font-size: 50px;text-decoration-line: underline;">${nuevaPeli[i].nombre}<br></div>
        <div><img style="max-width: 20%;height: auto;" src=${nuevaPeli[i].photo} alt="" style="scale: 0.7;"></div>
        <div>año:${nuevaPeli[i].año}</div>
        <div>nacionalidad:${nuevaPeli[i].nacionalidad}</div>
        <div>Director:${nuevaPeli[i].director}</div>
        <div>Guionista:${nuevaPeli[i].guionista}</div>
        <div>Idioma:${nuevaPeli[i].idioma}</div>
        <div>plataforma:${nuevaPeli[i].plataforma}</div>
        <div>es de marvel?:${nuevaPeli[i].esmarvel}</div>
        <div>protagonista:${nuevaPeli[i].protagonist}</div>
        <div>productor:${nuevaPeli[i].productor}</div>
        <div>distribuidor:${nuevaPeli[i].distribuidor}</div>
        <div>genero:${nuevaPeli[i].genero}</div>`
    }
    console.log(nuevaPeli);
    document.getElementById("boxIns").innerHTML=peliculas
}
