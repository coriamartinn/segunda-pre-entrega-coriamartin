//DESARROLLO (SEGUNDA PRE ENTREGA CODER HOUSE)
let productos = [
    { id: 1, nombre: "1-Morral", categoria: "morrales", stock: 4, precio: 3500 },
    { id: 2, nombre: "1-Campera", categoria: "camperas", stock: 2, precio: 9500 },
    { id: 3, nombre: "1-Buzo", categoria: "buzos", stock: 6, precio: 7500 },
    { id: 4, nombre: "1-Gorra", categoria: "gorras", stock: 10, precio: 2000 },
    { id: 5, nombre: "2-Gorra nike", categoria: "gorras", stock: 3, precio: 2000},
    { id: 6, nombre: "2-Camperon", categoria: "camperas", stock: 1, precio: 15000},
    { id: 7, nombre: "2-buzo canguro", categoria: "buzos", stock: 9, precio: 8500},
    { id: 8, nombre: "1-remera nike", categoria: "remeras", stock: 5, precio: 3000},
    { id: 9, nombre: "2-remera adidas", categoria: "remeras", stock: 7, precio: 3000},
    { id: 10, nombre: "1-pantalon cargo", categoria: "pantalones", stock: 3, precio: 4500},
    { id: 11, nombre: "2-pantalon deportivo", categoria: "pantalones", stock: 8, precio: 6000}]
  
const carrito = []

  function mostrarProductos() {
    let mensaje = 'Productos disponibles:\n\n' 
    productos.forEach(item => {
      mensaje += `- ${item.nombre} (ID: ${item.id}) - Precio: $${item.precio}\n` 
    })
    alert(mensaje) 
  }
  
  function agregarAlCarrito() {
    const seleccion = parseInt(prompt('Ingrese el ID del producto que desea agregar al carrito:')) 
    const producto = productos.find(item => item.id === seleccion) 
    if (producto) {
      carrito.push(producto) 
      alert(`¡"${producto.nombre}" (ID: ${producto.id}) ha sido agregado al carrito!`) 
    } else {
      alert('El producto no existe.') 
    }
  }
  
  function mostrarCarrito() {
    if (carrito.length === 0) {
      alert('El carrito está vacío.') 
    } else {
      let mensaje = 'Carrito de compras:\n\n' 
      carrito.forEach(item => {
        mensaje += `- ${item.nombre} (ID: ${item.id}) - Precio: $${item.precio}\n` 
      }) 
      alert(mensaje) 
    }
  }
  
  function calcularTotal() {
    const total = carrito.reduce((suma, item) => suma + item.precio, 0) 
    return total 
  }
  
  function finalizarCompra() {
    const total = calcularTotal() 
    const opcion = prompt(`Total de la compra: $${total}\nSeleccione una opción de pago:\n1. Pago en efectivo\n2. Pago en cuotas`) 
  
    if (opcion === '1') {
      alert('Pago en efectivo seleccionado. Gracias por su compra.') 
      carrito.length = 0 
    } else if (opcion === '2') {
      const cuotas = parseInt(prompt('Ingrese la cantidad de cuotas (3, 6, 12, etc.):')) 
      const valorCuota = total / cuotas
      alert(`Pago en cuotas seleccionado. Deberá abonar ${cuotas} cuotas de $${valorCuota.toFixed(2)} cada una. Gracias por su compra.`) 
      carrito.length = 0 
    } else {
      alert('Opción inválida. Intente nuevamente.') 
      finalizarCompra() 
    }
  }

  mostrarProductos()
  
  while (true) {
    const opcion = prompt('Seleccione una opción:\n1. Agregar producto al carrito\n2. Mostrar carrito\n3. Finalizar compra\n4. Salir') 
    
    if (opcion === '1') {
      agregarAlCarrito() 
    } else if (opcion === '2') {
      mostrarCarrito() 
    } else if (opcion === '3') {
      if (carrito.length === 0) {
        alert('El carrito está vacío. Agregue productos antes de finalizar la compra.') 
      } else {
        finalizarCompra() 
        break 
      }
    } else if (opcion === '4') {
      break 
    } else {
      alert('Opción inválida. Intente nuevamente.')
    }
  }
  
  
  