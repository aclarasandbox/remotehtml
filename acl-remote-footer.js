$(document).ready(function () {

$.get("https://cdn.rawgit.com/aclarasandbox/remotehtml/master/bootstrap-footer.htm", function (footer) {
    $("#acl-remote-footer").replaceWith(footer);
}, 'html');  

});