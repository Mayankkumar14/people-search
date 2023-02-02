## Please use following steps to run the todo app:

- npm i
- npm start

## In this todo app, I have used following dependencies:
- Redux
- Redux-saga (middleware)
- Material UI and Grid for implementing the responsive UI.
- SASS preprocessor

## Added extra funtionality:
- Assuming data is not frequently changed, I have implemented the `caching mechanism` for `storing the people and vehicle data` in the local storage. So If the user initially requests for the people or vehicle data it will be fetched from API but after this, it would be served directly from `local storage`.

- We are not performing caching on searching the data. People data will always be fetched from API when the user performs searching by people name.

## Note
- I have added .env file just to make app setup runs properly and assuming it's a 
test task.
