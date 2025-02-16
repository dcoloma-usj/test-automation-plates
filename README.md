# DESCRIPTION
A software application to validate the plates of Spanish cars has been built. 

It consists of a web front-end to get the plate number and a JavaScript function that performs the validation.

The UI performs some basic checking to guarantee that the JavaScript function always receives a String of 7 characters. 

However, it does not verify the type of characters the user has entered in the form.

The function (isValidPlate(plate)) returns true if the plate is valid and false otherwise. 

A Spanish valid plate is a 7 character string where:
- The first four characters are digits (0..9)
- The last three characters are any letter (except vowels, Ñ, Q).

## Your task is:
- Defining a set of test cases that should be executed to guarantee (in the absence of failures) and adequate functioning of the isValidPlate function.
- Automate those test cases so they can be executed automatically to check that the software works properly.
