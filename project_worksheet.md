# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for attending squad standup at the begining and end of the day.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | complete
|Day 2| Wireframes / Priority Matrix / Functional Components | complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| Pseudocode / actual code | Incomplete
|Day 5| Initial Clickable Model  | Incomplete
|Day 6| MVP | Incomplete
|Day 7| Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

It's an app for queuing a barber for a haircut. Nonetheless, it could apply for various scenarios beyond this one.  There will be three barbers to choose from and someone wanting a haircut can add their name to only one barber's waiting list. 

The barbers have access to only their respective list.  Each will be able to apply CRUD to their respective list as well. When the barbers log into the app, they will see all their waiting lists. They will also be able to indicate their schedule for that day (i.e. time in, time out, out sick, or not in today).  

Clients don't have to log in to add their name to a barber's waiting list. They can go to the app and see how many people each barber has in their queu and select which waitlist to enter.  The client can put their username along with a form of contact (i.e. phone number or email ).  Clients will be informed each time their positions on the waiting list change. They can remove themselves from a list and add themselves to another list.  Each client will be notified when they are next for a haircut. 

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

See "Mobile-first design" and "Desktop layout":
https://www.figma.com/file/BQLbVHUzP7E7Whu0gC0SMd/Wireframing-Copy?node-id=89402%3A248

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

See "Priority Matrix" page:

https://www.figma.com/file/BQLbVHUzP7E7Whu0gC0SMd/Wireframing-Copy?node-id=89402%3A248

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Create backend models for barbers and clients 
- A user of the site can add a client to a barber's queue
- Client info in a queue can be updated and deleted
- App is responsive with a mobile-first design 


#### PostMVP 

- Barber's can log in with User Auth to see their queue



## Architectural Design

Define the the components and the architectural design of your app.

See "Components" page: 

https://www.figma.com/file/BQLbVHUzP7E7Whu0gC0SMd/Wireframing-Copy?node-id=89402%3A248

## ERD

Create the ERD model for your project

See "ERD" page:

https://www.figma.com/file/BQLbVHUzP7E7Whu0gC0SMd/Wireframing-Copy?node-id=89402%3A248

## UI Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

See components page


| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Nav | Will provide links to pages |
| Main | Will render info for each page |
| Client Form | Will render a form for users to create clients |
| Barber Login | Will render a login form |
| # of Clients | Will provide number of clients for each barber |
| List of Clients | Will render list of clients for each barber |
| Footer | This will render the footer |



Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.


| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Adding Form | H | 3hrs|  |
| Review | H | 5 hrs | |
| Creating Frontend logic | H | 5 hrs |
| Working with API | H | 3hrs| |
| Scaffolding | H | 6 hrs | |
| Frontend CRUD | H | 4 hrs |
| Backend CRUD | H | 10 hrs | |
| Styling | H | 10 hrs | |
| Deployment | H | 6 hrs | |
| troubleshooting | H | 5 hrs | | 
| Total | H | 50hrs| | 

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| Giphy API | Used to get gifs to use | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
