TStore = TStore || {};
TStore.add = function(key, template) {
	this.templates = this.templates || [];
	this.templates[key] = template;
};
TStore.get = function(key) {
	return this.templates[key] || false;
};
TStore.add('hello', '<h1>Hello World!</h1>\n<div class="well">\n	{{lint-to \'https://github.com/brunoleaomaia/grunt-templates-store\' GitHub}}\n</div>\n');