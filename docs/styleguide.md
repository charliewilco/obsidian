# Styleguide

## To Start

Styles should be open for extension, but closed for modification. Avoid styles that require overrides elsewhere or are hyper specific to context. For specific naming conventions refer to [_Naming Classes_](docs/naming-classes.md).

## Guiding Principles

- Work in Components & Objects
- Focus on Reuse
- Separate Structure from Skin
- Allow Inheritance
- Aim to be Responsive by Default

## Variables & Computation

Variables in CSS4 are the same in almost any other language, they store a value. They’re great for arranging the common font families, colors, spacing you’ll use and want to amend quickly across your project. All global variables should get defined and collected in their own partial. Computation via `calc()` should ideally be moved into a variable.

## Important

Using the `!important` flag on a declaration isn't a great idea. It should always be accompanied by a comment explaining it's need. Utilities are the only reasonable home for an `!important` flag.

## Mortal Sins

1. **Don’t Style with IDs Selectors** `#myElement`. It has performance issues, it supersedes any style declarations from classes on that element and defies the cascading power of CSS. This has been a best practice for as long as I’ve been authoring CSS.

2. **No Nesting** `.class-name .other-class` While this is legal syntactically, it's unclear and leads to confusion. No declaration should be contingent on another class to look, feel and behave the way it does. Author with that in mind. The only time where this is acceptable is when we are not in control of the markup and are unable to add classes to the HTML, for example if our CMS is spitting out content from a post then it’s acceptable to modify those base elements (p, h3, img, figure, hr) but ideally, the defaults for those elements shouldn’t need much modification from their original declarations.

3. **Chaining Selectors** `h1.title` Chaining an element to a class to define a selector is limiting and confusing. No good can come from it. It doesn’t make sense to limit a class based on a specific element. It doesn’t make it reusable.

4. **Never Overwrite** We should aim to extend styling and never overwrite style we’ve already written.

## Linting

Obsidian is using `Stylelint` as it's linter. It lints for very specific formatting, a few highlights:

- Prefer Single Quotes
- Space After Colon
- No IDs
- Single Quotes inside Functions

Linting is still being refined.
