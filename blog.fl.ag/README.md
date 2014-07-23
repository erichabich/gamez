# blog.fl.ag

## INSTALLATION
**Dependencies: git, nodejs, npm**  
`cd /PATH/TO/GHOST/content`  
`git clone https://github.com/alexbasalyga/blog.fl.ag.git`  
`cd blog.fl.ag`  
`npm install`

## SUGGESTED WORKFLOW
**Dependncies: nodemon**

#### GRUNT WATCH
Rebuilds Blog.fl.ag theme every time a file changes (else use `grunt development` in terminal to build theme)  
`cd /PATH/TO/GHOST/content/blog.fl.ag`  
`npm start`

#### NODEMON
Restarts Ghost server every time the Blog.fl.ag theme is built  
<small>⌘t (to open new terminal tab)</small>  
`cd /PATH/TO/GHOST`  
`nodemon -e json index.js`

#### STYLE GUIDE
See: [https://github.com/alexbasalyga/sole/](https://github.com/alexbasalyga/sole/)  
<small>⌘t (to open new terminal tab)</small>  
`cd /PATH/TO/GHOST/content/blog.fl.ag/source/less/sole`  
`npm install`  
`npm start`