---
title: 'NYCO UI Patterns Framework / Portfolio / Devon Hirth'
layout: 'layouts/portfolio.pug'
classes: ['ui-patterns-framework']
breadcrumbs: ['NYCO UI Patterns Framework']
---

## NYCO UI Patterns Framework {.sr-only}

<figure class="figure -mx-3 tablet:mx-0" style="background-color: #FFDBDB">
  <div class="figure__matte h-auto grid place-items-center grid-cols-3 px-8 py-8 text-center" style="background-color: #FFDBDB; color: #112E51;">
    <div>
      <img src="/img/pttrn-elements.svg" alt="Icon for Patterns Framework elements" width="280" height="280" loading="lazy" decoding="async" />
    </div>
    <div>
      <img src="/img/pttrn-components.svg" alt="Icon for Patterns Framework components" width="280" height="280" loading="lazy" decoding="async" />
    </div>
    <div>
      <img src="/img/pttrn-objects.svg" alt="Icon for Patterns Framework objects" width="280" height="280" loading="lazy" decoding="async" />
    </div>
    <div class="col-span-full mb-4 large:pb-8 large:mb-8">
      <span class="h3" style="font-family: Helvetica Neue Pro, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: bolder;">NYCO UI Patterns Framework</span>
    </div>
  </div>

  <figcaption>
    <h4 class="h5 mb-3">Role: Lead Developer and Digital Product Designer</h4>
    <p><a class="btn btn-primary" href="https://nycopportunity.github.io/patterns-framework" target="_blank" rel="noopener nofollow">nycopportunity.github.io/patterns-framework <svg class="icon mis-half" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg></a></p>
  </figcaption>
</figure>

The NYCO User Interface (UI) Patterns Framework is a collection of tools and principles used to make creating UI pattern libraries fun for developers, transparent for teams, and sustainable beyond the lifecycle of digital products. It encourages the principles of utility-first atomic design, JavaScript framework independence, modularity, and portability.

I started the framework with support and feedback from my team and our fellows while building the [ACCESS NYC UI Pattern Library](/portfolio/access-nyc/ui-patterns-library). It includes front-end development tools such as the <a href="https://github.com/cityofnewyork/patterns-cli" target="_blank" rel="noopener nofollow">Patterns Command Line Interface (CLI)</a>, which streamlines the development of pattern libraries by creating and organizing UI components according to the Framework's naming convention.

<figure class="figure mb-3">
<div class="figure__matte h-auto">
<pre tabindex="0" class="m-0 nohighlight whitespace-normal" style="color:#B1B1B1;background-color:#1A191C">
$ npx pttrn make component accordion<br><br>

✨ Created <span style="color:#FFC0F6; text-decoration:underline">./src/components/accordion/accordion.slm</span><br>
✨ Created <span style="color:#FFC0F6; text-decoration:underline">./src/components/accordion/accordion.md</span><br>
✨ Created <span style="color:#FFC0F6; text-decoration:underline">./src/components/accordion/_accordion.scss</span><br>

💅 Include the <span style="color:#AED581">accordion</span> stylesheet in your main Sass entry point. To create an independent distribution (optional) add the <span style="color:#AED581">accordion</span> stylesheet to your Sass configuration.

❓ Make a script file for <span style="color:#AED581">accordion</span>? y/n ↵ y<br>
✨ <span style="color:#FFC0F6; text-decoration:underline">./src/components/accordion/accordion.js</span> was made.

🌈 Import the <span style="color:#AED581">accordion</span> script into your main JavaScript entry point file and create a public function for it in the default class. To create an independent distribution (optional) add the <span style="color:#AED581">accordion</span> script to your Rollup configuration.
</pre>
</div>

<figcaption class="static">The CLI can scaffold new components by creating the source files needed to style, script, and document their HTML specifications.</figcaption>
</figure>

