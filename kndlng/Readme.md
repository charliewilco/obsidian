# KNDLNG

<a href="https://github.com/charlespeters/VVWIP">
  <img src="https://unpkg.com/vvwip/VVWIP.svg" alt="VVWIP" align='right' />
</a>

Utilties for styling in JavaScript &mdash; Obsidian.css represented in JavaScript. Experimental and that's half the fun.

## Installation.

```
npm i -S kndlng
```

## Usage

```js
import { StyleSheet, css } from 'aphrodite/no-important'
import { Typescale, Obsidian, Spacing, Families } from './index.js'

function btnFn (color, hover) {
  return {
    appearance: 'none',
    maxWidth: '12rem',
    textAlign: 'center',
    borderRadius: '5px',
    fontSize: Typescale().f4,
    fontFamily: Families.avenir(),
    lineHeight: 1,
    border: 0,
    padding: Spacing.one(),
    transition: 'all 250ms linear',
    color: Obsidian.offwhite,
    backgroundColor: color,
    ':hover': {
      backgroundColor: hover
    }
  }
}


const styles = StyleSheet.create({
  button: btnFn(Obsidian.yellow, Obsidian.blue)
})

```
