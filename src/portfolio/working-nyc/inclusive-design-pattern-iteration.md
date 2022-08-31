---
title: 'Inclusive Design Pattern Iteration / Working NYC / Portfolio / Devon Hirth'
layout: 'layouts/portfolio.pug'
classes: ['working-nyc']
breadcrumbs: ['Working NYC', 'Inclusive Design Pattern Iteration']
---

--- {.m-0}

### Inclusive Design Pattern Iteration {.h1 .my-6}

After the launch of Working NYC our team solicited feedback from stakeholders on the product. We received over 100 responses to a survey that included information on favorite features and where we could make improvements. Using Airtable, I synthesized the qualitative data by extracting and counting the occurrences of keywords and phrases. I then organized these items into the following feedback categories.

* **Site Features** – how respondents felt about existing features or features we could add.
* **Design Qualities** – how respondents felt about the design of the site or how we could improve it.
* **Suggested Programs** – additional content that we could add to the site.
* **Overall Goals** – ideas respondents had that fit with our overall goals.
* **Content** – how respondents felt about the existing content.

<figure class="figure">
  <div class="figure__matte aspect-ratio-auto">
    <img class="block" src="/img/wnyc-feedback-synthesis.png" width="1440" height="822" alt="A screenshot of the feedback synthesis from Airtable.">
  </div>

  <figcaption class="static">The feedback synthesis from Airtable.</figcaption>
</figure>

The most common point of feedback respondents had regarded the website's general design qualities. The color palette came out as the most liked and disliked feature within this theme. With this feedback in hand, we iterated on the site's design with minor improvements, including a color palette that accommodates users with particular color sensitivities.

#### From Color Preference to Inclusive Design Patterns

I designed the website using a color palette established by the Workforce Data Portal. To address the negative feedback on the original design, I oversaw the creation of a new light color palette by a fellow on our team. We ensured that the new color palette met WCAG AA color contrast standards as the first design using color contrast checkers.

<section class="grid tablet:grid-cols-2 gap-3 bg-t1 p-3 mb-8">
  <figure class="figure block m-0">
    <div style="height: 70vh; overflow: hidden;">
      <img class="block" src="/img/wnyc-v1.6-0-page-home-day.png" alt="A screenshot of the homepage in the light color palette designed by our fellow." width="2880" height="9458" loading="lazy" decoding="async" />
    </div>
    <figcaption class="static px-0 pb-0">
      <p>The homepage in the light color palette designed by our fellow.</p>
    </figcaption>
  </figure>

  <figure class="figure block m-0" id="online-applications-pilot">
    <div style="height: 70vh; overflow: hidden;">
      <img class="block" src="/img/wnyc-v1.6-0-page-program-day.png" alt="A screenshot of the single program page in the light color palette designed by our fellow." width="2880" height="6104" loading="lazy" decoding="async" />
    </div>
    <figcaption class="static px-0 pb-0">
      <p>The single program page in the light color palette designed by our fellow.</p>
    </figcaption>
  </figure>
</section>

I worked with a research fellow to facilitate usability and preference testing interviews with users. We used these interviews to gauge which design users might prefer and ensure there were no major usability issues with the new light color palette. We also received consultation on low-vision usability with the Mayor's Office for People with Disabilities to assess the color contrast between the colors. They revealed that while the colors may have met WCAG AA standards, they needed further improvement to achieve better perceptual contrast.

<section class="grid tablet:grid-cols-2 gap-3 bg-t1 p-3 mb-8">
  <figure class="figure block m-0">
    <div style="height: 70vh; overflow: hidden;">
      <img class="block" src="/img/wnyc-v1.5-page-home.png" alt="A screenshot of the default, or night color palette of the original design we tested." width="2880" height="9458" loading="lazy" decoding="async" />
    </div>
    <figcaption class="static px-0 pb-0">
      <p>The default, or night color palette of the original design we tested.</p>
    </figcaption>
  </figure>

  <figure class="figure block m-0" id="online-applications-pilot">
    <div style="height: 70vh; overflow: hidden;">
      <img class="block" src="/img/wnyc-v1.6-0-page-home-day.png" alt="A screenshot of the day color palette of the design we tested." width="2880" height="6104" loading="lazy" decoding="async" />
    </div>
    <figcaption class="static px-0 pb-0">
      <p>The day color palette of the design we tested.</p>
    </figcaption>
  </figure>
