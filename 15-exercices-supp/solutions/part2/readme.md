# Exercice 4: Remonter l'état du composant

*Essayez de faire l’exercice sans regarder le cours*

## Schema: https://www.dropbox.com/s/yl3h46mymy94jm1/Panier.png?dl=0

1. Reprendre le dossier X-exercices
2. Dans **components** creer un composant **Panier**.
3. Dans le dossier **components**, creer un composant ProduitPanier
4. Reprendre le panier de l'exercice 12 -> 03-panier, 
5. Creer un composant **QuantityInput** avec une div contenant: 
   - un bouton +
   - un input de type texte
   - un bouton - 
6. L'input utilisera comme value, la quantité recu via les props.
```
   ex: props.quantity
```
7. Creer une fonction onChangeHandler, et lier cette fonction avec l'événement onChange du champ input
8. La fonction onChangeHandler prend en parametre l'événement, et stock la valeur du champ dans une variable 
```
   ex: let newQuantity = event.target.value 
```
   - Convertir la nouvelle quantité en nombre (Par defaut, c'est du texte). 
```
   ex: newQuantity = parseInt(newQuantity)
```
   - on appellera la fonction editQuantity recu via les props en lui donnant la nouvelle quantité
```
   this.props.editQuantity(newQuantity)
```

9. Dans le composant, **ProduitPanier**, dans la balise &lt;tr&gt;, remplacer l'input et les boutons par le composant QuantityInput en lui donnant via les props la quantité et la fonction sendQuantity (on va la creer juste après).
```
   <QuantityInput quantity={...} editQuantity={(newQuantity) => { props.sendQuantity(props.id, newQuantity)}} />
```
10. Creer la fonction sendQuantity
   - la fonction appelera la fonction editQuantity recu via les props (La liste des produits est dans le composant Panier donc Panier transmet la fonction au composant enfant ProduitPanier qui transmet a son tour la fonction a son enfant: QuantityInput )
```
   props.editQuantity(id, newQuantity)
``` 

11. Dans le composant Panier creer une fonction editQuantity qui prend en parametre id et newQuantity:
   - copier le tableau de produits du state
   - récuperer l'index du produit dans le tableau grace à l'id du produit. [méthode findIndex](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
   - Si newQuantity est superieur à 0 et que produit.quantity est superieur à 1, on incremente la valeur
   - On peut mettre a jour le state avec le nouveau tableau modifié

