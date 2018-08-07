# Obsidian.css

Core workspace

---

Obsidian.css is a modular CSS library that focuses on code common to most projects.

This project works under the belief that when abstracted most CSS is shockingly similar across projects. More than likely you'll need a type scale, a grid system, spacing utilities, media blocks, sensible default styling for elements (forms, tables, buttons). This project is a collection of the CSS patterns that have stuck with me over the last two years and grown with me.

Styles are written in an adapted BEM naming convention and organized in an [ITCSS-like](/itcss) methodology. It uses PostCSS plugins to compile variables, color functions and add vendor prefixes.

## Installation

```
yarn add obsidian.css --save
```

or link to the CDN

```markup
<link rel="stylesheet" href="https://unpkg.com/obsidian.css" media="screen" title="Obsidian.css" charset="utf-8">
```
