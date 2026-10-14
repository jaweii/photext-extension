# PhoText browser extension

Right-click any image to open it in [PhoText](https://photext.ai) — edit, remove, or translate text in the image (keeping the look), or identify the font.

**Website:** https://photext.ai  
**Support:** admin@photext.shop  
**Privacy:** [PRIVACY.md](./PRIVACY.md) · https://photext.ai/privacy/

## Install (unpacked / review)

1. Chrome / Edge: open `chrome://extensions` (or `edge://extensions`) → Developer mode → Load unpacked → select this folder (or unzip `photext-extension-chrome-edge-1.0.0.zip`).
2. Firefox: open `about:debugging#/runtime/this-firefox` → Load Temporary Add-on → pick `manifest.json` from this folder (or unzip `photext-extension-firefox-1.0.0.zip`).

Store listing copy for Chrome Web Store / Edge Add-ons / Firefox AMO is in [STORE_LISTING.md](./STORE_LISTING.md).

## What it does

Adds four image context-menu items. Each opens the matching PhoText tool in a new tab. The extension does not read page content, does not upload images, and collects no data.

| Menu | Opens |
|------|--------|
| Edit text with PhoText | https://photext.ai/ |
| Remove text with PhoText | https://photext.ai/image_remove_text/ |
| Translate image text with PhoText | https://photext.ai/ImageTranslator/ |
| Find font with PhoText | https://photext.ai/FontFinder/ |

## Files

- `manifest.json` — Manifest V3 (Chrome/Edge) + `browser_specific_settings.gecko` (Firefox)
- `background.js` — context menu service worker
- `popup.html` — toolbar popup with the same four links
- `icons/` — 16 / 32 / 48 / 128 PNG

## License

MIT
