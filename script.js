/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs-extra");
const glob = require("glob");
const path = require("path");
require("dotenv").config();

function copyFiles({ targets, outDir }) {
  if (!targets || !targets.length) {
    throw new Error(
      "targets is required and must be an array of glob patterns"
    );
  }
  if (!outDir) {
    throw new Error("outDir is required");
  }

  const allFiles = [];

  targets.forEach((target) => {
    const files = glob.sync(target);

    if (files.length === 0) {
      console.error(`No files found matching the pattern: ${target}`);
      return;
    }

    allFiles.push(...files);
  });

  if (allFiles.length === 0) {
    console.error("No files found in the source directories.");
    return;
  }

  fs.ensureDirSync(outDir);

  allFiles.forEach((file) => {
    const sourceFilePath = file;
    const destinationFilePath = path.join(
      outDir,
      sourceFilePath.replace(/^[^/]+\//, "")
    );

    try {
      fs.copySync(sourceFilePath, destinationFilePath);
      console.log(`Copied ${sourceFilePath} to ${destinationFilePath}`);
    } catch (err) {
      console.error(`Error copying ${sourceFilePath}:`, err);
    }
  });
}

module.exports = { copyFiles };