<figure class="figure" style="background-color: #FFDBDB">
  <div class="figure__matte h-auto grid place-items-center grid-cols-2 desktop:grid-cols-4 auto-rows-min px-8 py-8" style="background-color:#FFDBDB;color:#112E51;">
    <div class="tablet:p-3 h-full grid content-between text-center">
      <img class="mb-1" src="/img/pttrn-tokens.svg" alt="Icon for Patterns Framework tokens" w width="280" height="280" loading="lazy" decoding="async" />
      <p><b>Tokens</b></p>
    </div>
    <div class="tablet:p-3 h-full grid content-between text-center">
      <img class="mb-1" src="/img/pttrn-elements.svg" alt="Icon for Patterns Framework elements" width="280" height="280" loading="lazy" decoding="async" />
      <p><b>Elements</b></p>
    </div>
    <div class="tablet:p-3 h-full grid content-between text-center">
      <img class="mb-1" src="/img/pttrn-components.svg" alt="Icon for Patterns Framework components" width="280" height="280" loading="lazy" decoding="async" />
      <p><b>Components</b></p>
    </div>
    <div class="tablet:p-3 h-full grid content-between text-center">
      <img class="mb-1" src="/img/pttrn-objects.svg" alt="Icon for Patterns Framework objects" width="280" height="280" loading="lazy" decoding="async" />
      <p><b>Objects</b></p>
    </div>
  </div>

  <figcaption class="static">
    <p>The naming convention of the Framework is inspired by <a href="https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/" target="_blank" rel="noopener nofollow">BEMIT</a>, <a href="https://tailwindcss.com" target="_blank" rel="noopener nofollow">Tailwindcss</a>, the <a href="https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/tokens_intro.htm" target="_blank" rel="noopener nofollow">Sales Force Lightening Design System</a>, and <a href="https://atomicdesign.bradfrost.com" target="_blank" rel="noopener nofollow">Brad Frost's Atomic Design Methodology</a>. <a href="https://github.com/CityOfNewYork/patterns-docs/blob/main/patterns.md" target="_blank" rel="noopener nofollow"></a></p>
  </figcaption>
</figure>

The CLI also includes a zero-configuration build pack that brings together existing, well-known open-source languages and compiles them to static HTML, CSS, and JavaScript. It also lints the output for potential accessibility issues and publishes the library to <a href="https://github.com/" target="_blank" rel="noopener nofollow">GitHub</a> and the <a href="https://www.npmjs.com/" target="_blank" rel="noopener nofollow">Node Package Manager (NPM)</a> registry.

<figure class="figure mb-3" style="background-color: #FFDBDB">
  <div class="figure__matte h-auto grid place-items-center grid-cols-2 desktop:grid-cols-4 auto-rows-min px-8 py-8" style="background-color:#FFDBDB;color:#112E51;">
    <div class="h-full grid content-between text-center">
      <img class="mb-1" src="/img/pttrn-logo-tailwindcss-mark.svg" alt="Tailwindcss Logo" width="300" height="300" loading="lazy" decoding="async" />
      <p><b>Tailwindcss</b></p>
    </div>
    <div class="h-full grid content-between text-center">
      <img class="mb-1" src="/img/pttrn-logo-sass.svg"  alt="Sass Logo" width="300" height="300" loading="lazy" decoding="async" />
      <p><b>Sass</b></p>
    </div>
    <div class="h-full grid content-between text-center">
      <img class="mb-1" src="/img/pttrn-logo-rollup.svg" alt="Rollup.js Logo" width="300" height="300" loading="lazy" decoding="async" />
      <p><b>Rollup.js</b></p>
    </div>
    <div class="h-full grid content-between text-center">
      <img class="mb-1" src="/img/pttrn-logo-pa11y.svg" alt="Pa11y Logo" width="300" height="300" loading="lazy" decoding="async" />
      <p><b>Pa11y</b></p>
    </div>
  </div>

  <figcaption class="static">
    <p>The build pack uses several open-source tools including <a href="https://tailwindcss.com" target="_blank" rel="noopener nofollow">Tailwindcss</a> for CSS utility generation, <a href="https://sass-lang.com" target="_blank" rel="noopener nofollow">Sass</a> for pattern stylesheet modules, <a href="https://www.rollupjs.org" target="_blank" rel="noopener nofollow">Rollup.js</a> for ES Module bundling, <a href="https://pa11y.org" target="_blank" rel="noopener nofollow">Pa11y</a> for accessibility linting, and more.</p>
  </figcaption>
