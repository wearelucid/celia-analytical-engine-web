# celia-analytical-engine-web

⚠️ copy to wearelucid when done.

## Description

Slider-webpage for exhibition using [flickity](https://flickity.metafizzy.co/).

The project consists of two HTML files showing two different sliders for an exhibition in Rapperswil; [Grosse Regionale](https://www.kunstzeughaus.ch/unser-programm/agenda/agenda/eventdetail/31/101/ausstellung-grosse-regionale).

The HTML files are automatically generated with JSONs as a content source.

## Local setup
### Prerequisites
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- [Node Version Manager](https://github.com/nvm-sh/nvm)

### Setup
```bash
# setting the correct node version, indicated in .nvmrc
$ nvm use

# install dependencies
$ yarn
```

#### Building HTML files from content JSONs
We can automatically build HTML files using the content JSONs (`/content/naughty-knitting.json` & `/content/remorseful.json`) and a [handlebars](https://handlebarsjs.com/guide/) template.

```bash
# build html from content jsons
$ yarn generate-all

# build remorseful only
$ yarn generate-r

# build naughty knitting only
$ yarn generate-nk
```

## What's the website about:
the website is build for a art project made by celia längle.
Morse-code is the theme of the web-site and the style aspect comes from an old computer startup(monospace font).

## how the website works
the website dont work like normal from upside down, it works from left to right or right to left.
on a few slides (means 1 cell of the slider) are detail-sites. the detail-sites work pretty easy there sre 2 container one for the normal content site and one for the slide-detail.
everytime you push the the button to see more, the viewport-height/width slides down the back to engine does the uposite.










