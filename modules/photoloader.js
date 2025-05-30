import {API_PHOTO} from '../conf/conf.js';

export function loadPicture(idPicture) {
    return fetch(`${API_PHOTO}/photos/${idPicture}`)
        .then( res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(`Erreur HTTP : ${res.status}`);
            }
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

export function loadSource(uri) {
    let endUri = uri.split("api")[1];
    return fetch(`${API_PHOTO}${endUri}`)
        .then( res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(`Erreur HTTP : ${res.status}`);
            }
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

export function loadResource(uri = null) {
    let finalUrl;

    if (!uri) {
        finalUrl = `${API_PHOTO}/photos`;
    } else {
        finalUrl = `${uri}`;
    }

    return fetch(finalUrl)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(`Erreur HTTP : ${res.status}`);
            }
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}