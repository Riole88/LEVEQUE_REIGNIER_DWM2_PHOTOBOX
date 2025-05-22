import {loadPicture, loadRessource} from "./photoloader.js";
import { displayCommentaire, displayPicture, displayRessource } from "./ui.js";

function getPicture(id){
    loadPicture(id).then(data => 
        {
            displayPicture(data.photo); 
            //Charge les ressources
            loadRessource(data.links.categorie.href).then(data => {displayRessource(data)});
            //Charge les commentaires
            loadRessource(data.links.comments.href).then(data => {displayCommentaire(data)})
        });
}

getPicture(window.location.hash ? window.location.hash.substr(1): 105);

