import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Railway volume mount path (set via environment variable)
// Default Railway volume mount is usually at /data or check Railway dashboard
const VOLUME_PATH =
  process.env.RAILWAY_VOLUME_MOUNT_PATH ||
  process.env.RAILWAY_VOLUME_PATH ||
  "/data";
const DIST_PATH = path.join(__dirname, "../dist");
const TARGET_DIR = path.join(DIST_PATH, "curious_skeleton");

// Check if volume path exists
const sourceDir = path.join(VOLUME_PATH, "curious_skeleton");

if (fs.existsSync(sourceDir)) {
  console.log(`Copying assets from ${sourceDir} to ${TARGET_DIR}`);

  // Create target directory if it doesn't exist
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  // Copy directory recursively
  function copyRecursive(src, dest) {
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }
        copyRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${entry.name}`);
      }
    }
  }

  copyRecursive(sourceDir, TARGET_DIR);
  console.log("Assets copied successfully to dist directory!");
} else {
  console.log(`Volume directory ${sourceDir} not found, skipping asset copy`);
  console.log(
    "Make sure Railway volume is mounted and contains curious_skeleton directory"
  );
}
