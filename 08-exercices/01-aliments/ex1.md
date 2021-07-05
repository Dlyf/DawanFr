# Exercice 2.1: Mise en pratique

*Essayez de faire l’exercice sans regarder le cours.*

1. Générer une nouvelle application nommée 06-exercices
2. Inclure Reactjs & JSX: 

        <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

   
3. Dans le HTML, Créer une div avec un id 'app' ou 'root'
4. Dans index.js, Créer une classe composant App qui affichera une div vide pour le moment.
8. Créer un constante tout en haut du fichier, avec les aliments de votre choix (riz, pates etc...) (Tableau de string)
5. Creer une fonction composant Aliments
6. Dans le composant Aliments:  
  - Si la liste des aliments est vide on affiche 'La liste est vide'
  - Si il y a des elements dans la liste on affichera une liste (ul) avec les aliments dedans.
7. Inclure le composant Aliments dans le rendu du composant App
8. Vous pouvez styliser le tout avec bootstrap si vous le voulez.
