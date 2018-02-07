function hidePages(){
$("#aboutpg").hide();
$("#contactpg").hide();
$("#reviewpg").hide();
$("#dashboardpg").hide();
}

$(hidePages);

$( document ).ready(function() {
    console.log("ready!");
    $("#home").click(function(e) {
        e.preventDefault();
        console.log("clicked home!");
        $("#aboutpg").hide();
        $("#contactpg").hide();
        $("#reviewpg").hide();
        $("#dashboardpg").hide();
        $("#homepg").show();
    });
    $("#about").click(function() {
        $("#homepg").hide();
        $("#aboutpg").show();
        $("#contactpg").hide();
        $("#reviewpg").hide();
        $("#dashboardpg").hide();
    });
    $("#contact").click(function() {
        $("#homepg").hide();
        $("#aboutpg").hide();
        $("#contactpg").show();
        $("#reviewpg").hide();
        $("#dashboardpg").hide();
    });
    $("#review").click(function() {
        $("#homepg").hide();
        $("#aboutpg").hide();
        $("#contactpg").hide();
        $("#reviewpg").show();
        $("#dashboardpg").hide();
    });
    $("#dashboard").click(function() {
        $("#homepg").hide();
        $("#aboutpg").hide();
        $("#contactpg").hide();
        $("#reviewpg").hide();
        $("#dashboardpg").show();
    });
});

