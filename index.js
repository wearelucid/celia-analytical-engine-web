/* 
 * This file generates an html using a
 * JSON content file and a
 * Handlebars template.
 * Usage: $ node index.js /[YOURCONTENTFILE].json 
 */

// Loading dependencies
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// settings
const buildFolder = './pages';
const template = 'templates/template.hbs';

/**
 * buildHtml
 * @param  {json-object} data
 * @param  {string} hbs
 * Builds .html files using json data and markdown template
 * and saves it to the build folder
 */
function buildHtml(data, hbs) {
  const template = fs.readFileSync(path.resolve(path.join(__dirname, hbs)), 'utf-8');
  const renderTemplate = Handlebars.compile(template);
  
  console.log(data);
  const html = renderTemplate(data);

  const fileName = (data.title).replace(' ', '-').toLowerCase();
  
  // Write to build folder. Copy the built file and deploy
  fs.writeFile(`${buildFolder}/${fileName}.html`, html, err => {
    if (err) console.log(err);
    console.log(`File: ${fileName}.html written succesfully`);
  });
}

// creating build folder if it doesn't exist
if (!fs.existsSync(buildFolder)) {
  console.log('📂 Creating build folder...');
  fs.mkdirSync(buildFolder);
}

// saving second parameter (= source json file)
const source = process.argv[2];
const json = JSON.parse(fs.readFileSync(source, 'utf-8'));
const html = buildHtml(json, template);
