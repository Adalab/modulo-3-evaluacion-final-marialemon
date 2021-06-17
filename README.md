# Evaluación final María Núñez. React

## Requerimientos

### Listar personajes

Realizar una web con el listado de personajes de Rick and Morty, utilizando el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve información sobre los primeros 20 personajes de la serie.

Sobre cada uno, vamos a pintar al menos:

- Foto
- Nombre
- Especie

### Filtrar personajes

La segunda parte consiste en poder buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas.

### Detalle de personajes

Al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React router. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

## Directory Structure

```
src
 ├─ components
 |  ├─ App.js
 |  ├─ CharacterCard.js
 |  ├─ CharacterDetail.js
 |  ├─ CharacterList.js
 |  ├─ FilterByName.js
 |  ├─ FilterBySpecies.js
 |  └─ Filters.js
 |
 ├─ images
 |  └─ Rick_and_Morty_logo.png
 |
 └─ index.js
```

## Components Architecture

![Project Structure](./src/images/project-structure.jpg)

## Run project

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
