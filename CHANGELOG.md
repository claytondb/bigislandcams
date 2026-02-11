# Changelog

## [1.4.0] - 2026-02-11

### Added
- **Mauna Kea Observatory section** with dedicated navigation
- **Subaru-Asahi StarCam** (YouTube) - 24/7 East view from summit, meteor showers & Milky Way
- **CFHT-Asahi StarCam** (YouTube) - 24/7 West view from summit, sunset views
- **Kahalu'u Bay** (Surfline) - Best snorkeling beach on Big Island, sea turtles!

### Changed
- Navigation reordered: Featured → Volcanoes → Observatory → Kona → Surf → Hilo → Resorts
- Added viewing tip for observatory cams (best after 7pm HST)

## [1.3.0] - 2026-02-11

### Added
- **New Surf Cams section** with dedicated navigation
- **MEGA Lab Underwater Reef Cam** - 24/7 underwater livestream from NELHA (YouTube)
- **Magic Sands Beach** (Surfline) - Popular Kona beach
- **Lyman's Surf** (Surfline) - Left-hand point break
- **Honl's Beach** (Surfline) - Kona beach break
- **Banyans full-res cam** (Surfline) - Where Shane Dorian grew up surfing

### Changed
- Moved surf cams to dedicated section
- Reordered navigation: Featured → Volcanoes → Kona → Surf → Hilo → Resorts
- Updated footer credits to include all cam sources

### Fixed
- External link styling for Kailua Bay and Tsunami Museum
- Ozolio CSS cropping now hides navigation properly
- Grand Naniloa autoplay enabled

## [1.2.0] - 2026-02-11

### Fixed
- **Kailua Bay Downtown Kona** - Replaced broken KonaWeb image with SkylineWebcams embed
- **Outrigger Kona** - Replaced with Keauhou Bay (Fair Wind) cam using working Ozolio ID
- **Hilo Bay Pacific Tsunami Museum** - Fixed with HLS player embed for Nest/Dropcam stream
- **Hilo Bay South Grand Naniloa** - Fixed HTTP→HTTPS for mixed content issue
- **Waikoloa Beach Marriott** - Updated to working Ozolio ID (MLXV000000AE)
- **Hapuna Beach** - Updated to working Ozolio ID (DHUH00000548)
- **Mauna Kea Beach Hotel** - Replaced with Banyans Surfline cam (hotel cam unavailable during renovation)

### Added
- **Hilton Waikoloa Village Lagoon** - Featured EarthCam showing sea turtles in saltwater lagoon
- **Banyans Surf Cam** - Surfline still image with auto-refresh

### Changed
- Resorts section now leads with Hilton Waikoloa (best working stream)
- Removed broken relay.ozolio.com URLs, using direct ozolio.com/explore/ embeds

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
