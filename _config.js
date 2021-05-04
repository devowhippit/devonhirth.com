import lume from 'https://deno.land/x/lume@v0.16.1/mod.js';
import pug from 'https://deno.land/x/lume/plugins/pug.js';
import postcss from 'https://deno.land/x/lume/plugins/postcss.js';

const site = lume({
  cwd: Deno.cwd(),
  src: 'src',
  dest: 'dist',
  prettyUrls: false,
  server: {
    port: 7000,
    page404: '/404.html',
  }
});

site.use(pug());
site.use(postcss());

export default site;
