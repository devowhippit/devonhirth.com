---
title: 'Product Launch / Working NYC / Portfolio / Devon Hirth'
layout: 'layouts/portfolio.pug'
classes: ['working-nyc']
breadcrumbs: ['Working NYC', 'Product Lunch']
---

--- {.m-0}

### Product Launch {.h1 .my-6}

> My primary challenge with the Working NYC launch was to create a **new brand identity** and **user interface** that templatizes 30+ programs across 9 industries from multiple providers serving a diverse population of New Yorkers.

**Program Taxonomies**. This table showcases 3 of the 7 finalized taxonomy collections for programs on the site that I would need to accommodate in the product's design.

| Provider Services                         | Populations                     | Industries                   |
|:------------------------------------------|:--------------------------------|:-----------------------------|
| Help finding a job                        | Youth in foster care            | Transportation               |
| High School Equivalency (HSE or GED) prep | Young adults                    | Healthcare                   |
| Internship or short-term job              | Immigrants                      | Technology                   |
| Improving English skills                  | People with disabilities        | Construction                 |
| Training for a new job                    | NYCHA residents                 | Media and entertainment      |
| Adult reading, writing, and math          | Public assistance recipients    | Food service                 |
|                                           | Adults                          | Industrial and manufacturing |
|                                           | Older adults                    | Security                     |
|                                           | Low-income New Yorkers          | Maintenance and janitorial   |
|                                           | Women                           | |
|                                           | LGBTQ+ New Yorkers              | |
|                                           | People with justice involvement | |

#### Brand Identity

The direction for the brand identity was to use design tokens from a previous project created in collaboration with the <b>Mayor's Office of Workforce Development</b> to keep the product within a family of Workforce products. This project was called the <b>Workforce Data Portal</b>. I extracted the token set from the project, including typography and colors, and expanded it to create a brand identity system.

<figure class="figure">
  <div class="figure__matte aspect-ratio-auto">
    <img class="block" src="/img/wnyc-workforce-data-portal.png" width="1440" height="811" alt="A screenshot of the Workforce Data Portal">
  </div>

  <figcaption class="static">The direction for the brand identity was to use design tokens from the <a href="https://workforcedata.nyc.gov" rel="noopener nofollow noreferrer" target="_blank">Workforce Data Portal</a> to keep the product within a family of Workforce products.</figcaption>
</figure>

<figure class="figure figure--frame">
  <div class="figure__matte bg-t1">
    <img class="figure__work" src="/img/wnyc-colors.svg" width="700" height="481" alt="An image of the color swatches used for Working NYC." />
  </div>

  <figcaption class="static">I tokenized and expanded the color scales from the <b>Workforce Data Portal</b> to an equal range for each color.</figcaption>
</figure>

<figure class="figure">
  <div class="figure__matte flex items-center justify-center p-4 tablet:p-8 h-auto aspect-ratio-auto" style="background-color: #031837">
    <img class="my-4 mx-auto" src="/img/wnyc-fonts.png" width="900" height="386" alt="An image of the typography used for the Working NYC brand identity, Montserrat and Lato." />
  </div>

  <figcaption class="static">The font families extracted from the <b>Workforce Data Portal</b> included Montserrat and Lato.</figcaption>
</figure>

<figure class="figure">
  <div class="figure__matte bg-cover" style="background-image: url('/img/wnyc-sketches-identity.jpg')"></div>

  <figcaption>
    <p>The initial sketches for the brand identity logotype include considerations for the different industries and services offered by programs.</p>
    <button class="btn btn-primary figure__cta" data-js="pdf-view" data-pdf-view="/img/wnyc-sketches-identity.pdf" data-pdf-title="Working NYC Identity Sketches">View identity sketches</button>
  </figcaption>
</figure>

<figure class="figure figure--frame">
  <div class="figure__matte" style="background-color: #031837">
    <img class="figure__work" src="/img/wnyc-logos.svg" width="713" height="61" alt="An image of the Working NYC website logo.">
  </div>

  <figcaption class="static">The Working NYC brand identity features a logotype set in Montserrat, an open-source and free alternative to Gotham recognized by its equalized geometric features. The typeface used is the same for other Workforce projects, keeping it in the family of brands.</figcaption>
</figure>

<figure class="figure">
  <div class="figure__matte flex items-center justify-center px-6" style="background-color: #031837">
    <img src="/img/wnyc-categories.svg" width="584" height="135" alt="An image of four sector taxonomy icons.">
  </div>

  <figcaption class="static">I created icons representing different industry sectors. The four major sector taxonomies are represented here; Technology, Healthcare, Construction, and Culinary.</figcaption>
</figure>

#### User Interface

Drawing on the foundation of other products in our portfolio, I designed and built (in code) a production-ready version of a pattern library explicitly created for New York City resident-facing products. This library includes 38 elements, components, and utilities; multi-lingual stylesheets with support for 11 languages, left-to-right, and right-to-left reading orientations; and meets Web Content Accessibility Guidelines (WCAG) AA compliance.

<figure class="figure">
  <div class="figure__matte overflow-auto bg-t1">
    <img class="block" src="/img/wnyc-patterns.png" alt="A screenshot of various website UI patterns such as typography, components, question inputs, and buttons.">
  </div>
</figure>

#### Views

Our strategy for the site was to have the content to lead the user experience. To build the views, I used content priority guides (created by our content strategist) in place of wireframes. I applied the finished pattern library to build the site's primary view templates in static HTML pages. The views were designed and engineered to make the product feel like a progressive web application to accommodate our end-users browsing behavior (observed through analytics of other products in our portfolio). We reviewed these pages internally and with our agency partners, and because they were live prototypes, the team could experience and review the designs as they would exist in production.

