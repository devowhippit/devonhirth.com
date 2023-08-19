---
title: 'Daisy Debt / Portfolio / Devon Hirth'
layout: 'layouts/portfolio.pug'
classes: ['daisy-debt']
breadcrumbs: ['Daisy Debt']
---

## Daisy Debt {.sr-only}

<figure class="figure -mx-3 tablet:mx-0 mt-0" style="background-color: #06C7E1">
  <div class="figure__matte">
    <div class="absolute flex flex-col justify-center items-center px-4 w-full h-full" style="color: #112E51">
      <img class="desktop:mb-6" src="/img/daisy-debt-logo.svg" width="474" height="131" loading="lazy" decoding="async" alt="The Daisy Debt logo"/>
    </div>
  </div>

  <figcaption>
    <h3 class="h5">Role: Researcher / Lead Engineer / Designer</h4>
  </figcaption>
</figure>

I contributed to and advised on the engineering and product design of a non-profit SAAS product, <a href="https://daisydebt.org" target="_blank" rel="noopener nofollow noreferrer">daisydebt.org</a>, which helps financial counselors assert their client's rights against unlawful debt collection agencies. The site hosts a web application that allows financial counselors to write and send debt verification letters for their clients. It uses a 10-step form to generate a letter that takes less than 5 minutes to complete. The application mails the letter upon completion via U.S. certified mail. Financial counselors and their clients can track the letter to ensure it arrives at its destination using certified mail. The application also sends reminder emails to counselors and their clients to help them remain mutually accountable until the letter-sending process resolves the client's debt collection issue.

> The primary challenge with Daisy Debt was conducting research and building a **minimum viable product** within 2 months.

<div class="tablet:grid grid-cols-8 tablet:border-4 border-t1 mb-4">
  <div class="col-span-2 tablet:border-r-4 border-t1 tablet:flex items-center justify-center">
    <h4 class="mb-4 font-normal tablet:mb-0 h4"><a href="#research-sprint">Sprint 1</a></h6>
  </div>

  <div class="col-span-6 tablet:p-8">
    <p>Research. Observations of financial counseling sessions.</p>
  </div>
</div>

<div class="tablet:grid grid-cols-8 tablet:border-4 border-t1 mb-4">
  <div class="col-span-2 tablet:border-r-4 border-t1 tablet:flex items-center justify-center">
    <h4 class="mb-4 font-normal tablet:mb-0 h4"><a href="#build-sprint">Sprint 2</a></h6>
  </div>

  <div class="col-span-6 tablet:p-8">
    <p>Design, build, and delivery.</p>
  </div>
</div>

<div class="tablet:grid grid-cols-8 tablet:border-4 border-t1 mb-4">
  <div class="col-span-2 tablet:border-r-4 border-t1 tablet:flex items-center justify-center">
    <h4 class="mb-4 font-normal tablet:mb-0 h4"><a href="#advising">Advising</a></h6>
  </div>

  <div class="col-span-6 tablet:p-8">
    <p>Overseeing further contributions.</p>
  </div>
</div>

### <a class="flex mie-1 no-underline" id="research-sprint" href="#research-sprint"><svg class="icon" aria-hidden="true"><use xlink:href="#tabler-folder"></use></svg></a> Research sprint

This summary of research conducted during my fellowship at the Blue Ridge Labs foundation in 2016 led my team to build <a href="https://daisydebt.org/" rel="nofollow noopener noreferrer" target="_blank">Daisy Debt</a>. It includes what I observed during our interviews with <a href="https://www1.nyc.gov/site/dca/consumers/get-free-financial-counseling.page" rel="nofollow noopener noreferrer" target="_blank">Financial Empowerment Centers</a> (FE Centers), but many community-based organizations (CBOs) do similar work. I am grateful to the financial counselors that we were able to work with, who showed much interest and proved to be highly influential on the project.

#### Observations of financial counseling sessions

Clients are directed to or reach out for free appointments with FE Centers. Often the profile of clients is low-income persons in financial distress with a wide range of issues.

