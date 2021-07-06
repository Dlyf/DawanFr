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

    render() {
        return (
            <div>
                {/* pas de parentheses lors de l'appel */}
                <button onClick={this.sayHello}>Dire Bonjour</button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));