---
title: 'Feature Development Framework / Working NYC / Portfolio / Devon Hirth'
layout: 'layouts/portfolio.pug'
classes: ['working-nyc']
breadcrumbs: ['Working NYC', 'Feature Development Framework']
---

--- {.m-0}

### Feature Development Framework {.h1 .my-6}

Once the [Working NYC website launched](/portfolio/working-nyc/product-launch), we began to plan for the next round of development. As the lead product designer, I wanted to continue to understand and build empathy for our audience and ensure feature development for the site was user-driven. To do this, I created a step-by-step framework to validate and guide ideas to maturity using data and user experience (UX) design.

<div class="tablet:grid grid-cols-8 tablet:border-4 border-t1 mb-4">
  <div class="col-span-2 tablet:border-r-4 border-t1 tablet:flex items-center justify-center">
    <h4 class="mb-4 font-normal tablet:mb-0 h4">Step 1</h4>
  </div>

  <div class="col-span-6 tablet:p-8">
    <p>A member of the team or external stakeholder presents a new hypothesis for a feature.</p>
  </div>
</div>

<div class="tablet:grid grid-cols-8 tablet:border-4 border-t1 mb-4">
  <div class="col-span-2 tablet:border-r-4 border-t1 tablet:flex items-center justify-center">
    <h4 class="mb-4 font-normal tablet:mb-0 h4">Step 2</h4>
  </div>

  <div class="col-span-6 tablet:p-8">
    <p>The idea can be validated and refined by asking the following questions.</p>
    <ul>
      <li>Does qualitative or quantitative data support this idea? Is there any observable evidence that our audience is experiencing this problem in previous research, feedback, or analytics? We can check our initial biases and create a more effective solution by examining the data.</li>
      <li>Does what we know about the problem currently give us a holistic view? We can cast a wider net around the issue by looking at multiple perspectives and talking to our audience and stakeholders about their goals and needs.</li>
    </ul>
  </div>
</div>

<div class="tablet:grid grid-cols-8 tablet:border-4 border-t1 mb-4">
  <div class="col-span-2 tablet:border-r-4 border-t1 tablet:flex items-center justify-center">
    <h4 class="mb-4 font-normal tablet:mb-0 h4">Step 3</h4>
  </div>

  <div class="col-span-6 tablet:p-8">
    <p>If our audience is experiencing different problems or are we imposing something that is not helpful to them, refine the idea to match real-world expectations.</p>
  </div>
</div>

<div class="tablet:grid grid-cols-8 tablet:border-4 border-t1 mb-4">
  <div class="col-span-2 tablet:border-r-4 border-t1 tablet:flex items-center justify-center">
    <h4 class="mb-4 font-normal tablet:mb-0 h4">Step 4</h4>
  </div>

  <div class="col-span-6 tablet:p-8">
    <p>If our audience is experiencing different problems or are we imposing something that is not helpful to them, refine the idea to match real-world expectations.</p>
    <p>Ideate on solutions, keeping in mind the following parameters.</p>
    <ul>
      <li>What is and who has the problem are we solving?</li>
      <li>What is the expected impact of the feature?</li>
      <li>What heuristics are we using to guide our decisions?</li>
    </ul>
    <p>Potential solutions are documented and presented to the internal team for feedback.</p>
  </div>
</div>

<div class="tablet:grid grid-cols-8 tablet:border-4 border-t1 mb-4">
  <div class="col-span-2 tablet:border-r-4 border-t1 tablet:flex items-center justify-center">
    <h4 class="mb-4 font-normal tablet:mb-0 h4">Step 5</h4>
  </div>

  <div class="col-span-6 tablet:p-8">
    <p>Validate and revise the solution further using appropriate UX research methodology.</p>
  </div>
</div>

