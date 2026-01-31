const nodeHtmlToImage = require('html-pdf-node');
const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bregas Satria Wicaksono CV</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.4;
            color: #333;
            margin: 0;
            padding: 0;
            font-size: 11pt;
        }
        h1 {
            font-size: 24pt;
            margin-bottom: 5px;
            text-transform: uppercase;
            color: #000;
        }
        h2 {
            font-size: 14pt;
            border-bottom: 2px solid #000;
            margin-top: 20px;
            margin-bottom: 10px;
            text-transform: uppercase;
            color: #000;
        }
        h3 {
            font-size: 12pt;
            margin-top: 15px;
            margin-bottom: 5px;
            color: #000;
        }
        .subtitle {
            font-weight: bold;
            font-size: 11pt;
            margin-bottom: 10px;
            color: #555;
        }
        .contact-info {
            margin-bottom: 20px;
            font-size: 10pt;
        }
        .contact-info a {
            color: #333;
            text-decoration: none;
        }
        section {
            margin-bottom: 10px;
        }
        .experience-item, .education-item {
            margin-bottom: 15px;
            page-break-inside: avoid;
        }
        h2 {
            font-size: 14pt;
            border-bottom: 2px solid #000;
            margin-top: 20px;
            margin-bottom: 10px;
            text-transform: uppercase;
            color: #000;
            page-break-after: avoid;
        }

        .job-header {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
        }
        .job-title {
            font-style: italic;
        }
        ul {
            margin-top: 5px;
            margin-bottom: 5px;
            padding-left: 20px;
        }
        li {
            margin-bottom: 3px;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        .skill-category {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>BREGAS SATRIA WICAKSONO</h1>
    <div class="subtitle">Apple Developer Academy @BINUS - Bali Graduate | Indie Game Developer</div>
    
    <div class="contact-info">
        Email: bregas.sat1@gmail.com | Portfolio: <a href="https://bregas.id">bregas.id</a><br>
        GitHub: <a href="https://github.com/MoonGoblinDev">MoonGoblinDev</a> | LinkedIn: <a href="https://www.linkedin.com/in/bregas-satria-wicaksono/">bregas-satria-wicaksono</a><br>
        Location: Indonesia
    </div>

    <section>
        <h2>PROFESSIONAL SUMMARY</h2>
        <p>
            Software Engineer, Full-Stack Developer, and Game Developer with 4+ years of experience as a tech engineer. Recently graduated from the Apple Developer Academy @BINUS and currently spearheading <strong>Ainotra</strong>, a cross-platform app suite for reading, writing, and localizing e-books. Specialized in high-performance application architecture, AI integration, and bridging the gap between mobile, desktop, and web. Passionate about bringing creative ideas to life through production-ready code and innovative tech exploration.
        </p>
    </section>

    <section>
        <h2>EXPERIENCE</h2>

        <div class="experience-item">
            <div class="job-header">
                <span>Founder & Lead Full-Stack Engineer | Ainotra</span>
                <span>01/2024 – Present</span>
            </div>
            <ul>
                <li><strong>Ainotra Reader:</strong> Architected a high-performance, cross-platform AI e-book reader (Web, Android, iOS, Desktop) using React, Tauri, Electron, and Capacitor.</li>
            </ul>
        </div>

        <div class="experience-item">
            <div class="job-header">
                <span>iOS Developer | Apple Developer Academy</span>
                <span>03/2025 – 12/2025</span>
            </div>
            <div class="subtitle" style="font-weight: normal; font-size: 10pt;">Bali, Indonesia</div>
            <ul>
                <li><strong>Nada (iOS, iPad, MacOS):</strong> Engineered a real-time Audio-to-MIDI conversion tool using advanced DSP. Managed pitch correction and low-latency export for professional DAWs.</li>
                <li><strong>Selecta (iPadOS):</strong> Developed a professional DJ simulation engine with custom audio synchronization and waveform visualization.</li>
                <li><strong>Skyloon (macOS/iOS/watchOS):</strong> Engineered an experimental survival game using cross-device local networking (iPhone/Apple Watch as motion controllers).</li>
                <li><strong>Trawl (iOS):</strong> Architected a localized fishing forecast system integrating real-time weather and solunar data.</li>
            </ul>
        </div>

        <div class="experience-item">
            <div class="job-header">
                <span>Unity Developer | MoonGoblin</span>
                <span>07/2021 – 03/2025</span>
            </div>
            <div class="subtitle" style="font-weight: normal; font-size: 10pt;">Indonesia</div>
            <ul>
                <li><strong>Alchemy Profit:</strong> Developed a deep economic simulation engine for a fantasy shop management game.</li>
                <li><strong>Goblin Adventure:</strong> Engineered a physics-based platforming system for a mobile title with over 50 hand-crafted levels.</li>
                <li><strong>Crafting for Game Creator:</strong> Published a robust visual node-based editor for the Unity Asset Store, used by hundreds of independent developers.</li>
            </ul>
        </div>

        <div class="experience-item">
            <div class="job-header">
                <span>Business Government Enterprise Service Intern | Telkom Indonesia</span>
                <span>07/2021 – 08/2021</span>
            </div>
            <ul>
                <li>Managed client acquisition strategies and professional interaction protocols.</li>
                <li>Organized and processed complex client data sets for enterprise-level service entry.</li>
                <li>Conducted field visits to facilitate high-level client relations and needs analysis.</li>
            </ul>
        </div>
    </section>

    <section>
        <h2>EDUCATION</h2>

        <div class="experience-item">
            <div class="job-header">
                <span>Apple Developer Academy</span>
                <span>01/2025 – 12/2025</span>
            </div>
            <div class="subtitle" style="font-weight: normal; font-size: 10pt;">Indonesia</div>
            <p style="margin-top: 5px;">Graduate Program specializing in iOS/macOS Development, Design, and Professional Business Skills.</p>
        </div>

        <div class="experience-item">
            <div class="job-header">
                <span>Bachelor of Management | Telkom University</span>
                <span>01/2018 – 12/2022</span>
            </div>
            <p style="margin-top: 5px;">Business Administration and Management, General.</p>
        </div>
    </section>

    <section>
        <h2>TECHNICAL SKILLS</h2>
        <div class="skills-grid">
            <div>
                <span class="skill-category">Platforms:</span> iOS, macOS, iPadOS, Android, Web, Desktop (Electron, Tauri)
            </div>
            <div>
                <span class="skill-category">Languages:</span> Swift, C#, C++, SQL, TypeScript, JavaScript (Bun/Node)
            </div>
            <div>
                <span class="skill-category">Frameworks:</span> SwiftUI, UIKit, AppKit, React 19, Hono, Capacitor, Tailwind CSS
            </div>
            <div>
                <span class="skill-category">State & Routing:</span> TanStack Router, TanStack Query, Zustand, Redux, Dexie (IndexedDB)
            </div>
            <div>
                <span class="skill-category">Infrastructure:</span> Cloudflare Workers, Firebase, Google Drive API, OpenAI API
            </div>
            <div>
                <span class="skill-category">Tools:</span> Xcode, Unity Engine, Git, CI/CD, Vite, Bun, Wrangler
            </div>
        </div>
    </section>

    <section>
        <h2>PROJECTS (Selected)</h2>
        <ul>
            <li><strong>Civicomfy:</strong> Integrated model downloader for ComfyUI, enabling seamless search and organization of Civitai models with automated metadata and thumbnail management.</li>
            <li><strong>Project Ingest (macOS):</strong> LLM context aggregation tool released on the Mac App Store.</li>
        </ul>
    </section>
</body>
</html>
`;

let options = { 
  format: 'A4',
  margin: {
    top: '60px',
    bottom: '60px',
    left: '60px',
    right: '60px'
  }
};
let file = { content: htmlContent };

nodeHtmlToImage.generatePdf(file, options).then(pdfBuffer => {
  fs.writeFileSync('./public/Bregas_Satria_Wicaksono_CV.pdf', pdfBuffer);
  console.log("PDF generated successfully at ./public/Bregas_Satria_Wicaksono_CV.pdf");
});
