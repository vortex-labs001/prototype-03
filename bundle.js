const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'components');
const appDir = path.join(__dirname, 'app');
const outDir = path.join(__dirname, '..', '..', 'brain', '19d9bc7c-df88-46ac-b58d-c327dad9dcab');

// 1. Copy styles.css
fs.copyFileSync(path.join(appDir, 'globals.css'), path.join(outDir, 'styles.css'));

// 2. Bundle index.tsx
const components = [
  'Header.tsx', 'Hero.tsx', 'About.tsx', 'Rooms.tsx', 'Amenities.tsx',
  'Gallery.tsx', 'Pricing.tsx', 'Reviews.tsx', 'Location.tsx', 'Footer.tsx',
  'WhatsAppButton.tsx'
];

let allCode = '';
let allImports = new Set();
let allIcons = new Set();
let framerMotionImported = false;
let nextImageImported = false;

// Process components
for (const comp of components) {
  const content = fs.readFileSync(path.join(srcDir, comp), 'utf-8');
  const lines = content.split('\n');
  
  let inComponent = false;
  for (let line of lines) {
    if (line.startsWith('import ')) {
      if (line.includes('lucide-react')) {
        const match = line.match(/\{([^}]+)\}/);
        if (match) {
          match[1].split(',').forEach(icon => allIcons.add(icon.trim()));
        }
      } else if (line.includes('framer-motion')) {
        framerMotionImported = true;
      } else if (line.includes('next/image')) {
        nextImageImported = true;
      } else {
        // other imports (like react)
        if (!line.includes('lucide-react') && !line.includes('framer-motion') && !line.includes('next/image')) {
           allImports.add(line);
        }
      }
    } else if (line.startsWith('export default function') || line.startsWith('const ') || line.startsWith('function ')) {
      inComponent = true;
      allCode += line + '\n';
    } else if (inComponent || line.trim() !== '"use client";') {
      allCode += line + '\n';
    }
  }
}

// Process page.tsx
const pageContent = fs.readFileSync(path.join(appDir, 'page.tsx'), 'utf-8');
const pageLines = pageContent.split('\n');
let inPage = false;
for (let line of pageLines) {
    if (line.startsWith('export default function')) {
        inPage = true;
        allCode += line + '\n';
    } else if (inPage) {
        allCode += line + '\n';
    } else if (line.startsWith('import ') && !line.includes('@/components') && !line.includes('lucide-react') && !line.includes('framer-motion') && !line.includes('next/image')) {
        allImports.add(line);
    } else if (line.includes('lucide-react')) {
        const match = line.match(/\{([^}]+)\}/);
        if (match) {
          match[1].split(',').forEach(icon => allIcons.add(icon.trim()));
        }
    }
}

let finalOutput = '"use client";\n\n';
Array.from(allImports).forEach(imp => { finalOutput += imp + '\n'; });
if (framerMotionImported) {
    finalOutput += 'import { motion, AnimatePresence } from "framer-motion";\n';
}
if (nextImageImported) {
    finalOutput += 'import Image from "next/image";\n';
}
if (allIcons.size > 0) {
    finalOutput += `import { ${Array.from(allIcons).filter(Boolean).join(', ')} } from "lucide-react";\n`;
}

finalOutput += '\n' + allCode;

// Clean up duplicate 'use client' that might have snuck in
finalOutput = finalOutput.replace(/"use client";\n"use client";/g, '"use client";\n');

fs.writeFileSync(path.join(outDir, 'index.tsx'), finalOutput);
console.log("Bundled successfully!");
