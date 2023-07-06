![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux Badge](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![NodeJS Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![ExpressJS Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Webpack Badge](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![Insomnia Badge](https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white)


<h1 align="center">
  Patient and Medicine Management App
</h1>
<p align="center">
  A React app that manages patient records and medicine inventory with charts to show relevant data. 
</p>
<p align="center">
View video demo <a href="https://github.com/bigwoodentable/patient-medicine-management/blob/main/server/public/videos/demo-vid.mp4?raw=true
" target="_blank" rel="noreferrer noopener">here</a>.
</p>

![demo image](https://github.com/bigwoodentable/patient-medicine-management/blob/main/server/public/images/demo.png?raw=true)

## Installation & Set Up

1. Clone and install dependancies

```
git clone https://github.com/bigwoodentable/patient-medicine-management.git 
npm install 
```
2. Create and populate database 

```
npm run knex migrate:latest
npm run knex seed:run
```

3. Start the server (dev)

```
npm run dev 
```
4. Server runs on [http://localhost:3000](http://localhost:3000)

