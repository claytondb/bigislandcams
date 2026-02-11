# Changelog

## [1.1.0] - 2026-02-11

### Changed
- **Actually embedded webcams** instead of just linking to them!
- USGS volcano cams now show live images directly (auto-refresh every 60s)
- Added manual refresh button (🔄) for each image cam
- Hilo Bay shows live Nest stream from Tsunami Museum
- Kona Bay shows live image from KonaWeb
- Outrigger Kona, Waikoloa, Hapuna, Mauna Kea Beach via Ozolio streams

### Technical
- USGS cams use direct image URLs: `/cams/{cam}/images/M.jpg`
- Auto-refresh with cache-busting timestamps
- Loading spinner overlay for manual refreshes
- Iframe embeds for live video streams (Nest, Ozolio)

## [1.0.0] - 2026-02-11

### Added
- Initial release
- **Volcano section**: Kīlauea summit (Halemaʻumaʻu), Mauna Loa caldera, thermal cams, SW rift zone, Puʻuʻōʻō
- **Mauna Kea section**: Observatory multi-cam, CFHT cloud cam, Gemini telescope
- **Beaches section**: Banyans surf cam, Kawaihae, Waikoloa Beach, Hapuna Beach
- **Kona section**: Kailua Bay, Keauhou Bay, Kona Brewing, Magic Sands
- **Hilo section**: Hilo Bay (Tsunami Museum), Honoli'i surf
- **Resorts section**: Hilton Waikoloa, Mauna Kea Beach Hotel, Fairmont Orchid
- Live Hawaii time display
- Smooth scroll navigation with active state
- Mobile responsive design
- Dark theme optimized for viewing

### Technical
- Pure HTML/CSS/JS, no dependencies
- Sticky navigation with section highlighting
- Card-based layout with hover effects
- ~36KB single-file app
