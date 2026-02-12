export const catArray = [
    {
        id: 1,
        nombre: 'Burger de Carne',
        image: './productos/doble-bc.png'
    },
    {
        id: 2,
        nombre: 'Burger de Pollo',
        image: './pollo/pollo-bc.png'
    },
    {
        id: 3,
        nombre: 'Burger de Chorizo',
        image: './chorizo/chorizo-carne.png'
    },
    {
        id: 4,
        nombre: 'Salchis',
        image: './salchis/salchichaufa.png'
    },
    {
        id: 5,
        nombre: 'Alitas Broaster',
        image: './alitas/alitas-25.png'
    },
    {
        id: 6,
        nombre: 'Pollo Broaster',
        image: './broaster/pollo-broaster.png'
    },
    {
        id: 7,
        nombre: 'Agregados',
        image: './agregados/carne.png'
    },
    {
        id: 8,
        nombre: 'Bebidas',
        image: './productos/'
    },
]
export const prodArray = [
  // Burger de Carne (ID 1)
  { id: 1, nombre: 'Simple', precio: 6.00, descripcion: 'carne + papas al hilo + ensalada', categoriaId: 1, imagen:'./productos/simple.png' },
  { id: 2, nombre: 'Royal', precio: 7.00, descripcion: 'carne + huevo + papas al hilo + ensalada', categoriaId: 1, imagen:'./productos/royal.png' },
  { id: 3, nombre: 'Royal Cheese', precio: 8.00, descripcion: 'carne + huevo + queso + papas al hilo + ensalada', categoriaId: 1, imagen:'./productos/royal-cheese.png' },
  { id: 4, nombre: 'La Doble', precio: 10.00, descripcion: 'doble carne + huevo + papas al hilo + ensalada', categoriaId: 1, imagen:'./productos/la-doble.png' },
  { id: 5, nombre: 'Extrema', precio: 12.00, descripcion: 'carne + huevo + chorizo + queso + tocino + papas al hilo + ensalada', categoriaId: 1, imagen:'./productos/extrema.png' },
  { id: 6, nombre: 'Doble Bacon Cheese', precio: 14.00, descripcion: 'doble carne + doble queso + doble tocino + papas al hilo + ensalada', categoriaId: 1, imagen:'./productos/doble-bc.png' },

  // Burger de Pollo (ID 2)
  { id: 7, nombre: 'Filete de Pollo', precio: 10.00, descripcion: 'filete de pollo + huevo + papas al hilo + ensalada', categoriaId: 2, imagen: './pollo/burger-pollo.png' },
  { id: 8, nombre: 'Filete Bacon Cheese', precio: 14.00, descripcion: 'filete de pollo + huevo + doble queso + doble tocino + papas al hilo + ensalada', categoriaId: 2, imagen: './pollo/pollo-bc.png' },

  // Burger de Chorizo (ID 3)
  { id: 9, nombre: 'Choripan', precio: 6.00, descripcion: 'chorizo + papas al hilo + ensalada', categoriaId: 3, imagen: './chorizo/chorizo.png' },
  { id: 10, nombre: 'Chorihuevo', precio: 7.00, descripcion: 'chorizo + huevo + papas al hilo + ensalada', categoriaId: 3, imagen: './chorizo/chorizo.png' },
  { id: 11, nombre: 'Choriburger', precio: 10.00, descripcion: 'chorizo + carne + huevo + papas al hilo + ensalada', categoriaId: 3, imagen: './chorizo/chorizo-carne.png' },

  // Salchis (ID 4)
  { id: 12, nombre: 'Salchipapa', precio: 7.00, descripcion: 'hot dog + papas fritas + ensalada', categoriaId: 4, imagen: './salchis/salchipapa.png' },
  { id: 13, nombre: 'Choripapa', precio: 8.00, descripcion: 'chorizo + papas fritas + ensalada', categoriaId: 4, imagen: './salchis/choripapa.png' },
  { id: 14, nombre: 'Salchi Chorizo', precio: 9.00, descripcion: 'chorizo + hot dog + papas fritas + ensalada', categoriaId: 4, imagen: './salchis/salchichorizo.png' },
  { id: 15, nombre: 'Salchipollo', precio: 10.00, descripcion: 'pollo frito + papas fritas + ensalada', categoriaId: 4, imagen: './salchis/salchipollo.png' },
  { id: 16, nombre: 'Salchimix', precio: 11.00, descripcion: 'chorizo + hot dog + arroz chaufa + papas fritas + ensalada', categoriaId: 4, imagen: './salchis/salchimix.png' },
  { id: 17, nombre: 'Salchichaufa', precio: 12.00, descripcion: 'pollo frito + papas fritas + arroz chaufa + ensalada', categoriaId: 4, imagen: './salchis/salchichaufa.png' },

  // Alitas Broaster (ID 5)
  { id: 18, nombre: '3 Piezas', precio: 12.00, descripcion: '3 piezas + porción de papa', categoriaId: 5, imagen: './alitas/alitas-3.png' },
  { id: 19, nombre: '4 Piezas', precio: 14.00, descripcion: '4 piezas + porción de papa', categoriaId: 5, imagen: './alitas/alitas-3.png' },
  { id: 20, nombre: '5 Piezas', precio: 17.00, descripcion: '5 piezas + porción de papa', categoriaId: 5, imagen: './alitas/alitas-5.png' },
  { id: 21, nombre: '10 Piezas', precio: 27.00, descripcion: '10 piezas + porción de papa', categoriaId: 5, imagen: './alitas/alitas-10.png' },
  { id: 22, nombre: '15 Piezas', precio: 38.00, descripcion: '15 piezas + 2 porciones de papa', categoriaId: 5, imagen: './alitas/alitas-20.png' },
  { id: 23, nombre: '20 Piezas', precio: 48.00, descripcion: '20 piezas + 2 porciones de papa', categoriaId: 5, imagen: './alitas/alitas-20.png' },
  { id: 24, nombre: '25 Piezas', precio: 58.00, descripcion: '25 piezas + 3 porciones de papa', categoriaId: 5, imagen: './alitas/alitas-25.png' },

  // Broaster (ID 6)
  { id: 25, nombre: 'Pollo Broaster', precio: 12.00, descripcion: 'pollo broaster + papas fritas + ensalada', categoriaId: 6, imagen: './broaster/pollo-broaster.png' },
  { id: 26, nombre: 'Mostrito', precio: 16.00, descripcion: 'pollo broaster + papas fritas + arroz chaufa + ensalada', categoriaId: 6, imagen: './broaster/mostrito.png' },

  // Agregados (ID 7)
  { id: 27, nombre: 'Carne extra', precio: 3.00, descripcion: 'carne extra', categoriaId: 7, imagen:'./agregados/carne.png' },
  { id: 28, nombre: 'Filete de Pollo extra', precio: 4.00, descripcion: 'filete de pollo extra', categoriaId: 7, imagen:'./agregados/filete.png' },
  { id: 29, nombre: 'Chorizo extra', precio: 3.00, descripcion: 'chorizo extra', categoriaId: 7, imagen:'./agregados/chorizo.png' },
  { id: 30, nombre: 'Hot Dog extra', precio: 1.00, descripcion: 'hot dog extra', categoriaId: 7, imagen:'./agregados/hotdog.png' },
  { id: 31, nombre: 'Huevo extra', precio: 1.00, descripcion: 'huevo extra', categoriaId: 7, imagen:'./agregados/huevo.png' },
  { id: 32, nombre: 'Tocino extra', precio: 1.00, descripcion: 'tocino extra', categoriaId: 7, imagen:'./agregados/tocino.png' },
  { id: 33, nombre: 'Queso extra', precio: 1.00, descripcion: 'queso extra', categoriaId: 7, imagen:'./agregados/queso.png' },
  { id: 34, nombre: 'Papa Frita', precio: 6.00, descripcion: 'porción de papa frita', categoriaId: 7, imagen:'./productos/papas-fritas.png' },
  { id: 35, nombre: 'Arroz Chaufa', precio: 7.00, descripcion: 'porción de arroz chaufa', categoriaId: 7, imagen:'./agregados/chaufa.png' },
  { id: 36, nombre: 'Salsa extra', precio: 3.00, descripcion: 'BBQ, BBQ picante, acevichada, tocino, olivo', categoriaId: 7, imagen:'./agregados/salsa.png' },

  // Bebidas (ID 8)
  { id: 37, nombre: 'Descartable 300ml', precio: 2.00, descripcion: 'gaseosa 300ml', categoriaId: 8, imagen:'./productos' },
  { id: 38, nombre: 'Frugos Durazno 300ml', precio: 3.00, descripcion: 'jugo 300ml', categoriaId: 8, imagen:'./productos' },
  { id: 39, nombre: 'Pepsi 600ml', precio: 3.50, descripcion: 'gaseosa 600ml', categoriaId: 8, imagen:'./productos' },
  { id: 40, nombre: 'Coca Cola 500', precio: 4.50, descripcion: 'gaseosa 500ml', categoriaId: 8, imagen:'./productos' },
  { id: 41, nombre: 'Inka Cola 500', precio: 4.50, descripcion: 'gaseosa 500ml', categoriaId: 8, imagen:'./productos' },
  { id: 42, nombre: 'Fanta 500', precio: 4.50, descripcion: 'gaseosa 500ml', categoriaId: 8, imagen:'./productos' },
  { id: 43, nombre: 'Gordita', precio: 4.50, descripcion: 'gaseosa 600ml gordita', categoriaId: 8, imagen:'./productos' },
  { id: 44, nombre: 'Coca Cola 1L Vidrio', precio: 5.50, descripcion: 'formato vidrio', categoriaId: 8, imagen:'./productos' },
  { id: 45, nombre: 'Inka Cola 1L Vidrio', precio: 5.50, descripcion: 'formato vidrio', categoriaId: 8, imagen:'./productos' },
  { id: 46, nombre: 'Pepsi 1.5L', precio: 5.50, descripcion: 'formato 1.5L', categoriaId: 8, imagen:'./productos' },
  { id: 47, nombre: 'Evervess 1.5L', precio: 7.50, descripcion: 'formato 1.5L', categoriaId: 8, imagen:'./productos' },
  { id: 48, nombre: 'Coca Cola 1.5L', precio: 8.50, descripcion: 'formato 1.5L', categoriaId: 8, imagen:'./productos' },
  { id: 49, nombre: 'Inka Cola 1.5L', precio: 8.50, descripcion: 'formato 1.5L', categoriaId: 8, imagen:'./productos' },
  { id: 50, nombre: 'Chicha Morada Vaso', precio: 2.00, descripcion: 'vaso', categoriaId: 8, imagen:'./productos' },
  { id: 51, nombre: 'Chicha Morada 1/2L', precio: 3.50, descripcion: 'medio litro', categoriaId: 8, imagen:'./productos' },
  { id: 52, nombre: 'Chicha Morada 1L', precio: 7.00, descripcion: 'un litro', categoriaId: 8, imagen:'./productos' }
];