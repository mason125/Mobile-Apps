/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

//only use angular for the routing
//module only one therefore leve it here 
const app = angular.module("unit", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/enter", {
        templateUrl : "views/Enter.html"
    })
    .when("/stat", {
        templateUrl: "views/Stats.html"
    })
    .when("/BP",{
        templateUrl: "views/BP.html"
    })
    .when("/BS",{
        templateUrl: "views/BS.html"
    })
});

document.getElementById("demo").innerHTML="sith";