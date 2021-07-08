const produits = [
    {
       "id":1,
       "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
       "price":109.95,
       "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    },
    {
       "id":2,
       "title":"Mens Casual Premium Slim Fit T-Shirts ",
       "price":22.3,
       "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    },

    {
       "id":3,
       "title":"Mens Cotton Jacket",
       "price":55.99,
       "description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    }
];

function Produit(props) {
   return (
      <tr>
         <td>{props.id}</td>
         <td>{props.title}</td>
         <td>{props.price}</td>
         <td>{props.description}</td>
         <td>
            <p>This is a tooltip <TooltipTrigger tooltip={TooltipContent}>example</TooltipTrigger>!</p>
         </td>
      </tr>
   );
}

function Produits() {
   function createTableRow(produit) {
      // return <Produit {...produit}/>
      return <Produit 
         key={produit.id}
         id={produit.id} 
         title={produit.title} 
         price={produit.price} 
         description={produit.description}
         />;
   }

   return (
      <React.Fragment>
         {/* if (produits.lenght == 0) */}
         {
            (!produits.length) ? <p>La liste est vide.</p> : 
            <table border="1">
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Nom</th>
                     <th>Prix</th>
                     <th>Description</th>
                  </tr>
               </thead>
               <tbody>
                    {/* { produits.filter(p=>p.title.includes('a')).map(createTableRow)} */}
                    { produits.map(createTableRow)}
               </tbody>
            </table>
         }
      </React.Fragment>
   );
}

ReactDOM.render(<Produits/>, document.getElementById('root'))