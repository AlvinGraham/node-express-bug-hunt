# Node & Express Bug Hunt!

**READ ALL INSTRUCTIONS BEFORE STARTING**

There are 10 bugs in total, can you find them all? There are hints throughout (???), you should only need to make minor modifcations to 10 lines of code.

**Don't race through the files looking for the issues!** They should all have a console log or error that help you identify them. Read the console so that you know what error will cause each bug. The last one is tricky since it doesn't throw any errors. Document the error, line number and your fix in this README for each of the bugs.

## Setup
```
npm install
npm start
```

> NOTE: A couple of bugs prevent the server from starting.

## Error List

TODO: Add the error here followed by the line of code you fixed.

### Bug 0

`ReferenceError: app is not defined`

Fixed `quote.router.js` line 28: switch `app` to `router`. _This is the solution to the first bug._

### Bug 1

`throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))`

Fixed quote.router.js by adding module.exports.

## Bug 2

`GET http://localhost:5007/ 404 (Not Found)`

Corrected static route

# Bug 3 & 4

`localhost:5007 says Something went wrong.`

removed extra '}' from GET route call in client.js configuration object
removed extranneous '/quotes' from quote.router.js router route

# Bug 5
`TypeError: quotesFromServer is not iterable`

changed quotelist from object to array in quote.router.js

# Bug 6
`undefined object elements being rendered to the DOM`

Corrected corrected when input became array vice object

# Bug 7
`ReferenceError: quotesList is not defined in quote.router.js`

Correct quotesList to quoteList

# Bug 8

`ReferenceError: getQuote is not defined after clicking submit`

Correct getQuote() to getQuotes() in client.js line 53

# Bug 9 

`Inputs in entry form not cleared out after clicking submit button`

Added two lines of code to submitForm() function in client.js to clear input fields

# Bug 10 (Not really a bug but marked as one)
`client.js <script> in index.html marked as possible bug for exercise with ???`

Code works as is, but added explicitly detailed path as ./scripts/client.js


## Extra Practice (Optional)

Complete the JS debugging exercises at:

- https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/exercises.html
