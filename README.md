
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

     npm install
     
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
  
   Updating the candidate application  can be done in postman using POST request with url http://127.0.0.1:3001/joblist and the parameters
   
        {
         
        "jobcode": "Webetechies-Java-Spring-009",
        
        "jobtitle": "Java and Spring Developer",
        
        "location": "Pune",
        
        "posteddate": "2023-01-30",
        
        "applieddate": "2023-01-30",
        
        "status": "offered", 
        
        "user_id": 2,
        
        "job_id": 5
      }
   The details like jobcode,jobtitle,location,postdate and job_id are fetched from jobdetails table
 
    Updating the candidate application status i.e, can interviewing,shortlisted,rejected,offered can be done in postman using PUT request with                    http://127.0.0.1:3001/joblist/{id}
 
 for the below request id will be and url:http://127.0.0.1:3001/joblist/5
 
         {
         
        "jobcode": "Webetechies-Java-Spring-009",
        
        "jobtitle": "Java and Spring Developer",
        
        "location": "Pune",
        
        "posteddate": "2023-01-30",
        
        "applieddate": "2023-01-30",
        
        "status": "offered", 
        
        "user_id": 2,
        
        "job_id": 5
      }
  
3. Another way to create entry in jobs/candidate application is when the user clicks on the "apply" button on the dashboard which will be explained later.

# Flow of Job Portal application

1. The first page is a login page/signup page.

![page-1](https://user-images.githubusercontent.com/119853244/215352632-eacb6620-95b1-4a03-a56d-e53d7df7b6d2.png)

2. New user can create a new account using email and password
![page-2](https://user-images.githubusercontent.com/119853244/215352645-05926577-4cac-459b-a518-57358900ba72.png)

3. Once the account is created, the user will redirected to profile page where he can update his profile
![page-3](https://user-images.githubusercontent.com/119853244/215352657-159af95d-082d-44a4-8bb3-19754137e225.png)


4. Once the profile details are updated, the user will be redirected to login page.

5. The user can now login

6. The user will directed to dashboard, which will the following
   ![page-4](https://user-images.githubusercontent.com/119853244/215352729-565ae16a-dd39-40d0-89b6-4e39949aca8a.png)

   
   ![page-5](https://user-images.githubusercontent.com/119853244/215352771-ea5ba496-f25b-4bc9-990c-980f8e3e2b18.png
   
   
   * All Jobs -- which will show the count of the all the jobs available
   
   * Eligible Jobs --- shows the job based on the skill set even by user.
   
   * Applied Jobs -- shows the jobs applied by the user
   
   * Shortlisted Jobs -- shows the jobs shortlisted for the user
   
   * Interviewing Jobs --shows the jobs interviewing Jobs for the user.
   
   * Rejected Jobs --shows the rejected jobs for the user.
   
   * Offer Recieved -- shows the offered jobs for the user.
   
7. Dash Board  shows all the jobs for the user.

8. For each job the user has a apply button which can be used by user to apply for the jobs.

9. User can click on the Applied,eligible options to view the job details
   ![page-10](https://user-images.githubusercontent.com/119853244/215353246-87ba8665-dd63-41aa-8e21-33825a4d0f6d.png)
   ![page-11](https://user-images.githubusercontent.com/119853244/215353254-e399d09b-1d6e-4c64-aac5-2363e4b7a23b.png)
   ![page-12](https://user-images.githubusercontent.com/119853244/215353255-f53f0dd3-e22d-460f-8547-57d6dc4a40b5.png)


10. The status of the user application i.e, interviewing, shortlisted,rejected and offered are been updated in backend.
     ![page-13](https://user-images.githubusercontent.com/119853244/215352973-82f35df2-0ceb-4f3d-8f86-b5056fc55e01.png)
      ![page-14](https://user-images.githubusercontent.com/119853244/215352977-c6f72d8a-4c71-4957-ad66-e42d47d324c8.png)
      ![page-15](https://user-images.githubusercontent.com/119853244/215352978-17bf575b-6de8-4637-b092-46849670f41e.png)
     ![page-16](https://user-images.githubusercontent.com/119853244/215352979-ea7a0cab-df0e-4864-8c97-fe1f4b1b04cd.png)


13. List of the jobs for each status can be viewed in the respective pages when clicked on the respective options.

14. Application Profile tab shows the details of the user.
![page-8](https://user-images.githubusercontent.com/119853244/215353293-10edf65f-428f-476c-be60-b8010111a596.png)



15. Search option filters the data depending on Client,location and Job title.
  ![page-6](https://user-images.githubusercontent.com/119853244/215353361-5d3824e6-fe1c-4a96-8de8-ccc47d33b24f.png)

  
16. logout tab is used to logout.







  

