// on s'assure le que le DOM est chargé
window.onload = () => { 
    // tout ce qui va suivre sera executé par chargement de la page

    // selectionner des elements par leurs id
    let section = document.getElementById('section1');

    // selectionner des elements par leurs class
    let invalidFeedback = document.getElementsByClassName('invalid-feedback');

    // selectionner des elements par leurs balises let figure = document.getElementsByTagName('figure');

    // selectionner des elements par sélecteurs css
    let figcaption = document.querySelector('figcaption'); // selectionne le 1er qu'il trouve

    let span = document.querySelector('div:nth-child(6) span');


    // modifier couleur de span en bleu
    span.style.backgroundColor = "blue";

    // modifier le contenu de span de X en Y
    span.innerText = "Y";

    console.log(span);

}






























































/*
// On s'assure que le DOM est chargé
window.onload = () => {
    // Exécuté après le chargement de la page

    // Sélectionner des éléments par leur id
    let section = document.getElementById("section1")

    // Sélectionner les éléments par leur classe
    let invalid = document.getElementsByClassName("invalid-feedback")

    // Sélectionner les éléments par leur balise
    let figure = document.getElementsByTagName("figure")

    // Sélectionner des éléments par sélecteurs CSS
    let span = document.querySelector("div span") // Sélectionne le 1er résultat
    let spans = document.querySelectorAll("div span") // Sélectionne tous les résultats


    // Modifier le CSS d'un élément
    span.style.backgroundColor = "blue"

    // Modifier le contenu d'un élément
    span.innerText = "Y"

    // Liste des classes d'un élément
    // span.classList.toggle("invalid")

    // Ajouter un élément
    // On crée une balise p
    let nouvelleP = document.createElement("p")

    // On insère le texte
    let texte = document.createTextNode("Ceci est le contenu de la balise p")
    nouvelleP.appendChild(texte)

    // On insère la balise dans le document
    section.appendChild(nouvelleP)

    // Moins conventionnel
    // let html = section.innerHTML
    // html = "<p>Ceci est une autre balise p</p>" + html
    // section.innerHTML = html

    // Les évènements
    for(let span = 0; span < spans.length; span++){
        spans[span].addEventListener("click", clicSpan)
    }

    let pseudo = document.querySelector("[name=pseudo]")
    pseudo.addEventListener("keyup", verifPseudo)
}

function clicSpan(){
    // On efface l'image correspondant à la span cliquée
    this.parentElement.remove()
}

function verifPseudo(){
    if(this.value.length < 5){
        this.classList.add("is-invalid")
        this.classList.remove("is-valid")
    }else{
        this.classList.add("is-valid")
        this.classList.remove("is-invalid")
    }
}
*/