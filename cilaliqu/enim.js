const fs = require('fs');

// Function to get the size of a file's content
function getFileSize(filePath) {
    const stats = fs.statSync(filePath);
    return stats.size; // size of its actual content
}

// Usage
const fileSize = getFileSize('path/to/your/file.txt');
console.log(`File size: ${fileSize} bytes`);
