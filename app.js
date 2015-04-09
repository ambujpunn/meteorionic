if (Meteor.isClient) {
    var app = angular.module('starter', [
        'angular-meteor',
        'ui.router',
        'ionic']);

    // to get meteor app on cordova with angular integration
    function onReady() {
      angular.bootstrap(document, ['starter']);
    }

    if (Meteor.isCordova)
      angular.element(document).on("deviceready", onReady);
    else
      angular.element(document).ready(onReady);

    var test = 5;
    app.controller('StoreController', function(){
        this.prod = test;
    });
}
