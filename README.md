# celia-analytical-engine-web

⚠️ copy to wearelucid when done.

## Description

Slider-webpage for exhibition.

## What do you need do see your changes Local

- first you need the yarn version 1.22.17(https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
  after this you need the correct version of yarn there are many ways to set your yarn version(https://yarnpkg.com/cli/set/version)
- after you finished downloading yarn and you set it to the correct version you have to be shure that you have the node version '16.13.0'
  -when you are done with this it is important to download a handelbars file (mostlikely the whole website is based on them) to install it you need the commands:
  npm install handlebars or yarn add handlebars.
- this is everything you need the command yarn generate-all to genarate the HTML files (see more in how i was built)
- the reason why you have to do this: everytime you change something it needs to generate the new html files with the changes,
  because your computer cant just generate the html without your permission.

## How its was built

#### How the hbs file is built

This project is based on a handelbars file (https://handlebarsjs.com/guide/) and a flickity slider(https://flickity.metafizzy.co/).
you see that this files construction is like a gap text because everytime something with code like this comes {{#if this.detail}} its getting filled with the JSON files
( "title": "Remorseful",
"slides": [
{
"content": {
"caption": "someone out there?",
"image": "../images/ipad_remorseful/1r_someone-outthere_ipadScan24.jpg"
})
thats a exaple how it works in the gap text everytime {{#if this.content.caption}} comes its getting filled with content from the JSON files (in this exaple with: someone out there?)

#### How the flickity slider is built

the flickity slider is a easy to use slider option which helps you saving time in project on building a slider
multiple of thoose options are avaible without even downloading an extern html, css or js file.
you can have many diffrent variants of the flickity slider (a few examples freescroll, wraparound, fullscreen, autoplay etc.)
to set these settings the only thing you need to do is to write in your js file var flickityOptionen = {} and write the things you need in the clings.

## things you should use:

i had some experience with no order in the code why i can recomend plugins like: CSS Formatter which helps you keeping your css files smooth and clear.
If you need to check your changes without reloading the website everytime you can use a live server which will show off your changes a soon as you changed it.
And if you are working on many diffrent Projekt you could use Projekt-Manager.

## Whats inside the diffrent folder:

- inside the content folder are the two Json files with the diffrent content
- inside the css are the diffrent css files
- in the images are all of the diffrent images.
- in the javascript folder are 3 diffrent js files (main.js and two from flickity)
- inside of the pages folder are the two html files which get generatet everytime you write yarn generate-all in the terminal.
- in templates is the template file which loads the content from the JSON files.

## how the website works

the website dont work like normal from upside down, it works from left to right or right to left.
on a few slides (means 1 cell of the slider) are detail-sites. the detail-sites work pretty easy there sre 2 container one for the normal content site andd one for the slide-detail.
everytime you push the SeeMore button the viewport-height/width slides down the back to engine does the uposite.

##
