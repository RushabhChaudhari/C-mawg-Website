var button=document.getElementById("top"),
body=document.body,
docelen=document.documentElement,
offset=100,
scrollpos,docheight,
is=navigator.userAgent.toLowerCase().indexOf('chrom')>-1;
docheight=Math.max(body.scrollHeight,body.offsetHeight,docelen.clientHeight,docelen.scrollHeight,docelen.offsetHeight)
// eslint-disable-next-line eqeqeq
if(docheight!=='undefined')
{
	offset=docheight/30;
}
window.addEventListener("scroll",function(event){
	scrollpos=body.scrollTop || docelen.scrollTop;
	button.className=(scrollpos>offset)?"visible":"hide";
});
button.addEventListener("click",function(event){
	event.preventDefault();
	if(is){
		docelen.scrollTop=0;
	}
	else
	{
		body.scrollTop=0;
	}
});
