//1.selection des elements HTML
//selectionner le div by ID
let div = document.getElementById("conteneur");
//selectionner le paragraphe by ID
let paragraphe = document.getElementById("monParagraphe");
//2.modifier le texte du paragraphe
paragraphe.innerText = "Ce paragraphe a été modifier";
//2.modifier le style du paragraphe
paragraphe.style.textAlign = "center";
paragraphe.style.backgroundColor = "lightblue";
div.addEventListener("click",function() {
    //modifier text paragraphe après click
    paragraphe.innerText = "Un click a été détecté."
});