# Exercice 4.2: Etat d'un composant

*Essayez de faire l’exercice sans regarder le cours.*
1. Générer une nouvelle application nommée *12-exercices/**02-changer-nom***
2. Inclure Reactjs & JSX: 

        <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>


3. Dans le HTML, Créer une div avec un id 'app' ou 'root'
4. Dans index.js, Créer une classe composant App qui affichera une div vide pour le moment.
5. Creer une **classe composant** Personne
6. Dans le composant Personne:
7. Dans l'etat du composant, mettre une propriete prenom vide pour le moment
8. Créer un paragraphe qui affiche le prenom
9. Créer un champ avec un événement onChange et le relier a une méthode changerNom
10. Creer la méthode changerNom, comme on utilisera 'this' pour acceder a l'etat du composant, il faut garder le contexte du composant avec une fonction flechée ou un bind. 
11. Dans la méthode, mettre à jour le prenom en utilisant la saisi utilisateur.
```
 this.setState()
```
