# YUBI_CapstoneProject

Title : JOB Portal Application.

Tool Used .
   Front End : React, 
   Back End : Ruby on Rails, 
   Database : postgresql

Contributed by : Sowmiya and Priya.

About Rails.

Rails is a web application development framework written in the Ruby programming language.

Installing Rails and psql database

 For Rails,it is preferred to use the latest Ruby version. 
 To install Rails on Windows, you'll first need to install Ruby Installer.
 Then to install Rails, use the gem install command provided by RubyGems: gem install rails
 You will also need an installation of the psql database with the Username and password created.
 Once the installation is finished, verify rails and psql are correctly installed and in your load PATH.
 The program should report its version on running the following command
 * rails --version
 * psql --version
 If it says something like "Rails 7.0.0", you are ready to continue.
 
 Creating the Job portal Application.
1. Open command prompt, and login to psql with the user id and password.
   Command: 
   psql -U usernane
   password

2. Open a terminal, navigate to a directory where you want to create Rails application and run the command to create application connected to psql
   rails new application_name -d postgresql
   
3. This will open a new applicaion using preferred editor VS Code. Get your Rails application server running, by the command : rails s
4. This will start up Puma, a web server distributed with Rails by default. To see your application in action, open a browser window and navigate to http://localhost:3000. 
   You should see the Rails default information page.
5. 
  

