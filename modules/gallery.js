import {loadResource} from "./photoloader.js";

let currentLinks = {};

export function load(uri) {
    return loadResource(uri).then(data => {
        let next = data.links.next.href;
        let prev = data.links.prev.href;
        let first = data.links.first.href;
        let last = data.links.last.href;

        currentLinks = { next, prev, first, last };
        return data.photos;
    });
}

export function next(){
    console.log("https://webetu.iutnc.univ-lorraine.fr" + currentLinks.next);
    return load("https://webetu.iutnc.univ-lorraine.fr" + currentLinks.next);
}

export function prev(){
    return load("https://webetu.iutnc.univ-lorraine.fr" + currentLinks.prev);
}

export function first(){
    return load("https://webetu.iutnc.univ-lorraine.fr" + currentLinks.first);
}

export function last(){
    return load("https://webetu.iutnc.univ-lorraine.fr" + currentLinks.last);
}