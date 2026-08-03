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
- **Trazado a mano**: cada kana se practica dibujándolo sobre una guía, con el dedo o el mouse. Escribir fija la memoria de un modo que solo mirar no logra.
- **Quiz en ambas direcciones**: símbolo → lectura y lectura → símbolo. Se requiere 80% para avanzar.
- **Repaso espaciado (Leitner)**: cada elemento aprobado vuelve a los 1, 3, 7, 14, 30 y 60 días. Si fallas, regresa al inicio.
- **Racha diaria**: 20 XP al día — una lección o ~10 repasos correctos, unos 5 minutos.

## Instalar en el teléfono o la tablet

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
