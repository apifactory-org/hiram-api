# Política de Seguridad - hiram-api

**Última actualización:** Octubre 2025

---

## 1. Reporte de Vulnerabilidades

### 🔴 NO abras issues públicas para vulnerabilidades

Si descubres una vulnerabilidad de seguridad, **NO** la reportes en:
- ❌ Issues públicas en GitHub
- ❌ Discussions
- ❌ Pull Requests
- ❌ Redes sociales

### ✅ Cómo reportar correctamente

**Contacta directamente a:**

📧 **miguelcespedes@outlook.com**

**Asunto sugerido:**
```
[SECURITY] Vulnerabilidad en hiram-api
```

**Contenido del reporte incluir:**

1. **Descripción clara**
   - ¿Qué es la vulnerabilidad?
   - ¿Cuál es el impacto?
   - ¿Quién podría explotarla?

2. **Pasos para reproducir**
   - Instrucciones detalladas
   - Código de prueba (si aplica)
   - Archivos necesarios

3. **Severidad propuesta**
   - Crítica (afecta producción inmediatamente)
   - Alta (grave pero no inmediata)
   - Media (importante corregir)
   - Baja (mejora de seguridad)

4. **Información del reportador**
   - Tu nombre
   - Affiliation (opcional)
   - Cómo contactarte

**Ejemplo:**
```
Asunto: [SECURITY] Vulnerabilidad de inyección en validador

Descripción:
El endpoint /validate es susceptible a inyección de código YAML
que podría ejecutar comandos arbitrarios.

Pasos para reproducir:
1. Enviar POST a /workspaces/test/validate
2. Incluir payload YAML malicioso: !! python/object/apply:...
3. Servidor ejecuta código arbitrario

Severidad: CRÍTICA

Attachments:
- poc.json (prueba de concepto)
- payload.yaml (YAML malicioso)
```

---

## 2. Respuesta a Reportes

### Nuestro compromiso:

- ✅ Reconocer recepción en 48 horas
- ✅ Proporcionar actualización inicial en 7 días
- ✅ Trabajar en fix de forma responsable
- ✅ Coordinar disclosure responsable
- ✅ Dar crédito al reportador

### Proceso:

1. **Recepción** - Confirmamos que recibimos el reporte
2. **Validación** - Verificamos y reproducimos la vulnerabilidad
3. **Triage** - Evaluamos severidad e impacto
4. **Fix** - Desarrollamos solución
5. **Release** - Publicamos fix
6. **Disclosure** - Anunciamos públicamente
7. **Crédito** - Reconocemos al reportador

### Embargo responsable:

- **Crítica:** 90 días antes de disclosure público
- **Alta:** 60 días antes de disclosure público
- **Media/Baja:** 30 días antes de disclosure público

---

## 3. Estado Actual de Seguridad

### ⚠️ Fase Early Stage

hiram-api está en **fase de especificación**. 

**Situación actual:**
- ✅ Especificación OpenAPI 3.0.3 (sin implementación)
- ✅ Documentación y políticas
- ❌ Servidor no implementado
- ❌ Sin código ejecutable
- ❌ Sin vulnerabilidades explotables aún

**Cuando implementación esté disponible:**
- Planeamos auditoría de seguridad
- Integración con SAST/DAST
- Testing de penetración
- Compliance con estándares

---

## 4. Buenas Prácticas de Seguridad

### Para Desarrolladores

Al contribuir a hiram-api, considera:

**Código Seguro:**
```javascript
// ✅ BUENO - Valida y sanitiza entrada
function validate(input) {
  if (!input || typeof input !== 'string') {
    throw new Error('Input inválido');
  }
  // Sanitizar caracteres peligrosos
  return input.replace(/[<>\"']/g, '');
}

// ❌ MALO - Sin validación
function validate(input) {
  return input; // ¡Vulnerable a inyección!
}
```

**Credenciales:**
```javascript
// ✅ BUENO - Usa variables de entorno
const secret = process.env.JWT_SECRET;
const dbUrl = process.env.DATABASE_URL;

// ❌ MALO - Hardcoded
const secret = 'my-super-secret-key'; // ¡Vulnerable!
const dbUrl = 'postgresql://user:pass@host/db'; // Expuesto!
```

**Dependencias:**
```bash
# Verifica vulnerabilidades conocidas
npm audit
npm audit fix

# Mantén dependencias actualizadas
npm update
```

**Logs:**
```javascript
// ✅ BUENO - No registra datos sensibles
logger.info('User login', { userId: user.id });

// ❌ MALO - Expone secretos
logger.info('User login', { user, password, token }); // ¡Credentials en logs!
```

### Para Usuarios

**Cuando uses hiram-api en producción:**

- ✅ Usa HTTPS siempre
- ✅ Mantén JWT_SECRET seguro y rotado
- ✅ Implementa rate limiting
- ✅ Audita accesos y cambios
- ✅ Haz backups regulares
- ✅ Monitorea logs
- ✅ Actualiza dependencias

---

## 5. Dependencias Seguras

### Verificar Seguridad de Dependencias

```bash
# Auditar vulnerabilidades
npm audit

# Auditar transitiveas
npm ls

# Verificar versiones desactualizadas
npm outdated
```

### Mantener Actualizadas

```bash
# Actualizar con safety
npm update

# Auditar cambios mayores
npm outdated
```

---

## 6. Soporte de Seguridad

### Versiones Soportadas

Cuando hiram-api esté en producción:

| Versión | Soporte | Security Fixes |
|---------|---------|---------------|
| 2.x.x | En desarrollo | Sí |
| 1.x.x | Mantenimiento | Sí |
| 0.x.x | No soportado | No |

### Ciclo de Vida

- **Nueva versión:** soporte total (features + security)
- **Mantenimiento:** solo security fixes por 12 meses
- **End of Life:** sin soporte

---

## 7. Disclosure de Vulnerabilidades

### Embargo Responsable

1. Reportador descubre vulnerabilidad → Contacta privadamente
2. Equipo valida → 48 horas
3. Equipo desarrolla fix → Coordina con reportador
4. Pre-release a parches (si disponible) → 7 días antes
5. Release público → Anuncio en CHANGELOG
6. CVE/Advisory → Si aplica para severidad alta/crítica

### Anuncio Público

Cuando se publique un fix:
- 📝 CHANGELOG.md con detalles
- 🔔 Release notes explícitas
- 🏷️ CVE ID (si aplica)
- 🙏 Crédito al reportador
- 📢 Notificación a usuarios

---

## 8. Compliance y Estándares

### Objetivos Futuros

Cuando implementación esté lista:

- 🔐 OWASP Top 10 compliance
- 📋 CWE/SANS Top 25 review
- 🧪 SAST (Static Application Security Testing)
- 🔍 DAST (Dynamic Application Security Testing)
- 🛡️ Penetration Testing anual
- 📜 SOC 2 compliance (si es necesario)

---

## 9. Contacto

### Seguridad

📧 **miguelcespedes@outlook.com**
- Asunto: `[SECURITY]`
- Confidencial
- Respuesta en 48 horas

### General

🔗 https://github.com/apifactory-org/hiram-api
- Issues públicas
- Discussions
- Pull Requests

---

## 10. Agradecimientos

Apreciamos a todos los investigadores de seguridad que responsablemente reportan vulnerabilidades.

**Reconocimiento:**
- Se dará crédito público (a menos que se prefiera privacidad)
- Mencionado en SECURITY_ADVISORIES.md
- Linkado en perfil de GitHub (si aplica)

---

**Versión:** 1.0  
**Última actualización:** Octubre 2025  
**Estado:** Early Stage - Solo especificación