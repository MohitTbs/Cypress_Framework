const fs = require('fs');
const path = './Logging/logs.log'; // Example folder to clear

if (fs.existsSync(path)) {
  fs.rmSync(path, { recursive: true, force: true });
  console.log(`Cleared folder: ${path}`);
} else {
  console.log(`Folder not found: ${path}`);
}
