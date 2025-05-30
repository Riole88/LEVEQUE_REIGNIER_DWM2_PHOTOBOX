import {loadResource} from "./photoloader.js";

let currentLinks = {};

export function load(uri) {
    return loadResource(uri).then(data => {
        let next = data.links.next.href;
        let prev = data.links.prev.href;

        currentLinks = { next, prev };
        return data.photos;
    });
}

export function next(){
    return load("https://webetu.iutnc.univ-lorraine.fr" + currentLinks.next);
}

export function prev(){
    return load("https://webetu.iutnc.univ-lorraine.fr" + currentLinks.prev);
}