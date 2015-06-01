# livn

A CLI and Express middleware for getting up and running without any hurdles and get straight onto creating.

**livn** comes bundled with [babel](https://babeljs.io/). This means the code will be transpiled from the latest edge version of JavaScript (ES6+) to ES5, resulting in the newest features in all browsers, without even touching a transpiler. **livn** also has built in [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).

This tools is made for getting your projects on their feet without worrying about the underlying magic, letting you focus 100% on your code!

##### IMPORTANT
I want to state this is mostly just a wrapper around [browserify-middleware](https://github.com/forbeslindesay/browserify-middleware) for more basic usage and an added CLI for rapid prototyping. All transformation magic goes to them, the [babel team](https://babeljs.io/) and the [browserify team](http://browserify.org/).

## Installation

#### CLI

```
$ npm install -g livn
```

#### Express middleware

```
$ npm install livn
```

## Usage

#### CLI

1. Make sure **livn** is installed by running `$ livn --version`.
2. `cd` to your working directory and run the CLI.
3. Go to [localhost:3000](http://localhost:3000).

Run `$ livn -h` for a list of commands.

**Example**

```shell
$ cd your/current/project
$ livn
Server is up and running of port 3000
```

#### Express

After installing express to your project go ahead and require it and use it like so `app.use(livn(app));`.
This should be all you need for a basic application.

**Example**

```javascript
var express = require('express');
var livn = require('livn');

// Initiate express app
var app = express();

// Setup app to use the livn middleware
app.use(livn(app));

// OPTIONAL
// Setup static serving of files
app.use(express.static('./'));

app.listen(3000, function() {
  console.log('Server is up and running with livn!');
});
```

## Motivation

After writing boilerplate transpiler code after boilerplate transpiler code, I wanted something that would be super easy to transport and to test out new ideas in an instant. Along with this came the separation of build tools and actual source code of my projects, leaving my projects cleaner.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

Thanks to [browserify-middleware](https://github.com/forbeslindesay/browserify-middleware) for providing an awesome middleware that made this project 100 times easier for me.

## License

The MIT License (MIT)
