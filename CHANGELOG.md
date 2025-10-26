# Changelog - hiram-api

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/),
y este proyecto sigue [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

### Planeado
- 🔜 Implementación del backend
- 🔜 Autenticación JWT
- 🔜 Gestión de workspaces
- 🔜 Editor de archivos
- 🔜 Validación de especificaciones
- 🔜 Bundling de referencias ($ref)
- 🔜 Notificaciones SSE
- 🔜 Frontend Web UI
- 🔜 CLI client

### En Investigación
- 🔍 Soporte para GraphQL Schema
- 🔍 Soporte para Protocol Buffers
- 🔍 Soporte para RAML
- 🔍 Colaboración en tiempo real
- 🔍 Análisis y métricas
- 🔍 Generación de código

---

## [0.1.0-alpha] - 2025-10-01

### Added - Especificación

**API REST Completa:**
- ✅ Endpoint `/workspace-types` - Listar tipos de especificaciones
- ✅ Endpoints de Workspaces - CRUD completo
- ✅ Endpoints de Files - Gestión de archivos
- ✅ Endpoint de Validación - Validar especificaciones
- ✅ Endpoint de Bundle - Resolver referencias
- ✅ Endpoint SSE - Notificaciones en tiempo real

**Soporte de Especificaciones:**
- ✅ AsyncAPI 2.x (diseño)
- ✅ OpenAPI 3.0.x (diseño)
- ✅ Extensible para nuevos tipos

**Autenticación:**
- ✅ JWT Bearer tokens (diseño)
- ✅ Seguridad en endpoints (diseño)

**Features de API:**
- ✅ Parámetros de rama (ref/main)
- ✅ Control de concurrencia (If-Match/ETag)
- ✅ Validación de entrada
- ✅ Manejo de errores estándar

### Documentation

**Archivos Creados:**
- ✅ Especificación OpenAPI 3.0.3 (`specs/openapi.yaml`)
- ✅ README.md con visión del proyecto
- ✅ CONTRIBUTING.md - Guía para contribuidores
- ✅ LICENSE - MIT License
- ✅ TERMS.md - Términos y políticas
- ✅ SECURITY.md - Política de seguridad
- ✅ CHANGELOG.md - Este archivo
- ✅ .gitignore - Configuración de Git

**Estructura del Repositorio:**
- ✅ Organización limpia para fase early-stage
- ✅ Setup para facilitar implementación

### Notes

🟡 **IMPORTANTE - Estado Actual:**

Este es un lanzamiento de **especificación**, no de código ejecutable.

- ✅ **Especificación:** Completa en OpenAPI 3.0.3
- ✅ **Documentación:** Completa
- ❌ **Servidor:** No implementado aún
- ❌ **Base de datos:** No implementada
- ❌ **Autenticación:** Diseñada pero no funcional
- ❌ **Endpoints:** No operacionales

**Próximo paso:** Comunidad invitada a revisar especificación y contribuir a la implementación.

---

## Versiones Futuras

### [1.0.0-beta]

**Objetivo:** Prototipo funcional

- [ ] Backend API funcional
- [ ] Autenticación JWT
- [ ] Gestión básica de workspaces
- [ ] Editor de archivos simple
- [ ] Validación de AsyncAPI 2.x
- [ ] Validación de OpenAPI 3.0.3
- [ ] Notificaciones SSE

**Timeline:** Por determinar

### [1.0.0]

**Objetivo:** MVP en producción

- [ ] Todas las features de beta
- [ ] Frontend Web UI
- [ ] Documentación completa
- [ ] Tests de cobertura 80%+
- [ ] Auditoría de seguridad
- [ ] Performance optimizado
- [ ] Deployment ready

**Timeline:** Por determinar

### [2.0.0]

**Objetivo:** Colaboración y análisis

- [ ] Colaboración real-time
- [ ] Soporte GraphQL Schema
- [ ] Análisis y métricas
- [ ] Generación de código
- [ ] CLI mejorado
- [ ] Plugins/extensiones

**Timeline:** Por determinar

---

## Cómo Reportar Cambios

Para sugerir cambios a la especificación o proponer features:

1. Abre un [Issue](https://github.com/apifactory-org/hiram-api/issues)
2. Describe el cambio sugerido
3. Explica el caso de uso
4. Proporciona ejemplos si es posible

**Para vulnerabilidades de seguridad:**
- 📧 Email: miguelcespedes@outlook.com
- Ver [SECURITY.md](SECURITY.md)

---

## Navegación

### Versiones

- 📋 [Unreleased](#unreleased) - Cambios en desarrollo
- 📊 [0.1.0-alpha](#100-alpha---2025-10-01) - Release actual
- 🔮 [Futuras](#versiones-futuras) - Planeadas

### Enlaces

- 🔗 [GitHub Repository](https://github.com/apifactory-org/hiram-api)
- 📖 [Documentación](README.md)
- 📋 [Issues](https://github.com/apifactory-org/hiram-api/issues)
- 💬 [Discussions](https://github.com/apifactory-org/hiram-api/discussions)

---

## Categorías de Cambios

Cada versión puede incluir:

- **Added** - Nueva funcionalidad
- **Changed** - Cambios en funcionalidad existente
- **Deprecated** - Funcionalidad que será removida
- **Removed** - Funcionalidad removida
- **Fixed** - Bugs corregidos
- **Security** - Fixes de seguridad

---

## Política de Versionado

Seguimos [Semantic Versioning 2.0.0](https://semver.org/):

```
MAJOR.MINOR.PATCH-PRERELEASE

Ejemplo: 0.1.0-alpha, 1.0.0-beta, 1.0.0, 1.1.0, 2.0.0
```

- **MAJOR:** Cambios incompatibles (breaking changes)
- **MINOR:** Nuevas features (compatible)
- **PATCH:** Bugfixes (compatible)
- **PRERELEASE:** -alpha, -beta, -rc1 para versiones tempranas

---

## Mantenimiento

### Versiones Soportadas

Cuando estemos en producción:

| Versión | Estado | Soporte |
|---------|--------|---------|
| 2.x | En desarrollo | - |
| 1.x | Actual | ✅ Activo |
| 0.x | Especificación | - |

### Política de Fixes

- **Crítica:** Parchada en última versión
- **Alta:** Parchada en última versión + 1 anterior
- **Media:** Parchada en última versión
- **Baja:** En siguiente release

---

## Reconocimientos

### Contribuidores

Agradecemos a todos los que contribuyeron a:

- ✅ Especificación del API
- ✅ Documentación
- ✅ Feedback y sugerencias
- ✅ Reporte de problemas

Eres parte de esto. ¡Gracias!

---

**Última actualización:** Octubre 2025
**Licencia:** MIT
**Mantenedor:** Miguel Angel Céspedes Fernandez
