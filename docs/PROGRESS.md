# Progreso — padron-ia-sitio

> Estado vivo. Se actualiza al cerrar cada sesión de código, en el mismo commit.

## Etapa
- Talla: pequena · Modo: professional
- Estado: OPERANDO (sitio) · CONSTRUIDO (radiografía)
- Negocio: `clients/_personal/padron-ia` en el OS.

## Controles aprobados
- ninguno todavía

## Última sesión (2026-10-29)
- Hecho: kit de repo; página `public/radiografia/index.html` (11 preguntas, audio, cifra), `seguridad-radiografia.conf`,
  bloque `location ^~ /radiografia/` en nginx, `Disallow: /radiografia` en robots.
- Probado en local (http-server, móvil 375 px y escritorio): recorrido completo, guardado en orden con toques rápidos,
  reanudar, audio por la función, llave mala rechazada, cifras cuadradas a mano (7,5 h × 25 € × 4,33 = 812 €).

## En curso
- Desplegar y comprobar cabeceras en producción.

## Bloqueado (qué y por quién)
-

## Siguiente paso
- Ninguno en este repo hasta que el piloto con 3 conocidos diga qué ajustar.

## Entorno
- Dependencias o variables nuevas: ninguna (la clave publicable de Supabase va en la página, es pública).