</figure>

<figure class="figure mb-3">
<div class="figure__matte h-auto">
<pre tabindex="0" class="m-0 nohighlight whitespace-normal" style="color:#B1B1B1;background-color:#1A191C">
$ npx pttrn<br><br>

✨ Slm in <span style="color:#FFC0F6; text-decoration:underline">./src/views/accordion.slm</span> out <span style="color:#FFC0F6; text-decoration:underline">./dist/accordion.html</span><br>
✨ Slm finished<br>
🤸 Running Pa11y CI on <span style="color:#FFC0F6; text-decoration:underline">./dist/accordion.html</span><br>
🤸 No Pa11y suggestions for <span style="color:#FFC0F6; text-decoration:underline">./dist/accordion.html</span><br>
🤓 ESLint suggestions for <span style="color:#FFC0F6; text-decoration:underline">./dist/js/default.js</span><br>
✨ Lint finished<br>
🗞️ Rollup in <span style="color:#FFC0F6; text-decoration:underline">./src/js/default.js</span> out <span style="color:#FFC0F6; text-decoration:underline">./dist/js/default.js</span><br>
✨ Rollup finished<br>
⚫ Tokens in <span style="color:#FFC0F6; text-decoration:underline">@pttrn/config/tokens.js</span> out <span style="color:#FFC0F6; text-decoration:underline">./src/config/_tokens.scss</span><br>
🤓 stylelint suggestions for <span style="color:#FFC0F6; text-decoration:underline">./src/scss/default.scss</span><br>
✨ Lint finished<br>
💅 Sass in <span style="color:#FFC0F6; text-decoration:underline">./src/scss/default.scss</span> out <span style="color:#FFC0F6; text-decoration:underline">./dist/css/default.css</span><br>
💅 PostCSS on <span style="color:#FFC0F6; text-decoration:underline">./dist/css/default.css</span><br>
✨ Styles finished
</pre>
</div>

<figcaption class="static">The CLI can compile <a href="https://github.com/slm-lang" target="_blank" rel="noopener nofollow">slm-lang</a> HTML templates, <a href="https://daringfireball.net/projects/markdown/" target="_blank" rel="noopener nofollow">Markdown</a>, <a href="https://sass-lang.com/" target="_blank" rel="noopener nofollow">Sass</a>, and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noopener nofollow">JavaScript ES Module</a> code to static JavaScript, CSS, and HTML.</figcaption>
</figure>

<figure class="figure mb-3">
<div class="figure__matte h-auto">
<pre tabindex="0" class="m-0 nohighlight whitespace-normal" style="color:#B1B1B1;background-color:#1A191C">
$ npx pttrn pa11y<br><br>

⏳ Running Pa11y CI on <span style="color:#FFC0F6; text-decoration:underline">./dist/text-controller.html</span><br>
✨ No Pa11y suggestions for <span style="color:#FFC0F6; text-decoration:underline">./dist/text-controller.html</span><br>
⏳ Running Pa11y CI on <span style="color:#FFC0F6; text-decoration:underline">./dist/tables.html</span><br>
🤸 Pa11y suggestions for <span style="color:#FFC0F6; text-decoration:underline">./dist/tables.html</span><br>
<span style="color:#AED581">&#60;table class="table-headers-first-column">&#60;thead>...</table></span><br>
<span style="color:#7C7F83">htmlcs</span>  <span style="color:#FC5D52">error</span>   <span style="color:#7C7F83">The relationship between td elements and their associated th elements is not defined. Use either the scope attribute on th elements, or the headers attribute on td elements.  H63</span>
</pre>
</div>

