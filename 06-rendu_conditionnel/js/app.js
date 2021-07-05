function shouldPrint(isOk) {
    if (isOk == true) {
        return (
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dignissimos, ipsum doloribus enim ab consequuntur aliquid soluta iste obcaecati ut repellat possimus fuga reiciendis maiores a atque recusandae officiis minima.
            </p>
        )
    } else {
        return <p>Aucun texte à afficher</p>
    }
}

function App() {
    const isOk = true;
    return (
        <React.Fragment>
            <h2>Avec fonction</h2>
            {
                shouldPrint(isOk)
            }
            {
                /* Est-ce que isOk est egal a false ? si oui on affiche le paragraphe 
                    sinon (:) on affiche le lien  
                */
            }
            <h2>Avec ternaire</h2>
            {
                (isOk == false) ? 
                    <p>Super Ternaire</p> 
                    : 
                    <a href="#">Revenir a l'accueil</a>
            }
        </React.Fragment>
    );
}


ReactDOM.render(<App/>, document.getElementById('root'));