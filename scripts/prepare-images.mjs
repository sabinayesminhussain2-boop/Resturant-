import sharp from 'sharp';
import { readdir, mkdir, unlink } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'public/images';
const files = (await readdir(SRC)).filter(f => f.endsWith('.jpg'));

await mkdir(path.join(SRC, 'thumbs'), { recursive: true });
await mkdir(path.join(SRC, 'crops'), { recursive: true });

for (const file of files) {
  const name = path.basename(file, '.jpg');
  const input = path.join(SRC, file);
  await sharp(input)
    .webp({ quality: name === 'hero-biryani' ? 86 : 82, effort: 6 })
    .toFile(path.join(SRC, `${name}.webp`));
  await sharp(input)
    .resize(480, 480, { fit: 'cover', position: 'centre' })
    .webp({ quality: 78 })
    .toFile(path.join(SRC, 'thumbs', `${name}.webp`));
  await unlink(input);
  console.log('optimised', name);
}

// Decorative macro crops pulled from the emerald photography (same scene family)
const crops = [
  ['spice-star-anise', 'hero-biryani', { left: 960, top: 30, width: 400, height: 330 }],
  ['herb-mint', 'hero-biryani', { left: 1000, top: 110, width: 400, height: 400 }],
  ['spice-cardamom', 'hero-biryani', { left: 170, top: 120, width: 400, height: 400 }],
  ['herb-coriander', 'hero-biryani', { left: 180, top: 440, width: 360, height: 300 }],
  ['spice-clove', 'hero-biryani', { left: 1010, top: 420, width: 390, height: 320 }],
  ['saffron-study', 'hero-biryani', { left: 180, top: 250, width: 330, height: 330 }],
  ['chilli-study', 'rogan-josh', { left: 900, top: 0, width: 450, height: 420 }],
];

for (const [name, source, extract] of crops) {
  await sharp(path.join(SRC, `${source}.webp`))
    .extract(extract)
    .resize(560, 560, { fit: 'cover' })
    .webp({ quality: 84 })
    .toFile(path.join(SRC, 'crops', `${name}.webp`));
  console.log('crop', name);
}

console.log('done');
