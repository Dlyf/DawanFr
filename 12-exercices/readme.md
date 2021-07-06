# Exercice 4: Etat d'un composant

*Essayez de faire l’exercice sans regarder le cours. Vous pouvez reprendre le composant Aliment de 08-exercice/01-aliments si vous le souhaitez. Il faut utiliser une classe composant*
1. Générer une nouvelle application nommée 06-exercices
2. Inclure Reactjs & JSX: 

        <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>


3. Dans le HTML, Créer une div avec un id 'app' ou 'root'
4. Dans index.js, Créer une classe composant App qui affichera une div vide pour le moment.
5. Créer un constante tout en haut du fichier, avec les aliments de votre choix (riz, veste etc...) (Tableau de string)
6. Creer une **classe composant** Aliments
7. Dans le composant Aliments:
        - Si la liste des aliments est vide on affiche 'La liste est vide'
        - Si il y a des elements dans la liste on affichera une liste (ul) avec les aliments dedans.
8. Inclure le composant Aliments dans le rendu du composant App
9. Vous pouvez styliser le tout avec bootstrap si vous le voulez.

# Part 2

10. Dans la classe composant Aliments ajouter dans le constructeur l'etat du composant
11. Placer le tableau d'aliment dans l'etat du composant.
12. Utiliser ce tableau dans le state dans le reste du composant.