# Which Noop

## Purpose
> This project is going to be a user-friendly game that is compatible on different devices. The game will use an API formatted to retrieve data and trivia from the popular cartoon sitcom known as Rick and Morty and be converted into JSON format. This project will also incorporate the use of modals to prompt different scenarios and character selections to display various images form the APOD API. This API is for fetching data from NASA's APOD website - a popular service showing the most beautiful astronomical photographs in the world. We will be using a basic text entry-adventure game format on Javascript so that we can build state into the application, that way the path can be determined based off of different text nodes and options determined by what the player selects. The result with be an interactive, visual story that is generated.
> 
## Built With
* HMTL
* CSS
* Javascript
* JQuery

## Update Website 2.0
https://banderson19.github.io/Project_1/

## Original Website
https://annieglade4327.github.io/Which_Noop/

## Key Features Adjusted
* Adjusted file structure and instead of everything at the root level, moved files around into their indivual folders catorgized by html, js, and css. Allowing for cleaner and more organized code
* ELIMINATED 4 html files (citadel, episode, character, and location) along with their corresponding javascript files. 
  * they were pages that fetched new data from the rick and morty api and only displayed the data. 
  * user experience required user to go back and forth between pages to load data in the story. 

* RESPONDED WITH the 3 api fetch requestes under 1 js file and required that at the bottom of the story.html file
  * turned the input element into a drop down menu that is populated with the fetch requests. now the use is able to select the episode, character and location. 
  * their choices are now inserted into the story line

* Added 2 additional story lines that will take the same data selected and adjust the story
  * user experience is better, beacuse all data and configuration is done on a single page 

* cleaned up the nasa page and got nasa picture of the day api working
* included bootstrap css framework through out the app mostly on the story.html but also the nasa and apod page


| 1.0  | 2.0 |
| ------------- | ------------- |
| <img width="1270" alt="Screen Shot 2021-07-22 at 5 27 34 PM" src="https://user-images.githubusercontent.com/24905738/126721592-09d077d3-f29b-4466-80ac-ab86fdcd1c34.png">  | <img width="1382" alt="Screen Shot 2021-07-22 at 5 26 48 PM" src="https://user-images.githubusercontent.com/24905738/126721631-01074d0d-7efa-4462-9a13-3614d51926d1.png">  |
| <img width="1350" alt="Screen Shot 2021-07-22 at 5 36 08 PM" src="https://user-images.githubusercontent.com/24905738/126721818-4f712495-02bd-403f-a5f5-8a48de02e79a.png">  | <img width="1350" alt="Screen Shot 2021-07-22 at 5 36 45 PM" src="https://user-images.githubusercontent.com/24905738/126721856-11d6ef5b-9d06-4f3a-bf22-11034af52c96.png"> |
| <img width="1350" alt="Screen Shot 2021-07-22 at 5 37 20 PM" src="https://user-images.githubusercontent.com/24905738/126721922-1c19df21-854e-4f76-a544-03cabc24a6e6.png"> | <img width="1350" alt="Screen Shot 2021-07-22 at 5 37 05 PM" src="https://user-images.githubusercontent.com/24905738/126721899-ecff440c-6647-40a4-a65b-472cb4fabf40.png"> |


## Contribution
Made by Andrea Glade & Brad Anderson
