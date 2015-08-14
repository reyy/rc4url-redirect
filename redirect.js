var done_count= 0;
var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }
    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

if (typeof $_GET['n'] === 'undefined' || $_GET['n'] == "") {
    window.location.replace("http://l.rc4.sg/new");

} else {
    $.ajax({
        url: 'https://docs.google.com/spreadsheets/u/2/d/1LXH1VCQ1n2e_A0-TDnQg9mt1s_PIi635wgv7vnulMe0/gviz/tq?tq=select+D+where+lower(E)%20=lower(%20%22'+$_GET['n']+'%22)+AND+F=%22Y%22+limit+1&tqx=responseHandler:loadDone;#',
        dataType: "jsonp"
        
    });

    $.ajax({
        url: 'https://docs.google.com/spreadsheets/u/2/d/1xC5bHvCS8fGMJF2WLxAOXwi3dEPb74ZtViEHR_85Wnw/gviz/tq?tq=select+B+where+lower(C)%20=lower(%20%22'+$_GET['n']+'%22)+limit+1&tqx=responseHandler:loadDone;#',
        dataType: "jsonp"
        
    });
}
function loadDone(data) {
    if(data.table.rows.length == 1) {
        window.location.replace(data.table.rows[0].c[0].v);
    } else if(done_count<=0){
        done_count++;
    } else {
        window.location.replace("http://l.rc4.sg/err");
    }
}