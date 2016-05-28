io.sails.url = 'http://localhost:1337';

var app = angular.module('chat', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('chat', {
            url: '/chat',
            templateUrl: 'templates/chat.html',
            controller: 'ChatCtrl',
            params: {
                credentials: null
            }
        })
        .state('user', {
            url: '/',
            templateUrl: 'templates/user.html',
            controller: 'UserCtrl'
        });
    $urlRouterProvider.otherwise('/');
});
