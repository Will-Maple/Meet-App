# MeetApp (React, Jest, Serverless)
A test-driven-development built serverless (Amazon Lambda) app that fetches events from Google’s calendar api, visualizes them and lists them by city. Built as a Progressive Web Application to also provide Native friendliness.
<br>
<br>

<img src="https://github.com/user-attachments/assets/19664915-6b96-4c36-b7a5-a858b9680de6" width=70% alt="Image of app"> 

## Tech-stack
- React 
- Jest
- Cucumber
- Puppeteer
- Amazon Lambda
- Serverless
- Progressive Web Application (PWA)
- Google Calendar API

## Steps to Run 

### Clone repo
- Of course!
### Install Dependancies
```sh
 npm install serverless --save -dev
```

```sh
npm install --save-dev jest
npm install jest-cucumber --save-dev
```

```sh
npm install --save-dev puppeteer
```

### Run locally
```sh
npm run start
```

### To Deploy
- First...
```sh
npm run build
```
- And then...
```sh
serverless deploy
```

### To run tests
```sh
npm run test
```   

## Dependencies
- Serverless
- React
- Jest
- Puppeteer
