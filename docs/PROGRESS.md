# Progreso — padron-ia-sitio

> Estado vivo. Se actualiza al cerrar cada sesión de código, en el mismo commit.

## Etapa
- Talla: pequena · Modo: professional
- Estado: OPERANDO (sitio y radiografía)
- Negocio: `clients/_personal/padron-ia` en el OS.

## Controles aprobados
- ninguno todavía

## Última sesión (2026-11-02)
- Hecho: prototipo de la **web de producto** en `/prueba/web/` (portada, `/autonomos/`, `/peluqueria/`), con noindex y fuera del sitemap.
  Fundación en el OS: `clients/_personal/padron-ia/projects/web-rework/2026-11-02-web-de-producto/fundacion.md`. Piezas nuevas:
  `src/layouts/PruebaWeb.astro`, `src/components/PanelClientes.astro` (panel de ejemplo: animado en la portada y con ficha al tocar
  en peluquería) y `src/pages/prueba/web/_web.css`. Sin precio; todos los botones abren WhatsApp con Lía.
- Probado en local a 1440 y a 375 px: sin scroll horizontal, consola limpia, la ficha cambia al tocar otra clienta, el botón fijo del
  móvil se ve también sobre las secciones oscuras.

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