> Financial Counselors are critical for helping clients navigate the landscape of consumer debt, which is full of pitfalls ranging from difficult-to-discern documentation, predatory practices, wrong information, and scams.

Our team's lead user experience researcher reflected <a href="https://labs.robinhood.org/five-insights-about-designing-for-consumer-debt/" target="_blank" rel="nofollow noopener">on her experience working in the consumer debt area</a>. There are many excellent descriptions of some challenges.

#### Observations of counseling sessions

Financial counselors go over a client's entire economic history; debts, credit, assets, bankruptcy cases, etc. The goal is to get a snapshot of the current client's financial health. Often, clients bring in a stack of papers that will include bank statements, personal identification, filed taxes, letters about particular finances, anything. The counselor will go over these documents and capture all the information in their chosen case-work management system.

The financial counselor then makes an assessment. The assessments may be singular, but usually, the client needs a combination of different things such as banking services, help to rebuild their credit, paying manageable debts, or legal services to declare bankruptcy.

The financial counselor then makes an assessment. The assessments may be singular, but usually, the client needs a combination of different things such as banking services, help to rebuild their credit, paying manageable debts, or legal services to declare bankruptcy.

#### Observed challenges

* Sifting through documents is time-intensive and burdensome. Financial counselors know what they need, but clients may not have everything.

* Financial counselors are not lawyers. However, they need to be aware of the legal system, processes, and protections that apply to their client's case. They may not feel confident that they are helping or hurting.

* There are endless open questions. Is the client sticking to the plan? Are they mailing letters to debt collectors? Are they paying their debts? What are debt collectors saying? etc.

* Once the financial counselor refers a client to a legal service provider, do they have the documents they need to have a strong case?

We learned clients could resolve their debt collection issues by requesting verification on the debt from the collector. However, they do not know what rights they have or how to assert them. Financial counselors understand this process and craft letters for their clients but rely on them to mail and keep track of the letters.

##### Debt verification letters

Debt collection letters do three things; 1. **They make the debt collection agency prove they have the right to collect the debt**. Often, collectors don't have all of the information they need to collect the debt legally. 2. **It tells the agency that they can't contact the sender anymore**. There are strict laws regarding harassment that collectors need to follow. 3. **It tells the agency they can't collect the sender's income if it is exempt from collection**.

<figure class="figure">
  <div class="figure__matte flex items-center justify-center px-4 tablet:px-8 h-auto aspect-ratio-auto" style="background-color: #EEE">
    <img class="my-8 mx-auto" src="/img/dd-debt-verification-letter.svg" width="1098" height="793" loading="lazy" decoding="async" alt="A debt verification letter." />
  </div>

  <figcaption class="static">Debt verification letters are made of 3 parts that help the sender assert their rights against unlawful debt collection; demand proof to legally collect, stop harrassment, protect exempt income.</figcaption>
</figure>

> Our team realized we could automate creating and mailing these letters well within a single client session. We could also provide additional tools to help build mutual accountability via tracking, reminders, and follow-up surveys.

### <a class="flex mie-1 no-underline" id="build-sprint" href="#build-sprint"><svg class="icon" aria-hidden="true"><use xlink:href="#tabler-folder"></use></svg></a> Build sprint

After the conclusion of our research, my team set to build a tool that would alleviate some of the challenges financial counselors face. Our team consisted of

* Nathan Stanton. A product designer

* Marianne Berkovich. A user experience researcher

* Linda Tvrdy. A lawyer specializing in consumer debt

* Myself. A user interface UI designer and full-stack engineer

Nathan bootstrapped a Ruby on Rails application with a step-by-step form where users can input details about a debt collection harassment and generate a debt verification letter from templated legal language. Together, we refined the design and basic features of the user interface and, with advice from Linda, finalized the text in the letter template to ensure its legal standing. Finally, we created an API request to the direct mailing service, <a href="https://lob.com" target="_blank" rel="noopener nofollow noreferrer">Lob.com</a>, to mail letters created by the form to a specified debt collection agency. It was with this prototype of Daisy Debt that we would conduct usability testing sessions moderated by Marianne.

