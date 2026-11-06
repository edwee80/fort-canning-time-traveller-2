# Fort Canning Time Traveller — Heritage Passport Prototype

A static mobile-friendly educational website with three historical chapters and seven heritage checkpoints, aligned to the official Heritage Guide.

## Run locally

1. Extract the ZIP archive.
2. Open `index.html` in Chrome or Edge. The stories and photos work without a server. Maps require internet access.
3. For more reliable testing, run a local web server from the extracted folder:

   ```powershell
   py -m http.server 8000
   ```

   Then open http://localhost:8000 in your browser.

## Use the passport

Each checkpoint can be stamped manually once you have visited it. The journey is a self-reported learning activity, not a verified attendance system, so each stamp is confirmed by the visitor on the device before it is saved locally.

## Publish with GitHub Pages

1. Create a public GitHub repository.
2. Upload `index.html`, `styles.css`, `app.js`, `passport.js`, and the complete `assets/` folder to the repository root.
3. Go to **Settings → Pages** and choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Wait for the Pages URL and open it on a phone. GitHub Pages provides HTTPS.

Alternatively, drag the entire site folder to Netlify Drop. Make sure the `assets` directory is included.

## What is included

- Three educational history chapters and nine quiz questions
- Seven Fort Canning heritage checkpoints matching the official Heritage Field Guide:
  1. Battlebox — subterranean wartime command bunker
  2. Fort Gate — fortifications and historic military gate
  3. Gothic Gate — former cemetery entrance and memorial precinct
  4. Sang Nila Utama — royal hilltop garden and keramat precinct
  5. Raffles Garden — colonial summit garden and observatory landmarks
  6. Fort Canning Service Reservoir — hilltop reservoir and post-fort adaptation
  7. Jubilee Park — modern heritage landscape and family recreation
- Manual visit confirmation and route-based passport stamps
- Collectible custom-illustrated heritage sticker stamps for each checkpoint
- Route-aware 8-page Heritage Field Guide PDF downloads (`Fort-Canning-Heritage-Field-Guide-Dhoby-Ghaut-Route.pdf` and `Fort-Canning-Heritage-Field-Guide-Fort-Canning-Route.pdf`) with map pins, checkpoint list, and pages 2–8 ordered to match your selected starting MRT route (plus the base `Fort-Canning-Heritage-Field-Guide.pdf`)
- Seven passport stamps saved in browser localStorage
- Downloadable route-specific landscape completion certificate with all 7 sticker seals once all checkpoints are stamped
- Separate chapter quiz progress saved in browser localStorage

## Credits and limitations

Photographs and historical texts are derived from the official team `Guide.pdf` (pages 1–8). This is a student prototype and is not an official NParks or National Heritage Board service. Google Maps requires an internet connection.

