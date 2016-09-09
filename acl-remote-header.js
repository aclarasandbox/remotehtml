
$(document).ready(function () {
    $.get("https://cdn.rawgit.com/aclarasandbox/remotehtml/master/bootstrap-header-menu.htm", function (header) {
        $("#acl-remote-header").replaceWith(header);
    }, 'html');
});


 