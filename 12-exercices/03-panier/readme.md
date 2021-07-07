# Exercice 3.3: Etat d'un composant

*Essayez de faire l’exercice sans regarder le cours*
1. Générer une nouvelle application nommée *12-exercices/**03-panier***
2. Inclure Reactjs & JSX: 

        <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">



3. Dans le HTML, Créer une div avec un id 'app' ou 'root'
4. Dans index.js, Créer une classe composant App qui affichera une div vide pour le moment.
5. Creer une **classe composant** Panier vide pour le moment
6. Dans le constructeur du composant panier, ajouter l'etat du composant avec un tableau de produit avec les propriétés suivantes:

```
ex: produitPanier = [
        {id: 1, title: '', price: 0.0, quantity: 0}
]
```
7. Dans le composant Panier (On peut reprendre le tableaux de l'exercice 08 -> 02-produits):  
- Si la liste des aliments est vide on affiche 'La liste est vide'
- Si il y a des elements dans la liste on affichera un tableau HTML (table) qui affichera tous les produits avec le noms des colonnes suivantes: index, Nom, Quantité, Prix, Action
8. Dans le composant, Panier afficher directement les rangées sans composant intermediaire (Pour cet exercice, on ne sait pas encore comment mettre a jour l'etat d'un composant parent).
9. Dans la ligne *Quantité* on mettra deux boutons (+ et -) et une &lt;span&gt; avec la quantité
10. Dans la colonne *Action* on mettra une icone poubelle ou le texte 'supprimer du panier'

# Part 2

12. Lorsque l'on clique sur le bouton, + l'evenement onClick appelle la fonction incrementer avec en argument l'id du produit
13. Creer la methode incrementer qui prendra en parametre un id (Penser à garder le contexte)
```
incrementer(id) {}
```
14. Dans la méthode incrementer, grace à l'id, on recupere le produit correspondant avec la [methode find par exemple](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
```
   arr.find(produit => produit.id == id)
```
15. On incremente la quantité du produit
16. on modifie l'etat du composant avec la methode setState();

13. Lorsque l'on clique sur le bouton, - on decremente la quantité du produit avec le meme procédé que l'etape précédente
