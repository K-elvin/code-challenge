fetch(url, {
    method: 'POST', // Establece el método de la solicitud como POST
    headers: {
      'Content-Type': 'application/json' // Establece el tipo de contenido como JSON
    },
    body: JSON.stringify(data) // Convierte los datos a formato JSON y los agrega al cuerpo de la solicitud
  })
    .then(response => response.json()) // Convierte la respuesta del servidor a formato JSON
    .then(data => {
      // Hacer algo con la respuesta del servidor
       // Aca es donde puedes realizar acciones con la información recibida del servidor, como mostrarla en la página o procesarla de alguna manera.
    })
    .catch(error => {
      console.error('Error:', error); // Si ocurre un error en la solicitud, muestra un mensaje de error en la consola
    });
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();// Evita que el formulario se envíe de manera tradicional (recargando la página)
      
        // Obtención de los valores ingresados en los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
      
        // Creación de un objeto con los datos del formulario
        const data = {
          nombre: nombre,
          apellido: apellido,
          fechaNacimiento: fechaNacimiento
        };

      // Inicio de la solicitud HTTP POST utilizando fetch()
        fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',// Método de la solicitud
          headers: {
            'Content-Type': 'application/json' // Tipo de contenido (JSON)
          },
          body: JSON.stringify(data)// Conversión del objeto data a formato JSON y envío en el cuerpo de la solicitud
        })
          .then(response => response.json())// Conversión de la respuesta del servidor a formato JSON
          .then(data => {
            console.log('Respuesta del servidor:', data);// Mostrar en la consola la respuesta recibida del servidor
            // Aquí puedes mostrar la respuesta en la pantalla o realizar otras acciones
          })
          .catch(error => {
            console.error('Error:', error);// Manejo de errores en caso de que la solicitud falle
          });
      });
      