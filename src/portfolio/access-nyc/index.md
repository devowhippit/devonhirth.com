---
title: 'DACCESS NYC / Portfolio / Devon Hirth'
layout: './../../../_includes/layouts/default.pug'
---

## ACCESS NYC

* <a href="https://access.nyc.gov" class="flex items-center" target="_blank">View site <svg class="icon mis-half" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg>
</a>

* **Role**: Digital Product Designer and Lead Developer

<!-- <figure class="figure-full">
  ACCESS NYC
</figure> -->

ACCESS NYC has been my primary product assignment at the Mayor's Office for Economic Opportunity. The site is a public benefits platform offering the following features:

* Program guides for over 60 local, state, and federal benefit programs in 11 languages.
* An eligibility screener for over 30 benefit programs.
* An office locator for finding in-person assistance with benefit programs.

NYC Opportunity initially launched the product a few months before I joined the team in May 2017. Over the past several years, I have participated in numerous sprints using my expertise in front-end engineering, user interface/experience design, and digital product feature development. When I began working with the team, we established a release cadence and deployment flow following a 2 to 3-week sprint cycle. In that time, we have delivered 60+ new releases of the code and design, including performance optimizations, security accreditation, feature enhancements, and new features.

### Awards

ACCESS NYC has won several Government Design and Techonology awards since it's launch. Our team was also recognized internally with a customer service award in the midst of the COVID-19 pandemic.

* 2020 City Government Experience Award <a href="https://www.govtech.com/cdg/government-experience/Government-Experience-Awards-2020-Winners-Announced.html" class="inline-flex align-text-bottom"><svg class="icon" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg></a>
* 2020 Customer Service Award: Mayor's Office of Operations
* 2019 AWS City on a Cloud Innovation Challenge <a href="https://www.bodyworn.com/news/2019/12/4/announcing-the-2019-aws-city-on-a-cloud-innovation-challenge-winners" class="inline-flex align-text-bottom"><svg class="icon" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg></a>
* 2018 Adobe Government Creativity Awards
* 2017 Best Application Serving the Public: Center for Digital Government, Best of New York

&nbsp;

### <a class="flex mie-1 no-underline" id="access-nyc-featured-projects" href="#access-nyc-featured-projects"><svg class="icon" aria-hidden="true"><use xlink:href="#tabler-folders"></use></svg></a> Featured Projects {#access-nyc-featured-projects}

---

