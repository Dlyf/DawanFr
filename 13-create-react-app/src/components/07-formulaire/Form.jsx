import React from 'react';

class Formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            age: 0,
            city: '',
        };
    }

    changerNom = (event) => {
        this.setState({
            nom: event.target.value
        })
    }

    changerPrenom = (event) => {
        this.setState({
            prenom: event.target.value
        })
    }

    onChangeHanlder = (event) => {
        const nomDuChamp = event.target.name;
        this.setState({
            // 'email': event.target.value
            [nomDuChamp]: event.target.value
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        {/* le champ devient controlé par React */}
                        <input value={this.state.nom} onChange={this.changerNom} type="text" name="name" id="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstname">Prenom</label>
                        <input value={this.state.prenom} onChange={this.changerPrenom} type="text" name="firstname" id="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={this.state.email} onChange={this.onChangeHanlder} type="email" name="email" id="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input value={this.state.age} onChange={this.onChangeHanlder} type="number" name="age" id="age" className="form-control"/>
                    </div>

                    <div>
                        <label htmlFor="cities">Ville</label>
                        <select onChange={this.onChangeHanlder} className="form-control form-control-lg" name="city" id="cities">
                            <option>Paris</option>
                            <option>Rennes</option>
                            <option>Nantes</option>
                            <option>Lyon</option>
                        </select>
                    </div>
                    <input type="submit" value="Valider" className="btn btn-success"/>
                </form>
            </div>
        );
    }
}
export default Formulaire;