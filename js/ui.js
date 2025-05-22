import { baseUrl } from "./entryAPI.js";

export function displayPicture(photoImg){
    const photoTemplate = document.getElementById("photoTemplate").innerHTML;
    const templatePhoto = Handlebars.compile(photoTemplate);
    photoImg.url.href = baseUrl + photoImg.url.href;
    const html = templatePhoto(photoImg);
    document.getElementById("la_photo").innerHTML = html;
}

export function displayRessource(ressource){
    const categorieTemplate = document.getElementById("categorieTemplate").innerHTML;
    const templateCategorie = Handlebars.compile(categorieTemplate);
    const html = templateCategorie(ressource)
    document.getElementById("la_categorie").innerHTML = html;
}

export function displayCommentaire(commentaires){
const commentaireTemplate = document.getElementById("commentaireTemplate").innerHTML;
    const templateCommentaire = Handlebars.compile(commentaireTemplate);
    const html = templateCommentaire(commentaires)
    document.getElementById("les_commentaires").innerHTML = html;
}