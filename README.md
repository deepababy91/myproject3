
My name is Deepa Baby.

This is my Todolist project using react hooks with context concept.
/todo, /contact, /signup and '/'(directing to signup page again) are the views.Used react router with bootstrap navigation bar for the navigation section
which is responsive.Also I used Hashrouter instead of BrowserRouter to avoid getting the 404 error after refreshing the pages whenever the project  accessed through github link.

For the Signup page ,I used formik and yup. For the contact page,I used formik again to implement the form.
The main todos page implemented using react hooks with context.Local storage is used to avoid the data disappearing after the page refresh.
I used antd with bootstrap mostly for the design.With this todolist, I can add todos both by pressing enter key and clicking on add icon.
I can complete both each and all tasks.Whenever the user completes the task, the edit and delete icons section show disabled.I added the function to show the task status displaying the active and completed tasks count as a notification
Added the function to clear all tasks with clear all button. Added the function to delete each task.I can edit each task and save it .
Then I used antd to implement the filter function design to show active, completed and all tasks. 

Technologies used here are HTML,CSS,Javascript,react hooks with context

For the future improvement,I would like to add search feature to find a task
Add Notes:Each task can have detailed notes.
Add task list rearrangement functionality:Reorder your category lists however you prefer!
To provide a calender view:Get a better perspective of how busy your schedule is with calendar view. 
To set color coding:Assign colors to each task list to make it easier to identify which lists you are viewing 



Installed the following dependencies for this project
1)npm install react-bootstrap bootstrap
2)npm install antd --save
3)npm install formik --save
4)npm install --save react-router-dom
5)npm install yup --save
6)npm install -s react-router-bootstrap

I deployed the project in github pages.The link is given below
https://deepababy91.github.io/myproject3/#/

git
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
