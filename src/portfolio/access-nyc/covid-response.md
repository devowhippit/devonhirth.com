---
title: 'COVID Response / ACCESS NYC / Portfolio / Devon Hirth'
layout: 'layouts/portfolio.pug'
classes: ['access-nyc']
breadcrumbs: ['ACCESS NYC', 'COVID Response']
---

--- {.m-0}

## COVID Response {.h1 .my-6}

When New York City became the epicenter of the COVID-19 pandemic, ACCESS NYC became a front-line digital resource for local, state, and federal aid information. The site saw an increase in traffic by 200% as a result of the pandemic.

> I designed, implemented, and oversaw several functional and user interface enhancements to support ACCESS NYC's response to the pandemic over 3 release sprints. {.my-8}

<div class="tablet:grid grid-cols-8 tablet:border-4 border-t1 mb-4">
  <div class="col-span-2 tablet:border-r-4 border-t1 tablet:flex items-center justify-center">
    <h6 class="mb-4 font-normal tablet:mb-0 h4">Sprint 1</h6>
  </div>

  <div class="col-span-6 tablet:p-8">
    <ul>
      <li>Added manageable user-facing alerts and labeling patterns for COVID-19 related content.</li>
      <li>Made frequently updated content more accessible through machine translation by implementing the Google Translate widget.</li>
      <li>Redesigned the homepage and introduced COVID-19 response patterns to help users get the information they needed more efficiently. <a href="#homepage-redesign">Read more about the homepage redesign below</a>.</li>
    </ul>
  </div>
</div>

<div class="tablet:grid grid-cols-8 tablet:border-4 border-t1 mb-4">
  <div class="col-span-2 tablet:border-r-4 border-t1 tablet:flex items-center justify-center">
    <h6 class="mb-4 font-normal tablet:mb-0 h4">Sprint 2</h6>
  </div>

  <div class="col-span-6 tablet:p-8">
    <ul>
      <li>Developed an accessible and translatable HTML table version of an information graphic to help workers understand their pandemic-related benefits eligibility.</li>
      <li>Oversaw the implementation of Special Announcement schema to make COVID-19 relevant content available to search engines. <a href="#special-announcement-schema">Read more about implementation of Special Announcement schema below</a>.</li>
    </ul>
  </div>
</div>

<div class="tablet:grid grid-cols-8 tablet:border-4 border-t1 mb-8">
  <div class="col-span-2 tablet:border-r-4 border-t1 tablet:flex items-center justify-center">
    <h6 class="mb-4 font-normal tablet:mb-0 h4">Sprint 3</h6>
  </div>

  <div class="col-span-6 tablet:p-8">
    <ul>
      <li>Enabled social sharing by adding native web sharing features to our COVID-19 resources and benefit program guides.</li>
    </ul>
  </div>
</div>

##### Homepage Redesign {#homepage-redesign}

NYC Opportunity designed ACCESS NYC for New York City residents seeking information on public benefit programs. The pandemic and corresponding economic shutdown created a much larger audience and nearly doubled the traffic. The user behavior flow patterns also dramatically shifted to our frequently updated COVID-19 resources page. The homepage redesign's primary challenge was to ensure visitors easily find content relevant to their needs directly from the homepage and maintain familiar patterns for returning visitors.

I synthesized user behavior flow by observing click-through rates from the COVID-19 resources page to begin the redesign. The data illustrated a hierarchy of 5 themes that users were the most concerned about; **health**, **agency service updates**, **food**, **unemployment**, and **applying to programs**. These helped me contextualize the utility of different UI patterns to use.

| Hierarchy of Needs     | UI Pattern                                                |
|:-----------------------|:----------------------------------------------------------|
| Health                 | Nonmodal alert dialog with link to COVID-19 resource page |
| Agency service updates | Public announcements section                              |
| Food                   | Featured emergency food assistance programs               |
| Unemployment           | Featured state unemployment programs                      |
| Applying to programs   | Disambiguated link to ACCESS HRA                          |
| Everything else        | ACCESS NYC help desk link                                 |

###### Health

For health, I changed the fixed homepage alert from a modal (dismissable) to a nonmodal (persistent) dialogue on the homepage. The alert's content would link to the New York City Health Department's website and our frequently updated COVID-19 resource page. The background color of the alert was also updated to purple, matching the color chosen by the City to label COVID-19 related content.

<figure class="figure">
  <div class="figure__matte flex items-center justify-center px-4 tablet:px-8" style="height: auto; background-color: #FFF">
    <img class="my-8 mx-auto" src="/img/anyc-covid-alert.svg" width="800" height="202" loading="lazy" decoding="async" />
  </div>

  <figcaption class="static">I changed the fixed homepage alert from a modal (dismissable) to a nonmodal (persistent) dialogue.</figcaption>
