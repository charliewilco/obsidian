---
layout: doc
title: ITCSS Methodology
permalink: /itcss/
---

[ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4) (Inverted Triangle CSS) from Harry Roberts, is way of structuring CSS it such a way that also the most general selectors to trickle down to the most specific selectors, as if they're moving from the top of an bottom of a triangle to the pinnacle of it.


In this implementation there are a few differences. Normally in ITCSS, you could have a tools like Sass functions, most of the tools we'd need are coming in CSS and transpiled by [cssnext](cssnext.io/features/).

Objects have minimal visual styling in Obsidian. This is a set between the reset styling and the component level styling because it's beyond an element.

Settings contain base styles but often module variables are only contained in that module, there are a few exceptions (like shadow values).


{% include itcss.html %}
