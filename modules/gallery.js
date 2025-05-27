import {loadResource} from "./photoloader.js";


export function load(){
    let galerie = [];
    loadResource().then(photos => {
        photos.photos.forEach(e => {
            galerie.push(e);
        });
    })
    return galerie;
}