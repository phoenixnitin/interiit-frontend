requirejs.config({
    baseUrl: "../js",
    paths: {
        "jquery":"lib/jquery-3.2.1.min",
        "backbone" : "lib/backbone-min",
        "underscore" : "lib/underscore-min",
        "bootstrap" : "lib/bootstrap.min"
    },
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap':{
            deps: ['jquery']
        }
    }
});

define(['backbone','jquery', 'views/register', 'bootstrap'],function(Backbone, $, register){
    var Router = Backbone.Router.extend({
        routes:{
            '' : 'index',
            '/sport/register': 'registration'
        },
        index: function () {
            $(document.body).html("<h2>InterIIT Website is in Progress</h2>");
        },
        registration: function () {
            register.initialize();
        }
    });
    var router = new Router;

    Backbone.history.start();
});