</section>

To implement findings from our research, I updated the product pattern library's Figma design file, adding color, typography styles, and symbols from the code-based pattern library. The result was a complete set of design tokens and components to use in full page mockups and other designs.

<figure class="figure">
  <div class="figure__matte aspect-ratio-auto">
    <img class="block" src="/img/wnyc-figma-file-color-tokens.png" width="1440" height="900" alt="A screenshot of the Figma file.">
  </div>

  <figcaption class="static">The Figma file including all design tokens and and components from the product's pattern library.</figcaption>
</figure>

Our research fellow also conducted desk research to understand how users with different color blindness would experience each palette and what color combinations work well for most color-blind users. She made more recommendations for our color combinations and evaluated them for contrast using a color blindness simulator commonly found in developer tools.

<section class="grid tablet:grid-cols-3 gap-3 bg-t1 p-3 mb-8">
  <figure class="figure block m-0">
    <div style="height: 40vh; overflow: hidden;">
      <img class="block" src="/img/wnyc-v1.6-dark-simulated-achromatopsia.png" width="2880" height="7760" style="image-rendering:" loading="lazy" decoding="async" alt="Screenshot of simulated Achromatopsia for the default, or night theme.." />
    </div>
    <figcaption class="static px-0 pb-0">
      <p>Simulated Achromatopsia for the default, or night theme.</p>
    </figcaption>
  </figure>

  <figure class="figure block m-0">
    <div style="height: 40vh; overflow: hidden;">
      <img class="block" src="/img/wnyc-v1.6-dark-simulated-deuteranopia.png" width="2880" height="7760" loading="lazy" decoding="async" alt="Screenshot of simulated Deuteranopia for the default, or night theme." />
    </div>
    <figcaption class="static px-0 pb-0">
      <p>Simulated Deuteranopia for the default, or night theme.</p>
    </figcaption>
  </figure>

  <!-- <figure class="figure block m-0">
    <div style="height: 40vh; overflow: hidden;">
      <img class="block" src="/img/wnyc-v1.6-dark-simulated-protanopia.png" width="2880" height="7760" loading="lazy" decoding="async" />
    </div>
    <figcaption class="static px-0 pb-0">
      <p>Simulated Protanopia for the default, or night theme.</p>
    </figcaption>
  </figure> -->

  <figure class="figure block m-0">
    <div style="height: 40vh; overflow: hidden;">
      <img class="block" src="/img/wnyc-v1.6-dark-simulated-tritanopia.png" width="2880" height="7760" loading="lazy" decoding="async" alt="Screenshot of simulated Tritanopia for the default, or night theme." />
    </div>
    <figcaption class="static px-0 pb-0">
      <p>Simulated Tritanopia for the default, or night theme.</p>
    </figcaption>
  </figure>

  <!-- Light -->

  <figure class="figure block m-0">
    <div style="height: 40vh; overflow: hidden;">
      <img class="block" src="/img/wnyc-v1.6-light-simulated-achromatopsia.png" width="2880" height="7760" style="image-rendering:" loading="lazy" decoding="async" alt="Screenshot of simulated Achromatopsia for the light theme." />
    </div>
    <figcaption class="static px-0 pb-0">
      <p>Simulated Achromatopsia for the light theme.</p>
    </figcaption>
  </figure>

  <figure class="figure block m-0">
    <div style="height: 40vh; overflow: hidden;">
      <img class="block" src="/img/wnyc-v1.6-light-simulated-deuteranopia.png" width="2880" height="7760" loading="lazy" decoding="async" alt="Screenshot of simulated Deuteranopia for the light theme." />
    </div>
    <figcaption class="static px-0 pb-0">
      <p>Simulated Deuteranopia for the light theme.</p>
    </figcaption>
  </figure>

  <!-- <figure class="figure block m-0">
    <div style="height: 40vh; overflow: hidden;">
      <img class="block" src="/img/wnyc-v1.6-light-simulated-protanopia.png" width="2880" height="7760" loading="lazy" decoding="async" />
    </div>
    <figcaption class="static px-0 pb-0">
      <p>Simulated Protanopia for the light theme.</p>
    </figcaption>
  </figure> -->

  <figure class="figure block m-0">
    <div style="height: 40vh; overflow: hidden;">
      <img class="block" src="/img/wnyc-v1.6-light-simulated-tritanopia.png" width="2880" height="7760" loading="lazy" decoding="async" alt="Screenshot of simulated Tritanopia for the light theme." />
    </div>
    <figcaption class="static px-0 pb-0">
      <p>Simulated Tritanopia for the light theme.</p>
    </figcaption>
  </figure>
