// scripts/optimize-images.ts
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const targetDir = path.resolve('public');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

function optimizeImage(filePath: string): void {
  const ext = path.extname(filePath).toLowerCase();
  if (!imageExtensions.includes(ext)) return;

  const tempPath = filePath + '.tmp';

  sharp(filePath)
    .toFormat(ext === '.webp' ? 'webp' : 'jpeg', {
      quality: ext === '.webp' ? 75 : 80,
    })
    .toFile(tempPath)
    .then(() => {
      fs.renameSync(tempPath, filePath);
      console.log(`✔ Optimized: ${filePath}`);
    })
    .catch(err => console.error(`✖ Failed: ${filePath}`, err));
}

function walk(dir: string): void {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else {
      optimizeImage(fullPath);
    }
  });
}

if (!fs.existsSync(targetDir)) {
  console.warn(`⚠ Directory not found: ${targetDir}`);
  process.exit(1);
}

console.log('🔄 Optimizing all image formats in public...');
walk(targetDir);
