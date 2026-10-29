# Progreso — padron-ia-sitio

> Estado vivo. Se actualiza al cerrar cada sesión de código, en el mismo commit.

## Etapa
- Talla: pequena · Modo: professional
- Estado: OPERANDO (sitio y radiografía)
- Negocio: `clients/_personal/padron-ia` en el OS.

## Controles aprobados
- ninguno todavía

## Última sesión (2026-10-29)
- Hecho: kit de repo; página `public/radiografia/index.html` (11 preguntas, audio, cifra), `seguridad-radiografia.conf`,
  bloque `location ^~ /radiografia/` en nginx, `Disallow: /radiografia` en robots.
- Probado en local (http-server, móvil 375 px y escritorio): recorrido completo, guardado en orden con toques rápidos,
  reanudar, audio por la función, llave mala rechazada, cifras cuadradas a mano (7,5 h × 25 € × 4,33 = 812 €).

## En curso
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
