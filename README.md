# BAMP Website Redesign
This is a repository for the upcoming BAMP Website redesign.

### BAMP
[Bay Area Mural Program](https://www.thebamp.org/) is a nonprofit organization of local artists
dedicated to facilitating and creating public art.

### Mission Bit
[Mission Bit](missionbit.org) is a nonprofit organization that builds professional pathways for
under resourced high school youth across the SF Bay Area by making computer science more accessible
through free project-based courses.

---

# Contributors

### Web Design Team
* Ernest [(@Ernesto2004)](https://github.com/Ernesto2004)
* Trent [(@kingtrentiii)](https://github.com/tt3rd)
* Tara [(@Tara-Tiong)](https://github.com/Tara-Tiong)

#### Advisors
* Cora [(@coramonokandilos)](https://github.com/coramonokandilos)
* John [(@johncip)](https://github.com/johncip)

###### mental health support
* dog

---

# Contributing

(We use [SMACSS](http://smacss.com/) to organize the stylesheets into modules.)

## PR Checklist

*AKA tips for a great pull request*

#### 1. Match design doc closely
- 💡 Tip: Take screenshots from browser & Figma and compare them
- 💡 Tip: [Use browser zoom](https://support.google.com/chrome/answer/96810?co=GENIE.Platform%3DDesktop&hl=en) to compare fine details
- 💡 Tip: Spacing and font sizes can be hard to get 100% on the first pass

#### 2. Keep HTML [element semantics](https://www.lifewire.com/why-use-semantic-html-3468271) in mind
- Use semantic elements where appropriate: `header`, `footer`, `nav`, `section`
- Clickable things should be `button`s
- Navigating to another page or another spot should be hyperlinks (`a`)
- Groups of things should be `ul`s
- Headings (`h1`, `h2`, ...) should match the [document outline](http://html5doctor.com/outlines/)
- 💡 Tip: Remember, you can always change how the element looks!

#### 3. Remove unnecessary code
- 💡 Tip: Make it a habit to **do a refactoring pass once something works**
- The gold standard: know what every line does & why it needs to be there
  - 💡 Tip: Not sure if you need something? Remove it and see what happens!
- In CSS, it's easy to end up with positioning rules that "add up" to the right thing (`margin`, `padding`, `left`, `translate`). Try getting it down to just one, unless there's a reason to split them up.
  - 💡 Tip: Negative margins usually point to excess positioning rules.
  - Start with what's appropriate for the element and the direction. For instance, set `line-height` on text and `padding` on containers before resorting to other methods.
- In HTML, avoid unnecessary `div`s

#### 4. Check whitespace
- Each indentation level should have 4 extra spaces
- Spaces before braces: `.module {` instead of `.module{`
- 💡 Tip: GitHub and the various git clients will highlight excess whitespace
- 💡 Tip: **Read through the diff after making a PR**, you will often spot things!

#### 5. Document PRs
- Add a screenshot if the item is visual
- Have a brief explanation of what the PR changes or introduces
  - 💡 Tip: pretend that the reviewer isn't already familiar with the task

##### Resources
- **Tool: [CSS Lint](http://csslint.net/)**
- [Jennifer Kyrnin: Why use semantic HTML?](https://www.lifewire.com/why-use-semantic-html-3468271)
- [*CSS Refactoring*, Ch. 1](https://www.oreilly.com/library/view/css-refactoring/9781491978528/ch01.html)
  - starts with a quick rundown on good software architecture & why we refactor
- [*CSS Refactoring*, Ch. 4](https://www.oreilly.com/library/view/css-refactoring/9781491978528/ch04.html)
  - great description of how to organize CSS
  - in particular, check out **Let the Component’s Container Override Visual Styles as Needed** and **Delegate the Assignment of Dimensions to Structural Containers**
- [Uncle Bob: The Cycles of TDD](https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html) (origin of the phrase "red, green, refactor")
- [HTML5 Doctor: Document Outlines](http://html5doctor.com/outlines/)

##### Postscript

In truth, when making a static website, it's easy to get away with practices that aren't optimal. But it's always good to be in the habit of making your code concise and maintainable, even if it's just for yourself. In applications, it's very easy to end up with code that's difficult to maintain because the authors didn't clean up as they went along. And it's harder to do that cleanup once everything's in place, because often pieces of code will affect other pieces.

Every project we work on is a chance to hone our skills, and often that ends up being more valuable than the results!
