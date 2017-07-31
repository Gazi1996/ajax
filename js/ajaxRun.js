alert();
function pobierzDane()
{
    ajax
    ({
            type: "GET",
            url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
            onError: function(msg)
            {
                console.log(msg);
            },

            onSuccess: function(response)
            {
                console.log("Wszystko OK");
                var objJson=JSON.parse(response);
                console.log(objJson);

                console.log(objJson.userName);

                document.body[0]=objJson.userName;
            }
    });
}