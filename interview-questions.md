# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The name of the foreign key is called animal_id I believe, and it would be part of the Sightings model. 

  Researched answer: A foreign key is a key used to link two tables together. This is sometimes also called as a referencing key. A Foreign Key is a column or a combination of columns whose values match a Primary Key in a different table.



2. Which routes must always be passed params and why?

  Your answer: show, edit, and destroy because they target specific id's. 

  Researched answer: Specifically, params refers to the parameters being passed to the controller via a GET or POST request. then the controller would pass in {:name => “avi”} to the show method, which would set the @person instance variable to the person in the database with the name “avi”.



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer: get 'game/:guess' => 'main#show'



4. Name three rails generator commands. What is created by each?

  Your answer: rails generate Model (generates a new Model), rails generate controller (generates a controller), rails generate resources (generates both the model and a controller)

  Researched answer: rails generate Model, rails generate controller, rails generate resource 



5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"   shows all in the model 

/users/1      method="GET"   shows a specific id in the model

/users/new    method="GET"   creates a new item in the model

/users/       method="POST"   creates a new item in the model and saves it to the database  

/users/1      method="PUT"    updates an item in the model

/users/1      method="DELETE" deletes an item in the model
