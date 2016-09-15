/**
 * Created by mh122354 on 9/11/2016.
 */
angular.module('7MinWorkout').filter('secondsToTime',function(){
    return function(input){
        var sec = parseInt(input,10);
        if(isNan(sec))return "00:00:00";

        var hours = Math.floor(sec/3600);
        var minutes  = Math.floor((sec-(hours*3600))/60);
        var seconds = sec - (hours*3600)-(minutes*60);

        return ("0"+hours).substr(-2)+':'+("0"+minutes.substr(-2))+":"
                + ("0"+seconds).substr(-2);
    }
});