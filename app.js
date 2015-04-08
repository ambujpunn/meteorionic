if (Meteor.isClient) {
    var app = angular.module('starter', [
        'angular-meteor',
        'ui.router',
        'ionic']);
    var test = 5;
    app.controller('StoreController', function(){
        this.prod = test;
    });
}
