const path = require('path');

// 1. Joining Path Segments
// function joinPaths(...paths) {
//   const joinedPath = path.join(...paths);
//   console.log('Joined Path:', joinedPath);
// }
// joinPaths('users', 'john', 'docs', 'example.txt');

// 2. Resolving an Absolute Path
function resolvePath(...pathSegments) {
  const absolutePath = path.resolve(...pathSegments);
  console.log('Resolved Path:', absolutePath);
}
// const examplePath = '/users/john/docs/example.txt';
// getBasename(examplePath);
// resolvePath('users', 'john', 'docs', 'example.txt');
// getBasename(examplePath);
// getDirname(examplePath);
// getExtension(examplePath);
// parsePath(examplePath);
// formatPath(path.parse(examplePath));
// normalizePath(relativePath);



// 3. Getting the Basename
function getBasename(filePath) {
  const basename = path.basename(filePath);
  console.log('Basename:', basename);
}
// getBasename(examplePath);


// 4. Getting the Directory Name
function getDirname(filePath) {
  const dirname = path.dirname(filePath);
  console.log('Directory Name:', dirname);
}
// getDirname(examplePath);

// // 5. Getting the Extension
function getExtension(filePath) {
  const ext = path.extname(filePath);
  console.log('Extension:', ext);
}
// getExtension(examplePath)

// 6. Parsing a Path
function parsePath(filePath) {
  const parsedPath = path.parse(filePath);
  console.log('Parsed Path:', parsedPath);
}
const examplePath = '/users/john/docs/e.txt';
parsePath(examplePath)


// // 7. Formatting a Path Object
// function formatPath(pathObject) {
//   const formattedPath = path.format(pathObject);
//   console.log('Formatted Path:', formattedPath);
// }

// // 8. Normalizing a Path
// function normalizePath(filePath) {
//   const normalizedPath = path.normalize(filePath);
//   console.log('Normalized Path:', normalizedPath);
// }

// // Example Usage
// const examplePath = '/users/john/docs/example.txt';
// const relativePath = './docs/example.txt';


// resolvePath('users', 'john', 'docs', 'example.txt');
// getBasename(examplePath);
// getDirname(examplePath);
// getExtension(examplePath);
// parsePath(examplePath);
// formatPath(path.parse(examplePath));
// normalizePath(relativePath);
