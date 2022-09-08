<h1 align="center">
  Patient and Medicine Management App
</h1>
<p align="center">
  A React app that manages patient records and medicine inventory with charts to show relevant data. View <a href="https://patient-stock-management.herokuapp.com/" target="_blank">here</a>.
</p>

  <!-- <a href="values-identity.html">
      <div class="blogimg">
          <img src="images/rodin.jpg" alt="blog image">
      </div>
      <div class ="blogTitle">
          <p>VALUES - IDENTITY</p>
      </div>
  </a> -->

![demo](https://github.com/bigwoodentable/patient-medicine-management/blob/main/server/public/images/demo.png?raw=true)

![demo](https://github.com/bigwoodentable/patient-medicine-management/blob/main/server/public/videos/Demo-Patient-Stock-Management-Explanation.mov?raw=true)

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
4. You can find the server running on [http://localhost:3000](http://localhost:3000)

## Problem 

My mom is a Traditional Chinese Medical practitioner who prescribes herbal medicines to patients. Previously, she used excel to manage an inventory of over 150 types of herbal medicines and her patients’ reports. A report includes the herbs she prescribes to them on that particular visit. Although her Excel was programmed to work dynamically, the user interface was very confusing to her. She spends a lot of time just fixing errors from misclicks and navigating the different buttons. 

## Solution 

This app manages medicine stock and patient reports. Each time a patient visits, the user can add a report which can include a list of medicines and some notes. A function allows the user to calculate the costs of the medicines prescribed and the potential profits from that prescription before they confirm the report. Prescribed medicines automatically deduct from the stock list.

The dashboard includes:
1. Charts that display patients who generate the highest revenues, patients with the most visits, and the medicines most frequently prescribed. 
2. It also shows information about the medicines fetched from an <a href="#" target="_blank"> API </a>. 
3. There’s also a section to remind users which stocks are low.

As the original version has data in Chinese, the demo displays western medicines so english speaking viewers can test the <a href="https://patient-stock-management.herokuapp.com/" target="_blank">app</a> more easily. As a result, the form that generates a patient report asks: for each medicine, how many tablets per day would the user like to prescribe. This form's format coincides with my mom's practice where she prescribes a certain number of grams of herbs per day, but it may not be optimal for the way western medicines are prescribed. 

## Next Steps
1. Implement Auth0
2. Slowly convert relevant JavaScript to Typescript
3. Add tests using Jest or Mocha
4. Add feature to download reports
5. Add feature to send invoices and marketing emails to patients