The prototype included 9 steps.

1. Introduction
1. Collecting the client's personal details
1. Exempt income
1. Creditor details
1. Dispute debt
1. Dispute identity theft
1. Employment details
1. Preview and send
1. Collecting email for follow up

<div class="tablet:flex justify-between items-center mb-4">
  <h4 class="tablet:m-0">Application screenshots</h4>

  <span class="flex items-center">
    <span class="mie-1">Scroll horizontally to view screens</span>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#tabler-arrow-bar-right"></use>
    </svg>
  </span>
</div>

Below are a few screenshots of steps from the letter writing flow.

<figure class="figure figure-scroll">
  <div class="figure__matte h-auto aspect-ratio-auto" style="background-color: #FFF">
    <div class="small p-3 bg-t1"><p><b>Step 1: Introduction</b>. Here the client is on-boarded to the letter writing, mailing, and follow-up process.</p></div>
    <img class="block" src="/img/dd-letter-01-new.png" loading="lazy" decoding="async" alt="The introduction page." />
  </div>

  <div class="figure__matte h-auto aspect-ratio-auto" style="background-color: #FFF">
    <div class="small p-3 bg-t1"><p><b>Step 2: Personal Details</b>. Here the client adds the information needed for their signature and return address.</p></div>
    <img class="block" src="/img/dd-letter-02-personal-details.png" loading="lazy" decoding="async" alt="The personal details page." />
  </div>

  <div class="figure__matte h-auto aspect-ratio-auto" style="background-color: #FFF">
    <div class="small p-3 bg-t1"><p><b>Step 3: Exempt Income</b>. Here the client selects what types of income they receive which are exempt from collection.</p></div>
    <img class="block" src="/img/dd-letter-03-exempt-income.png" loading="lazy" decoding="async" alt="The exempt income entry page." />
  </div>

  <div class="figure__matte h-auto aspect-ratio-auto" style="background-color: #FFF">
    <div class="small p-3 bg-t1"><p><b>Step 4: Creditor Details</b>. Here the client enters information about the debt collection agency and address where the letter will be mailed.</p></div>
    <img class="block" src="/img/dd-letter-04-creditor-details.png" loading="lazy" decoding="async" alt="The creditor details page." />
  </div>

  <div class="figure__matte h-auto aspect-ratio-auto" style="background-color: #FFF">
    <div class="small p-3 bg-t1"><p><b>Step 5: Dispute Debt</b>. Here the client can determine wether or not they should dispute the debt with the debt collection agency.</p></div>
    <img class="block" src="/img/dd-letter-05-dispute-debt.png" loading="lazy" decoding="async" alt="The dispute debt page." />
  </div>

  <div class="figure__matte h-auto aspect-ratio-auto" style="background-color: #FFF">
    <div class="small p-3 bg-t1"><p><b>Step 6: Dispute Identity Theft</b>. Here the client can claim they are a victim identity theft.</p></div>
    <img class="block" src="/img/dd-letter-06-dispute-identity-theft.png" loading="lazy" decoding="async" alt="The dispute identity theft page." />
  </div>

  <!-- Step 7: Employment details -->

  <!-- Step 8: Preview and send -->

  <!-- Step 9: Collecting email for follow up -->

  <div class="figure__matte h-auto" style="background: #66CAE0">
    <div class="small p-3 bg-t1"><p><b>Final Landing Page</b>. The presentation after a client has finished writing a letter.</p></div>
    <img class="block" src="/img/dd-finished.png" loading="lazy" decoding="async" alt="The final landing page." />
  </div>
</figure>

We needed to be careful about testing this application with New Yorkers facing harassment from debt collection agencies. Debt verification letters are not a remedy for every debt collection issue. The only case where they are effective is with unlawful debt collection. We screened test participants whose situations fit the criteria for sending a debt verification letter while guiding them through the process using insights we learned from financial counselors. To ensure other application users understood the requirements for sending letters, we added a step to help them evaluate their debt collection situation. If they did not meet the criteria, they would exit the letter-writing process.