* [COVID Response](#covid-response)
* [UI Pattern Library](#ui-pattern-library)
* [Field Screener](#field-screener)
* [Development Contributions](#development-contributions)

&nbsp;

#### <a class="flex mie-1 no-underline" id="covid-response" href="#covid-response"><svg class="icon" aria-hidden="true"><use xlink:href="#tabler-folder"></use></svg></a> COVID Response {#covid-response}

When New York City became the epicenter of the COVID-19 pandemic, ACCESS NYC became a front-line digital resource for local, state, and federal aid information. It made sense for our organization to publish this information on ACCESS NYC because of the relative ease of using the platform to post content and its good SEO ranking. The site saw an increase in traffic by 200% as a result of the pandemic.

> I designed, implemented, and oversaw several functional and user interface enhancements in response to the pandemic over 3 release sprints. {.my-8}

##### Sprint 1

* Redesigned the homepage and introduced COVID-19 program labeling to help users get the information they needed more efficiently and added user-facing alerts and labeling patterns for COVID-19 related content. [Read more about the homepage redesign below](#homepage-redesign).

* Made frequently updated content more accessible through machine translation by implementing the Google Translate widget.

##### Sprint 2

* Oversaw the implementation of Special Announcement schema to make COVID-19 relevant content available to search engines. [Read more about implementation of Special Announcement schema below](#special-announcement-schema).

* Developed an accessible and translatable HTML table version of an information graphic to help workers understand their pandemic-related benefits eligibility.

##### Sprint 3

* Enabled social sharing by adding native browser web sharing functionality to our COVID-19 resource and other program guides.

###### Homepage Redesign {#homepage-redesign}

<!-- <figure class="figure">
  Homepage Redesign
</figure> -->

NYC Opportunity designed ACCESS NYC for New York City residents seeking information on public benefit programs. The pandemic and corresponding economic shut-down created a much larger audience for the site and nearly doubled the traffic. The user behavior flow patterns also dramatically shifted to our frequently updated COVID-19 resources page. The homepage redesign's primary challenge was to ensure visitors were more easily finding content relevant to their needs directly from the homepage and maintaining familiar patterns for returning visitors.

I synthesized user behavior flow by observing click-through rates from the COVID-19 resources page to begin the redesign. The data illustrated a hierarchy of 5 themes that users were the most concerned about; health, agency service updates, food, unemployment, and applying to programs. These helped me contextualize the use of different UI patterns to use.

* For **health**, I changed our dismissable sitewide alert to be persistent on the homepage. The alert's content would link to the New York City Health Department's website and our frequently updated COVID-19 resource page. The background color of the alert was also updated to purple, matching the color chosen by the City to label COVID-19 related content.

* For **agency service updates**, I updated our existing announcements section to include a title, two additional announcement slots, a timestamp of the last update, and a badge element that would clearly label an announcement as new. The badge label could be colored purple to reinforce an announcement's relevance to the pandemic.

* For **food** and **unemployment**, I relied on the existing featured programs section. However, the program "cards" would include icons and badges colored with the same COVID-19 purple to emphasize food and unemployment-related pandemic benefit guides.

The theme applying to programs represents a link in the top banner of the homepage to ACCESS HRA. This product is similar but separate from ACCESS NYC and helps New Yorkers apply to benefits directly. The traffic to the site suggested that this was the fifth need of users, so I created an alternate placement for it on the bottom of the page and replaced the callout with a link to our internal COVID-19 program guides. However, our team decided not to move forward with this change.

I created the redesigns in Figma, and after reviewing the new page updates with the team, implemented the updates in code.

###### Special Announcement Schema {#special-announcement-schema}

<!-- <figure class="figure">
  Special Announcement Schema
</figure> -->

The Special Announcement schema is a form of Structured Data markup provided to help major search engines understand that content on a website is relevant to the COVID-19 pandemic. Content relevant to users based on their locality marked up with the Special Announcement schema is likely to be presented to them when they search. For example, when a New York City resident searches for information on a particular benefits program, such as "Pandemic Unemployment Insurance," a search engine such as Google would present the information on ACCESS NYC to them because it is most likely to assist them.

The primary challenge of implementing this schema was automating the mapping of the existing content on ACCESS NYC to the different forms of the schema and only displaying it for pandemic-related content.

I worked with our junior developer to document how our content mapped to the schema. This document would be used as a reference for product and content managers to review and ensure that we were representing the content correctly. Then, I made discrete Jira tasks based on our documentation for our junior developer to follow and implement the code on the site. I oversaw the progress, quality assurance, and completion of these tasks.

The implementation gave content managers the ability to designate what content was relevant to the pandemic and the flexibility to add multiple pandemic benefit guides as they rolled out from the federal government. Featured program guides include Pandemic Unemployment Insurance, Federal Stimulus Payments, and a COVID-19 Vaccination Guide.

In addition to pandemic program guides, the main site alert banner that links to ACCESS NYC's frequently updated pandemic resources page was also marked up with the Special Announcement schema. This markup ensures that visitors searching for ACCESS NYC in Google will be presented with a prominent link in search results to the COVID-19 resources page.

#### <a class="flex mie-1 no-underline" id="ui-pattern-library" href="#ui-pattern-library"><svg class="icon" aria-hidden="true"><use xlink:href="#tabler-folder"></use></svg></a> ACCESS NYC UI Pattern Library {#ui-pattern-library}

<!-- <figure class="figure">
  ACCESS NYC Pattern Library
</figure> -->

ACCESS NYC is designed to accommodate New York City residents with low digital literacy on mobile devices. It is also Web Content Accessibility Guideline (WCAG) AA compliant and accessible in 11 different languages with support for right-to-left reading directions. Many of the elements and user experience of the design patterns leveraged the US Web Design System. ACCESS NYC has won 4 government design and technology awards since its launch, and the principles used to create this product are the basis for all of the other products in our portfolio.

I felt the most compelling contribution that I could make to such a well-done and principled design would be to make it quickly replicable at scale and available as an open-source pattern library. The need for a reusable library became more apparent when we needed to develop new features and products that required design but couldn't be easily recreated for a product team with limited design resources.

To do this, I took the current site and cataloged all of the reusable patterns. Using cut-outs from printed pages of the site, I hosted a workshop to allow the team to name and organize the patterns using terms of which our team would be familiar. Then, I used these common names to create individual pattern modules, refactoring and simplifying the source's stylesheets and JavaScript. Finally, I published the library to Node Package Manager (NPM) with corresponding documentation and demonstration site.

The first version of the library included 35 elements, components, and utilities. Over time, the set has expanded to over 50 patterns, including some reactive component variants for Vue.js applications. Additionally, I introduced CSS utilities to the library by adding Tailwindcss, customized using design tokens from the pattern source. The accessibility of the patterns has also improved over time with manual testing by the Mayor's Office for People with Disabilities (MOPD) and automated accessibility testing using Pa11y.

The developer tooling used to create this pattern library has also proven helpful in establishing other product pattern libraries. It was released as a stand-alone command-line interface (CLI) and has been used to create 4 additional pattern libraries, including Working NYC Patterns, Growing Up NYC Patterns, Generation NYC Patterns, and NYC Opportunity Patterns. I also used it to stand up a static documentation site for the NYC Benefits Screening API.

These tools and libraries have been used in multiple internal and external projects by product managers, designers, and engineers, greatly expanding our capacity for more complex design challenges.

The GitHub repository can be browsed following the link below.

<nav>
  <a class="btn btn-primary m-0 justify-center" href="https://accesspatterns.cityofnewyork.us" target="_blank"><svg class="icon mie-1" aria-hidden="true"><use xlink:href="#tabler-github"></use></svg> Pattern Library</a>
</nav>

#### <a class="flex mie-1 no-underline" id="field-screener" href="#field-screener"><svg class="icon" aria-hidden="true"><use xlink:href="#tabler-folder"></use></svg></a> ACCESS NYC Field Screener {#field-screener}

<!-- <figure class="figure">
  ACCESS NYC Field Screener
</figure> -->

In the summer of 2018, our team partnered with the Mayor's Public Engagement Unit to develop a version of the ACCESS NYC Eligibility Screener that their Outreach Specialists would use to screen New York City residents in person. These specialists go door-to-door to help residents with tenant support issues, managing cases in the field using tablets. This project's primary challenge was to optimize a 10 step benefit screener the specialists could use with their tablets in the short amount of time they have with New York City residents in the field. My role on this project was as lead developer.

We started the research process by shadowing the Outreach Specialists to get a sense of the challenges they encounter supporting tenants in the field. During this research, we discovered that the specialists usually have very little time to engage with tenants. Once we had finished our research and synthesis, we began designing and developing a minimum viable product throughout 4 development sprints. During each sprint, a design fellow would design the interface. Then, I would take the design and develop the functionality. Finally, we would conduct usability testing with specialists to gather feedback and iterate on the product.

The final design was a two-page screener with the original 10 steps compressed into collapsable sections. The specialists could more easily jump back and forth to fill these in through a more natural flow of conversation with tenants. I chose to build the screener using Vue.js to take advantage of the state, reactivity, and form validation Vue.js brings to front-end applications.

#### <a class="flex mie-1 no-underline" id="development-contributions" href="#development-contributions"><svg class="icon" aria-hidden="true"><use xlink:href="#tabler-folder"></use></svg></a> Development Contributions {#development-contributions}

Since joining the team in May 2017, I have contributed to front-end features, operations, and product management process enhancements to ACCESS NYC. Below is a summary of some of my primary development contributions.

* **Core Web Vitals optimization** - I created recommendations obtained by running Lighthouse reports and creating discrete tasks that we could implement on the site. I oversaw the implementation, quality assurance, and completion of these tasks through a junior developer's management.

* **Structured Data implementation** - We initially experimented with structured data on the office locations to make them easier for Google to parse. This implementation proved successful increasing traffic to the site. We then implemented the Government Service and Frequently Asked Questions schemas to benefits program guides based on this success. When the COVID-19 pandemic motivated creating the Special Announcements schema, we implemented it on our benefits program content and announcements related to the pandemic.

* **Program Archive Reactive Filtering** - The program archive utilized a filtering system that required users to reload the page whenever they wanted to view programs in a particular category. Additionally, there was only one taxonomy available to users to filter. These two issues presented a performance burden on the user. I implemented a reactive application in Vue.js using filters that would retrieve new programs on the front-end without reloading the page and filtering by multiple taxonomy filters. The result was a view that responded more quickly to user input, on par with modern web applications. I released this work as an open-source project that other developers can utilize in any WordPress site.

* **Security accreditation** - To launch public-facing applications using the City of New York's technology infrastructure, they must meet NYC Cyber Command's security standards. Stories for security standards are made based on the technology profile of the application. I reviewed 150 tickets and evaluated their relevance to our application. Then, I resolved them where solutions had been implemented by the vendor when the site launched and added new security enhancements to the site when necessary. To date, I have bundled security enhancements in 6 releases and documented security practice guidance in our open-source WordPress Boilerplate.

* **Event tracking** - To measure and analyze user behavior on the site, I encouraged event tracking to enhance our analytics reporting. I implemented scripts that would use DOM attributes to send click event data to both of the analytics services we used to aggregate data. Developers could easily add event tracking without rescripting.

#### Development Operation Contributions

* **Maintenance Process** - To ensure that the site's dependencies stay up to date, I helped establish dedicated maintenance sprints to update dependencies and test updates to ensure that updates would not introduce breaking changes.

* **Exception monitoring** - I integrated an exception monitoring tool to log errors that occur in production. Exception monitoring enabled the team to see any significant production issues that the team missed in smoke testing.

* **Automated smoke testing** - Before joining, the team used manual testing scripts to ensure that changes would not introduce errors or regressions. I vetted and introduced a tool that would enable the team to create and manage their existing tests and run them automatically.

* **Deployment process** - I needed to establish our deployment process using multiple live environments of the site to test, stage, and deploy production-ready code releases. I also created deployment scripts that would notify the team when other developers or I push releases to production.

* **WordPress Boilerplate** - To begin working on the site, I created a local development suite with a colleague that we could use to stand up, deploy, and manage the site consistently across different environments. This development tool became a vital resource and standard for our team to have other engineers and vendors contribute to projects with similar stacks. Over time, it has become a boilerplate for new products, documentation on managing our current products, and guidance on critical technical features such as security. It is publicly available as an open-source project.

#### Open-source Repository

ACCESS NYC has been an open-source project since it's launch. The GitHub repository for ACCESS NYC can be browsed following the link below.

<nav>
  <a class="btn btn-primary m-0 justify-center" href="https://github.com/cityOfNewYork/access-nyc" target="_blank"><svg class="icon mie-1" aria-hidden="true"><use xlink:href="#tabler-github"></use></svg> ACCESS NYC Repository</a>
</nav>