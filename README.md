# Swiss Memory Game
[View Live](https://lexi-winstanley.github.io/swissMemoryGame/)

## Motivation 
To create a React memory game in which the goal is to click each displayed image once without repeating any clicks while the images shuffle.

## Summary
This is a memory game created with React utilizing photos from Switzerland. The goal is to click all of the photos without repeating clicking any twice, the catch is that the photos shuffle after each click!

## Details
The main functionality of this application comes from a React class component which stores essential game information in its state including the array of photos, an array of clicked photos, the score, top score, number of wins and selected level of difficulty.
When the application loads the user is presented with a screen to pick their difficulty: easy, medium or hard. Once they select a level 8, 16 or 24 of the photos are selected at random and added to an array. The state is updated to reflect this array and the stage of the game which results in a DOM update. The chosen photos are displayed for the user to begin clicking. Each time they click, the application compares the photo's ID to those in the clicked photos array to confirm the photo has not already been clicked. If the click is not a repeat that photo's ID is added to the clicked photos array and the array is then shuffled before re-rendering. If the photo has been clicked before the user is presented with a "Game Over" screen and presented with the option to re-select difficulty and play again. If the user successfully clicks through all the photos without any repeats they are presented with a "Success" screen and the option to restart the game.

## Role
Sole developer responsible for design, code and creation of custom graphics.

## Technologies
React
<br/>HTML
<br/>CSS
<br/>JavaScript
