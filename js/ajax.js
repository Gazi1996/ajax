"use strict";

//Ajax start

function ajax(ajaxOptions)
{
    var options = {
        type: ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onError: ajaxOptions.onError ||function(){},
        onSuccess: ajaxOptions.onSuccess ||function(){},
        dataType: ajaxOptions.onSuccess || function(){},
        dataType: ajaxOptions.dataType || "text"
    
        }; //option end
        
        //sprawdzamy stan połączenia
        function httpSuccess(HttpRequest)
        {
            try
            {
                return (HttpRequest.status >= 200 && HttpRequest.status < 300 || HttpRequest.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof HttpRequest.status == "undefined")
            }

            catch(e)
            {
                return false;
                alert(e);
            }

        }//end httpSuceszz
    
        //tworzymy obiekt XHR - AJAX
        
        var XHR = new XMLHttpRequest();
        console.log(XHR);
        
        //otwieramy połączenie
        XHR.open(options.type, options.url, true);
        
        //gdy nastąpi zmiana statusu
        XHR.onreadystatechange= function()
        {
            
            if(XHR.readyState === 4)
            {
                if(httpSuccess(XHR))
                {
                    var returnData=(options.dataType=='xml')?XHR.responseXML : XHR.responseText;
                    options.onSuccess(returnData);
                    XHR=null;   
                }
                else
                {
                    options.onError(XHR.statusText);   
                }
            }
        } //end onreadychange
        
        //wysyłka
        XHR.send();
    
    
        
} //ajax end

//przykładowe wywołanie funkcji ajax


//ajax
//({
//        type: "GET",
//        url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
//        onError: function(msg)
//        {
//            console.log(msg);
//        },
//
//        onSuccess: function(response)
//        {
//            console.log("Wszystko OK");
//            var objJson=JSON.parse(response);
//            console.log(objJson);
//
//            console.log(objJson.userName);
//
//            document.body[0]=objJson.userName;
//        }
//
//});

