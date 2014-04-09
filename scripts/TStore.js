TStore = TStore || {};
TStore.add = function(key, template) {
	this.templates = this.templates || [];
	this.templates[key] = template;
};
TStore.get = function(key) {
	return this.templates[key] || false;
};