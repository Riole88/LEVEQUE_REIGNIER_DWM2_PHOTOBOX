export function displayPicture(image) {
    const imgTemplate = document.querySelector('#photoTemplate').innerHTML;
    const template = Handlebars.compile(imgTemplate);
    let url = "https://webetu.iutnc.univ-lorraine.fr" + image.url.href;
    document.querySelector("#la_photo").innerHTML = template( { url : url,
                                                                    titre : image.titre,
                                                                    description : image.descr,
                                                                    type : image.type});
}

export function displayCategorie(categorie) {
    const categorieTemplate = document.querySelector('#categorieTemplate').innerHTML;
    const template = Handlebars.compile(categorieTemplate);
    document.querySelector("#la_categorie").innerHTML = template( { categorie : categorie.nom });
}

export function displayComments(comments) {
    const commentsTemplate = document.querySelector('#commentsTemplate').innerHTML;
    const template = Handlebars.compile(commentsTemplate);
    document.querySelector("#les_commentaires").innerHTML = template( { comments : comments });
}