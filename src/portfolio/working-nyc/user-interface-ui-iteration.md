---
title: 'Product Launch / Working NYC / Portfolio / Devon Hirth'
layout: 'layouts/portfolio.pug'
classes: ['working-nyc']
breadcrumbs: ['Working NYC', 'Product Lunch']
---

--- {.m-0}

### User Interface (UI) Iteration {.h1 .my-6}

After the launch of Working NYC our team solicited feedback from stakeholders on the product. We received over 100 responses to a survey that included information on favorite features and where we could make improvements. Using Airtable, I synthesized the qualitative data by extracting and counting the occurrences of keywords and phrases. I then organized these items into the following feedback categories.

* Site Features – how respondents felt about existing features or features we could add.
* Design Qualities – how respondents felt about the design of the site or how we could improve it.
* Suggested Programs – additional content that we could add to the site.
* Overall Goals – ideas respondents had that fit with our overall goals.
* Content – how respondents felt about the existing content.

The most common point of feedback respondents had regarded the website's general design qualities. The color palette came out as the most liked and disliked feature within this theme. With this feedback in hand, we iterated on the site's design with minor improvements, including a color palette that accommodates users with particular color sensitivities.

From Color Preference to Inclusive Patterns
I designed the website using a color palette established by the Workforce Data Portal. To address the negative feedback on the original design, I oversaw the creation of a new light color palette by a fellow on our team. We ensured that the new color palette met WCAG AA color contrast standards as the first design using color contrast checkers.

I worked with a research fellow to facilitate usability and preference testing interviews with users. We used these interviews to gauge which design users might prefer and ensure there were no major usability issues with the new light color palette.

We received consultation on low-vision usability with the Mayor's Office for People with Disabilities to assess the color contrast between the colors. They revealed that while the colors may have met WCAG AA standards, they needed further improvement to achieve better perceptual contrast.

To implement findings from our research, I updated the product pattern library's Figma design file, adding color, typography styles, and symbols from the code-based pattern library. The result was a complete set of design tokens and components to use in full page mockups and other designs.

Our research fellow also conducted desk research to understand how users with different color blindness would experience each palette and what color combinations work well for most color-blind users. She made more recommendations for our color combinations and evaluated them for contrast using a color blindness simulator commonly found in developer tools.

As a result of this research and evaluation, we were able to enhance and standardize both light and dark color palettes for color-blind users and achieve full compliance with WCAG AA contrast standards and AAA standards in some cases for low-vision users.

The final task was designing and testing a system for users to select their preferred color preference between light or dark modes. Our research fellow mocked up recommendations for a toggle for mobile and desktop users.

With our design recommendations finalized, I began implementing changes to the website's code-based UI pattern library. I converted our stylesheets to create different color themes using CSS custom properties for all design tokens. Previously, design tokens were exported from JSON to SASS variables, becoming hard-coded at runtime. Using CSS custom properties allowed toggling color themes more fluidly in the browser.