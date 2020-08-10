let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
];
 
let niz = [];

const selectDino = document.getElementById("select-dino");

//Ispisivanje opcija za kupovinu
dinos.forEach(d => {
    const option = document.createElement("option");
    option.innerText = d.name;
    option.value = d.id;
    selectDino.appendChild(option);
});


//Inputi
let kupac = document.querySelector("#kupac");
let dinosaurs = document.querySelector("#select-dino").value;
let napomena = document.querySelector("textarea.textarea-field");
//let cena =
let submit = document.querySelector("#submit");


//Provera inputa
const validInput = ()=>{
    return (
        kupac.value.trim() !== "" &&
        kupac.value.length >= 4 &&
        dinosaurs.value.trim() !== ""
    )
}


//Kontejner za porudžbine
let container = document.getElementById("item-container");

//Ipisivanje porudžbine
function createOrder(){ 
    const porudzbina = document.createElement("div");
    porudzbina.className = "item";
    container.appendChild(porudzbina);
        const kupacElement = document.createElement("p"); 
        kupacElement.innerHTML = `<span>Kupac: </span> ${kupac.value}`;
        porudzbina.appendChild(kupacElement);
        const napomenaElement = document.createElement("p");
        napomenaElement.innerHTML = `<span>Napomena: </span> ${napomena.value}`;
        porudzbina.appendChild(napomenaElement);
        const dinosaurusElement = document.createElement("p");
        dinosaurusElement.innerHTML = `<span>Dinosaurus: </span> ${dinosaurs.name}`;
        porudzbina.appendChild(dinosaurusElement);
        const cenaElement = document.createElement("p"); 
        cenaElement.innerHTML = `<span>Cena: </span> ${dinosaurus.cena}`;
        porudzbina.appendChild(cenaElement);
        const obrisi = document.createElement("button");
        obrisi.innerText = "Obrisi";
        porudzbina.appendChild(obrisi);
        //Brisanje porudžbine
        obrisi.addEventListener("click",function(){
            this.parentElement.remove();
            niz.splice(niz.length-1,1);
        });
        kupac.value = "";
        dinosaurs.value = "";
        napomena.value = "";
        

}


submit.addEventListener("click",function(){
    if(!validInput()){
        alert("Pogresan unos!");
        return;
    }
    niz.push(
        {
            id: dinosaurs.id,
            name: dinosaurs.name,
            img: dinosaurs.img,
            cena:dinosaurs.cena 
        }
    )
    createOrder();
});
