# 📝 Task API - NestJS

Esta es una API RESTful para la gestión de tareas, desarrollada con **NestJS**, **TypeORM** y documentada con **Swagger**.

## 📦 Características

- Crear, obtener, actualizar y eliminar tareas.
- Validación automática con `class-validator`.
- Documentación de endpoints con Swagger.
- Soporte para SQLite3.
- Estructura modular lista para escalar.

---

## 🚀 Cómo ejecutar la aplicación localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/DeniseAguirre/task-manager-backend.git
cd task-manager-backend

```
## 2. Instalar dependencias

```bash
$ npm install
```

## 3. Configurar variables de entorno

```bash
PORT=3001
DATABASE_PATH=./data/sqlite.db
```

## 4. Ejecutar en modo desarrollo

```bash
$ npm run start:dev
```

La aplicación estará corriendo en:
👉 http://localhost:3001

## 5. Ejecutar tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## 📚 Documentación Swagger

Una vez que la app esté corriendo, podés acceder a la documentación Swagger en:
📘 http://localhost:3001/api/docs

Esta incluye:

- Todos los endpoints (GET, POST, PUT, DELETE)

- Schemas generados automáticamente a partir de los DTOs y entidades

- Respuestas tipadas con ejemplos

## 🧱 Estructura del Proyecto

```bash
src/
├── tasks/
│   ├── dto/
│   │   ├── create-task.dto.ts
│   │   └── update-task.dto.ts
│   ├── entities/
│   │   └── task.entity.ts
│   ├── task.controller.ts
│   ├── task.service.ts
│   └── task.module.ts
├── app.module.ts
└── main.ts
```

## 🛠️ Comandos útiles

```bash


| Comando              | Descripción                          |
|----------------------|--------------------------------------|
| `npm run start`      | Inicia la app en modo producción     |
| `npm run start:dev`  | Inicia con hot-reload (desarrollo)   |
| `npm run build`      | Compila el proyecto TypeScript       |
| `npm run format`     | Formatea el código con Prettier      |

```

## 📌 Notas adicionales

- Swagger se configura en main.ts con @nestjs/swagger.

- Asegurate de que los DTOs usen decoradores de Swagger como @ApiProperty() para que los schemas se generen correctamente.

- Las entidades deben estar decoradas adecuadamente para que Swagger las refleje bien.

## 🧑‍💻 Autor

Desarrollado por Denise Aguirre Martinez

## 🖼️ Licencia

Este proyecto está bajo la licencia MIT.