</figure>

###### Agency service updates

For agency service updates, I updated our existing announcements section to include a title, two additional announcement slots, a timestamp of the last update, and a badge element that would clearly label the status of an announcement. The status badge could be colored purple to reinforce an announcement's relevance to the pandemic.

<figure class="figure">
  <div class="figure__matte flex items-center justify-center px-4 tablet:px-8" style="height: auto; background-color: #FFF" >
    <img class="my-8 mx-auto" src="/img/anyc-covid-announcements.svg" width="800" height="627" loading="lazy" decoding="async" />
  </div>

  <figcaption class="static">I redesigned the homepage announcements section to include timestamps and additional announcements.</figcaption>
</figure>

###### Food and unemployment

For food and unemployment, I relied on the existing featured programs section. However, the program "cards" would include category icons and status badges colored with the same COVID-19 purple to emphasize new food and unemployment-related pandemic benefit guides.

<figure class="figure">
  <div class="figure__matte flex items-center justify-center px-4 tablet:px-8" style="height: auto; background-color: #FFF" >
    <img class="my-8 mx-auto" src="/img/anyc-covid-featured-programs.svg" width="800" height="511" loading="lazy" decoding="async" />
  </div>

  <figcaption class="static">I redesigned the featured programs section with badges and new program icons.</figcaption>
</figure>

<figure class="figure">
  <div class="figure__matte flex items-center justify-center px-4 tablet:px-8" style="height: auto; background-color: #FFF" >
    <img class="my-8 mx-auto" src="/img/anyc-covid-icons.svg" width="800" height="1107" loading="lazy" decoding="async" />
  </div>

  <figcaption class="static">I updated the category icon design for programs to be more consistent and clear while honoring the previous iconography.</figcaption>
</figure>

###### Applying to programs

For applying to programs, I moved a link to ACCESS HRA from the top section towards the bottom of the section hierarchy. ACCESS HRA is a similar product separate from ACCESS NYC that helps New Yorkers apply to benefits *directly*. The traffic to the site suggested that this was the fifth need of users, so I created an alternate placement for it on the bottom of the page and replaced the callout with a link to our internal COVID-19 program guides. However, our team decided not to move forward with this change.

<figure class="figure">
  <div class="figure__matte flex items-center justify-center px-4 tablet:px-8" style="height: auto; background-color: #FFF" >
    <img class="my-8 mx-auto" src="/img/anyc-covid-access-hra.svg" width="800" height="232" loading="lazy" decoding="async" />
  </div>

  <figcaption class="static">I redesigned the link to ACCESS HRA to be disambiguous and help users understand how to apply to benefit programs directly.</figcaption>
</figure>

I created the redesigns in Figma, and after reviewing the new page updates with the team, implemented the updates in code. Below are screenshots of the homepage and programs landing page with annotated design changes.

<figure class="figure">
  <div class="figure__matte p-4 tablet:p-8 bg-t1 h-auto">
    <img src="/img/anyc-covid-homepage.png" alt="The ACCESS NYC homepage with annotations of the COVID response enhancements." loading="lazy" decoding="async" />
  </div>
</figure>

<!-- <figure class="figure">
  <img src="/img/anyc-covid-programs.png">
</figure> -->

> We released the <a href="https://github.com/CityOfNewYork/ACCESS-NYC/releases/tag/v3.18.0" target="_blank" rel="noopener nofollow">COVID Response Patterns May 4th, 2020<svg class="icon mis-1 w-4 h-4" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg></a>

##### Special Announcement Schema {#special-announcement-schema}

<!-- <figure class="figure">
  Special Announcement Schema
</figure> -->

The <a href="https://developers.google.com/search/docs/advanced/structured-data/special-announcements" class="inline-flex items-center" target="_blank" rel="noopener nofollow">Special Announcement schema <svg class="icon mis-half" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg>
</a> is a form of Structured Data markup provided to help major search engines understand that content on a website is relevant to the COVID-19 pandemic. Content relevant to users based on their locality marked up with the Special Announcement schema is likely to be presented to them when they search. For example, when a New York City resident searches for information on a particular benefits program, such as "Pandemic Unemployment Insurance," a search engine such as Google would present the information on ACCESS NYC to them because it is most likely to assist them.

The primary challenge of implementing this schema was automating the mapping of the existing content on ACCESS NYC to the different forms of the schema and only displaying it for pandemic-related content.

