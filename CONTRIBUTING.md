# Guía de Contribuciones - hiram-api

¡Gracias por tu interés en contribuir a hiram-api! Este documento explica cómo puedes ayudar a hacer crecer este proyecto.

## 1. Código de Conducta

Nos comprometemos a mantener un ambiente respetuoso e inclusivo. Esperamos que todos los contribuidores:

- Sean respetuosos con los demás
- Acepten crítica constructiva
- Se enfoquen en lo mejor para la comunidad
- Reporten comportamiento inapropiado

Reportes de conducta: miguelcespedes@outlook.com

## 2. Cómo Reportar Bugs

### Antes de Reportar
- Verifica que el bug no haya sido reportado
- Prueba con la última versión
- Revisa la documentación

### Reporte de Bug
Abre un issue con:

```markdown
**Descripción del bug:**
[Descripción clara y concisa]

**Pasos para reproducir:**
1. Paso 1
2. Paso 2
3. ...

**Comportamiento esperado:**
[Qué debería ocurrir]

**Comportamiento actual:**
[Qué ocurre realmente]

**Entorno:**
- OS: [ej. Ubuntu 22.04, macOS 14]
- Node version: [ej. 18.0.0]
- hiram-api version: [ej. 0.1.0-alpha]

**Logs/Error messages:**
[Incluye cualquier mensaje de error]
```

## 3. Sugerencias de Features

### Antes de Sugerir
- Verifica que no exista ya
- Piensa en cómo encaja con el proyecto agnóstico
- Considera el impacto

### Sugerencia de Feature
Abre un issue con:

```markdown
**Descripción del feature:**
[Descripción clara de qué quieres]

**Caso de uso:**
[Por qué lo necesitas]

**Implementación sugerida (opcional):**
[Si tienes ideas específicas]

**Alternativas consideradas:**
[Otros enfoques que pensaste]
```

## 4. Configuración del Desarrollo

### Pre-requisitos
- Git
- Node.js 18+
- npm 9+

### Setup Local

```bash
# Haz fork del repositorio
# Clona tu fork
git clone https://github.com/TU-USERNAME/hiram-api.git
cd hiram-api

# Agrega el repositorio original como upstream
git remote add upstream https://github.com/apifactory-org/hiram-api.git

# Instala dependencias
npm install

# Crea rama para tu feature
git checkout -b feature/tu-feature-name
```

### Ejecutar Tests

```bash
# Todos los tests
npm test

# Tests específicos
npm test -- archivo.test.js

# Con cobertura
npm run test:coverage
```

### Verificar Linting

```bash
npm run lint
npm run lint:fix  # Arreglar automáticamente
```

## 5. Proceso de Contribución

### 1. Crea una rama
```bash
git checkout -b feature/description-breve
```

**Nombres de rama recomendados:**
- `feature/workspace-search` - Nuevo feature
- `fix/validation-error` - Bug fix
- `docs/setup-guide` - Documentación
- `refactor/api-response` - Mejora de código
- `test/coverage` - Tests

### 2. Haz cambios
- Mantén commits atómicos (un cambio por commit)
- Escribe mensajes descriptivos

### 3. Formato de Commits

```
<tipo>: <descripción breve>

<descripción detallada si es necesario>

Fixes #123
```

**Tipos:**
- `feat:` Nuevo feature
- `fix:` Bug fix
- `docs:` Documentación
- `style:` Formato de código
- `refactor:` Refactoring
- `test:` Tests
- `chore:` Cambios de configuración

**Ejemplo:**
```
feat: add workspace search endpoint

Implements GET /workspaces/search for filtering workspaces
by name, type, or tags.

Fixes #42
```

### 4. Sincroniza con upstream
```bash
git fetch upstream
git rebase upstream/main
```

### 5. Push a tu fork
```bash
git push origin feature/description-breve
```

### 6. Abre un Pull Request

En GitHub, abre PR con:

```markdown
## Descripción
[Qué cambios hace este PR]

## Tipo de cambio
- [ ] Bug fix
- [ ] Nuevo feature
- [ ] Breaking change
- [ ] Documentación

## Issues relacionados
Fixes #123

## Checklist
- [ ] Mi código sigue el estilo del proyecto
- [ ] He actualizado documentación
- [ ] He agregado tests
- [ ] Tests pasen localmente
- [ ] No hay warnings de linting

## Screenshots (si aplica)
[Agregar si hay cambios visuales]
```

## 6. Revisión de Pull Request

### Qué revisor busca
- ✅ Código claro y mantenible
- ✅ Tests que cubran cambios
- ✅ Documentación actualizada
- ✅ Sin conflictos con main
- ✅ Sigue convenciones del proyecto

### Feedback
- Sé abierto a crítica constructiva
- Pide clarificaciones si es necesario
- Actualiza PR basado en feedback

## 7. Estilo de Código

### JavaScript/TypeScript
- Usa 2 espacios para indentación
- camelCase para variables y funciones
- PascalCase para clases
- UPPER_CASE para constantes

```javascript
// ✅ Bueno
const maxRetries = 3;
function validateInput(data) { }
class WorkspaceManager { }

// ❌ Malo
const max_retries = 3;
function validate_input(data) { }
class workspaceManager { }
```

### Documentación
```javascript
/**
 * Valida especificación del workspace
 * @param {string} workspaceId - ID del workspace
 * @param {string} typeId - Tipo de especificación
 * @returns {Promise<ValidateResponse>} Resultado de validación
 * @throws {Error} Si workspace no existe
 */
async function validate(workspaceId, typeId) {
  // ...
}
```

## 8. Testing

### Cobertura Mínima
- 80% cobertura general
- 100% para funciones críticas

### Escribir Tests

```javascript
describe('Workspaces API', () => {
  it('should create workspace', async () => {
    const result = await createWorkspace({
      name: 'Test API',
      slug: 'test-api',
      metadata: { typeId: 'asyncapi', specVersion: '2.0.0', entry: 'api.yaml' }
    });

    expect(result.workspaceId).toBe('test-api');
    expect(result.status).toBe('active');
  });
});
```

## 9. Documentación

Actualiza documentación si cambias:
- Endpoints de API
- Parámetros o respuestas
- Flujos de usuario
- Configuración

### Ubicaciones
- `README.md` - Guía general
- `docs/` - Documentación detallada
- `TERMS.md` - Políticas
- JSDoc en código

## 10. Licencia

Al contribuir aceptas que tu código se distribuye bajo Licencia MIT.

Todas las contribuciones deben ser:
- ✅ Código original tuyo o con licencia compatible
- ✅ Sin violar derechos de terceros
- ✅ Documentadas adecuadamente

## 11. Contacto y Dudas

¿Preguntas sobre cómo contribuir?

- **Issues** - Para bugs y features
- **Discussions** - Para preguntas generales
- **Email** - miguelcespedes@outlook.com

## 12. Reconocimiento

Los contribuidores serán reconocidos en:
- Sección de Contributors en README
- Commits history
- Releases notes

## Gracias por Contribuir 🙏

Tu ayuda hace que hiram-api sea mejor para todos.

---

**Última actualización:** Octubre 2025
