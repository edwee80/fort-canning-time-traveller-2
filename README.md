# Fort Canning Time Traveller — Heritage Passport Prototype

A static mobile-friendly educational website with three historical chapters and a five-landmark photo passport.

## Run locally

1. Extract the ZIP archive.
2. Open `index.html` in Chrome or Edge. The stories and photos work without a server. Maps require internet access.
3. For more reliable testing, run a local web server from the extracted folder:

   ```powershell
   py -m http.server 8000
   ```

   Then open http://localhost:8000 in your browser.

## Test the camera

On a phone, open the deployed website over HTTPS and tap **Take a photo** on a landmark card. The camera or a camera/file chooser will open depending on the device and browser. On desktop, the button opens a file picker. Captured photos are processed locally in the browser; they are not uploaded or saved to a server.

The experimental automatic image comparison uses colour and brightness features and is **not** reliable landmark recognition. Different viewpoints, crops and lighting can prevent a true match, and unrelated photos may match. Visitors therefore explicitly confirm their own visit before collecting a stamp. The passport is a self-reported learning activity, not a verified attendance system.

## Publish with GitHub Pages

1. Create a public GitHub repository.
2. Upload `index.html`, `styles.css`, `app.js`, `passport.js`, and the complete `assets/` folder to the repository root.
3. Go to **Settings → Pages** and choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Wait for the Pages URL and open it on a phone. GitHub Pages provides HTTPS.

Alternatively, drag the entire site folder to Netlify Drop. Make sure the `assets` directory is included.

## What is included

- Three educational history chapters and nine quiz questions
- Seven Fort Canning heritage checkpoints matching the official Heritage Field Guide:
  1. Ancient Singapura (14th Century) — Sang Nila Utama Garden, Pancur Larangan & Keramat Iskandar Shah
  2. Government Hill (Early 1800s) — Raffles House, Raffles Garden, Flagstaff, Lighthouse & Timeball
  3. Old Christian Cemetery (1822–1865) — Cemetery Walls, Gothic Gate, Cupolas & Napier Monument
  4. Military Fort (1859–1907) — Fort Wall, Fort Gate, Powder Magazine, Sally Port & 9-Pound Cannon
  5. Post-Fort Transformation (1920s) — Fort Canning Service Reservoir
  6. Jubilee Park (1935 onwards) — Recreation and heritage play
  7. World War II (1936–1942) — The Battlebox subterranean command bunker
- Camera/file input, experimental on-device visual comparison and manual visit confirmation
- Collectible custom-illustrated heritage sticker stamps for each checkpoint
- Route-aware 8-page Heritage Field Guide PDF downloads (`Fort-Canning-Heritage-Field-Guide-Dhoby-Ghaut-Route.pdf` and `Fort-Canning-Heritage-Field-Guide-Fort-Canning-Route.pdf`) with map pins, checkpoint list, and pages 2–8 ordered to match your selected starting MRT route (plus the base `Fort-Canning-Heritage-Field-Guide.pdf`)
- Seven passport stamps saved in browser localStorage
- Downloadable route-specific landscape completion certificate with all 7 sticker seals once all checkpoints are stamped
- Separate chapter quiz progress saved in browser localStorage

## Credits and limitations

Photographs and historical texts are derived from the official team `Guide.pdf` (pages 1–8). This is a student prototype and is not an official NParks or National Heritage Board service. Google Maps requires an internet connection.

