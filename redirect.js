var a =1;

var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

console.log($_GET);

if (typeof $_GET['n'] === 'undefined' || $_GET['n'] == "") {
	window.location.replace("http://l.rc4.sg/new");
     
} else {
	$.ajax({
    url: 'https://docs.google.com/spreadsheets/u/2/d/1LXH1VCQ1n2e_A0-TDnQg9mt1s_PIi635wgv7vnulMe0/gviz/tq?tq=select+D+where+lower(E)%20=lower(%20%22'+$_GET['n']+'%22)+AND+F=%22Y%22+limit+1&tqx=responseHandler:loadDone;#',
    dataType: "jsonp"
        
    });
}
function loadDone(data) {
	console.log(data);
	if(data.table.rows.length == 1) {
        console.log(data.table.rows[0].c[0].v);
        window.location.replace(data.table.rows[0].c[0].v)
    } else {
        window.location.replace("http://l.rc4.sg/err");
    }
    
}