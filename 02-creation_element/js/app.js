/* Creation d'un element HTML. React.createElement prend 3 paramètres
*    - Le nom de la balise HTML (a, p, div ...)
*    - Les attributs HTML sous forme d'objet  {src: 'https://...', alt: ''}
*    - Le contenu de la balise texte ou enfants
*/ 
const element = React.createElement("h1", {}, "Hello World !");

// Insertion de l'élément dans le DOM
ReactDOM.render(element, document.getElementById('root'));


// On ne peut utiliser ReactDOM.render() qu'une seule fois, sinon on écrase le contenu précédent
// const element2 = React.createElement("h2", {}, "Toto !");
// ReactDOM.render(element2, document.getElementById('root'));

/**
 * <ul>
 *       <li>...</li>
 * </ul>
 */
const listeElement = React.createElement("ul", {}, 
    React.createElement('li', {}, 'Elephant'),
    React.createElement('li', {className: 'li-item'}, 'Elan'),
    React.createElement('li', {id: 'li-1'}, React.createElement("a", {href: '#'}, 'Epervier'))
);

ReactDOM.render(listeElement, document.getElementById('root'));