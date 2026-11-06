# Progreso — padron-ia-sitio

> Estado vivo. Se actualiza al cerrar cada sesión de código, en el mismo commit.

## Etapa
- Talla: pequena · Modo: professional
- Estado: OPERANDO (sitio y radiografía)
- Negocio: `clients/_personal/padron-ia` en el OS.

## Controles aprobados
- ninguno todavía

## Última sesión (2026-11-06)
- Hecho: **`/herramientas/mensajes`** («Tus respuestas de WhatsApp, listas en un minuto»): 8 oficios × 8 respuestas
  (`src/data/respuestas-oficios.js`; atajo ≤ 25 caracteres y texto < 480, límites de respuestas rápidas de WhatsApp
  Business según fuentes de terceros), calculadora de horas, botón a WhatsApp con el resultado escrito y botón de
  compartir. `?oficio=` preselecciona. Eventos Umami: `mensajes-ver-respuestas`, `-copiar`, `-copiar-todas`, `-calculo`,
  `-whatsapp`, `-compartir`.
- Probado en local a 375 px: recorrido completo, copiar, 40 × 3 min × 22 días = 44 h, mensaje de WhatsApp correcto,
  consola limpia, sin scroll horizontal.

## Sesión anterior (2026-11-02)
- Hecho: prototipo de la **web de producto** en `/prueba/web/` (portada, `/autonomos/`, `/peluqueria/`), con noindex y fuera del sitemap.
  Fundación en el OS: `clients/_personal/padron-ia/projects/web-rework/2026-11-02-web-de-producto/fundacion.md`. Piezas nuevas:
  `src/layouts/PruebaWeb.astro`, `src/components/PanelClientes.astro` (panel de ejemplo: animado en la portada y con ficha al tocar
  en peluquería) y `src/pages/prueba/web/_web.css`. Sin precio; todos los botones abren WhatsApp con Lía.
- Probado en local a 1440 y a 375 px: sin scroll horizontal, consola limpia, la ficha cambia al tocar otra clienta, el botón fijo del
  móvil se ve también sobre las secciones oscuras.

- 2-nov (2.ª tanda): página **Consulta de salud** (`/prueba/web/consulta/`). `PanelClientes` acepta ya columnas, personas y campos de
  cada sector (peluquería sigue siendo el de por defecto). Probado a 1440 y a 375 px; Peluquería y la portada siguen funcionando.

- 2-nov (3.ª tanda, «monta todo»): páginas **Oficios** (con la sección del material), **Taller y lavadero**, **Empresas**, **Qué incluye**,
  **Cómo funciona** y **Preguntas**. Plantilla común `src/components/PaginaSector.astro`. En el móvil, el panel va por pestañas. El menú
  enlaza a las páginas, el pie a los sectores y el selector del prototipo pasa a desplegable. Probado: 10 páginas con 200, un solo H1,
  con noindex, sin enlaces internos rotos y sin scroll horizontal a 375 px; las pestañas cambian de columna.

## Sesión anterior (2026-10-29)
- Hecho: kit de repo; página `public/radiografia/index.html` (11 preguntas, audio, cifra), `seguridad-radiografia.conf`,
  bloque `location ^~ /radiografia/` en nginx, `Disallow: /radiografia` en robots.
- Probado en local (http-server, móvil 375 px y escritorio): recorrido completo, guardado en orden con toques rápidos,
  reanudar, audio por la función, llave mala rechazada, cifras cuadradas a mano (7,5 h × 25 € × 4,33 = 812 €).

## En curso
- 29-oct: fase 3, portada escaparate. Hecho: títulos sin «automatizo» (desplegado), `PRODUCT.md`, análisis de referencias. Tres prototipos animados en `/prueba/a` (talonario), `/b` (panel de salidas) y `/c` (baldosas), noindex y fuera del sitemap; GSAP + ScrollTrigger + Lenis. 29-oct: A y B quedan como idea (B sin historia, a petición de Jesús). C = «La semana de Laura»: historia ilustrada (9 escenas FAL, 3 bucles Kling, capas rembg), guion en el OS `web-rework/2026-10-29-historia-c-laura.md`. Siguiente: Jesús revisa la C.
- 29-oct: la palabra «radiografía» ya no se le enseña al dueño (es nombre interno); la página dice «tu negocio» y «todo lo que he visto».
- Radiografía completa como página interactiva en el mismo enlace (decisión de Jesús, 29-oct): boceto en el OS, falta que Jesús elija; después, el código aquí.
- 29-oct: en la pantalla final, cada problema lleva «Se puede resolver» + lo que gana; el texto final dice que la radiografía llega en este mismo enlace.
- Antes: publicada el 29-oct-2026 (despliegue por URL, 200 en ~30 s, cabeceras comprobadas con curl, recorrido con llave de prueba en producción).

## Bloqueado (qué y por quién)
-

## Siguiente paso
- Ninguno en este repo hasta que el piloto con 3 conocidos diga qué ajustar.

## Entorno
- Dependencias o variables nuevas: ninguna (la clave publicable de Supabase va en la página, es pública).
