<<<<<<< HEAD
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
=======
// postcss.config.js
import tailwindcss from '@tailwindcss/postcss';

export default {
  plugins: [tailwindcss, require('autoprefixer')],
};

>>>>>>> 5170758e160f6b20ac523b8a167e47ba8651145f