#### Program Pages

**Content priority guide**. This table showcases the content priority for our content specialist's program page template.

| Program Page Content Priority Guide                                             |
|:--------------------------------------------------------------------------------|
| Occupation                                                                      |
| Program title, provider, and agency                                             |
| Recruiting?                                                                     |
| Program description                                                             |
| Services and outcomes; what the program offers; certifications; industry sector |
| Who it’s for; eligibility at a glance and what makes someone a good match.      |
| Schedule; duration, location, and other details.                                |
| Next Steps; how to apply and deadlines.                                         |
| Contact; website, phone, or email.                                              |

**Static HTML design**. I used the content priority guide to build out the view. I added UI elements such as the sticky utility navigation, breadcrumbs, recruitment badge, typography styling of the content, newsletter sign-up module, site footer, and mobile navigation and menu.

<figure class="figure">
  <div class="figure__matte flex items-center justify-center p-2 bg-t1 h-auto aspect-ratio-auto">
    <iframe class="iframe" width="378" height="667" src="/working-nyc-patterns-0.0.1-44/programs/red-hook-on-the-road/"></iframe>
  </div>

  <figcaption class="static">
    <p>The static HTML prototype I created using the Working NYC pattern library.</p>
    <p><a class="btn btn-primary figure__cta" href="/working-nyc-patterns-0.0.1-44/programs/red-hook-on-the-road/" target="_blank" rel="noopener nofollow">View the full design <svg class="icon mis-half" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg></a></p>
  </figcaption>
</figure>

#### Homepage

**Homepage Outline**. I designed the homepage by developing an outline for interactive features and UI elements. The features on the homepage help funnel users to the most relevant information on the site based on their interests, including a questionnaire, scrollable program collection template, and announcement template. I then worked with our content specialist to develop UI copy, program collections, and announcements for the page.

| Homepage Outline      |
|:----------------------|
| Global site alert     |
| Site name and tagline |
| Questionnaire         |
| Program Collection 1  |
| Program Collection 2  |
| Announcements         |
| Newsletter            |

**Questionnaire**. The questionnaire turns the program taxonomies into a friendly question and answer format to help users filter and view programs based on their responses.

| Homepage Questionnaire                                                                       |
|:---------------------------------------------------------------------------------------------|
| Answer a few questions to get started.                                                       |
| Which of these best describes you? Select one category from the population taxonomy          |
| What kind of program fits your schedule best? Select one category from the schedule taxonomy |
| What do you want to gain from job services? Select one category from the services taxonomy   |
| Submit button                                                                                |

<figure class="figure">
  <div class="figure__matte bg-cover" style="background-image: url('/img/wnyc-sketches-homepage.jpg')"></div>

  <figcaption>
    <p>The initial sketches for the homepage include considerations for the different user behavior flows and background graphics to help balance the page's design.</p>
    <button class="btn btn-primary figure__cta" data-js="pdf-view" data-pdf-view="/img/wnyc-sketches-homepage.pdf" data-pdf-title="Working NYC Homepage Sketches">View homepage sketches</button>
  </figcaption>
</figure>

<figure class="figure">
  <div class="figure__matte flex items-center justify-center p-2 bg-t1 h-auto aspect-ratio-auto">
    <iframe class="iframe" width="378" height="667" src="/working-nyc-patterns-0.0.1-44/"></iframe>
  </div>

  <figcaption class="static">
    <p>The static HTML prototype I created using the Working NYC pattern library.</p>
    <p><a class="btn btn-primary figure__cta" href="/working-nyc-patterns-0.0.1-44/" target="_blank" rel="noopener nofollow">View the full design <svg class="icon mis-half" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg></a></p>
  </figcaption>
</figure>

#### User Acceptance Testing

We conducted remote user acceptance testing with program managers and participants from the NYC Parks Opportunity Program to gauge interest and uncover usability issues with this product iteration. With their valuable input, we could make all of the changes needed to launch the project's first version.

> A total of 5 content, design and engineering sprints began in May 2020 and ended in a launch on August 20th (13 weeks).

#### Final Final

The site's design is a collection of open-source code and public Figma file that can be scaled up as the product evolves. I also created internal documentation for all of the historical context behind the design so that team members can understand design decisions. You can browse the GitHub repository and the Figma file following the links below.

<nav class="grid tablet:grid-cols-2 gap-3">
  <a class="btn btn-primary m-0 justify-center" href="https://cityofnewyork.github.io/working-nyc-patterns/" target="_blank" rel="noopener nofollow"><svg class="icon mie-1" aria-hidden="true"><use xlink:href="#tabler-github"></use></svg> Pattern Library</a> <a class="btn btn-primary m-0 justify-center" href="https://www.figma.com/file/CH7ZOCW55SgsDnsTj3UrTi" target="_blank" rel="noopener nofollow"><svg class="icon mie-1" aria-hidden="true"><use xlink:href="#tabler-figma"></use></svg> Figma Design File</a>
</nav>

### Next Project

<p><a class="btn border-4 m-0 h-30vh desktop:h-30vh min-h-xsmall w-full flex-col items-center justify-center" href="/portfolio/working-nyc/feature-development-framework">
  <svg class="icon w-5 h-5 mie-1" aria-hidden="true">
    <use xlink:href="#tabler-folder"></use>
  </svg>
  <span class="h3 primary font-normal m-0 my-1 text-center">Feature Development Framework</span>
</a></p>

[View all Working NYC projects](/portfolio/working-nyc#featured-projects)
