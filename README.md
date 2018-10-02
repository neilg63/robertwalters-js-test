# Simple Javascript Test

### See demo [here](https://neilg63.github.io/robertwalters-js-test)

The functions library in js/functions.js implements the requirements of the test using ES6, i.e. they use syntax only compatible with modern browsers such as Chrome 50++, Firefox 50+, Edge 12+, Opera latest etc.

Older browsers do not support arrow functions, filter() and map() methods for collections, the *let* keyword or new String manipulation functions as String.repeat(), which I used to build a regular expression programmatically for greater clarity.

The demo page is in vanilla Javascript, although with any geater complexity, it would have been easier with a modern SPA framework like Vue or Angular. The colour widgets work in Chrome, Firefox and Edge but not in Safari, where the input fields degrade gracefully to text fields.