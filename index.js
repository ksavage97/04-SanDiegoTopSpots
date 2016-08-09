$(document).ready(function() {
    var url = "topspots.json";

    $.getJSON(url, function(response) {


        $.each(response, function(index, property) {
            $("#theTable tbody").append("<tr><td>" + property.name + "</td><td>" + property.description + "</td><td><a class='btn' href='http://www.google.com/maps?q=" + property.location + "'>Click Here to Open on<br>Google Maps</a></td></tr>");
        });

    });

});