</section>

> After the conclusion of our usability and desktop research, we realized that providing alternate color themes is more than a matter of user preference. It is an inclusive design pattern that helps users with specific vision impairments.

As a result of this research and evaluation, we were able to enhance and standardize both light and dark color palettes for color-blind users and achieve full compliance with WCAG AA contrast standards and AAA standards in some cases for low-vision users.

#### Results

<figure class="figure">
  <div class="figure__matte grid tablet:grid-cols-2 gap-8 p-3 tablet:p-8 tablet:pb-3 h-auto aspect-ratio-auto bg-t1">
    <img class="mx-auto" src="/img/wnyc-colors.png" width="1240" height="881" class="mb-0" alt="The original color scales for the website." />
    <img class="mx-auto" src="/img/wnyc-color-revisions.png" width="1240" height="1562" class="mb-0" alt="The enhanced color scales for the website." />
  </div>

  <figcaption class="static">The first color palette with only the night color scale and the redesigned color palette with additional night and day color scales. All color scales were enhanced with more tints, shades, and saturated colors.</figcaption>
</figure>

<figure class="figure">
  <div class="figure__matte grid tablet:grid-cols-3 gap-3 p-3 tablet:p-6 tablet:pb-3 h-auto aspect-ratio-auto bg-t1">
    <img src="/img/wnyc-v1.5-card.png" width="1468" height="1488" class="mb-0" alt="Screenshot of the original program card color theme for the website." />
    <img src="/img/wnyc-v1.6-card-night.png" width="1468" height="1488" class="mb-0" alt="Screenshot of the updated program card night color theme for the website." />
    <img src="/img/wnyc-v1.6-card-day.png" width="1468" height="1488" class="mb-0" alt="Screenshot of the updated program card day color theme for the website." />
  </div>

  <figcaption class="static">The color combinations were changed to use colors that can be more easily distinguished from each other by users with certain types of color blindness (Tritanomaly and Tritanopia). Above is the original color theme compared to the color combinations in the new night and day color themes.</figcaption>
</figure>

<figure class="figure">
  <div class="figure__matte grid tablet:grid-cols-3 gap-6 p-3 tablet:p-6 tablet:pb-3 h-auto bg-t1">
    <img src="/img/wnyc-v1.5-mobile-menu.png" width="882" height="1462" class="mb-0" alt="Screenshot of the original mobile menu for the website." />
    <img src="/img/wnyc-v1.6-mobile-menu-night.png" width="882" height="1462" class="mb-0" alt="Screenshot of the new night theme mobile menu for the website." />
    <img src="/img/wnyc-v1.6-mobile-menu-day.png" width="882" height="1462" class="mb-0" alt="Screenshot of the new day theme mobile menu for the website." />
  </div>

  <figcaption class="static">The mobile menu color palete was updated to create a less disruptive experience for those with color sensitivity. Above, the original mobile menu compared to the mobile menu in the new night and day color themes. Additionally, the "prefers reduced motion" media query is honored to disable the animation of the menu if desired.</figcaption>
</figure>

<figure class="figure">
  <div class="figure__matte overflow-auto">
    <img class="block" src="/img/wnyc-v1.6-focus-states.png" alt="A screenshot of the focus state from the website for various page elements.">
  </div>

  <figcaption class="static">A focus state for interactive elements was designed and implemented. Previously, the native browser focus state was used.</figcaption>
</figure>

