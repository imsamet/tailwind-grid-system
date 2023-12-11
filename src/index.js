const fs = require('fs');
const path = require('path');
const Breakpoint = require('./breakpoints.js');
function generateGrid() {
  const css = `

`;
  console.log(Breakpoint);
  const cssFilePath = path.resolve(process.cwd(), 'dist', 'grid.css');
  fs.writeFileSync(cssFilePath, css);
}

generateGrid();
/* 
.dark\:text-slate-400{
  
}
*/