<figcaption class="static">The CLI uses <a href="" target="_blank" rel="noopener nofollow">Pa11y</a> to lint static HTML and CSS output for accessibility issues.</figcaption>
</figure>

<figure class="figure mb-3">
<div class="figure__matte h-auto">
<pre tabindex="0" class="m-0 nohighlight whitespace-normal" style="color:#B1B1B1;background-color:#1A191C">
$ npm publish<br><br>

&#62; patterns-demo@0.1.0 prepublishOnly .<br>
&#62; git push && git push --tags<br>

...<br>
To https://github.com/CityOfNewYork/patterns-demo<br>
   40e700a9..330cbad2  main -> main<br>
Everything up-to-date<br>
npm notice<br>
npm notice 📦  patterns-demo@0.1.0<br>
...<br>

&#62; patterns-demo@0.1.0 publish .<br>
&#62; cross-env NODE_ENV=production pttrn publish<br>

🤓 Publishing to origin; <span style="color:#FFC0F6; text-decoration:underline">https://github.com/CityOfNewYork/patterns-demo.git</span><br>
✨ Published to GitHub Pages
</pre>
</div>

<figcaption class="static">The CLI includes npm scripts for publishing a pattern library as a package to the NPM registry as well as publishing a GitHub Pages static documentation site.</figcaption>
</figure>

<figure class="figure">
  <div class="figure__matte flex items-center justify-center h-auto" style="background-color: #EEF3F7">
    <img src="/img/pttrn-accordion-demo.png" alt="The ACCESS NYC UI Patterns accordion documentation page." width="1440" height="3688" loading="lazy" decoding="async" />
  </div>
  <figcaption class="static">Pattern libraries created with the CLI can generate static sites that include live demonstrations, markup examples, and special usage instructions for every UI pattern. This image showcases the ACCESS NYC Patterns documentation page for the accordion component.</figcaption>
</figure>

> This font-end developer tooling helped my team and I to design, develop, and maintain 4 additional product pattern libraries, including the **Working NYC Patterns**, **Growing Up NYC Patterns**, **Generation NYC Patterns**, and **NYC Opportunity Common Agency Patterns**.

