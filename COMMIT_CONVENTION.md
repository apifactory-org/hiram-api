# Convención de Commits

Este proyecto sigue la especificación de [Conventional Commits](https://www.conventionalcommits.org/).

## Formato

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Tipos de Commit

### `feat` - Nueva funcionalidad
Introduce una nueva característica al código. **Incrementa versión MINOR** (0.1.0 → 0.2.0).

```
feat(auth): añadir autenticación JWT
feat(validation): agregar validación de esquemas OpenAPI
```

### `fix` - Corrección de errores
Soluciona un bug o problema. **Incrementa versión PATCH** (0.1.0 → 0.1.1).

```
fix(parser): corregir error en parsing de YAML
fix(api): resolver timeout en endpoints
```

### `docs` - Documentación
Cambios en documentación, sin cambios en código. **No incrementa versión**.

```
docs(readme): actualizar instrucciones de instalación
docs(api): documenter nuevo endpoint
```

### `style` - Estilos y formato
Cambios que no afectan funcionalidad (espacios, punto y coma, etc.). **No incrementa versión**.

```
style: formatear código según eslint
style(validation): ajustar indentación
```

### `refactor` - Refactorización
Cambios en código sin agregar features ni arreglar bugs. **No incrementa versión**.

```
refactor(core): simplificar lógica de validación
refactor(models): reorganizar estructura de carpetas
```

### `perf` - Mejoras de rendimiento
Cambios que mejoran performance. **Puede incrementar versión según contexto**.

```
perf(parser): optimizar algoritmo de parsing
perf(api): reducir latencia en consultas
```

### `test` - Tests
Agregar o actualizar tests. **No incrementa versión**.

```
test(auth): agregar tests para JWT
test(parser): aumentar cobertura de casos edge
```

### `chore` - Mantenimiento
Cambios en configuración, dependencias, scripts. **No incrementa versión**.

```
chore: actualizar dependencias
chore(ci): configurar GitHub Actions
```

### `ci` - CI/CD
Cambios en configuración de integración continua. **No incrementa versión**.

```
ci: agregar workflow de tests
ci(release): configurar semantic-release
```

## Scope (Opcional)

Especifica qué parte del código se modifica:

```
feat(validation): ...
fix(parser): ...
docs(api): ...
```

## Subject (Asunto)

- Máximo 50 caracteres
- Empieza con minúscula
- Sin punto final
- Imperativo ("agregar", "arreglar", no "agregado", "arreglado")

✅ `feat(auth): agregar validación de tokens`
❌ `feat(auth): agregada validación de tokens`
❌ `feat(auth): agrega validación de tokens`

## Body (Opcional)

Para commits complejos, explica **qué** y **por qué**, no **cómo**:

```
feat(parser): soportar referencias externas en YAML

Las referencias externas permiten reutilizar esquemas
en múltiples especificaciones. Esto reduce la duplicación
de código y mejora el mantenimiento.

Implementa soporte para $ref con URLs externas
en el parser de OpenAPI.
```

## Footer (Opcional)

Para referencias a issues o breaking changes:

```
feat(api): cambiar estructura de respuesta

BREAKING CHANGE: el campo 'data' ahora es 'payload'

Closes #123
```

## Breaking Changes

Si el commit introduce un cambio incompatible, **incrementa versión MAJOR** (0.1.0 → 1.0.0):

```
feat(api): rediseñar estructura de endpoints

BREAKING CHANGE: endpoints /v1/* ahora son /api/v2/*
```

## Ejemplos Completos

### Ejemplo 1: Fix simple
```
fix(validator): arreglar error en validación de tipos
```

### Ejemplo 2: Feature con contexto
```
feat(specs): agregar soporte para múltiples versiones

El parser ahora soporta trabajar con múltiples
versiones de especificaciones simultáneamente.

Closes #45
```

### Ejemplo 3: Breaking change
```
feat(api)!: cambiar formato de respuesta de errores

BREAKING CHANGE: Los errores ahora retornan
{error: {code, message}} en lugar de {message}

Closes #78
```

## Cómo afecta a la versión

Con esta convención, `standard-version` automáticamente:

| Tipo | Incrementa | Ejemplo |
|------|-----------|---------|
| `feat` | MINOR | 0.1.0 → 0.2.0 |
| `fix` | PATCH | 0.1.0 → 0.1.1 |
| `BREAKING CHANGE` | MAJOR | 0.1.0 → 1.0.0 |
| Otros (`docs`, `test`, etc.) | Nada | 0.1.0 → 0.1.0 |

## Flujo de trabajo

1. Haz cambios en tu rama
2. Commits con la convención correcta
3. Abre un PR (pull request)
4. Cuando esté listo, ejecuta:
   ```bash
   npm run release
   ```
5. Se auto-actualiza VERSION, package.json, openapi.yaml y CHANGELOG.md
6. Se crea un tag de git automáticamente

## Herramientas útiles

Puedes usar `commitizen` para guiarte en el prompt:

```bash
npm install --save-dev commitizen cz-conventional-changelog
npx cz
```

Luego en `package.json`:
```json
{
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}
```
