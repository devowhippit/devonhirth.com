---
title: 'Field Screener / ACCESS NYC / Portfolio / Devon Hirth'
layout: 'layouts/portfolio.pug'
classes: ['access-nyc']
breadcrumbs: ['ACCESS NYC', 'Field Screener']
---

--- {.m-0}

### Field Screener  {.h1 .my-6}

<!-- <figure class="figure">
  ACCESS NYC Field Screener
</figure> -->

In the summer of 2018, our team partnered with the Mayor's Public Engagement Unit to develop a version of the <a href="https://access.nyc.gov/eligibility/" target="_blank" rel="noopener nofollow noreferrer">ACCESS NYC Eligibility Screener</a> that their Outreach Specialists would use to screen New York City residents in person. These specialists go door-to-door to help residents with tenant support issues, managing cases in the field using tablets.

> This project's primary challenge was to **optimize the existing 10 step benefit screener** the specialists could use with their tablets in the short time they have with New York City residents in the field.

We started the research process by shadowing the Outreach Specialists to understand the challenges they encounter supporting tenants in the field. We discovered that the specialists usually have very little time to engage with tenants during this research. Once we had finished our research and synthesis, we began designing and developing a minimum viable product throughout 4 development sprints.

My role on this project was as the lead developer. A design fellow would create a wireframe of the desired interface during each development sprint. I would advise on the specification of the ACCESS NYC stylesheet and application. Then, I would take the design and develop the functionality. Finally, we would conduct usability testing with specialists to gather feedback and iterate on the application.

I chose to build the screener using Vue.js to take advantage of the state, reactivity, and form validation Vue.js brings to front-end applications. I also introduced CSS utilities for rapid development by adding <a href="https://tailwindcss.com/" target="_blank" rel="noopener nofollow">Tailwindcss</a>, customized using design tokens from the ACCESS NYC stylesheet source code. The final design was a two-page screener with the original 10 steps compressed into collapsable sections. The specialists could more easily jump back and forth to fill these in through a more natural flow of conversation with tenants.

<section class="grid tablet:grid-cols-2 gap-3 mb-3">
  <figure class="figure bg-t1 m-0">
    <div class="figure__matte flex items-center justify-center p-4 tablet:p-6 h-auto" style="height: auto;">
      <img class="mx-auto" src="/img/anyc-field-screener-a-landing.png" width="1024" height="1366" loading="lazy" decoding="async" alt="Screenshot of the landing view for the Field Screener" />
    </div>
    <figcaption class="static">The Field Screener landing view.</figcaption>
  </figure>

  <figure class="figure bg-t1 m-0">
    <div class="figure__matte flex items-center justify-center p-4 tablet:p-6 h-auto" style="height: auto;">
      <img class="mx-auto" src="/img/anyc-field-screener-b-disclaimer.png" width="1024" height="1366" loading="lazy" decoding="async" alt="Screenshot of the disclaimer section" />
    </div>
    <figcaption class="static">The disclaimer section.</figcaption>
  </figure>

  <figure class="figure bg-t1 m-0">
    <div class="figure__matte flex items-center justify-center p-4 tablet:p-6 h-auto">
      <img class="mx-auto" src="/img/anyc-field-screener-c-client-needs.png" width="1024" height="1366" loading="lazy" decoding="async" alt="Screenshot of the client needs section" />
    </div>
    <figcaption class="static">The client needs section.</figcaption>
  </figure>

  <figure class="figure bg-t1 m-0">
    <div class="figure__matte flex items-center justify-center p-4 tablet:p-6 h-auto">
      <img class="mx-auto" src="/img/anyc-field-screener-d-household-information.png" width="1024" height="1366" loading="lazy" decoding="async" alt="Screenshot of the household information section" />
    </div>
    <figcaption class="static">The household information section.</figcaption>
  </figure>

  <figure class="figure bg-t1 m-0">
    <div class="figure__matte flex items-center justify-center p-4 tablet:p-6 h-auto">
      <img class="mx-auto" src="/img/anyc-field-screener-e-household-expenses.png" width="1024" height="1366" loading="lazy" decoding="async" alt="Screenshot of the household expenses section" />
    </div>
    <figcaption class="static">The household expenses section.</figcaption>
  </figure>

  <figure class="figure bg-t1 m-0">
    <div class="figure__matte flex items-center justify-center p-4 tablet:p-6 h-auto">
      <img class="mx-auto" src="/img/anyc-field-screener-f-results.png" width="1024" height="1366" loading="lazy" decoding="async" alt="Screenshot of the screener results page" />
    </div>
    <figcaption class="static">The screening results page.</figcaption>
  </figure>

  <figure class="figure bg-t1 m-0">
    <div class="figure__matte flex items-center justify-center p-4 tablet:p-6 h-auto">
      <img class="mx-auto" src="/img/anyc-field-screener-g-results-share.png" width="1024" height="1366" loading="lazy" decoding="async" alt="Screenshot of the share dialogue on the results page" />
    </div>
    <figcaption class="static">The screener results page with share dialogue.</figcaption>
  </figure>
</section>

#### Case-study and Source Code

Read more about the background in the case-study below. Additionally, the source code for the screener can be browsed on GitHub.

<nav class="grid grid-cols-2 gap-3">
  <a class="btn btn-primary m-0 justify-center" href="https://medium.com/nyc-opportunity/nyc-opportunity-and-the-public-engagement-unit-partner-for-facilitated-benefits-screening-and-e889407ccf4c" target="_blank" rel="noopener nofollow"><svg class="icon mie-1" aria-hidden="true"><use xlink:href="#iconir-medium"></use></svg> Read about the case-study here</a> <a class="btn btn-primary m-0 justify-center" href="https://github.com/cityOfNewYork/ACCESS-NYC-field-screener" target="_blank" rel="noopener nofollow"><svg class="icon mie-1" aria-hidden="true"><use xlink:href="#tabler-github"></use></svg> View the source code</a>
</nav>

### Next Project

<p><a class="btn border-4 m-0 h-30vh desktop:h-30vh min-h-xsmall w-full flex-col items-center justify-center" href="/portfolio/access-nyc/development-contributions">
  <svg class="icon w-5 h-5 mie-1" aria-hidden="true">
    <use xlink:href="#tabler-folder"></use>
  </svg>
  <span class="h3 primary font-normal m-0 my-1 text-center">Development Contributions</span>
</a></p>

[View all ACCESS NYC projects](/portfolio/access-nyc#featured-projects)
