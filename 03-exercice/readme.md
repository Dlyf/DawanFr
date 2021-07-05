# Exercice 1: Création de composants

*Essayez de faire l’exercice sans regarder le cours.*

1. Générer une nouvelle application nommée 03-exercices
2. Inclure Reactjs : 

        <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
   
3. Créer une div avec un id 'app'
4. Dans la balise div, créer un balise titre avec le titre de votre choix et stockez la dans une variable (Sans jsx).
5. Dans la balise div, créer une balise paragraphe qui affichera le message de votre choix (Sans jsx).
6. Dans la balise div, creer une balise img avec une image de votre choix (Sans jsx).
7. Creer une balise div avec la classe container, dans laquelle nous allons inclure les 3 precedentes.
7. Rendre la vue de la div container.

8. Inclure JXS (ne pas oublier de passer le type de la balise script sur text/babel). 
9. Inclure Font Awesome

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">

10. Créer un composant fonctionnel, qui retournera une balise header 
11. Dans la balise Header on mettra un titre h1
12. Dans la balise Header on mettra et un logo bookmark ou [une autre icone](https://fontawesome.com/icons?d=gallery)
13. Dans la balise Header on mettra une balise p avec n'importe quel chiffre
14. Inserer le composant dans la div container

15. Creer une classe composant, dont la fonction render reverra une div.
16. Dans cette div, on mettra une balise image, qui aura pour url, une chaine de caractere passé en props.
17. Dans cette div, on mettra une balise div avec dedans:

        - Un h2 pour le texte on utilisera les props. (title pour le nom par exemple)
        - Un p  pour le texte on utilisera les props. (overview pour le nom par exemple)
        - une div avec dedans un lien qui contiendra le texte 'voir plus'


14. Inserer le composant dans la div container, avec les attributs necessaire pour afficher les props