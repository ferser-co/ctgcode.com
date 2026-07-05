import puppeteer, { Browser } from 'puppeteer';
import fs from 'node:fs/promises';
import path from 'node:path';

interface OGTemplate {
  html: string;
  width?: number;
  height?: number;
  outputPath: string;
}

interface OGTemplateContent {
  headline: string;
  footer?: string;
  logoBase64?: string;
  colorScheme?: 'dark' | 'light';
}

export class OGImageBuilder {
  private browser: Browser | null = null;

  async initialize() {
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }

  async generateImage({ html, width = 1200, height = 630, outputPath }: OGTemplate) {
    if (!this.browser) throw new Error('Browser not initialized. Call initialize() first.');

    const page = await this.browser.newPage();

    try {
      await page.setViewport({ width, height, deviceScaleFactor: 2 });
      await page.setContent(html, { waitUntil: 'networkidle0' as any });

      const dirPath = path.dirname(outputPath);
      await fs.mkdir(dirPath, { recursive: true });

      await page.screenshot({
        path: outputPath,
        type: 'png',
        clip: { x: 0, y: 0, width, height }
      });
    } finally {
      await page.close();
    }
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
}

export function createOGHTML(content: OGTemplateContent): string {
  const {
    headline,
    footer,
    logoBase64 = '',
    colorScheme = 'dark'
  } = content;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&family=Inter:wght@400;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
          width: 1200px;
          height: 630px;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #051c36 0%, #0a1929 20%, #1a0a2e 40%, #5a2a60 60%, #d65a3a 75%, #ff8c42 90%, #87ceeb 100%);
          color: #e8f4f8;
        }
        
        .background-spheres {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          opacity: 0.3;
        }
        
        .sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }
        
        .sphere-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #ff6b35 0%, #f7931e 50%, transparent 100%);
          top: -150px;
          right: -100px;
        }
        
        .sphere-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #0ea5e9 0%, #06b6d4 50%, transparent 100%);
          bottom: -50px;
          left: -50px;
        }
        
        .container {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 60px 80px;
          text-align: center;
          z-index: 10;
        }
        
        .logo-wrapper {
          margin-bottom: 40px;
        }
        
        .logo-wrapper img {
          width: 120px;
          height: 120px;
          filter: drop-shadow(0 15px 40px rgba(255, 107, 53, 0.3));
        }
        
        h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 56px;
          font-weight: 800;
          line-height: 1.2;
          max-width: 1000px;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #fff5e6 0%, #ffe4b5 50%, #ffa500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .footer-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        .footer-text {
          font-size: 20px;
          color: #bae6fd;
          font-weight: 400;
          line-height: 1.4;
        }
        
        .brand-info {
          font-size: 14px;
          color: #7dd3fc;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="background-spheres">
        <div class="sphere sphere-1"></div>
        <div class="sphere sphere-2"></div>
      </div>
      
      <div class="container">
        ${logoBase64 ? `<div class="logo-wrapper"><img src="${logoBase64}" alt="CTG Code Logo" /></div>` : ''}
        <h1>${headline}</h1>
        
        <div class="footer-section">
          ${footer ? `<span class="footer-text">${footer}</span>` : ''}
          <span class="brand-info">CTG Code</span>
        </div>
      </div>
    </body>
    </html>
  `;
}