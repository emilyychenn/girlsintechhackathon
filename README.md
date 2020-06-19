# Help@Home
Girls in Tech Hackathon Submission

## Overview
Noticing the impact of COVID-19 — from the many students struggling with educational disruption to the significant lifestyle changes that have made people with special needs and those who are immunocompromised increasingly vulnerable — we designed and developed a virtual platform that is multi-purpose, practical and easy-to-use to mitigate these issues. Help@Home is a platform that connects volunteers and people who are in need. At Help@Home, students can receive immediate feedback from supportive volunteers by posting questions on our homework forum. Kids, people who are immunocompromised, and people with special needs can book a volunteer for grocery and medication pickup with our booking system. Help@Home also provides a judgement-free mental health text line, and a homework forum to support students in grades 4-12.

## Features
The majority of users first create an account before using the Help@Home platform (however, the platform can be viewed by anyone regardless of whether they have an account). From here there are two types of users: ‘volunteers’ and ‘clients,’ which is chosen upon registration.

For clients:
* Rate volunteers after an appointment is completed, creating a more reliable system for other clients to choose volunteers
* Post questions which would later be answered by our volunteers on the homework forum
* Login and chat anonymously on the mental health text line
* View past and upcoming appointments on their profile page
* View volunteers' availability and select a time slot for grocery/medication pickup appointment booking

For volunteers:
* Answer questions on the homework forum
* Moderate and answer direct messages on the mental health text line
* We understand that volunteer hours/times are required as part of students’ community involvement grades by some high schools, thus, Help@Home keeps a count of the number of appointments the volunteers complete on their profile page
* View past and upcoming appointments
* Share their availability if they choose to participate in the grocery/medication pickup appointment service

## Usage


## Dependencies
Backend link: https://blooming-wave-77750.herokuapp.com/users



## Install
1. [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
2. [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
After installation, open MySQL Workbench, import and execute `sql-file.sql`. Now you get the initial database!
We have two separate tables for volunteers and users to store account information.
Header structure : id | email | password | full name (TODO: will be change while dev, include rating...)


<!-- 2. Make sure you have node.js (https://nodejs.org/en/) installed
3. Type `npm install` in terminal/console in the source folder where `package.json` is located
4. You will find all the branding colors inside `assets/scss/blk-design-system/custom/_variables.scss`. You can change them with a `HEX` value or with other predefined variables.
5. Run in terminal `gulp compile-scss` for a single compilation or `gulp watch` for continous compilation of the changes that you make in `*.scss` files. This command should be run in the same folder where `gulpfile.js` and `package.json` are located
6. Run in terminal `gulp default` for opening the Dashboard Page (default) of the product. -->


