---
layout: page
title: Settings
permalink: /settings/
order: 1
description: 'Settings are the basis of Obsidian.css, it contains all the variables like spacing, color and font declarations, as well as media queries and a simple theme.'
---


{% include ex.html
   sect-title='Colors'
   prefix='colors'
   snippet='snippets/settings/colors.html'
   description='descriptions/settings/colors.md'
   css='obsidian/lib/settings/obsidian.colors.css'
%}

{% include ex-single.html
   sect-title='Media Queries'
   prefix='media-queries'
   snippet='snippets/settings/mq.css'
   description='descriptions/settings/media-queries.md'
%}

{% include ex.html
   sect-title='Global Defaults'
   prefix='default'
   snippet='snippets/settings/defaults.html'
   description='descriptions/settings/defaults.md'
   css='obsidian/lib/settings/obsidian.defaults.css'
%}

{% include ex-single.html
   sect-title='Theme'
   prefix='theme'
   snippet='snippets/settings/theme.css'
   description='descriptions/settings/theme.md'
%}

{% include ex-single.html
   sect-title='Overriding Values'
   prefix='overrides'
   snippet='snippets/settings/overrides.css'
   description='descriptions/settings/overrides.md'
%}
