        // Closure para manejar tareas
        const manejarTareas = (() => {
            // Obtenemos las tareas desde el Local Storage o un array vacío si no hay ninguna
            const obtenerTareas = () => {
                const tareas = localStorage.getItem('tareas');
                return tareas ? JSON.parse(tareas) : [];
            };

            // Guardamos las tareas en el Local Storage
            const guardarTareas = (tareas) => {
                localStorage.setItem('tareas', JSON.stringify(tareas));
            };

            // Agregar una nueva tarea
            const agregarTarea = (tarea) => {
                const tareas = obtenerTareas();
                tareas.push(tarea);
                guardarTareas(tareas);
                renderizarTareas();
            };

            // Eliminar una tarea por su índice
            const eliminarTarea = (indice) => {
                const tareas = obtenerTareas();
                tareas.splice(indice, 1);
                guardarTareas(tareas);
                renderizarTareas();
            };

            // Renderizar todas las tareas en la lista
            const renderizarTareas = () => {
                const listaTareas = document.getElementById('listaTareas');
                listaTareas.innerHTML = '';
                const tareas = obtenerTareas();
                tareas.forEach((tarea, indice) => {
                    const tareaItem = document.createElement('li');
                    tareaItem.className = 'list-group-item tarea';
                    tareaItem.innerHTML = `
                        <span>${tarea}</span>
                        <button class="btn btn-danger btn-sm" onclick="confirmarEliminar(${indice})">Eliminar</button>
                    `;
                    listaTareas.appendChild(tareaItem);
                });
            };

            return {
                agregarTarea,
                eliminarTarea,
                renderizarTareas
            };
        })();

        // Inicializamos la aplicación cargando las tareas almacenadas
        document.addEventListener('DOMContentLoaded', () => {
            manejarTareas.renderizarTareas();

            // Agregar tarea al hacer clic en el botón "Agregar Tarea"
            document.getElementById('agregarBtn').addEventListener('click', () => {
                const nuevaTareaInput = document.getElementById('nuevaTarea');
                const nuevaTarea = nuevaTareaInput.value.trim();
                if (nuevaTarea) {
                    manejarTareas.agregarTarea(nuevaTarea);
                    nuevaTareaInput.value = '';  // Limpiar el campo después de agregar
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'La tarea no puede estar vacía.',
                        confirmButtonText: 'Aceptar'
                    });
                }
            });
        });

        // Confirmar la eliminación de una tarea
        const confirmarEliminar = (indice) => {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás deshacer esta acción!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    manejarTareas.eliminarTarea(indice);
                    Swal.fire(
                        'Eliminada',
                        'La tarea ha sido eliminada.',
                        'success'
                    );
                }
            });
        };