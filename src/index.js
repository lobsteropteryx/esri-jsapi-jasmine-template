'use strict';

var template = __dirname + '/esri-jsapi-template.html';

exports.process = function(grunt, task, context) {
    var source = grunt.file.read(template);
    return grunt.util._.template(source, context);
};
