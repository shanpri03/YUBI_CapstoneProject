![page-1](https://user-images.githubusercontent.com/119853244/215352505-53ed9892-4c6d-4a37-ac0a-7a26fe394ef7.png)
![page-2](https://user-images.githubusercontent.com/119853244/215352508-67bf30f3-0b47-4ee0-a1a7-9688c52a871b.png)
![page-3](https://user-images.githubusercontent.com/119853244/215352509-70151713-9a1e-4e5b-9cf0-d1c7eb2cdb56.png)
![page-4](https://user-images.githubusercontent.com/119853244/215352511-e9197049-c5c2-45d7-bdef-cf23d49f20f2.png)
![page-5](https://user-images.githubusercontent.com/119853244/215352512-346da368-81aa-4939-b153-dc5a0f2ce1a6.png)
![page-6](https://user-images.githubusercontent.com/119853244/215352513-c21f256e-efa6-4750-8c04-4daecffa7f9f.png)
![page-7](https://user-images.githubusercontent.com/119853244/215352514-957cfdb2-6d74-47be-88b6-dcc01c28c57c.png)
![page-8](https://user-images.githubusercontent.com/119853244/215352515-ae6373b7-2fae-454d-94ed-ea9b8ab76181.png)
![page-9](https://user-images.githubusercontent.com/119853244/215352517-46f12e0f-63bb-4364-9562-5c7105f46585.png)
![page-10](https://user-images.githubusercontent.com/119853244/215352518-7e9e9316-d5be-433c-b31e-05c0a9f53372.png)
![page-11](https://user-images.githubusercontent.com/119853244/215352519-31df95be-81eb-4d08-8b84-eb23c7f05f32.png)
![page-12](https://user-images.githubusercontent.com/119853244/215352520-80feb4e0-7f1f-4b59-996a-39e1d9c55189.png)
![page-13](https://user-images.githubusercontent.com/119853244/215352521-8bddedad-9511-4c5e-a43a-a32212f3afff.png)
![page-14](https://user-images.githubusercontent.com/119853244/215352523-d2d4fdc7-7e74-4ab4-bef7-837389f5be02.png)
![page-15](https://user-images.githubusercontent.com/119853244/215352526-1865a826-7ae7-4e97-a145-ef8ad4f557cd.png)
![page-16](https://user-images.githubusercontent.com/119853244/215352528-d3b659e3-e600-4652-ad2e-36896a971ed7.png)
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

# Running React-Frontend

1. Create a directory and open the command propmt , run the below command
      git clone https://github.com/shanpri03/YUBI_CapstoneProject.git
      
2.This will create the application developed.

3.open the folder React_JobPortal in vs code and add proxy in package.json in line 5
       "proxy": "http://127.0.0.1:3001"
       
4. Then open the terminal in command prompt and run 
     npm start
     
5.This will get the front end running.Front page appears on localhost:3000 port.

# Running Backend-Rails application


# Database Configuration in system
1. Open cmd, run psql -U postgres

2. Give the password
 
3. Then create database "jobportaldb"
 
4. Then run "\c jobportal" to connect to the database.
 
5. run "\dt" to check the tables in db.
 
6. Open the folder jobportal in vscode.
 
7. Open the file database.yml and give the below configurations
   database:jobportal
   
   username :postgres
   
   password :***userpassword***
   
   port:5432
   
   host:localhost
   
8. Open the terminal and run rails s -p 3001
 
9. The application opens on port 3001, click on run pending migrations. 

10. This will create the necessary tables for the backend application.


# Creating neccessary data in the backend using postman
 Data for job details and candidate application table.
 
 1. Open postman and create a post request will the url 'http://127.0.0.1:3001/jobdetail' with following params in the body
      example:
      
          {
        "job_title": "Senior Python Software Engineer",
        
        "job_description": "Our client is looking for an experienced Python Software Engineer or Architect (preferably of risk and analytics experience) to join their           team and support in creating the vision and roadmap for risk/analytics development teams based on front office/enterprise/regulatory requirements and define           the strategic direction for the analytics development.",
        
        "company_name": "Morgan McKinley",
        
        "location": "Singapore",
        
        "job_type": "fulltime",
        
        "salary": 13000000,
        
        "posted_date": "2022-06-23",
        
        "domain": "IT",
        
        "job_code": "PYTH-001",
        
        "skills_required": "Python",
        
        "application_status": "open"
        
    }
    
2. This will also creat a entry jobs/canditate application table with status pending.
      example :
      
       {
        "id": 23,
        
        "jobcode": "PYTH-001",
        
        "jobtitle": "Senior Python Software Engineer",
        
        "location": "Singapore",
        
        "posteddate": "2023-01-30",
        
        "applieddate": "2023-01-30",
        
        "status": "pending",
        
        "created_at": "2023-01-29T18:51:14.920Z",
        
        "updated_at": "2023-01-29T18:51:14.920Z",
        
        "user_id": null,
        
        "job_id": 6
    }
    
  The user_id is null because the job the is not been applied any user.
  
3. Another way to create entry in jobs/candidate application is when the user clicks on the "apply" button on the dashboard which will be explained later.

# Flow of Job Portal application

1. The first page is a login page/signup page.
2. 
3. New user can create a new account using email and password

4. Once the account is created, the user will redirected to profile page where he can update his profile.

5. Once the profile details are updated, the user will be redirected to login page.

6. The user can now login

7. The user will directed to dashboard, which will the following

   * All Jobs -- which will show the count of the all the jobs available
   
   * Eligible Jobs --- shows the job based on the skill set even by user.
   
   * Applied Jobs -- shows the jobs applied by the user
   
   * Shortlisted Jobs -- shows the jobs shortlisted for the user
   
   * Interviewing Jobs --shows the jobs interviewing Jobs for the user.
   
   * Rejected Jobs --shows the rejected jobs for the user.
   
   * Offer Recieved -- shows the offered jobs for the user.
   
9. Dash Board  shows all the jobs for the user.

10. For each job the user has a apply button which can be used by user to apply for the jobs.

11. User can click on the Applied,eligible options to view the job details

12. The status of the user application i.e, interviewing, shortlisted,rejected and offered are been updated in backend.

13. List of the jobs for each status can be viewed in the respective pages when clicked on the respective options.

14. Application Profile tab shows the details of the user.

15. Search option filters the data depending on Client,location and Job title.

16. logout tab is used to logout.

# Screen shots of the applications has been updated in the git hub.






  

