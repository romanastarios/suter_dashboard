const fs = require('fs');
const path = require('path');

const artifactsDir = './artifacts';
const outputFile = './artifacts-index.json';

function getArtifactFolders() {
  try {
    const items = fs.readdirSync(artifactsDir);
    const folders = items.filter(item => {
      const fullPath = path.join(artifactsDir, item);
      return fs.statSync(fullPath).isDirectory() && !item.startsWith('.');
    });
    return folders;
  } catch (err) {
    console.error('Error reading artifacts directory:', err);
    return [];
  }
}

function findJsonInFolder(folderPath) {
  try {
    const files = fs.readdirSync(folderPath);
    const jsonFile = files.find(f => f.endsWith('.json'));
    return jsonFile || null;
  } catch (err) {
    return null;
  }
}

function findVideoInFolder(folderPath) {
  try {
    const videosPath = path.join(folderPath, 'videos');
    if (fs.existsSync(videosPath)) {
      const files = fs.readdirSync(videosPath);
      const videoFile = files.find(f => f.endsWith('.webm'));
      return videoFile || null;
    }
    return null;
  } catch (err) {
    return null;
  }
}

const folders = getArtifactFolders();
const index = {
  generated_at: new Date().toISOString(),
  folders: folders.map(folder => {
    const folderPath = path.join(artifactsDir, folder);
    return {
      name: folder,
      json_file: findJsonInFolder(folderPath),
      video_file: findVideoInFolder(folderPath)
    };
  })
};

fs.writeFileSync(outputFile, JSON.stringify(index, null, 2));
console.log(`Generated ${outputFile} with ${folders.length} artifact folders`);
