class Profesional{
    constructor(name,age,weight,height,isRetired,nationaly,oscarsNumber,profession,photo){
        this.name=name;
        this.age=age;
        this.weight=weight;
        this.height=height;
        this.isRetired=isRetired;
        this.nationaly=nationaly;
        this.oscarsNumber=oscarsNumber;
        this.profession=profession;
        this.photo=photo
        }

    toString(){
    return `<div class="prof"><div style="font-family: monaco;font-size: 50px;text-decoration-line: underline;">${this.name}</div>
            <div><img src=${this.photo} alt="" style="scale: 0.7;"></div>
            <div  style="font-family: monaco;font-size: 40px;">${this.profession}</div><br>
            <div>Edad:${this.age}</div>
            <div>Peso:${this.weight}</div>
            <div>Altura:${this.height}</div>
            <div>Está retirado:${this.isRetired}</div>
            <div>Nacionalidad:${this.nationaly}</div>
            <div>Oscars:${this.oscarsNumber}</div> <br><br>`
        
}
        }

        let profesional1=new Profesional("Steve buscemi",65,70,1.75,false,"Estadounidense",0,"actor","https://images.mubicdn.net/images/cast_member/2321/cache-463-1602494874/image-w856.jpg?size=800x")
        let profesional2=new Profesional("Jeff Bridges",73,87,1.85,false,"Estadounidense",1,"actor","https://static.eldiario.es/clip/750de959-2dfe-4aae-be6f-0367291ebeef_16-9-aspect-ratio_default_0.jpg")
        let profesional3=new Profesional("Tobey Maguire",47,1.73,1.72,false,"Estadounidense",0,"actor","https://www.elespectador.com/resizer/Ptj8xbwfTSsEi27kpMI-11IOPmM=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/7M3MP7CYSJEJ3MTPRLC6KPDYLQ.jpg")
        let profesional4=new Profesional("Guy Ritchie",54,1.73,1.80,false,"Britanico",0,"Director","https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRbfhPH34pwwuBUk4Oeh2qka7Dy52e_ZAnptq_WlgmW5DOwsFuVWLAuG_Xfzhe0fHr6")
        let profesional5=new Profesional("Jay Candrasekhar",55,85,1.82,false,"Estadounidense",0,"Guionista-Actor","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSvBatGuzz26DHCZl4lq_lcC0CCRdM3yqB4Y6DkYpiDuCGCRpJD")
       
        let boxId= document.getElementById("boxId")

        
        let profesional1web=profesional1.toString()
        let profesional2web=profesional2.toString()
        let profesional3web=profesional3.toString()
        let profesional4web=profesional4.toString()
        let profesional5web=profesional5.toString()
        
        
        boxId.innerHTML=`<h2><br><br>PROFESIONALES<br><br><br></h2>
        <div>${profesional1web}</div>
        <div>${profesional2web}</div>
        <div>${profesional3web}</div>
        <div>${profesional4web}</div>
        <div>${profesional5web}</div>`