<figure class="figure" style="background: #FFF">
  <img class="block" src="/img/dd-letter-02-debt-collection-agency-or-original-creditor.png" loading="lazy" decoding="async" alt="The debt collection agency or original creditor page." />
</figure>

The Creditor Details step provided tips to help clients find the information they needed to address the letter correctly.

<div class="tablet:flex justify-between items-center mb-4">
  <span class="flex items-center">
    <span class="mie-1">Scroll horizontally to view screens</span>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#tabler-arrow-bar-right"></use>
    </svg>
  </span>
</div>

<figure class="figure figure-scroll">
  <div class="figure__matte h-auto aspect-ratio-auto" style="background-color: #FFF">
    <img class="block" src="/img/dd-letter-04-creditor-details-popover-tip.png" loading="lazy" decoding="async" alt="The creditor details popover tip." />
  </div>

  <div class="figure__matte h-auto aspect-ratio-auto" style="background-color: #FFF">
    <img class="block" src="/img/dd-letter-04-creditor-details-address-popover-tip.png" loading="lazy" decoding="async" alt="The creditor details address popover tip." />
  </div>
</figure>

We provided an autocomplete feature using data from a register of national debt collection agencies. It would pre-populate our recommended address to send the letter.

<div class="tablet:flex justify-between items-center mb-4">
  <span class="flex items-center">
    <span class="mie-1">Scroll horizontally to view screens</span>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#tabler-arrow-bar-right"></use>
    </svg>
  </span>
</div>

<figure class="figure figure-scroll">
  <div class="figure__matte h-auto aspect-ratio-auto" style="background-color: #FFF">
    <img class="block" src="/img/dd-letter-04-creditor-details-autocomplete.png" loading="lazy" decoding="async" alt="The creditor details autocomplete field." />
  </div>

  <div class="figure__matte h-auto aspect-ratio-auto" style="background-color: #FFF">
    <img class="block" src="/img/dd-letter-04-creditor-details-autofill.png" loading="lazy" decoding="async" alt="The creditor details autofill alert." />
  </div>

  <!-- <figure class="figure" style="background: #FFF">
  <img class="block" src="/img/dd-letter-04-creditor-details-warning.png" loading="lazy" />
</figure> -->
</figure>

#### Branding and homepage

It was towards the later stages of our work that we named our tool Daisy Debt. "Daisy" is a reference to the daisy chain effect consumers can experience when struggling with debt. I designed a logo to brand the product and several assets, including palm cards, one-pagers, and presentation decks, to create a consistent experience for the audience Daisy Debt would be assisting.

<figure class="figure" style="background: #FFF">
  <div class="figure__matte aspect-ratio-auto">
    <img class="block" src="/img/dd-branding.svg" loading="lazy" decoding="async" alt="The Daisy Debt branding and colors." />
  </div>

  <figcaption class="static">The logo design and color scheme evoke optimism and hope for consumers struggling with debt.</figcaption>
</figure>

I designed the homepage for a broad audience to explain the tool and its justification through the rights of consumers.

<figure class="figure" style="background: #FFF">
  <div class="figure__matte overflow-auto">
    <img class="block" src="/img/dd-homepage.png" loading="lazy" decoding="async" alt="The Daisy Debt website homepage." />
  </div>
</figure>

#### Follow-up

The final feature I designed and engineered for the application was a notification system that sends an email to users 1, 14, 30, and 40 days after creating and mailing a letter. Users can also provide the email address of their financial counselor assisting them in making the letter. Both addresses receive an email when the letter is finally delivered by mail. The application sends the client a survey to determine if and how the debt collection agency responded and reminds them to meet with their financial counselor.

<div class="tablet:flex justify-between items-center mb-4">
  <span class="flex items-center">
    <span class="mie-1">Scroll horizontally to view screens</span>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#tabler-arrow-bar-right"></use>
    </svg>
  </span>
</div>

