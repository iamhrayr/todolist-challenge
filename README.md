Todolist Challenge
=============================================

Preparations
---------------------------------------------

run `npm install` or `yarn install` or simply `yarn` to install all dependencies 

after that you can start the project by running the command `npm start` or `yarn start`

It will automatically open `http://localhost:3000` in the browser.



Install dependancies Welcome to the "Todolist Challenge" and thank you for your time.
This is a challenge for advanced-level programmers.

Before you start programming, please initiate the challenge by opening the following url in your browser (replace `{yourname}` with **your own name** separated by underscore, e.g. Ruben Hakhverdian becomes "ruben_hakhverdian"):

https://avetiq-test.firebaseapp.com/create/{yourname}

Also in the following steps, everytime you see `{yourname}` please replace it with the same name you used in the request above.

Please read the rest of this document carefully, before you start coding.

Challenge
---------------------------------------------

Your job is to write a frontend for a "todolist" application. For this task, we already created a backend that you should use.

You can get all existing todos from the backend via:

    GET https://avetiq-test.firebaseapp.com/todos/group/{groupId}/user/{userId}

As you may have noticed, the todolist request requires two parameters `groupId` and `userId`.

You will get the `groupId` needed in the request above from the backend via:

    GET https://avetiq-test.firebaseapp.com/group/{yourname}    {"groupId":"g1531943374269"}

You will get the necessary `userId` from the request to this endpoint:

    GET https://avetiq-test.firebaseapp.com/user/{yourname}    {"userId":"u1531943374268"}

Once you have received the todo list, you will see that it has the following data structure:

    [
      { text: "do something", done: false },
      { text: "do something else", done: false },
      { text: "do something special", done: true }
    ]

Your job is to list all the todos and create a simple form where you can **add** and **remove** todos.
Moreover, if a user **marks** a todo as "done", a checkmark should be displayed next the todo in the list.

Everytime a todo is **added**, **removed** or **marked as done**, the whole(!) list of todos should be submitted to the server via:

    PUT /todos/group/{groupId}/user/{userId}
    [ // payload
      { text: "do something", done: true },
      { text: "do something else", done: false },
      { text: "do something special", done: true }
    ]

Submission
-----------------------------

We expect you to create a project that contains all dependecies and that can be compiled by us using the cli.

Please create a compressed zip-folder of your project and send this zip file to:

* **receipient:** hr@avetiq.de
* **subject:** "todolist-challenge: YOURNAME"

Alternatively, you can send us a link where we can download your results (e.g. at GitHub).

Evaluation
-----------------------------

Your submission will be evaluated based on the following criteria (important criteria are listed first):

1. Code & Code-Quality
    * We will evaluate your code first and foremost based on your code-style.
      So please take your time!
    * Please try to write clean, modulized code.
    * Try to use best-practices and good coding techniques.
    * Whenever possible, stick with the most up-to-date tools, packages or technologies.
2. Time to complete the task  * Try to aim for a good usuabilty/UX and clean layout

#### Additional remarks:

* The sooner you submit your results, the better, but code quality is far more important than development speed.
* TWith this coding challenge, we are interested in your coding style and *not* how fast you code. So please take your time to complete the challenge can be completed in (more or less) a few hours, but as long as we receive your results within the next 24 hours, it's okd write clean code.
* If you cannot start working on the coding challenge right away, it is fine if you start in a few days.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE2OTgxMTM3Ml19
-->