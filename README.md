# URL shortener
This is a URL shortener for shortening longer URL.

https://github.com/Kaminoikari/URL-shortener/blob/master/public/URL_Shortener.jpg

## Features
* Users can enter their URL, and then the shorten URL will be provided.
* By clicking `copy` button, the shorten URL will be copied to users' clipboard right away.
* Via the shortened URL, users can direct to the same website as the original URL they entered.


## How to use
1. Please make sure `node.js` and `npm` has installed on your device.
2. Copy below command to your terminal
```
git clone https://github.com/Kaminoikari/URL-shortener.git
```
3. On terminal, go to the directory where the project is, and enter command below to install `npm` settings
```
npm install
``` 
4. Enter the command below to launch the project
```
npm run start
```
5. Once seeing message below, the project has been running successfully.
```
Express server is listening on http://localhost:3000
```
6. Enter the URL below on your broswer to start using the project.
```
http://localhost:3000
```
7. Press `Cmd(⌘)+C` to terminate the project.


## Tools in use
* node.js v16.14.0
* express 4.17.3
* express-handlebars 4.0.2
* mongoose 6.2.7
* body-parser 1.19.2
* sweetalert2 11.4.6
