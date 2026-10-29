# AGENTS.md — padron-ia-sitio

> Puerta de entrada para cualquier IA o persona que programe aquí. Léelo entero antes de tocar nada.
> Kit de repo del método SDF (Padrón IA), instalado el 2026-10-29.

## Qué es
Web pública de Padrón IA (padron-ia.es): Astro estático servido por nginx en EasyPanel.

## Antes de empezar (siempre, en este orden)
1. `docs/PROGRESS.md` — en qué etapa está, qué se hizo la última sesión, qué falta, qué está bloqueado.
2. El documento del mapa que toque a la tarea (abajo). Si la tarea no encaja con `docs/PRD.md` o `docs/PLAN.md`, **para y avisa**:
   no se replanifica en caliente.

## Autonomía (se trabaja por objetivos, no por tareas)
Tu trabajo es acercar los **objetivos de `docs/PRD.md`** siguiendo `docs/PLAN.md`, sin esperar a que te den cada tarea.
- **Decides tú**: cómo construir lo que está en el PRD y el PLAN, arreglos, pruebas, limpieza, documentos, despliegue a
  pruebas. Al cerrar, lo apuntas en `docs/PROGRESS.md`.
- **Necesita OK del operador**: cambiar el alcance o el plan, producción si el push despliega, borrar datos, tocar datos
  reales de personas, cualquier mensaje a un cliente o a sus usuarios, dinero o claves de pago.
- **Si te bloqueas**: déjalo en «Bloqueado (qué y por quién)» de `docs/PROGRESS.md` con la decisión ya preparada
  (opciones y recomendación) y sigue con lo siguiente del plan. Nada espera sin fecha.

## Mapa de documentos (un papel, un fichero)
| Papel | Fichero | Para qué |
|---|---|---|
| PROGRESS | [`docs/PROGRESS.md`](docs/PROGRESS.md) | Etapa SDF y estado vivo (se lee al empezar, se actualiza al cerrar) |
| PRD | [`docs/PRD.md`](docs/PRD.md) | Qué se construye, para quién y qué no |
| PLAN | [`docs/PLAN.md`](docs/PLAN.md) | Fases con criterio de aceptación |
| APP_FLOW | no aplica (talla pequeña) | Pantallas y recorridos por perfil |
| DESIGN_SYSTEM | no aplica (talla pequeña) | Colores, tipografía, componentes |
| TRD | no aplica (talla pequeña) | Stack, arquitectura, integraciones, despliegue |
| DATABASE | no aplica (talla pequeña) | Tablas, relaciones y quién ve cada fila (RLS) |
| SECURITY | no aplica (talla pequeña) | Datos sensibles, accesos, secretos, copias, RGPD |
| DECISIONS | no aplica (talla pequeña) | Decisiones técnicas, inmutables |

Lo que **no** está en este repo (contrato, precio, cliente, controles aprobados, riesgos, borradores legales) vive en el OS del
operador: `clients/_personal/padron-ia`. Se enlaza, no se copia.

## Reglas
1. **Cada dato en un solo sitio.** Si ya está escrito en otro documento, enlázalo.
2. **El documento se toca en el mismo commit que el código** que lo cambia: migración → base de datos · pantalla o recorrido →
   flujo · decisión de peso → decisiones · algo que cambia el estado → `docs/PROGRESS.md`.
3. **Cifras, no adjetivos.** Cada afirmación verificable lleva su número o su comprobación.
4. **Cada documento del kit cabe en una o dos pantallas** (≈ 120 líneas). El detalle, a un anexo enlazado.
5. **Nada se da por hecho sin ejecutarlo**: se prueba en la app en marcha, no leyendo el código.
6. **Secretos**: ninguno en el código ni en los documentos. Variables en `.env.local`.

## Al cerrar la sesión (no se cierra sin esto)
Actualiza `docs/PROGRESS.md`: hecho · en curso · bloqueado (y por quién) · siguiente paso · dependencias o variables nuevas.
Relee los documentos que has tocado y confirma que dicen lo mismo que el código. Commit con el documento dentro.

## Comandos
- `npm run dev` (local) · `npm run build` (comprueba) · desplegar: `bash scripts/desplegar-easypanel.sh "padron-ia.es sitio - URL de activacion"` desde el OS y mirar /actions.
