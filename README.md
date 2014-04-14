# grunt-templates-store

> Grunt plugin to store templates in a Javascript Collection.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-templates-store --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-templates-store');
```

## The "templates_store" task

### Overview
In your project's Gruntfile, add a section named `templates_store` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  templates_store: {
    your_target: {
      options: {
        name: ""
      },
      files {
        "":[]
      }
    },
  },
});
```

### Usage Examples

#### Default Options
In this example, will be generated the file `TStoreGenerated.js` containing the template `test/fixtures/hello.hbs`.

##### Gruntfile.js
```js
...
grunt.initConfig({
  templates_store: {
    options: {
      name: 'window.TemplatesStore'
    },
    files: {
      'tmp/TStoreGenerated.js': ['test/fixtures/hello.hbs'],
    },
  },
});
...
```

##### hello.hbs
```html
<h1>Hello World!</h1>
<div class="well">
	{{lint-to 'https://github.com/brunoleaomaia/grunt-templates-store' GitHub}}
</div>
```

##### TStoreGenerated.js
```js
window.TemplatesStore = {
  add: function(key, template) {
    this.templates = this.templates || [];
    this.templates[key] = template;
  },
  get: function(key) {
    return this.templates[key] || false;
  }
};
window.TemplatesStore.add('hello', '<h1>Hello World!</h1>\n<div class="well">\n {{lint-to \'https://github.com/brunoleaomaia/grunt-templates-store\' GitHub}}\n</div>\n');
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
