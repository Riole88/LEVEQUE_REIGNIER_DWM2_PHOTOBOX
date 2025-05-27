import { load } from "./gallery.js";
import { display_galerie } from "./gallery.ui.js";
import {loadPicture, loadSource} from "./photoloader.js";
import {displayPicture, displayCategorie, displayComments} from "./ui.js";

function getPicture(id) {
    loadPicture(id).then(obj => {
        var photo = obj.photo;
        if (photo) {
            displayPicture(photo);
            loadSource(obj.links.categorie.href).then(categorie => {
                if (categorie) {
                    displayCategorie(categorie.categorie);
                } else {
                    console.log("Aucune photo existante.");
                }
            });
            loadSource(obj.links.comments.href).then(comments => {
                if (comments) {
                    displayComments(comments.comments);
                } else {
                    console.log("Aucune photo existante.");
                }
            });
        } else {
            console.log("Aucune photo existante.");
        }
    });
}


display_galerie(load());

//on affiche la galerie
//pour chaque photo de la galerie on applique un listenet "click" qui effecture l'action ci dessous
getPicture(window.location.hash ? window.location.hash.substr(1): 105);