# Help@Home :house:

Girls in Tech Hackathon, June 2020

## Overview

Noticing the impact of COVID-19 — from the many students struggling with educational disruption to the significant lifestyle changes that have made people with special needs and those who are immunocompromised increasingly vulnerable — we designed and developed a virtual platform that is multi-purpose, practical and easy-to-use to mitigate these issues. Help@Home is a platform that connects volunteers and people who are in need. At Help@Home, students can receive immediate feedback from supportive volunteers by posting questions on our homework forum. Kids, people who are immunocompromised, and people with special needs can book a volunteer for grocery and medication pickup with our booking system. Help@Home also provides a judgement-free mental health text line, and a homework forum to support students in grades 4-12.

## Getting Started

- Install [Nodejs](https://nodejs.org/en/)
- Type `npm install` in terminal/console in the source folder where `package.json` is located

## Implementation

**Frontend** is built based on [Blk• Design System](http://demos.creative-tim.com/blk-design-system/index.html) Bootstrap 4 kit. HTML, CSS and JavaScript are used to customize.

**Backend** is implemented with Ruby on Rails and PostgreSQL

**Booking system** relies on Google calendar API

**Chat platform** utilizes [SendBird SDK](https://github.com/sendbird/SendBird-SDK-JavaScript) and Express

## Features

The majority of users first create an account before using the Help@Home platform (however, the platform can be viewed by anyone regardless of whether they have an account). From here there are two types of users: ‘volunteers’ and ‘clients,’ which is chosen upon registration.

For clients:

- Rate volunteers after an appointment is completed, creating a more reliable system for other clients to choose volunteers
- Post questions which would later be answered by our volunteers on the homework forum
- Login and chat anonymously on the mental health text line
- View past and upcoming appointments on their profile page
- View volunteers' availability and select a time slot for grocery/medication pickup appointment booking

For volunteers:

- Answer questions on the homework forum
- Moderate and answer direct messages on the mental health text line
- We understand that volunteer hours/times are required as part of students’ community involvement grades by some high schools, thus, Help@Home keeps a count of the number of appointments the volunteers complete on their profile page
- View past and upcoming appointments
- Share their availability if they choose to participate in the grocery/medication pickup appointment service

## Dependencies

Backend repo: https://github.com/GAierken/girlsintech_hackathon_backend

Database: https://blooming-wave-77750.herokuapp.com/users and https://blooming-wave-77750.herokuapp.com/appointments
