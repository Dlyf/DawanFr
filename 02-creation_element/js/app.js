/* Creation d'un element HTML. React.createElement prend 3 paramètres
*    - Le nom de la balise HTML (a, p, div ...)
*    - Les attributs HTML sous forme d'objet  {src: 'https://...', alt: ''}
*    - Le contenu de la balise texte ou enfants
*/ 
const element = React.createElement("h1", {}, "Hello World !");

// Insertion de l'élément dans le DOM
ReactDOM.render(element, document.getElementById('root'));