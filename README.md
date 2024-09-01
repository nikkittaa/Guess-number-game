# Number Guessing Game

This is a mini number guessing game built using React Native. The game consists of three main screens: a start screen, a guessing screen, and a game over screen.

## Table of Contents

1. [Features](#features)
2. [How to Play](#how-to-play)
3. [Screens](#screens)
4. [Technologies Used](#technologies-used)

## Features

- Simple and intuitive UI for easy gameplay.
- The app tries to guess a number selected by the user.
- Users provide feedback on each guess, telling the app whether to guess higher or lower.
- Displays the number of rounds it took for the app to guess the correct number.
- Includes basic validation for user input.


## How to Play

1. On the **Start Screen**, enter a number between a predefined range (e.g., 1-99) that you want the app to guess.
2. Press the "Confirm" button to proceed to the guessing screen.
3. On the **Guessing Screen**, the app will make an initial guess. Use the "+" or "-" buttons to tell the app whether the it should guess higher or lower.
4. The app will continue guessing until it correctly identifies the number you entered.
5. When the app guesses correctly, the **Game Over Screen** will display the number of rounds it took to guess your number.

## Screens

1. **Start Screen:**
   - Allows the user to enter a number that the app will try to guess.
   - Validates the entered number to ensure it falls within the specified range.
   - A "Confirm" button to proceed to the guessing phase.
     
![Screenshot_1725196656](https://github.com/user-attachments/assets/881bdcf5-4f67-427c-bd53-d25a4a1eeed4 {width=40px height=400px})
![Screenshot_1725196666](https://github.com/user-attachments/assets/a315e026-6838-43de-86c6-781f3583160e)


2. **Guessing Screen:**
   - Displays the app's current guess.
   - Provides buttons for the user to indicate whether the actual number is higher or lower than the guess.
   - Tracks the number of rounds it takes for the app to guess the correct number.
     ![Screenshot_1725196679](https://github.com/user-attachments/assets/4530633a-ce74-48e4-9e43-15578c04dd4a)


3. **Game Over Screen:**
   - Displays a message indicating that the game is over.
   - Shows the number of rounds it took for the app to guess the correct number.
   - Includes a button to restart the game.
    ![Screenshot_1725196690](https://github.com/user-attachments/assets/4de3d00b-ae4a-4a3f-8bfc-4a76149e7568)
 

## Technologies Used

- **React Native:** The framework used to build the mobile application.
- **JavaScript:** Programming language used to develop the app logic.
- **React Hooks:** For managing state and side effects in a functional component-based approach.

