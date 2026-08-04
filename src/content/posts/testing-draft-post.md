---
title: "Testing Draft Post (Noindex Verification)"
slug: "testing-draft-post"
author: "QA Team"
pubDate: "2025-02-10"
description: "This is a temporary testing article to verify noindex SEO behaviors and preview features on our Astro.js platform."
metaTitle: "Testing Draft Post | Admin"
metaDescription: "Internal draft and testing post for SEO meta robots noindex verification."
focusKeyword: "testing"
tags: [
  "Testing",
  "DevOps"
]
featuredImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"
featuredImageAlt: "A digital display illustrating test automation graphs and parameters."
ogImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"
twitterCard: "summary"
canonicalUrl: "https://edu-blog-example.vercel.app/blog/testing-draft-post"
seoScore: 65
noindex: true
hreflang: "en-US"
ctaHeading: "Internal Sandbox"
ctaText: "This is a testing CTA for internal verification only. Do not click."
ctaButtonLabel: "Return to Safety"
ctaButtonUrl: "/"
faqs:
  - question: "Is this post visible to public crawlers?"
    answer: "No, this post has noindex set to true, which outputs a noindex meta tag to tell crawlers to ignore this page entirely."
---

This post is a sandbox asset. It exists solely to verify how our Astro template behaves when draft flags or specific content directives are supplied.

## Verification Points

- **Noindex Logic:** The header should render `<meta name="robots" content="noindex, nofollow">`.
- **FAQ Rendering:** FAQ questions should render in plain text with `H3` elements.
- **Table of Contents:** The Table of Contents (TOC) sidebar should automatically gather this heading and others.

Please refer to the internal documentation for any content management guidelines.
