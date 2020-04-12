document.oncontextmenu = function(){return false;}
function disabletext(e){return false}
function reEnable(){return true}
document.onselectstart=new Function ("return false")
if (window.sidebar){
	document.onmousedown=disabletext
	document.onclick=reEnable
}

function obtener_valor(variable) {
	var remplaza = /\+/gi; 
	var url = window.location.href;
	url = unescape(url);
	url = url.replace(remplaza, " ");
	var variable_may = variable;
	var variable_pos = url.indexOf(variable);

	if (variable_pos != -1)
	{
		var pos_separador = url.indexOf("&", variable_pos);
		if (pos_separador != -1) 
		{
			return url.substring(variable_pos + variable_may.length + 1, pos_separador);
		}
		else
		{
			return url.substring(variable_pos + variable_may.length + 1, url.length);
		}
	}
	else
	{
		return "CONTENIDO";
	}
}

window.onload = function() {
	var valor = obtener_valor("verinfo");
	var element = document.getElementById(valor);
	element.scrollIntoView();
}

function getDocHeight(doc) {
	doc = doc || document;
	// stackoverflow.com/questions/1145850/
	var body = doc.body, html = doc.documentElement;
	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	return height;
}
function setIframeHeight(id) {
	var ifrm = document.getElementById(id);
	var doc = ifrm.contentDocument? ifrm.contentDocument:ifrm.contentWindow.document;
	if (  iframeDoc.readyState  == 'complete' ) {
		ifrm.style.visibility = 'hidden';
		ifrm.style.height = "10px"; // reset to minimal height ...
		// IE opt. for bing/msn needs a bit added or scrollbar appears
		ifrm.style.height = getDocHeight( doc ) + 4 + "px";
		ifrm.style.visibility = 'visible';
		return;
	}
	window.setTimeout(setIframeHeight, 100);
}