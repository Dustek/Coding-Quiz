# Coding Quiz

## Overview

The purpose of this project is to create a javascript code that presents a user with a multiple choice quiz on coding concepts. It then saves the users score and displays it in the highscores page

## Background

The project pulls together CSS, Javascript and HTML knowledge I've gained throughout the course. This was a challenging project that involved many moving parts, including multiple html pages and multiple javascript files

## Usage

To use the project, simply open the main page (index.html) and start the quiz. Once done, the project will record your score - remaining time, reduced by each wrong answer

## Creation Process

The coding began with index.html and highschores.html already complete as web-pages. I edited the index.HTML slightly, but for the most part I used the HTML code provided. Similarily, the CSS code was already provided.

I started by creating questions.js and creating an array of objects with question data - title, questions and correct question

Then, I started logic.js by defining variables selecting various elements of the HTML. I added to this list as I needed new elements in the course of the project

I first made a function that starts the quiz when the start button is pressed. This starts the timer, which counts down every second from 100, as well as displays the questions.

The questions are displayed based on the object in the questions.js file. 

clickable buttons are created based on every potential answer, the answer of the function (used in the next function) is taken as the text of the button clicked.

If the user selects correctly, the positive sound effect and visual text appear.
If the user selects incorrectly, the negative effects happen and the user loses 10 seconds.

After a button is clicked, the previous question/answers are cleared and it moves on to the next. After it has exhausted all the questions it moves on to the final screen.

The final screen presents the user score (remaining time) and invites them to write their initials into a text field.

Once pressed. This intials/score combination gets saved to localstorage and pushed to a score array, which then gets displayed in the "highscores.html" screen.

This screen also has a clear scores button, which clears out the localstorage and refreshes the scores displayed.

## Acknowledgements

I would like to give credit to my instructor, Abdul, as well as all the TA's and fellow students who have helped me learn how to complete this project.

## Link to website:

https://dustek.github.io/Coding-Quiz/