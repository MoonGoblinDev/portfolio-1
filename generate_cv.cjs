const nodeHtmlToPdf = require("html-pdf-node");
const fs = require("fs");

const htmlContent = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bregas Satria Wicaksono CV</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        font-size: 10.5pt;
        line-height: 1.35;
        color: #111;
        margin: 0;
        padding: 0;
      }

      a {
        color: #111;
        text-decoration: none;
      }

      p {
        margin: 0 0 6px 0;
      }

      h1 {
        font-size: 22pt;
        margin: 0 0 4px 0;
        text-transform: uppercase;
        color: #000;
      }

      .headline {
        font-weight: 700;
        font-size: 11pt;
        margin: 0 0 10px 0;
        color: #333;
      }

      .contact {
        font-size: 9.5pt;
        margin: 0 0 14px 0;
        color: #333;
      }

      h2 {
        font-size: 12pt;
        border-bottom: 1.5px solid #000;
        margin: 12px 0 6px 0;
        padding-bottom: 3px;
        text-transform: uppercase;
        color: #000;
        page-break-after: avoid;
      }

      .job,
      .project {
        margin: 0 0 10px 0;
        page-break-inside: avoid;
      }

      .job-header {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        font-weight: 700;
      }

      .job-sub {
        margin-top: 2px;
        font-size: 9.5pt;
        color: #444;
      }

      ul {
        margin: 4px 0 0 18px;
        padding: 0;
      }

      li {
        margin: 0 0 2px 0;
      }

      .label {
        font-weight: 700;
      }

      .skills-line {
        margin: 0 0 2px 0;
      }
    </style>
  </head>
  <body>
    <h1>BREGAS SATRIA WICAKSONO</h1>
    <div class="headline">Product Engineer (iOS, Android, Desktop, & Web)</div>
    <div class="contact">
      Indonesia · <a href="mailto:bregas.sat1@gmail.com">bregas.sat1@gmail.com</a> ·
      <a href="https://bregas.id">bregas.id</a> ·
      <a href="https://www.linkedin.com/in/bregas-satria-wicaksono/">LinkedIn</a> ·
      <a href="https://github.com/MoonGoblinDev">GitHub</a>
    </div>

    <h2>Summary</h2>
    <p>
      Product-minded engineer who designs and ships end-to-end experiences across Apple platforms, Android and modern web/desktop.
      Apple Developer Academy @Bali graduate and founder of Ainotra. Strong in
      Swift/SwiftUI, React/TypeScript, Unity C#, cross-device connectivity, and AI-agents.
    </p>

    <h2>Skills</h2>
    <div class="skills-line"><span class="label">Product:</span> Design thinking process, rapid prototyping, UX/UI iteration, information architecture, interaction design, accessibility-minded UI</div>
    <div class="skills-line"><span class="label">Apple:</span> Swift, SwiftUI, UIKit, AppKit, Combine, Core Data</div>
    <div class="skills-line"><span class="label">Web/Desktop:</span> React, TypeScript, TanStack Router/Query, Vite, Tailwind CSS, Tauri, Electron, Capacitor</div>
    <div class="skills-line"><span class="label">Backend/Cloud:</span> Cloudflare Workers, Hono, Firebase, REST APIs, auth/OAuth flows, email/webhooks</div>
    <div class="skills-line"><span class="label">Tools:</span> Git, CI/CD, Xcode, Unity, Wrangler, Bun</div>

    <h2>Experience</h2>

    <div class="job">
      <div class="job-header">
        <span>Founder & Product Engineer | Ainotra</span>
        <span>01/2025 – Present</span>
      </div>
      <div class="job-sub">Indonesia</div>
      <ul>
        <li>Built and shipped a cross-platform reading product (Web, Android, iOS, Desktop) with a focus on fast iteration and polished UX.</li>
        <li>Engineered an offline-first library and reading experience using React + TypeScript, local persistence, and sync-friendly data modeling.</li>
        <li>Implemented cross-platform authentication + deep-link flows across desktop and mobile runtimes (Electron/Tauri/Capacitor).</li>
        <li>Designed and implemented serverless APIs (Cloudflare Workers + Hono) and product integrations (payments, email, AI features).</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <span>iOS Developer (Project-Based) | Apple Developer Academy @BINUS</span>
        <span>03/2025 – 12/2025</span>
      </div>
      <div class="job-sub">Bali, Indonesia</div>
      <ul>
        <li>Shipped multiple product prototypes end-to-end (define scope, build, iterate with feedback, demo and deliver).</li>
        <li><span class="label">Nada (iOS/iPadOS/macOS):</span> built a real-time Audio-to-MIDI pipeline using DSP concepts; optimized latency and export for DAW workflows.</li>
        <li><span class="label">Selecta (iPadOS):</span> implemented a touch-first DJ experience with waveform visualization, tempo sync, and audio engine integration.</li>
        <li><span class="label">Skyloon (macOS/iOS/watchOS):</span> prototyped cross-device local multiplayer input (iPhone/Apple Watch as motion controllers) with low-latency networking.</li>
        <li><span class="label">Trawl (iOS):</span> built a location-aware fishing companion using weather + solunar data, offline usability, and a digital catch log.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <span>Independent Unity Developer | MoonGoblin</span>
        <span>07/2021 – 03/2025</span>
      </div>
      <div class="job-sub">Indonesia</div>
      <ul>
        <li>Built and shipped games/tools in Unity with an emphasis on responsive feel, performance, and clear UX for creators.</li>
        <li><span class="label">Crafting for Game Creator:</span> published a node-based crafting editor on the Unity Asset Store (workflow automation for indie devs).</li>
        <li><span class="label">Goblin Adventure:</span> implemented a physics-based mobile platformer controller and level systems for 50+ handcrafted stages.</li>
        <li><span class="label">Alchemy Profit:</span> developed a simulation-driven economy loop for a shop-management game.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <span>Business Government Enterprise Service Intern | Telkom Indonesia</span>
        <span>07/2021 – 08/2021</span>
      </div>
      <div class="job-sub">Jember, Indonesia</div>
      <ul>
        <li>Supported enterprise client operations: data entry/validation, client coordination, and field visit preparation.</li>
      </ul>
    </div>

    <h2>Education</h2>
    <div class="job">
      <div class="job-header">
        <span>Telkom University — Bachelor of Management</span>
        <span>01/2018 – 12/2022</span>
      </div>
      <div class="job-sub">Business Administration and Management</div>
    </div>

    <h2>Projects</h2>
    <div class="project">
      <div class="job-header">
        <span>Civicomfy</span>
        <span>2025</span>
      </div>
      <div class="job-sub"><a href="https://github.com/MoonGoblinDev/Civicomfy">github.com/MoonGoblinDev/Civicomfy</a></div>
      <ul>
        <li>Integrated model search + one-click downloads for ComfyUI, with automatic metadata/thumbnails and directory organization.</li>
      </ul>
    </div>

    <div class="project">
      <div class="job-header">
        <span>Project Ingest (macOS)</span>
        <span>2023</span>
      </div>
      <ul>
        <li>LLM context aggregation utility released on the Mac App Store; scans codebases while respecting .gitignore and exports an LLM-friendly bundle with token estimation.</li>
      </ul>
    </div>
  </body>
</html>
`;

let options = {
  format: "A4",
  printBackground: true,
  margin: {
    top: "56px",
    bottom: "56px",
    left: "56px",
    right: "56px",
  },
};
let file = { content: htmlContent };

nodeHtmlToPdf.generatePdf(file, options).then((pdfBuffer) => {
  fs.writeFileSync("./public/Bregas_Satria_Wicaksono_CV.pdf", pdfBuffer);
  console.log(
    "PDF generated successfully at ./public/Bregas_Satria_Wicaksono_CV.pdf",
  );
});
