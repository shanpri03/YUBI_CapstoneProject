# YUBI_CapstoneProject

Title : JOB Portal Application.

Tool Used.
   Front End : React, 
   Back End : Ruby on Rails, 
   Database : postgresql

Contributed by : Sowmya and Priya.

# About React.

The main objective of ReactJS is to develop User Interfaces (UI) that improves the speed of the apps. It uses virtual DOM.

Note: React is not a framework. It is just a library

Pre-requisite for ReactJS

*NodeJS and NPM
*React and React DOM
 
Installing React

Open a terminal(Windows Command Prompt or PowerShell).

Create a new project folder: mkdir ReactProjects and enter that directory: cd ReactProjects.

Install React using create-react-app, a tool that installs all of the dependencies to build and run a full React.js application:

 Command : npx create-react-app my-app
 
 Run Application : npm start
 
 Install : npm install 

 Check the version : node -v 
 
 If the version is displayed, we are ready to build awesome websites and app.

# About Rails.

Rails is a web application development framework written in the Ruby programming language.

Installing Rails and psql database

 For Rails,it is preferred to use the latest Ruby version. 
 
 You will also need an installation of the psql database with the Username and password created.
 
 Once the installation is finished, verify rails and psql are correctly installed and in your load PATH.
 
 The program should report its version on running the following command
 * rails --version
 * psql --version
 
 If it says something like "Rails 7.0.0", you are ready to continue.
 
 Creating the application.
 
1. Open command prompt, and login to psql with the user id and password.
   psql -U usernane
   password

2. Open a terminal, navigate to a directory where you want to create Rails application and run the command to create application connected to psql
  # rails new application_name -d postgresql
   
3. This will open a new applicaion using preferred editor VS Code. Get your Rails application server running, 
by the command : rails s

4. This will start up Puma, a web server distributed with Rails by default. To see your application in action, open a browser window and navigate to http://localhost:3000. 

5.   You should see the Rails default information page.

The application is ready for development.

Rails work in MVC Framework.

Define the routes in routes.rb file

Configure the database.yml file with the database name, username and password.

To generate a controller. 
   rails generate contoller (name here)
   
To generate migration file
   rails generate migration create_migration (name here)
   
To migrate the file
    rails db:migrate
    
To interact with database
    rails c

# Running this application on system

1. Create a directory and open the command propmt , run the below command
      git clone 

  

