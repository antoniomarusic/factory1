$(document).ready(function () {
    $("#left").on("click", function () {
        var first1= $("img", ".row-bottom").first(),
            first2= $("img", ".row-top").first();
            $('#left').prop('disabled', true);
        first1.animate({ opacity: "0px"}, function () {
            first1.appendTo(".row-bottom").css({ opacity: "0", width: "" }).animate({ opacity: "1" }, "slow");  
        }),
            first2.animate({ opacity: "0px"}, function () {
                first2.appendTo(".row-top").css({ opacity: "0", width: "" }).animate({ opacity: "1" }, "slow");
                $('#left').prop('disabled', false);
            });
    }),
        $("#right").on("click", function () {
            var last1= $("img", ".row-bottom").last(),
                last2= $("img", ".row-top").last();
                $('#right').prop('disabled', true);
            last1.animate({opacity:"0"}, function () {
                last1.prependTo(".row-bottom").css({ opacity: "0", width: "" }).animate({ opacity: "1"}, "slow");
            }),
            last2.animate({opacity: '0'}, function () {
                last2.prependTo(".row-top").css({ opacity: "0", width: ""}).animate({ opacity: "1"}, "slow");
                $('#right').prop('disabled', false);
            });
        });
});
