# Proyecto Backend - Gestión de Carritos

## 1. Descripción
Este proyecto es un backend desarrollado con Node.js y Express que permite la administración de carritos de compras. Proporciona una API para agregar, actualizar y eliminar productos dentro de los carritos, así como consultar su contenido utilizando `populate` para mostrar los detalles completos de cada producto.

## 2. Instalación y Uso
### Requisitos previos
- Node.js (versión recomendada: 18 o superior)
- MongoDB (local o en la nube)

### Instalación
1. Clona este repositorio:
   ```sh
   git clone https://github.com/tu-repositorio.git
   ```
2. Accede al directorio del proyecto:
   ```sh
   cd Entrega_Final
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Configura las variables de entorno en un archivo `.env`:
   ```sh
   MONGO_URI=tu_conexion_a_mongodb
   PORT=3000
   ```
5. Inicia el servidor:
   ```sh
   npm start
   ```

## 3. Funcionalidades
### Administración de Carritos
- Crear un nuevo carrito.
- Agregar productos a un carrito existente.
- Eliminar productos de un carrito.
- Actualizar la cantidad de un producto en el carrito.
- Vaciar completamente un carrito.

### Estructura de los Carritos
Cada carrito contiene un array de productos, donde cada producto se almacena como una referencia a su ID en la colección de productos:
```json
{
  "_id": "carritoId",
  "products": [
    {
      "product": "productoId",
      "quantity": 2
    }
  ]
}
```

### Visualización de los Productos en un Carrito
Al obtener un carrito mediante `GET /api/carts/:cid`, se utiliza `populate` para mostrar los detalles completos de los productos asociados:
```json
{
  "_id": "carritoId",
  "products": [
    {
      "product": {
        "_id": "productoId",
        "name": "Pelota de pádel",
        "price": 10
      },
      "quantity": 2
    }
  ]
}
```

## 4. Tecnologías Utilizadas
- **Node.js** y **Express.js** para el backend.
- **MongoDB** y **Mongoose** para la base de datos.
- **dotenv** para gestionar variables de entorno.
- **nodemon** para recargar el servidor en desarrollo.

## 5. Estructura del Proyecto
```
Entrega_Final/
│-- src/
│   │-- controllers/
│   │   ├── cart.controller.js
│   │   ├── product.controller.js
│   │-- models/
│   │   ├── carts.model.js
│   │   ├── products.model.js
│   │-- routes/
│   │   ├── cart.routes.js
│   │   ├── product.routes.js
│   ├── app.js
│   ├── server.js
├── .env
├── package.json
├── README.md
```

Este backend proporciona una estructura modular y bien organizada para la gestión de carritos de compras en una tienda online.

