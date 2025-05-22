
import { apiPhoto,baseUrl } from "./entryAPI.js";

export function loadPicture(idPicture){

    return fetch(apiPhoto + idPicture, {credentials: 'include'})
            .then(response => response.json())
            .catch(error => {
                console.log('fetch: net error : ' + error.message);
            })
}

export function loadRessource(uri){
    return fetch(baseUrl + uri, {credentials: 'include'})
            .then(response => response.json())
            .catch(error => {
                console.log('fetch: net error : ' + error.message);
            })
}