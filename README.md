# Petful
* Link to live app: https://safe-dusk-79166.herokuapp.com/api/pet
* Link to client repo: https://github.com/thinkful-ei-gecko/Hubert-Yulia-DSA-Petful-Client

## Teammates: Hubert Yang and Yulia Khisamutdinova

### Summary
This is a server for Petful application. Petful is a site for an animal shelter which allows adoption of cats and dogs. People may only adopt the animal that came to the shelter first. People who wants to adopt are also put in a line so they can adopt when its their turn. 


### Endpoints
`GET /api/pet/list` Landing page. Display all animals in the shelter

`GET /api/pet` Get a pet available for adoption

`DELETE /api/pet` Dequeue an adopted pet

`GET /api/person/list` Get all people in line for adoption

`GET /api/person` Get a person next in line for adoption

`DELETE /api/person` Dequeue a person who has adopted a pet

`POST /api/person` Enqueue a person in waiting list





### User stories


##### user story #1: 
```
As a pet lover, I want to go to the Petful adoption site so that I can get more information about the adoption process
```

##### user story #2: 
```
As a user interested in adopting pets, I want to get more information on the pet so that I can make an informed decision
```

##### user story #3: 
```
As a user interested in adopting pets, I want to have a way to clearly see the pet(s) that I can adopt 
so that I am not distracted by other pets that are not on the line for adoption
```

##### user story #4: 
```
As a user interested in adopting pets, I want to know where I am on line so I know how long I have to wait 
```

##### user story #5: 
```
As a user interested in adopting pets, I want to be able to see the pets that are being adopted by other pet lovers and removed from the shelter 
so that I know that the pet I am interested in may no longer be available for adoption
```


#### Set up the server    

* Clone repository to your local machine `git clone git@github.com:thinkful-ei-gecko/Hubert-Yulia-petful-server.git`
* Install the dependencies: `npm install`.
* Run `npm i` to install all your new dependencies.
* Run `npm start` to start server

#### Technologies
* Node
* Express
* Heroku


