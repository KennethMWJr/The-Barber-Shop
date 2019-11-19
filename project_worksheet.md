# Project Overview

A full stack app that applies CRUD in frontend and backend for the purpose of creating a queuing system for a barber shop.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for attending squad standup at the begining and end of the day.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | complete
|Day 2| Wireframes / Priority Matrix / Functional Components | complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | complete
|Day 4| Pseudocode / actual code | complete
|Day 5| Initial Clickable Model  | complete
|Day 6| MVP | complete
|Day 7| Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

Have you ever gone to a barber shop or a hair salon and waited for an unknown amount of time to get your hair done? As you wait, you see person after person go before you and you don't know how many more people are ahead of you.

This app allows for users to see how many people are on a barber's waiting list, add their names to a specific waitlist,  edit the information they've provided and remove their name from any waiting list.  


Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

Essentially it's an app for queuing a barber for a haircut. Nonetheless, this framework could apply for various scenarios beyond this one.  There will be three barbers to choose from and someone wanting a haircut could add their name a barber's waiting list. 


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

See "Mobile-first design" and "Desktop layout":
https://www.figma.com/file/BQLbVHUzP7E7Whu0gC0SMd/Wireframing-Copy?node-id=0%3A1

https://www.figma.com/file/BQLbVHUzP7E7Whu0gC0SMd/Wireframing-Copy?node-id=89364%3A480

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

See "Priority Matrix" page:

https://www.figma.com/file/BQLbVHUzP7E7Whu0gC0SMd/Wireframing-Copy?node-id=89402%3A231

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Create backend models for barbers and clients 
- A user of the site can add a client to a barber's queue
- Client info in a queue can be updated and deleted
- App is responsive with a mobile-first design 


#### PostMVP 

- Barbers can log in with Authentication to access their individual queue.
- Users can log in to edit and remove their name from a queu.
- Prevent clients from adding themselves to multiple barbers.



## Architectural Design

Define the the components and the architectural design of your app.

See "Components" page: 

https://www.figma.com/file/BQLbVHUzP7E7Whu0gC0SMd/Wireframing-Copy?node-id=89402%3A248

## ERD

Create the ERD model for your project

See "ERD" page:

https://www.figma.com/file/BQLbVHUzP7E7Whu0gC0SMd/Wireframing-Copy?node-id=89403%3A0

## UI Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

See components page


| Component | Description | 
| --- | :---: |  
| ShowBarbers | Renders barbers by name and photo | 
| UserList | grabs users list with axios and filters list by barber id to create a list for each barber |
| ClientList | grabs users list toggles between rendering list of clients and button for adding client to list |
| Client Form | Will render a form for users to create clients |
| User | toggles between components, EditClient and ShowClient |
| EditClient | Updates information created in ClientForm|
| ShowClient| Renders client information added to list along with the edit and delete functions  |
| Footer | This will render the footer |



Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.


| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Adding Form | H | 3hrs| 10hrs |
| Review | H | 5 hrs | 8hrs | 
| Creating Frontend logic | H | 5 hrs | 8hr |
| Working with API | H | 3hrs| 16hrs |
| Scaffolding | H | 6 hrs | 4hrs |
| Frontend CRUD | H | 4 hrs | 4hrs |
| Backend CRUD | H | 10 hrs | 14hrs |
| Styling | H | 10 hrs | 10hrs |
| Deployment | H | 6 hrs | 2hrs |
| troubleshooting | H | 5 hrs | 6hrs | 
| Total | H | 50hrs| 82hrs | 

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Map | Method for accessing content in an array | 
| Filter | Method for organizng content in one array into new arrays based on condtions while not altering original array|
| Ternary | Syntax that helped me conceptualize the toggle affect for buttons and rendering components.

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 


 
 
| Library | What it Does | 
| --- | :---: |  
| axios | used for making API calls | 



## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

 render() {
 <!-- filter through array of objects containing users and match their respect barber id with the id of the barber -->
        const filteredUsers = this.state.users.filter(user => { 
            if (this.props.barberId == user.barber_id) {
                return true;
            } 
            return false;
           })
        return (<div className = "user-list">
                {/* renders number of clients waiting for each barber */}
              <h2>Has {filteredUsers.length} waiting</h2>
              {/* toggles between button and ClientForm, which is a component */}
              { this.state.renderForm ? <ClientForm toggleForm = {this.onClick} barberId = {this.props.barberId} /> : <button onClick = {this.onClick}>Add yourself to list</button>}
                </div>)
    }

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Removed Header, Nav, and Main components | Discovered they weren't necessary in this project though I always have used them in previous ones | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

I had an error with setting up the backend that took me beyond the weekend to resolve. Resolving it required that I place " protect_from_forgery with: :exception" and "skip_before_action :verify_authenticity_token" in my application_controller file. 

Another very difficult error continued to occur when trying to deploy with Heroku. There was a "sassc" file that was unreadable by Heroku and a package-lock.json that Heroku did not want in my root directory.  I removed all references to "sassc" and deleted the the package-lock.json. Deployment then took place succefully,but I had to migrate and seed my database again plus modify the api call view my data. 