<figure class="figure figure-scroll">
  <div class="figure__matte h-auto aspect-ratio-auto" style="background-color: #F5F5F5">
    <div class="small p-3 bg-t1"><p><b>Confirmation Email</b>. This email is sent to the client after they send a letter.</p></div>
    <div class="flex items-start justify-center">
      <img width="768px" src="/img/dd-follow-up-01-day-one.png" loading="lazy" decoding="async" alt="The say one follow-up email." />
    </div>
  </div>

  <div class="figure__matte h-auto aspect-ratio-auto" style="background: #FFF">
    <div class="small p-3 bg-t1"><p><b>Day 14 Email</b>. This email is sent to the client to see if the debt collection has responded to their letter.</p></div>
    <div class="flex items-start justify-center">
      <img class="block" width="768px" src="/img/dd-follow-up-02-day-fourteen.png" loading="lazy" alt="The day fourteen follow-up email." />
    </div>
  </div>

  <div class="figure__matte h-auto aspect-ratio-auto" style="background: #FFF">
    <div class="small p-3 bg-t1"><p><b>Follow Up Survey: Contact Type</b>. The emails include links to a survey that collects response details provided to the client's financial counselor.</p></div>
    <img class="block" src="/img/dd-response-01-how.png" loading="lazy" decoding="async" alt="The follow-up response page." />
  </div>

  <div class="figure__matte h-auto aspect-ratio-auto" style="background: #FFF">
    <div class="small p-3 bg-t1"><p><b>Follow Up Survey: Response</b>. This survey step asks for what the debt collection agency may have said.</p></div>
    <img class="block" src="/img/dd-response-03-say.png" loading="lazy" alt="The follow-up survey debt collection response input." />
  </div>

  <div class="figure__matte h-auto aspect-ratio-auto" style="background: #FFF">
    <div class="small p-3 bg-t1"><p><b>Survey Email to Financial Counselor</b>. The client's survey response is sent to the client's financial counselor.</p></div>
    <div class="flex items-start justify-center">
      <img class="block" width="768px" src="/img/dd-follow-up-04-response-counselor.png" loading="lazy" decoding="async" alt="The follow-up email to the client's financial counselor." />
    </div>
  </div>
</figure>

<!-- <figure class="figure" style="background-color: #F0F6FF">
  <div class="figure__matte grid place-items-center grid-cols-2 tablet:grid-cols-4 px-8 py-4">
    <img src="/img/dd-graphic-letter.svg" width="65" height="80" loading="lazy" />
    <img src="/img/dd-graphic-mailed.svg" width="166" height="80" loading="lazy" />
    <img src="/img/dd-graphic-opened.svg" width="87" height="80" loading="lazy" />
    <img src="/img/dd-graphic-response.svg" width="131" height="80" loading="lazy" />
  </div>

  <figcaption class="static">Debt verification letters are made of 3 parts that help the sender assert their rights against unlawful debt collection.</figcaption>
</figure> -->

> After two months of product development, we had stood up an application that would help many people struggling with debt assert their rights against unlawful debt collection.

I presented at our project along with other fellows in the Blue Ridge Labs 2016 Fellowship showcase. You can view the presentation deck <a href="https://www.behance.net/gallery/44432005/DaisyDebt-Presentation" target="_blank" rel="noopener nofollow">here on Behance</a>.

### <a class="flex mie-1 no-underline" id="advising" href="#advising"><svg class="icon" aria-hidden="true"><use xlink:href="#tabler-folder"></use></svg></a> Advising

The end of the 2016 summer fellowship concluded my full-time contributions to the project. I continued to advise on the project overseeing and reviewing pull-requests of other engineering contributions to the application, including an authentication system and dashboard to enable financial counselors to track and manage letters they send for their clients.

<a class="btn btn-primary m-0 justify-center w-full" href="https://www.behance.net/collection/184398201/Daisy-Debt" target="_blank" rel="noopener nofollow">View additional Daisy Debt design on Behance <svg class="icon mis-half" aria-hidden="true"><use xlink:href="#tabler-external-link"></use></svg></a>

[Back to portfolio](/portfolio)