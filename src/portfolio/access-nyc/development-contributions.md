---
title: 'Development Contributions / ACCESS NYC / Portfolio / Devon Hirth'
layout: 'layouts/portfolio.pug'
classes: ['access-nyc']
breadcrumbs: ['ACCESS NYC', 'Development Contributions']
---

--- {.m-0}

### Development Contributions {.h1 .my-6}

Since joining the team in May 2017, I have contributed to front-end features, operations, and product management process enhancements to ACCESS NYC. Below is a summary of some of my primary development contributions.

* **Core Web Vitals optimization** - I created recommendations obtained by running Lighthouse reports and creating discrete tasks that we could implement on the site. I oversaw the implementation, quality assurance, and completion of these tasks through a junior developer's management. The final core web vitals enhancement was <a href="https://github.com/CityOfNewYork/ACCESS-NYC/releases/tag/v3.27.0" class="inline-flex items-center" target="_blank" rel="noopener nofollow">released on March 31st, 2021 <svg class="icon mis-half" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg></a> and in the four months after its launch has accounted for over **1.8 million <!-- 1,817,118 --> impressions** and over **48 <!-- 48,697 --> thousand clicks**.

* **Structured Data implementation** - We initially experimented with **Government Office** and **Organization** structured data on the office locations to make them easier for search engines to parse. This implementation proved successful in increasing traffic to the site. We then implemented the **Government Service** and Google's **Frequently Asked Questions** schemas to benefits program guides based on this success. When the **Special Announcements** schema was created to structure content related to the COVID-19 pandemic, we implemented it on our benefits program content and announcements related to the pandemic.

* **Program Archive Reactive Filtering** - The program archive utilized a filtering system that required users to reload the page whenever they wanted to view programs in a particular category. Additionally, there was only one taxonomy available to users to filter. These two issues presented a performance burden on the user. I implemented a reactive application in Vue.js using filters that would retrieve new programs on the front-end without reloading the page and filtering by multiple taxonomy filters. The result was a view that responded more quickly to user input, on par with modern web applications. I released this work as an open-source project that other developers can utilize in any WordPress site.

* **Security accreditation** - To launch public-facing applications using the City of New York's technology infrastructure, they must meet NYC Cyber Command's security standards. Stories for security standards are made based on the technology profile of the application. I reviewed 150 tickets and evaluated their relevance to our application. Then, I resolved them where solutions had been implemented by the vendor when the site launched and added new security enhancements to the site when necessary. To date, I have bundled security enhancements in 6 releases and documented security practice guidance in our open-source WordPress Boilerplate.

* **Event tracking** - To measure and analyze user behavior on the site, I encouraged event tracking to enhance our analytics reporting. I implemented scripts that would use DOM attributes to send click event data to both of the analytics services we used to aggregate data. Developers could easily add event tracking without rescripting.

##### Dev Ops Contributions

* **Maintenance Process** - To ensure that the site's dependencies stay up to date, I helped establish dedicated maintenance sprints to update dependencies and test updates to ensure that updates would not introduce breaking changes.

* **Exception monitoring** - I integrated an exception monitoring tool to log errors that occur in production. Exception monitoring enabled the team to see any significant production issues that the team missed in smoke testing.

* **Automated smoke testing** - Before joining, the team used manual testing scripts to ensure that changes would not introduce errors or regressions. I vetted and introduced a tool that would enable the team to create and manage their existing tests and run them automatically.

* **Deployment process** - I needed to establish our deployment process using multiple live environments of the site to test, stage, and deploy production-ready code releases. I also created deployment scripts that would notify the team when other developers or I push releases to production.

* **WordPress Boilerplate** - To begin working on the site, I created a local development suite with a colleague that we could use to stand up, deploy, and manage the site consistently across different environments. This development tool became a vital resource and standard for our team to have other engineers and vendors contribute to projects with similar stacks. Over time, it has become a boilerplate for new products, documentation on managing our current products, and guidance on critical technical features such as security. It is publicly available as an open-source project.

##### Open-source Repository

ACCESS NYC has been an open-source project since it's launch. The GitHub repository for ACCESS NYC can be browsed following the link below.

<a class="btn btn-primary m-0 justify-center w-full" href="https://github.com/cityOfNewYork/access-nyc" target="_blank" rel="noopener nofollow"><svg class="icon mie-1" aria-hidden="true"><use xlink:href="#tabler-github"></use></svg> ACCESS NYC Repository</a>

### Next Project

<p><a class="btn border-4 m-0 h-30vh desktop:h-30vh min-h-xsmall w-full flex-col items-center justify-center" href="/portfolio/access-nyc/covid-response">
  <svg class="icon w-5 h-5 mie-1" aria-hidden="true">
    <use xlink:href="#tabler-folder"></use>
  </svg>
  <span class="h3 primary font-normal m-0 my-1 text-center">COVID Response</span>
</a></p>

[View all ACCESS NYC projects](/portfolio/access-nyc#featured-projects)
