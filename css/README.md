# Organización del CSS

`main.css` es el único archivo CSS local que carga `index.html`.

- `variables.css`: colores, tipografía, espacios y otras variables compartidas.
- `base.css`: estilos generales, contenedores y elementos HTML.
- `components/buttons.css`: botones compartidos.
- `components/navbar.css`: cabecera y navegación.
- `sections/`: un archivo por sección de la página.
- `sections/visit.css`: Visit Us y su FAQ.
- `booking.css`: reservado para la futura página de reservas; actualmente vacío y sin importar.

Edita cada sección en su archivo. Sus media queries están en el mismo archivo, después de sus reglas principales. No agregues otro enlace CSS al HTML.

Para una sección nueva, crea su archivo en `sections/` y añade su `@import` al final de `main.css`. Mantén las variables, la base y los componentes antes de las secciones. Los imports deben preceder a cualquier regla CSS.

Los antiguos `home.css` y `components.css` fueron repartidos entre estos archivos. No se necesita compilación ni instalar herramientas.
