const prenoms = [
    'Rick',
    'Beth',
    'Summer',
    'Jerry',
    'Morty'
];


class App extends React.Component {

    createPrenomsArray() {
        // [ <li>item 1</li>, <li>item 2</li> ]
        const prenomsElementJSX = [];

        // console.log(Array.from(prenoms.entries()));
        
        // for (const item of prenoms.entries()) {
        //     console.log(item);
        //     // const index = item[0];
        //     // const prenom = item[1];
        //     const [index, prenom] = item;
        //     const elementJSX = <li key={index+prenom}>{prenom}</li>
        //     prenomsElementJSX.push(elementJSX);
        // }

        for (const [index, prenom] of prenoms.entries()) {
            const elementJSX = <li key={index+prenom}>{prenom}</li>
            prenomsElementJSX.push(elementJSX);
        }

        return prenomsElementJSX;
    }

    render() {
        return (
            <React.Fragment>
                <h2>Liste des prénoms</h2>
                {/* { for (prenom of prenom) ...}  <- ne fonctionne pas*/}
                <ul>
                    { this.createPrenomsArray() }
                </ul>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));