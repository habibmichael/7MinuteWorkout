/**
 * Created by mh122354 on 9/11/2016.
 */
angular.module('app',['ngRoute','7MinWorkout']).
    config(function($routeProvider,$sceDelegateProvider){
        $routeProvider.when('/start',{
            templateUrl:'partials/start.html'
        });
        $routeProvider.when('/workout',{
            templateUrl:'partials/workout.html',
            controller:'WorkoutController'
        });
        $routeProvider.when('/finish',{
            templateUrl:'partials/finish.html'
        });
        $routeProvider.otherwise({
            redirectTo:'/start'
        });

        $sceDelegateProvider.resourceUrlWhitelist([
            'self','http://*.youtube.com/**']);
        


});
angular.module('7MinWorkout',[]);