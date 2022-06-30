# TeamApt Frontend Engineer Assessment


## How to Run
* Open project folder
* Open the "index.html" file with any browser.
* Alternatively, the liveserver plugin of vscode can be used to open the "index.html"
* Here's a preview of my implementation hosted on netlify: [Preview](https://teamapt-assessment.netlify.app/)

## Architecture Considerations & Assumptions
* Task is a single simple page
* Using any javascript framework would be overkill and unnecessary for a simple page; hence no framework was used.
* Entire task was done with pure html, javscript and scss (scss was compiled to css with "sass watcher")
* Given the expected rotation animation of the shimmer at the bottom of the page, I tweaked the design on figma to allow for a seamless 360 degree rotation.
* The javascript code in "script.js" exists only for animating the left and right coins with gsap (An animation package), all other animations are done with css.

## Author

- [@tomiwaajayi](https://www.github.com/tomiwaajayi)