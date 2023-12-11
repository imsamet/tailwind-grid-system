const fs = require('fs');
const path = require('path');

const tailwindConfigPath = path.resolve(process.cwd(), 'tailwind.config.js');

// varsayılan ekran boyutları (gerektiğinde güncellenebilir)
let screens = {
  xs: '475px',
};

if (fs.existsSync(tailwindConfigPath)) {
  const tailwindConfig = require(tailwindConfigPath);
  if (tailwindConfig.theme && tailwindConfig.theme.screens) {
    screens = tailwindConfig.theme.screens;
  }
}

export default screens;
