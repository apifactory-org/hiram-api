# hiram-api

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-early--stage-orange.svg)](/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-apifactory--org-black?logo=github)](https://github.com/apifactory-org/hiram-api)

> **Plataforma agnóstica para editar y validar especificaciones de APIs.**

Proyecto en fase temprana. Actualmente se define la especificación de API mediante OpenAPI 3.0.3.

---

## 📋 Tabla de Contenidos

- [¿Qué es hiram-api?](#qué-es-hiram-api)
- [Estado Actual](#estado-actual)
- [Visión](#visión)
- [Especificación](#especificación)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## ¿Qué es hiram-api?

hiram-api es una **plataforma agnóstica** para crear workspaces y gestionar especificaciones de APIs en múltiples formatos (OpenAPI, AsyncAPI, GraphQL, etc.).

**Características principales (planeadas):**

- 🎯 **Agnóstica** - No está casada con ningún formato específico
- 📝 **Editor de Archivos** - Crear, actualizar y organizar archivos
- ✅ **Validación** - Validar especificaciones según su tipo
- 📦 **Bundling** - Resolver referencias internas ($ref)
- 🔄 **Tiempo Real** - Notificaciones SSE para cambios
- 🔐 **Autenticación** - Seguridad con JWT
- 🌳 **Versionado** - Soporte para ramas Git

---

## ⏳ Estado Actual

🟡 **Early Stage - Diseño en curso**

Actualmente estamos en la fase de **especificación**. El proyecto incluye:

- ✅ Especificación OpenAPI 3.0.3 completa
- ✅ Documentación de términos y políticas
- ✅ Guía para contribuidores
- 🔜 Implementación (próximamente)

### Lo que NO hay aún:

- ❌ Servidor implementado
- ❌ Base de datos
- ❌ Autenticación funcional
- ❌ Endpoints operacionales

---

## 🎯 Visión

Crear una plataforma universal que:

1. **Elimine fricción** - Un único editor para cualquier tipo de especificación
2. **Sea agnóstica** - Soporte extensible para nuevos formatos
3. **Sea colaborativa** - Edición y cambios en tiempo real
4. **Sea confiable** - Validación automática de especificaciones
5. **Sea abierta** - Open source, posible donación a Apache

### Roadmap

- **v1.0.0-alpha** - Especificación y diseño (actual)
- **v1.0.0-beta** - Primer prototipo funcional
- **v1.0.0** - MVP en producción
- **v2.0.0** - Colaboración real-time

---

## 📚 Especificación

La especificación técnica está en OpenAPI 3.0.3:

- **Archivo**: `specs/openapi.yaml`
- **Formato**: OpenAPI 3.0.3
- **Estado**: Completa

### Ver especificación:

```bash
# Clonar repositorio
git clone https://github.com/apifactory-org/hiram-api.git
cd hiram-api

# Ver en editor online
# Copiar contenido de specs/openapi.yaml a:
# https://editor.swagger.io/
```

### Endpoints Principales (Diseño)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/workspace-types` | Listar tipos de especificaciones |
| GET | `/workspaces` | Listar workspaces |
| POST | `/workspaces` | Crear workspace |
| GET | `/workspaces/{id}/files` | Árbol de archivos |
| PUT | `/workspaces/{id}/files/content` | Guardar archivo |
| POST | `/workspaces/{id}/validate` | Validar especificación |
| GET | `/workspaces/{id}/bundle` | Generar bundle |
| GET | `/events` | Notificaciones SSE |

---

## 🤝 Contribuir

¡Buscamos contribuidores para ayudar a construir hiram-api!

### Cómo ayudar:

1. **Feedback en la especificación** - ¿Te falta algo? ¿Cambiarías algo?
2. **Implementación** - Ayuda a construir el backend/frontend
3. **Documentación** - Mejora guías y ejemplos
4. **Pruebas** - Valida la especificación
5. **Casos de uso** - Cuéntanos cómo lo usarías

### Primeros pasos:

```bash
# 1. Fork del proyecto
# 2. Clone
git clone https://github.com/TU_USERNAME/hiram-api.git

# 3. Lee CONTRIBUTING.md
cat CONTRIBUTING.md

# 4. Abre un issue o discussion
```

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

---

## 📄 Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

- ✅ Uso libre (comercial y privado)
- ✅ Modificación permitida
- ✅ Distribución permitida
- ⚠️ Sin garantía

---

## 📞 Contacto

**Autor:** Miguel Angel Céspedes Fernandez

- 📧 Email: miguelcespedes@outlook.com
- 🔗 GitHub: https://github.com/apifactory-org/hiram-api
- 🏢 Organización: apifactory-org

**Comunidad:**
- 💬 [Issues](https://github.com/apifactory-org/hiram-api/issues) - Bugs, features, preguntas
- 📢 [Discussions](https://github.com/apifactory-org/hiram-api/discussions) - Conversaciones
- 🤖 [Pull Requests](https://github.com/apifactory-org/hiram-api/pulls) - Contribuciones

---

## 📖 Documentación Adicional

- [CONTRIBUTING.md](CONTRIBUTING.md) - Guía para contribuidores
- [LICENSE](LICENSE) - Licencia MIT
- [TERMS.md](TERMS.md) - Términos y políticas
- [specs/openapi.yaml](specs/openapi.yaml) - Especificación OpenAPI

---

**Estado:** Early Stage  
**Versión:** 1.0.0-alpha  
**Última actualización:** Octubre 2025  
**Licencia:** MIT