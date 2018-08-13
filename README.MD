# Music Player Widget
### Recruitment task for a Junior Web Developer role at HRtec

This is my approach of building "clickable" music player widget from provided PSD project.
<br/><br/><br/>

### Technologies and workflow
Final product is build using HTML, CSS and React library for JavaScript. 

The Javascript code is splitted into appropriate components reflecting functionalities they maintaining. To provide modules integrity, compatibility of ES6 code and ability to use React.js webpack is used. It transpiles code with ES6 and JSX syntax and creates bundle .js + .map (for debuging purposes) files from provided sources. Besides React and ReactDOM, another one external library ([perfect-scrollbar](https://github.com/utatti/perfect-scrollbar)) is used to provide styled scrollbar on playlist view, as Mozilla doesn't support webkit properties in this case. 

Styles are written based on BEM methodology using SASS. Transpiling process is handled similar way to JavaScript part. There are several .sass module files located in /src directory which are converted to final style bundle in /dist directory. Compatibility prefixes are automatically injected to bundle. 

As mentioned above, webpack is used to process all the JSX syntax and JavaScript code (via Babel loader), SASS styling (css-loader, postcss-loader, sass-loader) and also resources like images (image-webpack-loader) and fonts (url-loader).
<br/><br/>
### Working product
Working demo of the app can be found [here](https://github.io/)
<br/><br/>
### Development
To start developing the app there are 3 simple steps to follow:

* download and install node.js, npm and git client if you don't have them installed already. 
* clone the repository by typing in the command line:
```shell
git clone https://github.com/repo_url
```
* install all needed dependencies:
```shell
npm install
```