<figure class="figure">
  <div class="figure__matte grid tablet:grid-cols-2 gap-8 p-3 tablet:p-8 tablet:pb-3 h-auto aspect-ratio-auto bg-t1">
    <img class="mx-auto" src="/img/wnyc-v1.5-header.png" width="2000" height="1610" class="mb-0" alt="Screenshot of an original typography sample from the website."/>
    <img class="mx-auto" src="/img/wnyc-v1.6-header-night-desktop.png" width="2000" height="1262" class="mb-0" alt="Screenshot of the updated typography sample from the website."/>
  </div>

  <figcaption class="static">We also made updates to typographic styling to improve legibility and information hierarchy.</figcaption>
</figure>

The final task was designing and testing a system for users to select their preferred color preference between light or dark modes. Our research fellow mocked up and quickly tested recommendations for a toggle for mobile and desktop users.

<figure class="figure">
  <div class="figure__matte p-2 tablet:p-8 h-auto aspect-ratio-auto bg-t1">
    <img src="/img/wnyc-toggle-c-default-day-desktop.png" width="1988" height="108" class="block mb-4" alt="Screenshot of the default theme toggle button for desktop users."/>
    <img src="/img/wnyc-toggle-c-night-night-desktop.png" width="1988" height="108" class="block mb-4" alt="Screenshot of the day theme toggle button for desktop users."/>
    <img src="/img/wnyc-toggle-c-day-day-desktop.png" width="1988" height="108" class="block " alt="Screenshot of the night theme toggle button for desktop users."/>
  </div>

  <figcaption class="static">Mockups for the theme toggle for desktop users.</figcaption>
</figure>

With our design recommendations finalized, I began implementing changes to the website's code-based UI pattern library. I converted our stylesheets to create different color themes using CSS custom properties for all design tokens. Previously, design tokens were exported from JSON to SASS variables, becoming hard-coded at runtime. Using CSS custom properties allowed toggling color themes more fluidly in the browser.

<figure class="figure">
  <div class="figure__matte flex items-center justify-center p-2 bg-t1 h-auto aspect-ratio-auto">
    <iframe class="iframe" width="378" height="667" src="/working-nyc-patterns-0.0.1-55/"></iframe>
  </div>

  <figcaption class="static">
    <p>The static HTML demonstration I created using the Working NYC pattern library. The theme toggle can be found behind the mobile menu button.</p>
    <p><a class="btn btn-primary justify-center w-full tablet:w-auto" href="/working-nyc-patterns-0.0.1-55/" target="_blank" rel="noopener nofollow">View the full design <svg class="icon mis-half" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg></a></p>
  </figcaption>
</figure>

> We released the <a href="https://github.com/CityOfNewYork/working-nyc/releases/tag/v1.7.0" target="_blank">Inclusive Color Patterns on December 21st, 2021</a>. {.my-8}

#### Final Final

The site's design is a collection of open-source code and public Figma file that can be scaled up as the product evolves. I also created internal documentation for all of the historical context behind the design so that team members can understand design decisions. You can browse the GitHub repository and the Figma file following the links below.

<nav class="grid tablet:grid-cols-2 gap-3">
  <a class="btn btn-primary m-0 justify-center" href="https://cityofnewyork.github.io/working-nyc-patterns/" target="_blank" rel="noopener nofollow"><svg class="icon mie-1" aria-hidden="true"><use xlink:href="#tabler-github"></use></svg> Pattern Library</a> <a class="btn btn-primary m-0 justify-center" href="https://www.figma.com/file/CH7ZOCW55SgsDnsTj3UrTi" target="_blank" rel="noopener nofollow"><svg class="icon mie-1" aria-hidden="true"><use xlink:href="#tabler-figma"></use></svg> Figma Design File</a>
</nav>

### Next Project

<p><a class="btn border-4 m-0 h-30vh desktop:h-30vh min-h-xsmall w-full flex-col items-center justify-center" href="/portfolio/working-nyc/product-launch">
  <svg class="icon w-5 h-5 mie-1" aria-hidden="true">
    <use xlink:href="#tabler-folder"></use>
  </svg>
  <span class="h3 primary font-normal m-0 my-1 text-center">Product Launch</span>
</a></p>

[View all Working NYC projects](/portfolio/working-nyc#featured-projects)
