---
title: 'Working NYC / Portfolio'
layout: 'layouts/default.pug'
---

## Working NYC

<a href="https://working.nyc.gov" class="h5 flex items-center" target="_blank">
  View site <svg class="icon mis-half" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg>
</a>

### Role: Lead Digital Product Designer {.h5}

During the summer of 2020, the Mayor's Office of Workforce Development partnered with our agency to create a site that helps New Yorkers prepare for and find a job through free job and adult education programs. My primary role on this product is to manage the brand identity and lead the design strategy working closely with the product manager, content strategist, and lead engineer. Since the initial launch, I have established a UX process that combines qualitative and quantitative feedback mechanisms to lead design research and feature development on the site.

<!-- <figure class="figure">
  <img src="img/wnyc-banner.png">
</figure> -->

<!-- ##### <a class="flex mie-1 no-underline" id="working-nyc-featured-projects" href="#working-nyc-featured-projects"><svg class="icon" aria-hidden="true"><use xlink:href="#tabler-folders"></use></svg></a> Featured Projects {#working-nyc-featured-projects} -->

<!-- * [Product Development and Launch](#product-development-and-launch) -->
<!-- * [UX Process](#ux-process) -->
<!-- * [Feedback Mechanisms](#feedback-mechanisms) -->

### <a class="flex mie-1 no-underline" id="product-development-and-launch" href="#product-development-and-launch"><svg class="icon" aria-hidden="true"><use xlink:href="#tabler-folder"></use></svg></a> Product Development and Launch {#product-development-and-launch}

<!-- <figure class="figure-full" style="background-image: url('img/wnyc-banner.png')">
  <img src="img/wnyc-banner.png">
</figure> -->

> My primary challenge with the Working NYC launch was to create a **new brand** and **user interface** that templatizes 30+ programs from multiple providers serving a diverse population of New Yorkers across 9 industries. {.my-8}

**Program Taxonomies**. This table showcases 3 of the 7 finalized taxonomy collections for programs on the site that I would need to accommodate for in the product's design.

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

The direction for the brand identity was to use design tokens from a previous project created in collaboration with the Mayor's Office of Workforce Development to keep the product within a family of Workforce products. I extracted the token set from the project, including typography and colors, and expanded it to create a brand identity system. The brand logotype was set in the same typeface, Montserrat.

<!-- <figure class="figure p-4" style="height: 600px;">
  <img src="/img/wnyc-workforce-data-portal.png" width="640" height="441">

  <figcaption>I tokenized and expanded the color scales to an equal range for each color.</figcaption>
</figure> -->

<figure class="figure p-4" style="height: 600px;">
  <img src="/img/wnyc-colors.png" width="640" height="441">

  <figcaption>I tokenized and expanded the color scales to an equal range for each color.</figcaption>
</figure>

<figure class="figure" style="height: 600px; background-color: #031837">
  <img src="/img/wnyc-fonts.png" width="720" height="309">

  <figcaption>The font families extracted from the previous project included Montserrat and Lato.</figcaption>
</figure>

<figure class="figure" style="height: 600px; background-image: url('/img/wnyc-sketches-identity.jpg')">
  <!-- <img src="img/wnyc-sketches.jpg"> -->

  <figcaption>
    <p>The initial sketches for the brand identity logotype include considerations for the different industries and services offered by programs.</p>
    <button class="btn btn-primary" data-js="pdf-view" data-pdf-view="/img/wnyc-sketches-identity.pdf" data-pdf-title="Working NYC Identity Sketches">View identity sketches</button>
  </figcaption>
</figure>

<figure class="figure p-4" style="height: 600px; background-color: #031837">
  <img src="/img/wnyc-logo.png" width="302" height="27">

  <figcaption>The Working NYC brand identity features a logotype set in Montserrat, an open-source and free alternative to Gotham recognized by it’s equalized geometric features. This is the same typeface used for other Workforce projects which keeps it in the same family of brands with flexibility for future iteration.</figcaption>
</figure>

<figure class="figure p-4" style="height: 600px; background-color: #031837">
  <img src="/img/wnyc-categories.png" width="432" height="62">

  <figcaption>I created icons repesenting different industry sectors. The four major sector taxonomies are represented here; Technology, Healthcare, Construction, and Culinary.</figcaption>
</figure>

#### User Interface

Drawing on the foundation of other products in our portfolio, I was able to design and build (in code) a production-ready version of a pattern library explicitly created for New York City resident-facing products. This library includes 38 elements, components, and utilities; multi-lingual stylesheets with support for 11 languages, left-to-right, and right-to-left reading orientations; and meets Web Content Accessibility Guidelines (WCAG) AA compliance.

<figure class="figure">
  <img src="/img/wnyc-patterns.png">
</figure>

#### Views

Our strategy for the site was to have the content to lead the user experience. To build the views, I used content priority guides (created by our content strategist) in place of wireframes. I applied the finished pattern library to build the site's primary view templates in static HTML pages. The views were designed and engineered to make the product feel like a progressive web application to accommodate our end-users browsing behavior (observed through analytics of other products in our portfolio) on mobile devices. We reviewed these pages internally and with our agency partners, and because they were live prototypes, the team could experience and review the designs as they would exist in production.

#### Program Pages

**Content priority guide**. This table showcases the content priority for the individual program page template created by our content specialist.

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

**Static HTML design**. I used the program page content priority guide to build out the view and added UI elements such as the sticky utility navigation, breadcrumbs, recruitment badge, typography styling of the content, newsletter sign-up module, site footer, and mobile navigation and menu.

<figure class="figure py-8">
  <iframe class="iframe" width="378" height="667" src="https://cityofnewyork.github.io/workingnyc-patterns/demos/programs/red-hook-on-the-road"></iframe>

  <figcaption>
    <p>This is the static HTML design I created using the Working NYC pattern library.</p>
    <p><a class="btn btn-primary" target="_blank" href="https://cityofnewyork.github.io/workingnyc-patterns/demos/programs/red-hook-on-the-road">View the full design <svg class="icon mis-half" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg></a></p>
  </figcaption>
</figure>

#### Homepage

**Homepage Outline**. I designed the homepage by developing an outline for interactive features and UI elements. The features on the homepage help funnel users to the most relevent information in the site based on their interests. This inludes a questionaire, scrollable program collection template, and announcement template. I then worked with our content specialist to develop UI copy, program collections, and announcements for the page.

| Homepage Outline      |
|:----------------------|
| Global site alert     |
| Site name and tagline |
| Questionaire          |
| Program Collection 1  |
| Program Collection 2  |
| Annoucements          |
| Newsletter            |

**Questionaire**. The questionaire turns the program taxonomies into a friendly question and answer format to help users filter and view programs based on their responses.

| Homepage Questionnaire                                                                       |
|:---------------------------------------------------------------------------------------------|
| Answer a few questions to get started.                                                       |
| Which of these best describes you? Select one category from the population taxonomy          |
| What kind of program fits your schedule best? Select one category from the schedule taxonomy |
| What do you want to gain from job services? Select one category from the services taxonomy   |
| Submit button                                                                                |

<figure class="figure" style="height: 600px; background-image: url('/img/wnyc-sketches-homepage.jpg')">
  <!-- <img src="img/wnyc-sketches.jpg"> -->

  <figcaption>
    <p>The initial sketches for the homepage include considerations for the different user behavior flows and background graphics to help balance the design of the page.</p>
    <button class="btn btn-primary" data-js="pdf-view" data-pdf-view="/img/wnyc-sketches-homepage.pdf" data-pdf-title="Working NYC Homepage Sketches">View homepage sketches</button>
  </figcaption>
</figure>

<figure class="figure py-8">
  <iframe class="iframe" width="378" height="667" src="https://cityofnewyork.github.io/workingnyc-patterns/demos/index"></iframe>

  <figcaption>
    <p>This is the static HTML design I created using the Working NYC pattern library.</p>
    </p><a class="btn btn-primary" target="_blank" href="https://cityofnewyork.github.io/workingnyc-patterns/demos/index">View the full design <svg class="icon mis-half" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg></a></p>
  </figcaption>
</figure>

#### User Acceptance Testing

We conducted remote user acceptance testing with program managers and participants from the NYC Parks Opportunity Program to gauge interest and uncover usability issues with this product iteration. With their valuable input, we could make all of the changes needed to launch the project's first version.

> A total of 5 content, design and engineering sprints began in May 2020 and ended in a launch on August 20th (13 weeks). {.my-8}

#### Final Final

The design of the site is a collection of open-source code and public Figma file that can be scaled up as the product evolves. I also created internal documentation for all of the historical context behind the design so that team members would be able to understand my decisions. The GitHub repository and the Figma file can be browsed following the links below.

<nav class="grid grid-cols-2 gap-3">
  <a class="btn btn-primary m-0 justify-center" href="https://cityofnewyork.github.io/workingnyc-patterns/" target="_blank"><svg class="icon mie-1" aria-hidden="true"><use xlink:href="#tabler-github"></use></svg> Pattern Library</a> <a class="btn btn-primary m-0 justify-center" href="https://www.figma.com/file/CH7ZOCW55SgsDnsTj3UrTi" target="_blank"><svg class="icon mie-1" aria-hidden="true"><use xlink:href="#tabler-figma"></use></svg> Figma Design File</a>
</nav>

<!-- ##### UX Process -->

<!-- ##### Feedback Mechanisms -->