<section class="grid tablet:grid-cols-2 gap-3 mb-8">
  <figure class="figure block m-0">
    <div class="relative overflow-hidden h-30vh desktop:h-30vh min-h-xsmall w-full flex items-center justify-center" style="background-color: #F0F6FF; color: #112E51;">
      <div class="absolute flex items-center justify-center px-8 w-full h-full">
        <div class="large:px-8">
          <img class="mb-3" src="/img/anyc-logo-standard.svg" alt="The ACCESS NYC Logo" width="505" height="84" loading="lazy" decoding="async" />
          <h3 class="m-0 justify-center text-center h5"><span class="sr-only">ACCESS NYC </span>Patterns</h3>
        </div>
      </div>
    </div>
    <figcaption class="static">
      <p>The <a href="https://accesspatterns.cityofnewyork.us" target="_blank" rel="noopener nofollow">ACCESS NYC UI Patterns</a> became the basis for front-end developer tools called the <b>NYCO UI Patterns Framework</b> that would help build and maintain other pattern libraries for our products.</p>
    </figcaption>
  </figure>

  <figure class="figure block m-0">
    <div class="relative overflow-hidden h-30vh desktop:h-30vh min-h-xsmall w-full flex items-center justify-center" style="background-color: #031837">
      <div class="absolute flex items-center justify-center px-8 w-full h-full">
        <div class="large:px-8">
          <img class="mt-1 mb-5" src="/img/wnyc-logo-standard.svg" alt="The Working NYC Logo" width="506" height="45" loading="lazy" decoding="async" />
          <h3 class="m-0 justify-center text-center h5"><span class="sr-only">Working NYC </span>Patterns</h3>
        </div>
      </div>
    </div>
    <figcaption class="static">
      <p>I used the <b>NYCO UI Patterns Framework</b> to design Working NYC in-code and ship <a href="https://cityofnewyork.github.io/working-nyc-patterns/" target="_blank" rel="noopener nofollow">its pattern library</a> simultaneously with the launch of the product.<br><br></p>
    </figcaption>
  </figure>

  <figure class="figure block m-0">
    <div class="relative overflow-hidden h-30vh desktop:h-30vh min-h-xsmall w-full flex items-center justify-center" style="background-color: #F0F6FF; color: #112E51;">
      <div class="absolute flex items-center justify-center px-8 w-full h-full">
        <div class="large:px-8">
          <img class="mb-1" src="/img/guny-logo-primary.png" alt="The Growing Up NYC logo" width="274" height="169" loading="lazy" decoding="async" />
          <h3 class="m-0 justify-center text-center h5"><span class="sr-only">Growing Up NYC </span>Patterns</h3>
        </div>
      </div>
    </div>
    <figcaption class="static">
      <p>The <b>NYCO UI Patterns Framework</b> supported the development of the <a href="https://github.com/NYCOpportunity/growingupnyc-patterns" target="_blank" rel="noopener nofollow">Growing Up and Generation NYC Patterns</a> by other members of my team.<br><br></p>
    </figcaption>
  </figure>

  <figure class="figure block m-0">
    <div class="relative overflow-hidden h-30vh desktop:h-30vh min-h-xsmall w-full flex items-center justify-center" style="background-color: #1642DF">
      <div class="absolute flex items-center justify-center px-8 w-full h-full">
        <div class="large:px-8">
          <img class="mb-3" src="/img/nyco-logo-secondary.svg" alt="The NYC Mayor's Office for Economic Opportunity Logo" width="692" height="121" aria-hidden="true" loading="lazy" decoding="async" />
          <h3 class="m-0 justify-center text-center h5"><span class="sr-only">NYC Opportunity </span>Common Agency Patterns</h3>
        </div>
      </div>
    </div>
    <figcaption class="static">
      <p>I used the <b>NYCO UI Patterns Framework</b> to create <a href="https://nycopatterns.cityofnewyork.us" target="_blank" rel="noopener nofollow">common agency patterns</a> for my organization (The Mayor's Office for Economic Opportunity) with many design and development contributions from my team.</p>
    </figcaption>
  </figure>
</section>

Product managers, designers, and engineers have used the tools and libraries in multiple internal and external projects, greatly expanding our capacity for more complex design challenges.

> I used the Patterns Framework tools and libraries to lead the design and and development of the **NYC Benefits Platform: Screening API** documentation and the **Mental Health for All** website.

<section class="grid tablet:grid-cols-2 gap-3 mb-8">
  <figure class="figure block m-0">
    <img class="block" src="/img/benefits-platform-api-landing-page.png" alt="The NYC Benefits Platform Screening API landing page" width="1440" height="821" loading="lazy" decoding="async" />
    <figcaption class="static">
      <p>I led the UI design and development of the <a href="https://screeningapidocs.cityofnewyork.us" target="_blank" rel="noopener nofollow">NYC Benefits Platform: Screening API</a> documentation using the <b>NYCO Common Agency Patterns</b> and the <b>Patterns CLI</b>.</p>
    </figcaption>
  </figure>

  <figure class="figure block m-0">
    <img class="block" src="/img/mhfa-landing-page.png" alt="The Mental Health for All website landing page" width="1440" height="821" loading="lazy" decoding="async" />
    <figcaption class="static">
      <p>I led the UI design and development of the <a href="https://mentalhealthforall.nyc.gov" target="_blank" rel="noopener nofollow">Mental Health for All website</a> using the <b>Growing Up NYC Patterns</b> and the <b>Patterns CLI</b>.</p>
    </figcaption>
  </figure>
</section>

<a class="btn btn-primary m-0 justify-center" href="https://nycopportunity.github.io/patterns-framework" target="_blank" rel="noopener nofollow"><svg class="icon mie-1" aria-hidden="true"><use xlink:href="#tabler-github"></use></svg> View the Patterns Framework</a>
