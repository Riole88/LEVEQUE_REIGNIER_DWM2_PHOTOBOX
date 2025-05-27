import {loadResource} from "./photoloader.js";


export function load() {
    return loadResource().then(data => {
        return data.photos;
    });
}