import {first, last, load, next, prev} from "./gallery.js";
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


document.addEventListener("DOMContentLoaded", () => {
    const bouton = document.querySelector("#loadGalleryBtn");

    bouton.addEventListener("click", async () => {
        const galerie = await load();
        display_galerie(galerie);
        addImageClickListeners();
    });

    document.querySelector("#nextBtn").addEventListener("click", async () => {
        const galerie = await next();
        display_galerie(galerie);
        addImageClickListeners();
    });

    document.querySelector("#prevBtn").addEventListener("click", async () => {
        const galerie = await prev();
        display_galerie(galerie);
        addImageClickListeners();
    });

    document.querySelector("#firstBtn").addEventListener("click", async () => {
        const galerie = await first();
        display_galerie(galerie);
        addImageClickListeners();
    });

    document.querySelector("#lastBtn").addEventListener("click", async () => {
        const galerie = await last();
        display_galerie(galerie);
        addImageClickListeners();
    });
});

function addImageClickListeners() {
    document.querySelectorAll(".gallery-image").forEach(img => {
        img.addEventListener("click", () => {
            const id = img.getAttribute("data-id");
            getPicture(id);
            window.location.hash = `#${id}`;
        });
    });
}



