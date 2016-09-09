$.get("https://cdn.rawgit.com/aclarasandbox/remotehtml/master/bootstrap-footer.htm", function (header) {
    $("#acl-remote-header").replaceWith(header);
}, 'html');  