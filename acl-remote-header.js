aclaraJQuery.get("https://cdn.rawgit.com/aclarasandbox/remotehtml/master/bootstrap-header-menu.htm", function (header) {
    aclaraJQuery("#acl-remote-header").replace(header);
}, 'html');  