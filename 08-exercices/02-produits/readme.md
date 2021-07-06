# Exercice 2.2: Mise en pratique

   
1. Créer un constante tout en haut du fichier, un tableau qui contient les produits de votre choix. Un produit est un objet avec un titre, une description et un prix.

```
 {title: '', description '', price: 0}
```

2. Creer une classe composant Produits
3. Dans le composant Produits, dans la fonction render:
    - Si la liste des produits est vide on affiche 'La liste est vide'
    - Si il y a des elements dans la liste on affichera un tableau HTML (table) qui affichera tous les produits à l'aide du rendu de liste (boucle)

4. Inclure le composant Produits dans le rendu du composant App

5. A ce stade on se rend compte, que le composant Produits est trop complexe. On peut donc creer un composant nouveau Produit (au singulier) qui sera en charge d'afficher un produit. 

5. Vous pouvez styliser le tout avec bootstrap si vous le voulez.


---

# Part 2


6. A ce stade on se rend compte, que le composant Produits est trop complexe. On peut donc creer un composant nouveau Produit (au singulier) qui sera en charge d'afficher un produit. 

7. Creer une fonction composant Produit

8. Ce composant affichera une rangée du tableau. (tr)

9. On utilisera le composant Produit dans Produits à la place des &lt;tr&gt;

10. Vous pouvez styliser le tout avec bootstrap si vous le voulez.