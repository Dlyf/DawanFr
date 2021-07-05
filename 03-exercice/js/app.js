const h2Element = React.createElement('h2', null, 'Amet laboris quis aute deserunt cupidatat non ad tempor.');

ReactDOM.render(h2Element, document.getElementById('root'));

const imgElement = React.createElement('img', {src: 'https://picsum.photos/200/300', alt: 'Aleatoire'});
const pElement = React.createElement('p', null, 'Sunt ad proident deserunt voluptate aliquip minim qui voluptate minim est amet voluptate.');

const divContainerElement = React.createElement('div', {}, 
    h2Element,
    imgElement,
    pElement
);

ReactDOM.render(divContainerElement, document.getElementById('root'));
