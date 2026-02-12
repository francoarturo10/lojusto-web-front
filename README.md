# 🥪 Lo Justo Web — Proyecto Frontend
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Axios](https://img.shields.io/badge/Axios-1.13-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![Lucide React](https://img.shields.io/badge/Lucide--React-0.563-000000?logo=lucide&logoColor=white)](https://lucide.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-7.13-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://ventas-react-tailwind.vercel.app/)

Esta aplicación lo contruí con React 19, Vite, Tailwind CSS 4, y React Router, diseñada para mostrar la carta, ubicación y secciones principales del negocio Lo Justo, un restaurante de comida rápida ubicado en Trujillo, Perú.

La página presenta categorías, productos, sliders promocionales, estructura de navegación completa y una página optimizada para dispositivos móviles.

## Despliegue en vercel

> Link: https://lojusto-web.vercel.app/

## 🖼 Funcionalidades Principales

### Página de Inicio
- Slider con banners promocionales.
- Sección "Nuestra Carta".
- Información de "Sobre Nosotros" con grid responsivo.
- Imágenes destacadas de productos.

### Página de Carta

- Filtro dinámico por categorías.
- Renderizado automático según categoriaId.

### Página de Ubicación

- Mapa interactivo con Google Maps Embed API.

### Layout General

- Navbar + Footer global.
- Contenedor principal con <Outlet />.

## 🚀 Tecnologías Utilizadas

- React 19

- Vite

- Tailwind CSS 4

- React Router DOM 

- Axios

- Lucide React

- React Icons

- SWC (plugin react-swc)

### 📁 Estructura del Proyecto

```text
/src
 ├── components
 │   ├── Navbar.jsx
 │   ├── Footer.jsx
 │   ├── Slider.jsx
 │   ├── CardCat.jsx
 │   ├── SelectCat.jsx
 │   └── ProdCarta.jsx
 │
 ├── pages
 │   ├── InicioPage.jsx
 │   ├── CartaPage.jsx
 │   └── UbiPage.jsx
 │
 ├── layout
 │   └── HomeLayout.jsx
 │
 ├── router
 │   └── router.jsx
 │
 ├── arrayObject
 │   ├── catArray.js
 │   └── prodArray.js
 │
 ├── index.css
 └── main.jsx
```

## 🧭 Rutas Disponibles
Rutas gestionadas mediante React Router DOM, con un layout principal incluido:

|    Ruta    | Componente | Descripcion|
| :--- | :---: | ---: |
| / | InicioPage | Página principal con slider y categorías|
| /carta     | CartaPage  | Vista filtrada por categorías con productos dinámicos |
| /ubicacion | UbiPage    | Mapa de Google Maps con la ubicación del local|

```jsx
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children: [
      { index: true, element: <InicioPage/> },
      { path: '/carta', element: <CartaPage/> },
      { path: '/ubicacion', element: <UbiPage/> },
    ]
  }
])

```

## 🎨 Estilos con Tailwind CSS 4
El proyecto utiliza Tailwind 4 con modo @theme, incluyendo colores personalizados:
```css
@theme {
  --color-brand-red: #c41e3a;
  --color-brand-yellow: #f4b41a;
  --color-brand-black: #0d0d0d;
  --color-bg-main: #121212;
  --background-image-brand-linear: linear-gradient(to right, #c41e3a, #f4b41a);
}

```

## 🍔 Datos del Proyecto (Categorías y Productos)
El sistema incluye datos estáticos:

### 🗂 Categorías (catArray)
- Burger de carne
- Burger de pollo
- Burger de chorizo
- Salchipapas
- Alitas broaster
- Pollo broaster
- Agregados
- Bebidas

### 🍟 Productos (prodArray)
Incluye hamburguesas, salchipapas, alitas broaster (3–25 piezas), agregados y bebidas.
Cada producto posee:
```js
{
  id,
  nombre,
  precio,
  descripcion,
  categoriaId,
  imagen
}

```