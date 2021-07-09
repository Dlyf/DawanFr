# Exercice: ReShopAct

1. Installer Boostrap, Boostrap Icon, react-router-dom
2. Creer une fonction composant **Header**:
    - Un titre
    - Un logo

3. Importer ce **Header** dans le composant App

4. Creer un Composant **ProduitListe**

5. Ce composant **ProduitListe**, mettre un etat local avec une liste de produits.

6. Afficher cette liste de produits. (Vous pouvez creer un composant ProduitItem pour separer la logique si vous le souhaitez.)
  - Une image
  - Un titre
  - Un prix
  - Une description
  - Une quantite
  - Un lien qui permet de naviguer vers une autre page.

7. Une fois que votre liste est affichée, creer un dossier **router**

8. Dans le dossiers router, creer un fichier routes.js

9. Creer une fonction composant qui contiendra toutes vos routes

```
    ex: <Route path="/" component={Welcome}>
```

10. Dans le composant **App**, Importer le composant BrowserRouter

```
    ex: <BrowserRouter></BrowserRouter>
```

11. Dans le composant BrowserRouter, inclure Votre composant Routes
```
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
```

12. Creer une route '/' qui affichera votre composant </ProduitListe>

13. Creer un composant **ProduitDetail** qui affichera les details d'un produit (Factice pour le moment) et l'id recu via l'url


14. Creer une route qui affichera votre composant **ProduitDetail**, et qui prendra un parametre Id 

```
    /produits/5
```

