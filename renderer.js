const { nativeImage, remote } = require("electron") ;
const fs = require('fs');

// Load from PNG

const adaptive = nativeImage.createFromPath("images/folder_mac.png");
const hardcoded1x = nativeImage.createFromPath("images/folder_mac@1x.png");
const hardcoded2x = nativeImage.createFromPath("images/folder_mac@2x.png");

document.getElementById("folder").src = adaptive.toDataURL();
document.getElementById("folder1x").src = hardcoded1x.toDataURL();;
document.getElementById("folder2x").src = hardcoded2x.toDataURL();

// app.GetFileIcon

const dummy = "./emptyDummyFile";
fs.writeFile(dummy, "", err => {
  if (!err) {
    remote.app.getFileIcon(dummy, {size: "small"}, (err, adaptive) => {
      if (!err) {
        const hardcoded1x = nativeImage.createFromPath("images/file_mac@1x.png");
        const hardcoded2x = nativeImage.createFromPath("images/file_mac@2x.png");
        document.getElementById("file").src = adaptive.toDataURL();
        document.getElementById("file1x").src = hardcoded1x.toDataURL();
        document.getElementById("file2x").src = hardcoded2x.toDataURL();
      }
    });
  }
});

// createFromNamedImage

const named = nativeImage.createFromNamedImage("NSImageNameFolder");
document.getElementById("named").src = named.toDataURL();


