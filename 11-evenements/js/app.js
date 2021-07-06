class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { }
    // }
    state = {
        prenoms: ['John', 'Maude', 'Ella', 'Rick']
    }

    sayHello() {
        console.log("Bonjour !");
    }

    // l'argument event est transmit automatiquement par Reactjs
    afficherEvent(event) {
        console.log(event);
    }

    afficherSaisi(event) {
        console.log(event.target.value); 
    }

    getId(id) {
        console.log("Id: ", id);
    }

    // transmitGetId() {
    //     this.getId(5)
    // }
    render() {
        return (
            <div>
                {/* pas de parentheses lors de l'appel */}
                <button onClick={this.sayHello}>Dire Bonjour</button>
                <button onClick={this.afficherEvent}>Afficher Evenement</button>
                <input type="text" placeholder="ex: John" onChange={this.afficherSaisi}/>
                {/* <button onClick={this.getId}>Recuperer Id</button> <- Envoi automatiquement l'evenement en parametre */}
                {/* <button onClick={this.getId(5)}>Recuperer Id</button> <- Fonctionnera seulement une seule fois au chargement de la page  */}
                {/* 
                    Lorsqu'on clique sur le bouton, la fonction fléchée est executée, et son role c'est d'executer
                    votre fonction avec le bon argument (la bonne valeur)
                 */}
                <button onClick={() => this.getId(5)}>Recuperer Id</button>
                {/* <button onClick={this.transmitGetId}>Recuperer Id</button> */}
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));