<div class="tablet:grid grid-cols-8 tablet:border-4 border-t1 mb-4">
  <div class="col-span-2 tablet:border-r-4 border-t1 tablet:flex items-center justify-center">
    <h4 class="mb-4 font-normal tablet:mb-0 h4">Step 6</h4>
  </div>

  <div class="col-span-6 tablet:p-8">
    <p>Deliver and observe the feature using analytics to measure its impact.</p>
  </div>
</div>

<div class="tablet:grid grid-cols-8 tablet:border-4 border-t1 mb-4">
  <div class="col-span-2 tablet:border-r-4 border-t1 tablet:flex items-center justify-center">
    <h4 class="mb-4 font-normal tablet:mb-0 h4">Step 7</h4>
  </div>

  <div class="col-span-6 tablet:p-8">
    <p>Evaluate the success or failure of the feature. By evaluating, we can demonstrate the value of the process and feature or a need to iterate further.</p>
  </div>
</div>

#### Missing tools

Using this process would require additional tools and expanding our team's capacity.

<section class="grid tablet:grid-cols-2 gap-3 mb-8">
  <figure class="figure block m-0">
    <div style="background-color: #031837">
      <img class="block" src="/img/wnyc-component-feedback.svg" alt="The website Feedback component." width="1440" height="821" loading="lazy" decoding="async" />
    </div>
    <figcaption class="static">
      <h5>Qualitative Data Streams</h5>
      <p>I proposed collecting qualitative data through the website to complement our quantitative data collection and worked with the product manager to create multiple feedback forms for collecting users' input about the website experience and content. I then designed and implemented callouts with links to externally hosted forms.</p>
    </figcaption>
  </figure>

  <figure class="figure block m-0">
    <img class="block" src="/img/wnyc-user-relationship-manager.png" alt="Working NYC User Relationship Manager" width="1440" height="821" loading="lazy" decoding="async" />
    <figcaption class="static">
      <h5>User Relationship Manager</h5>
      <p>I created a user relationship management tool using Airtable. We use the tool to retain research participant contact information with informed consent, track research sessions, catalog synthesis, and develop nuanced user personas.<br><br><br></p>
    </figcaption>
  </figure>

  <figure class="figure block m-0">
    <div style="background-color: #031837">
      <img class="block" src="/img/wnyc-recruitment-email.png" alt="The NYC Benefits Platform Screening API landing page" width="1440" height="821" loading="lazy" decoding="async" />
    </div>
    <figcaption class="static">
      <h5>Testing Tools</h5>
      <p>We needed methodologies to be available to us to test our ideas, ranging from unmoderated preference testing to usability testing interview guides. I implemented the A/B testing tool Google Optimize and led several usability testing projects creating guides and scripts for recruitment, scheduling, and interview sessions.</p>
    </figcaption>
  </figure>

  <figure class="figure block m-0">
    <img class="block" src="/img/wnyc-personas.png" alt="Personas of users for the Working NYC website." width="1440" height="821" loading="lazy" decoding="async" />
    <figcaption class="static">
      <h5>Personas</h5>
      <p>To understand our users better, I facilitated the creation of proto personas. These personas were cataloged and showcased to the team to build a consensus on the site's audience. While conducting research, the proto personas are reviewed, validated, and updated with more fine details that help us understand our users even more over time.</p>
    </figcaption>
  </figure>
</section>

> Over time, the framework has become more refined with additional tools that facilitate better UX research. I oversaw the addition of **usability heuristics** and **framework for prioritizing research and methodologies** by fellows on our team.

### Next Project

<p><a class="btn border-4 m-0 h-30vh desktop:h-30vh min-h-xsmall w-full flex-col items-center justify-center" href="/portfolio/working-nyc/inclusive-design-pattern-iteration">
  <svg class="icon w-5 h-5 mie-1" aria-hidden="true">
    <use xlink:href="#tabler-folder"></use>
  </svg>
  <span class="h3 primary font-normal m-0 my-1 text-center">Inclusive Design Pattern Iteration</span>
</a></p>

[View all Working NYC projects](/portfolio/working-nyc#featured-projects)
