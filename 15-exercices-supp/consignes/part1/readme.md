# Exercice 5: Les composants 

*Essayez de faire l’exercice sans regarder le cours*
1. Générer une nouvelle application React nommée X-exercices
2. Supprimer App.test.js, index.css, logo.svg, reportWebVitals.js, setupTest.js:
3. Dans index.js supprimer l'import du CSS.
4. Dans  App.js supprimer l'import du logo et le contenu de la balise &lt;div&gt;

5. Dans le dossier **src**, creer un dossier **components**
6. *(facultatif)* Dans le dossier components, on peut creer un dossier ex1
7. Dans le dossier **components** ou **ex1**, creer un composant ProductItem.
8. Das le composant **ProductItem**, Creer une div avec la classe 'cards'.  
9. Das le composant **ProductItem**, dans la div 'card' ajouter:
   - Un titre h2 avec un nom de produit ex: Tarte (on modifira plus tard ces données)
   - Un paragraphe avec un prix ex: 4.5 (on modifira plus tard ces données)
   - Une div avec une classe 'more-infos'
      - Dans cette div 'more-infos', on ajoute un paragraphe avec une description
      - On creer un bouton +  et un bouton - 
10. Vous pouvez styliser avec Boostrap c'est éléments si vous le souhaitez

# Part 2

11. Créer un nouveau composant **ProductList**
12. Dans le composant **ProductList**, ajouter une liste de produits dans l'etat local.
13. Dans le composant **ProductList**, creer une div avec une classe 'cards'
14. Dans la div cards, afficher les produits en utilisant le composant **Produit** de la partie 1, en lui transmettrant via les props, les bonnes données.
```
   ex: <ProduitItem x={...} />
```
15. Dans le composant **ProductItem**, remplacer les valeurs du titre, prix et description par celles recus via les props.
14. Afficher le composant **ProductList** dans le composant **App**