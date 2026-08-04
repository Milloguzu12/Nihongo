# 🌸 日本語 — Aprende Japonés desde cero

App web de un solo archivo para aprender japonés: hiragana, katakana y vocabulario, con rachas diarias y repaso espaciado. Sin dependencias, sin cuentas, funciona offline.

**👉 [Abrir la app](https://milloguzu12.github.io/Nihongo/)**

## Qué incluye

| Sección | Lecciones | Contenido |
|---|---|---|
| Hiragana | 13 | Los 46 kana básicos + dakuten (゛/゜) + combinaciones (きゃ, しゃ…) |
| Vocabulario I | 4 | Saludos, sí/no, números 1–10, palabras cotidianas |
| Katakana | 9 | Los 46 kana + la raya larga ー |
| Vocabulario II | 1 | Préstamos del inglés en katakana |

## Cómo aprende

- **Mnemónicas en español** para cada símbolo (ね = un gato con la cola enroscada, y *neko* significa gato).
- **Palabra de ejemplo** con su significado para cada kana (す → すし *sushi*), y aviso cuando el kana por sí solo ya es una palabra (め = ojo, て = mano) o funciona como partícula (は, を, へ, の, も).
- **Pronunciación**: cómo se escribiría cada sílaba en español (か → «ca», き → «qui», は → «ja» suave) con aviso en los sonidos que el español no tiene (し, つ, ふ, ら, ざ). Botón 🔊 con el sintetizador del propio dispositivo: voz japonesa si está instalada, o voz española como aproximación.
- **Trazado a mano con evaluación**: cada kana se practica dibujándolo sobre una guía. La calificación es neta (lo que cubres de la letra menos lo que pintas fuera) y también se revisa el número de trazos (筆順). Umbrales calibrados con trazos simulados sobre los 126 kana.
- **Práctica de escritura libre**: repasa cualquier símbolo aprendido con guía o **de memoria** — solo con el romaji como pista, en el tamaño y posición que quieras; la app normaliza tu dibujo y compara la forma.
- **Quiz en ambas direcciones**: símbolo → lectura y lectura → símbolo. Se requiere 80% para avanzar.
- **Repaso espaciado (Leitner)**: cada elemento aprobado vuelve a los 1, 3, 7, 14, 30 y 60 días. Si fallas, regresa al inicio.
- **Racha diaria**: 20 XP al día — una lección o ~10 repasos correctos, unos 5 minutos.

## Instalar en el teléfono o la tablet
  **NOTA: Se recomienda usar lapiz para mejorar el aprendizaje**
Abre el link y añade la página a la pantalla de inicio:

- **Android / Chrome** — menú ⋮ → *Añadir a pantalla de inicio*
- **iPad / iPhone / Safari** — botón compartir → *Añadir a inicio*


Queda con su ícono あ y abre a pantalla completa, como una app normal. Después de la primera visita funciona sin internet.

## Progreso

Se guarda en el navegador de cada dispositivo (`localStorage`). Para pasarlo de la compu a la tablet: entra a **Cómo funciona → Exportar**, copia el código y pégalo en el otro dispositivo con **Importar**.

## Estructura

```
index.html      la app completa (HTML + CSS + JS, sin dependencias)
sw.js           service worker para uso offline
manifest.json   metadatos para instalarla como app
icon.png        ícono 512×512
icon-192.png    ícono 192×192
```
