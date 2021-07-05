const h2Element = React.createElement('h2', null, 'Amet laboris quis aute deserunt cupidatat non ad tempor.');

ReactDOM.render(h2Element, document.getElementById('root'));

const imgElement = React.createElement('img', {src: 'https://picsum.photos/200/300', alt: 'Aleatoire'});
const pElement = React.createElement('p', null, 'Sunt ad proident deserunt voluptate aliquip minim qui voluptate minim est amet voluptate.');

const headerElement = (
    <header>
        <h1>Lorem Ipsum</h1>
        <i class="fas fa-shopping-cart"></i>
        <p>0</p>
    </header>
);
const divContainerElement = React.createElement('div', {}, 
    h2Element,
    imgElement,
    pElement,
    headerElement
);

ReactDOM.render(divContainerElement, document.getElementById('root'));


