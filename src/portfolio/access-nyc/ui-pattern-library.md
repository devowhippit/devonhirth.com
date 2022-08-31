---
title: 'UI Patterns Library / ACCESS NYC / Portfolio / Devon Hirth'
layout: 'layouts/portfolio.pug'
classes: ['access-nyc']
breadcrumbs: ['ACCESS NYC', 'UI Patterns Library']
---

--- {.m-0}

### UI Pattern Library {.h1 .my-6}

<!-- <figure class="figure">
  ACCESS NYC Pattern Library
</figure> -->

ACCESS NYC is designed to accommodate New York City residents with low digital literacy on mobile devices. It is also **Web Content Accessibility Guideline (WCAG) AA compliant** and accessible in **11 different languages** with support for **right-to-left** reading directions. Many of the elements and user experience of the design patterns leveraged the US Web Design System. ACCESS NYC has won [4 government design and technology awards](/portfolio/access-nyc/#awards) since its launch, and the principles used to create this product are the basis for all of the other products in our portfolio.

I felt the most compelling contribution that I could make to such a well-done and principled design would be to make it quickly replicable at scale and available as an open-source pattern library. The need for a reusable library became more apparent when we needed to develop new features and products that required design but couldn't as a product team with limited design resources.

To do this, I took the current site and cataloged all of the reusable patterns. Using cut-outs from printed pages of the site, I hosted a workshop to allow the team to name and organize the patterns using terms of which our team would be familiar. Then, I used these common names to create individual pattern modules, refactoring and simplifying the source's stylesheets and JavaScript. Finally, I published the library to GitHub and Node Package Manager (NPM) with corresponding documentation and demonstration site.

<figure class="figure mb-3">
  <div class="figure__matte bg-cover" style="background-image: url('/img/anyc-patterns.png'); background-position: center center"></div>

  <figcaption class="static">I hosted a workshop to catalogue ACCESS NYC's reusable patterns using cut-outs printed from the site.</figcaption>
</figure>

<figure class="figure mb-3" style="background-color: #FFDBDB">
  <div class="figure__matte h-auto aspect-ratio-auto grid place-items-center grid-cols-3 auto-rows-min px-8 py-8" style="background-color: #FFDBDB; color: #112E51;">
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

  <figcaption class="static">The team named and organized the patterns under three main categories; elements, components, and objects.</figcaption>
</figure>

<section class="grid tablet:grid-cols-2 gap-3 mb-3">
  <figure class="figure m-0">
    <img class="block" width="1440" height="800" src="/img/anyc-patterns-npm.png" alt="A screenshot of the ACCESS NYC UI Patterns documentation homepage." loading="lazy" decoding="async" />
    <figcaption class="static">The <a href="https://www.npmjs.com/package/@nycopportunity/access-patterns" target="_blank" rel="noopener nofollow">NPM landing page</a> for the ACCESS NYC UI Patterns.</figcaption>
  </figure>

  <figure class="figure m-0">
    <img class="block" width="1440" height="800" src="/img/anyc-patterns-github.png" alt="A screenshot of the ACCESS NYC UI Patterns documentation homepage." loading="lazy" decoding="async" />
    <figcaption class="static">The <a href="https://github.com/cityofnewyork/access-nyc-patterns" target="_blank" rel="noopener nofollow">GitHub landing page</a> for the ACCESS NYC UI Patterns.</figcaption>
  </figure>
</section>

<figure class="figure">
  <img class="block" width="1440" height="800" src="/img/anyc-patterns-site.png" alt="A screenshot of the ACCESS NYC UI Patterns documentation homepage." loading="lazy" decoding="async" />
  <figcaption class="static">The corresponding documentation and demonstration site. The team assisted with the content and plain language review of the documentation.</figcaption>
</figure>

The first version of the library included 35 elements, components, and utilities. Over time, the set has expanded to over 50 patterns, including reactive component variants for Vue.js applications. Additionally, I introduced CSS utilities to the library by adding <a href="https://tailwindcss.com" target="_blank" rel="noopener nofollow">Tailwindcss</a>, customized using design tokens from the pattern source. The accessibility of the patterns has also improved over time with manual testing by the Mayor's Office for People with Disabilities (MOPD) and automated accessibility testing using <a href="https://pa11y.org/" target="_blank" rel="noopener nofollow">Pa11y</a>.

<section class="grid tablet:grid-cols-2 gap-3 mb-3">
  <figure class="figure m-0">
    <div class="relative overflow-hidden h-30vh desktop:h-30vh min-h-xsmall w-full flex items-center justify-center" style="background-color: #EEF3F7">
      <div class="px-4"><img class="my-6 mx-auto" src="/img/anyc-patterns-sample.svg" width="1163" height="469" loading="lazy" decoding="async" /></div>
    </div>
    <figcaption class="static">The ACCESS NYC UI Patterns library includes user interface (UI) elements from the site such as buttons, inputs, icons and more.</figcaption>
  </figure>

  <figure class="figure m-0">
    <div class="relative overflow-hidden h-30vh desktop:h-30vh min-h-xsmall w-full flex items-center justify-center" style="background-color: #EEF3F7">
      <div class="px-4"><img class="my-8 mx-auto" src="/img/pttrn-logo-tailwindcss.svg" width="460" loading="lazy" decoding="async" alt="The tailwindcss logo." /></div>
    </div>
    <figcaption class="static">I introduced CSS utilities to the library by adding Tailwindcss, a utility-first CSS framework, customized using design tokens from the pattern source.</figcaption>
  </figure>
</section>

<figure class="figure">
  <div class="figure__matte flex items-center justify-center px-4 tablet:px-8 h-auto" style="background-color: #EEF3F7">
    <img class="my-8 mx-auto" src="/img/anyc-patterns-list.svg" width="1169" height="609" loading="lazy" decoding="async" />
  </div>
  <figcaption class="static">Over time, the set has expanded to over 50 patterns, including some reactive component variants for Vue.js applications.</figcaption>
</figure>

> The ACCESS NYC UI Patterns Library was <a href="https://github.com/CityOfNewYork/ACCESS-NYC-PATTERNS/releases/tag/v0.1.0" rel="noopener nofollow" target="_blank">released on November 29th, 2018</a> and integrated into the core ACCESS NYC website as a dependency. The UI Patterns Library served as the form patterns for the <a href="/portfolio/#online-applications-pilot">Online Applications Pilot</a> and led to the creation of the <a href="/portfolio/nyco-ui-patterns-framework">NYCO UI Patterns Framework</a>.

### Next Project

<p><a class="btn border-4 h-30vh desktop:h-30vh min-h-xsmall w-full flex-col items-center justify-center" href="/portfolio/access-nyc/field-screener">
  <svg class="icon w-5 h-5 mie-1" aria-hidden="true">
    <use xlink:href="#tabler-folder"></use>
  </svg>
  <span class="h3 primary font-normal m-0 my-1 text-center">Field Screener</span>
</a></p>

[View all ACCESS NYC projects](/portfolio/access-nyc/#featured-projects)
