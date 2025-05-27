export function display_galerie(galerie) {
    const galerieTemplate = document.querySelector('#galerieTemplate').innerHTML;
    const template = Handlebars.compile(galerieTemplate);
    document.querySelector("#galerie").innerHTML = template( { galerie : galerie });
}