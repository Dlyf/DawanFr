class Person extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }
    state = {
        prenom: ''
    }

    changerNom = (event) => {
        // console.log(event.target.value);
        const nouveauPrenom = event.target.value;
        this.setState({
            prenom: nouveauPrenom
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <p>Prénom: {this.state.prenom}</p>
                <input 
                    type='text' 
                    placeholder="ex: John" 
                    onChange={this.changerNom} />
                    {/* onChange={(event) => this.changerNom(event)} /> */}
            </React.Fragment>
        );
    }
}
ReactDOM.render(<Person/>, document.getElementById('root'));