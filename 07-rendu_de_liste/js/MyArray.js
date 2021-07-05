class MyArray {
    // Le nom de la fonction est imposée, elle permet l'initialisation de nos objets.
    // Regroupe tous les arguments(parametre) sous forme de tableau, on peut 
    // en donner autant qu'on veut
    constructor(...prenoms) {
        this.monTableau = prenoms;
        console.log(this.monTableau);
    }

    // myForEach(afficherPrenom) {
    myForEach(uneFonction) {
        for (const element of this.monTableau) {
            uneFonction(element);
            // afficherPrenom(element)
            // afficherPrenom("Rick")
        }
    }

    myFilter(myCallBack) {
        let new_tableau = [];
        for (const element of this.monTableau) {
            let isOk = myCallBack(element);
            if (isOk) {
                new_tableau.push(element);
            }
        }
        return new_tableau;
    }

    myMap(myCallBack) {
        let new_tableau = [];
        for (const element of this.monTableau) {
            const resultat = myCallBack(element);
            new_tableau.push(resultat);
        }
        return new_tableau;
    }
}


const array = new MyArray('item1', 'item2', 'item3');
const new_array = array.myMap(elt => <li>{elt}</li>);
console.log(new_array);