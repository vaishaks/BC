var furl="http://www.flipkart.com/search-mobile-accessories?query=";
var eurl="http://www.ebay.in/sch/i.html?_from=R40&_trksid=m570&_nkw=";
var futurl="http://www.futurebazaar.com/search/?q=";
var amaurl="http://www.amazon.com/s/ref=nb_sb_noss?field-keywords=";

function init()
{
	R("searchbox").addEventListener("keyup",keyUp,false);
}

function keyUp(e)
{
	if(e.keyCode==13)
	search();
}

function search()
{
	var Item=R("searchbox").value;
	var Item_SearchF=concat(furl,Item);
	var Item_SearchE=concat(eurl,Item);
	var Item_SearchFUT=concat(futurl,Item);
	var Item_SearchAMA=concat(amaurl,Item);
	chrome.tabs.create({url:Item_SearchF});
	chrome.tabs.create({url:Item_SearchE});
	chrome.tabs.create({url:Item_SearchFUT});
	chrome.tabs.create({url:Item_SearchAMA});
}

function concat(url,Item)
{
	var Item_Search=url+Item;
	return Item_Search;
} 


function R(id)
{
	return document.getElementById(id);
}