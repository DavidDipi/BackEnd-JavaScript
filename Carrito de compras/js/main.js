document.addEventListener('DOMContentLoaded', () => {

    const elementos = [];

    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = formulario.querySelector('[name="name"]').value;
        const precio = parseFloat(formulario.querySelector('[name="price"]').value);
    
        if ( nombre && precio > 0 ) {
            const nuevoElemento = {
                id: elementos.length + 1,
                nombre,
                precio,
            };
    
            elementos.push(nuevoElemento);
    
            renderizarProductos();
    
            formulario.reset();
        }
    });

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    function renderizarProductos() {

        DOMitems.innerHTML = '';
        elementos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4', 'm-3');

            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');

            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;

            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text', 'text-success');
            miNodoPrecio.textContent = `${divisa}${info.precio}`;

            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }


    function anyadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'))
        renderizarCarrito();
    }

    function renderizarCarrito() {
        DOMcarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)]; 
        carritoSinDuplicados.forEach((item) => {
            const miItem = elementos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');

            miNodo.innerHTML = `
                ${miItem[0].nombre} - ${numeroUnidadesItem}x${divisa}${miItem[0].precio}
                <button class="btn btn-info mx-2" data-item="${item}" data-bs-toggle="modal" data-bs-target="#editarElemento">
                    |
                </button>
            `;
            DOMcarrito.appendChild(miNodo);

            // Agregar evento para editar el producto
            const botonEditar = miNodo.querySelector('button');
            botonEditar.addEventListener('click', () => {
                // Poblar el formulario de edición con los valores actuales del producto
                const productoEditar = elementos.find((itemBaseDatos) => itemBaseDatos.id === parseInt(item));
                const inputNombre = document.querySelector('#nombreEditar');
                const inputPrecio = document.querySelector('#precioEditar');
                const botonGuardarCambios = document.querySelector('#guardarCambios');

                if (productoEditar) {
                    inputNombre.value = productoEditar.nombre; // Configura el valor del campo de nombre
                    inputPrecio.value = productoEditar.precio; // Configura el valor del campo de precio
                }

                // Almacena el ID del producto que se está editando en el botón de guardar cambios
                botonGuardarCambios.dataset.item = item;
            });

            // Boton de guardar cambios en el modal de edición
            const botonGuardarCambios = document.querySelector('#guardarCambios');
            botonGuardarCambios.addEventListener('click', () => {
                const item = botonGuardarCambios.dataset.item;
                const productoEditar = elementos.find((itemBaseDatos) => itemBaseDatos.id === parseInt(item));
                const inputNombre = document.querySelector('#nombreEditar').value;
                const inputPrecio = document.querySelector('#precioEditar').value;

                if (productoEditar) {
                    productoEditar.nombre = inputNombre; // Actualiza el nombre del producto
                    productoEditar.precio = parseFloat(inputPrecio); // Actualiza el precio del producto
                }

                renderizarCarrito();


            });

            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-2');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        // Renderizamos el precio total en el HTML
        DOMtotal.textContent = calcularTotal();
    }

    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        renderizarCarrito();
    }

    function calcularTotal() {
        const totalNumerico = carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = elementos.find((itemBaseDatos) => {
                return itemBaseDatos.id === parseFloat(item);
            });
    
            return total + (miItem ? miItem.precio : 0);
        }, 0);
    
        return totalNumerico.toFixed(2);

    }

    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
    }

    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    renderizarProductos();
    renderizarCarrito();
});