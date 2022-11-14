// ITERATION 1 - Calcular el subtotal de los productos 

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  
  //Guardamos en variables los elementos html de precio y cantidad.
  const price = product.querySelector('.price span')
  const cantidad = product.querySelector('.quantity input')
  //console.log(price, cantidad)

  // Extraer los valores especificos de los elementos DOM 
  let innerPrice = price.innerHTML;
  let innerCantidad = cantidad.value;

  // Realizar el calculo del subtotal
  const subTotal = innerPrice*innerCantidad;
  //console.log(totalPrice)

  /* Añadir el resultado del subtotal dentro del input 
  subtotal del HTML. Accedemos a través del dom y lo modificamos con innerHTML*/
  product.querySelector('.subtotal span').innerHTML = 
  `
  <span>${subTotal}</span>
  `
  //hacemos un return del subtotal
  return subTotal;
}

// Calcular la suma de todos los subtotales y que aparezca en el TOTAL. 
function calculateAll() {
  //const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // guardamos en una variable todas las clases product.
  const allProducts = document.querySelectorAll('.product');
  /* inicializamos un bucle for para recorrer todos esos productos. 
  En este caso, aparecerán dos arrays (hemos creado un producto nuevo en html)
  indicamos que la funcion updateSubtotal ahora tenga de parametro
  los productos que hemos obtenido en la iteracion para que pueda
  aplicar la función creada para calcular todos los subtotales. 
  Ahora le indicamos que dentro de la variable total tiene que haber la suma 
  de todos los resultados obtenidos en la funcion de updateSubototal con 
  todos los productos recorridos en allProducts[i].
  */
    let total = 0;
    for (let i = 0; i < allProducts.length; i++) {
      updateSubtotal(allProducts[i])
      total += updateSubtotal(allProducts[i]);
      console.log(total)
    }

  // ITERATION 3
  /* Indicamos que dentro del span de total se refleje el resultado 
  de la variable total creada en el paso anterior y que almacena la suma 
  de todos los subtotales. */
    document.querySelector('#total-value span').innerHTML = 
    `
    <span>${total}</span>
    `
}

// ITERATION 4
/* Funcion para eliminar productos de la lista */
/*  Creamos una variable que almacena el target del evento.
event.currentTarget = identifica el target(objetivo) del evento. 
En este caso, indica que el target es:
<button class="btn btn-remove" id="remove">Remove</button>
Indicamos que el button sea eliminado a traves de parentElement. Le añadimos dos porque si añadimos solo uno, 
solo elimina un boton y nosotros queremos que elimine el padre de este boton, que es la fila completa. 
node.parentElement devuelve el nodo padre del DOM element o null si el nodo no tiene 
padre o si el padre no es un elemento DOM.
Volvemos a llamar a la funcion calculateAll para que recalcule de nuevo
*/
function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove(); 
  calculateAll();  
}

// ITERATION 5





// Codigo al cargar la pagina

window.addEventListener('load', () => {

  // calcular el precio de los productos
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // evento de click a los id con remove
const remove = document.querySelectorAll('.btn-remove');
remove.forEach((e) => e.addEventListener('click', removeProduct));

});