I worked with our junior developer to document how our content mapped to the schema. This document would be used as a reference for product and content managers to review and ensure that we were representing the content correctly. Then, I made discrete Jira tasks based on our documentation for our junior developer to follow and implement the code on the site. I oversaw the progress, quality assurance, and completion of these tasks.

The implementation gave content managers the ability to designate what content was relevant to the pandemic and the flexibility to add multiple pandemic benefit guides as they rolled out from the federal government. Featured program guides include Pandemic Unemployment Insurance, Federal Stimulus Payments, and a COVID-19 Vaccination Guide.

**COVID-19 Vaccine Program Guide**

<figure class="figure">
  <div class="figure__matte flex items-center justify-center p-4 tablet:p-8 bg-t1 h-auto">
    <img src="/img/anyc-covid-vaccine-guide.png" width="1024" height="569" loading="lazy" decoding="async" />
  </div>
</figure>

**COVID-19 Vaccine Structured Data**

```json
{
  "type": "SpecialAnnouncement",
  "name": "COVID-19 Vaccines",
  "category": "https://www.wikidata.org/wiki/Q81068910",
  "datePosted": "2021-08-16T11:56:35",
  "governmentBenefitsInfo": {
    "type": "GovernmentService",
    "name": "COVID-19 Vaccines",
    "url": "https://www1.nyc.gov/site/doh/covid/covid-19-vaccines.page",
    "provider": {
      "type": "GovernmentOrganization",
      "name": "Department of Health and Mental Hygiene"
    },
    "audience": {
      "type": "Audience",
      "name": "COVID-19 impacted, Everyone, Families, Immigrants, NYCHA residents, People with disabilities, Pregnant & new parents, Seniors, Students, Veterans, Youth (10+)"
    },
    "serviceType": "Health"
  },
  "serviceOperator": {
    "type": "GovernmentOrganization",
    "name": "Department of Health and Mental Hygiene",
    "spatialCoverage": {
      "type": "City",
      "name": "New York"
    }
  }
}
```

Wherever the COVID-19 Vaccine Guide appears in the site, such as on the homepage in the featured programs section, it will be accompanied by it's structured data. This insures that search engines can display relevant content about COVID-19 vaccines to users.

<figure class="figure">
  <div class="figure__matte flex items-center justify-center px-4 tablet:px-8" style="height: auto; background-color: #FFF" >
    <img class="my-8 mx-auto" src="/img/anyc-covid-special-announcement-programs.svg"  loading="lazy" decoding="async" width="800" height="567" />
  </div>
</figure>

In addition to pandemic program guides, the main site alert banner that links to ACCESS NYC's frequently updated pandemic resources page was also marked up with the Special Announcement schema. This markup ensures that visitors searching for ACCESS NYC in Google will be presented with a prominent link in search results to the COVID-19 resources page.

<figure class="figure">
  <div class="figure__matte desktop:flex items-center text-center justify-between tablet:py-8 tablet:bg-t1 h-auto" style="height: auto">
    <img class="mx-auto mb-4 desktop:mb-0" src="/img/anyc-special-announcement.png" loading="lazy" decoding="async" width="414" height="736" />
    <img class="mx-auto mb-4 desktop:mb-0" src="/img/anyc-special-announcement-preview.png" loading="lazy" decoding="async" width="414" height="736" />
  </div>

  <figcaption class="static">The main COVID-19 banner marked up with the Special Announcement schema. The first screenshot is the ACCESS NYC homepage and the <b>COVID-19: NYC resource page</b> link in the nonmodal dialog at the bottom of the page. The second screenshot is a preview of the ACCESS NYC homepage in search results with the same <b>COVID-19: NYC resource page</b> link directly under the result.</figcaption>
</figure>

> We released the <a href="https://github.com/CityOfNewYork/ACCESS-NYC/releases/tag/v3.19.0" target="_blank" rel="noopener nofollow">Special Announcement schema on May 20th, 2020<svg class="icon mis-1 w-4 h-4" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg></a>. In the 14 months after its release has accounted for over **1.2 million <!-- 1,283,722 --> impressions** and over **53 <!-- 53,700 --> thousand clicks**.

### Next Project

<p><a class="btn border-4 h-30vh desktop:h-30vh min-h-xsmall w-full flex-col items-center justify-center" href="/portfolio/access-nyc/ui-patterns-library">
  <svg class="icon w-5 h-5 mie-1" aria-hidden="true">
    <use xlink:href="#tabler-folder"></use>
  </svg>
  <span class="h3 primary font-normal m-0 my-1 text-center">UI Pattern Library</span>
</a></p>

[View all ACCESS NYC projects](/portfolio/access-nyc#featured-projects)
