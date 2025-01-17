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
git clone https://github.com/kangmichael/patient-medicine-management.git
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


## Intro

This project was created with two primary objectives. First, having recently completed my software development bootcamp, I wanted to apply the skills and knowledge I had acquired to a practical project, reinforcing and consolidating what I had learned. Second, I aimed to address a real-world problem through this project, honing my ability to identify user needs and translate them into product features. A detailed explanation of the real-world problem this project tackles is provided below. On a whole, this was my first attempt in building a project without help from others and it was a fruitful learning experience!

## Problem

My mom is a Traditional Chinese Medicine practitioner who prescribes herbal medicines to her patients. Previously, she used Excel to manage an inventory of over 150 types of herbal medicines as well as her patients’ reports. A patient’s report includes the specific herbs prescribed during their visit. Although her Excel setup was programmed to function dynamically, the user interface was highly confusing for her. She often spent a significant amount of time correcting errors caused by misclicks and navigating through the various buttons.

## Solution

This app manages medicine stock and patient reports. Each time a patient visits, the user can add a report which can include a list of medicines and some notes. A function allows the user to calculate the costs of the medicines prescribed and the potential profits from that combination of medicines. Prescribed medicines automatically deduct from the stock list.

The dashboard includes:

1. Charts that display patients who generate the highest revenues, patients with the most visits, and the medicines most frequently prescribed.
2. Information about the medicines fetched from an <a href="https://rapidapi.com/rnelsomain/api/drug-info-and-price-history/" target="_blank" rel="noreferrer noopener"> API </a>.
3. Reminders about medicines that are low in stock.

As the original version has data in Chinese, the demo displays western medicines so english speaking viewers can test the app more easily. The form that generates a patient report asks - for each medicine, how many tablets per day would the user like to prescribe to the patient. This form's format coincides with my mom's practice where she prescribes a certain number of grams of herbs per day to the patient, but it may not be optimal for the way western medicines are prescribed.

