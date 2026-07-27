// scripts/ghpages-build.js
const fs = require('fs');
const path = require('path');

console.log('🔨 Building for GitHub Pages...');

// 1. Hapus index.html lama (jika ada)
try {
  fs.unlinkSync('index.html');
  console.log('✅ Removed old index.html');
} catch (e) {
  console.log('ℹ️  No old index.html to remove');
}

// 2. Rename ghpages.html → index.html
try {
  fs.renameSync('ghpages.html', 'index.html');
  console.log('✅ Renamed ghpages.html → index.html');
} catch (e) {
  console.error('❌ Error: ghpages.html tidak ditemukan!');
  process.exit(1);
}

// 3. Hapus file babel di folder assets
try {
  const assetsDir = 'assets';
  if (fs.existsSync(assetsDir)) {
    fs.readdirSync(assetsDir)
      .filter(f => f.startsWith('babel'))
      .forEach(f => {
        fs.rmSync(path.join(assetsDir, f), { force: true, recursive: true });
        console.log(`✅ Removed ${f}`);
      });
  }
} catch (e) {
  console.log('ℹ️  No babel files to remove');
}

// 4. Hapus folder build dan wc-registry.json
['build', 'wc-registry.json'].forEach(f => {
  try {
    fs.rmSync(f, { recursive: true, force: true });
    console.log(`✅ Removed ${f}`);
  } catch (e) {
    console.log(`ℹ️  ${f} not found`);
  }
});

console.log('✅ Build selesai! Siap deploy ke GitHub Pages.');