var vstabClass =
{
	InterceptVS: function ()
	{
		var page = content.location.href;
		var ioService = Components.classes["@mozilla.org/network/io-service;1"]
		                .getService(Components.interfaces.nsIIOService);
		var uri = ioService.newURI(page, null, null);
		var proto = uri.scheme;

		if (proto != "view-source") {
			openUILinkIn("view-source:"+uri.spec, "tab", {relatedToCurrent: true});
		}
	},

	BrowserViewSourceOfDocument: function (aDocument)
	{
		openUILinkIn("view-source:"+aDocument.location.href, "tab", {relatedToCurrent: true});
	}
};
