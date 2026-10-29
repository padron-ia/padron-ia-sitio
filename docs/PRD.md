# PRD — padron-ia-sitio

> Qué se construye, para quién y qué no. Negocio (precio, estrategia, clientes) en el OS: `clients/_personal/padron-ia`.

## Qué es (tres líneas)
- La web pública de Padrón IA: padron-ia.es y www, HTML estático (Astro) servido por nginx en EasyPanel.
- Contacto solo por WhatsApp (el formulario se descartó a propósito). Analítica Umami propia, sin cookies.
- Una página suelta con enlace personal: `/radiografia/?t=<llave>` (desde el 29-oct-2026).

## Para quién
| Perfil | Qué necesita | Qué puede hacer |
|---|---|---|
| Visitante | Entender qué gana trabajando con Padrón IA y escribir por WhatsApp | Leer, pulsar WhatsApp |
| Dueño de negocio invitado | Su radiografía: cómo le encuentran en Google y en las IAs y lo que se le va al mes | Con su enlace, contestar 11 preguntas y ver su cifra |

## Alcance de la fase actual
- Entra: portada, páginas por sector, legales, y `/radiografia/`.
- Fase 3 (29-oct): rediseño escaparate de la portada, «del desorden al orden», proceso a proceso. Producto en `PRODUCT.md`.
- **No entra**: el portal de cliente y `/centro` (viven en portal.padron-ia.es, otro repo).

## Datos sensibles y claves
- La radiografía guarda respuestas de negocio en Supabase («Web Padrón IA»), detrás de funciones que exigen la llave
  del enlace; las tablas no se pueden leer con la clave pública. Esquema y reglas: en el OS, carpeta del proyecto.
- En este repo solo hay la clave **publicable** de Supabase (pública por diseño). Ningún secreto.

## Reglas de construcción
- HTML estático, cero JavaScript salvo donde haga falta (la radiografía) y, desde el 29-oct-2026 con OK de Jesús, la
  animación de la portada escaparate (GSAP + ScrollTrigger, Lenis, Three.js). Todo el texto se lee sin JavaScript y con el
  movimiento reducido. Plan y línea: `clients/_personal/padron-ia/projects/web-rework/2026-10-29-linea-y-plan-escaparate.md`.
- `add_header` no se hereda: cada `location` con cabeceras propias incluye su fichero de seguridad.
- SEO sagrado: un cambio de URL lleva su 301.

## Cómo se ve el éxito (radiografía)
1. Con una llave buena se ve el bloque público, se contestan las preguntas y al final sale la cifra.
2. Al recargar, lo contestado sigue y el botón lleva a la primera pregunta sin contestar.
3. Con una llave inventada: «Este enlace no vale»; por la API, ni lectura ni escritura.
