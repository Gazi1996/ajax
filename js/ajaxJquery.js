"use strict";

$(function() 
{
    $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/ userURL/akademia108.pl', function (data) 
    {
        console.log(data);
    });

    $.ajax
    ({
            url: "http://echo.jsontest.com/userId/108/userName/Akademia108/ userURL/akademia108.pl",
            dataType: 'json',

            success: function (resultJSON) 
            {
                console.log(resultJSON);
            },
            onerror: function (msg) 
            {
                console.log(msg);
            }
    });




});
