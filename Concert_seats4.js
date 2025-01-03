

var form = document.getElementById('form');
    a = document.getElementById("value1");
    b = document.getElementById("value2");
    c = document.getElementById("value3");
    d = document.getElementById("value4");
    e = document.getElementById("value5");
    f = document.getElementById("value6");
    g = document.getElementById("value7");
    h = document.getElementById("value8");
    k = document.getElementById("value9");
    l = document.getElementById("value10");
    m = document.getElementById("value11");
    n = document.getElementById("value12"); 
    o = document.getElementById("value13");
    p = document.getElementById("value14");
    q = document.getElementById("value15");
    r = document.getElementById("value16");
    s = document.getElementById("value17");
    t = document.getElementById("value18");
    u = document.getElementById("value19");
    v = document.getElementById("value20"); 
    w = document.getElementById("value21");
    x = document.getElementById("value22");
    y = document.getElementById("value23");
    z = document.getElementById("value24");

form.onsubmit = function () {
    var ab = value1.value; 	
	var cd = value2.value; 	
	var ef = value3.value; 	
	var gh = value4.value; 	
    var kl = value5.value; 	 
	var mn = value6.value;
	    
	    
	 var op = value7.value; 
	 var qr = value8.value; 	
     var tu = value9.value; 	
	 var vw = value10.value; 	 
     var xy = value11.value; 	 
     var bc = value12.value; 
     
     
	 var bd = value13.value; 	
	 var be = value14.value; 
     var bf = value15.value; 
     var bg = value16.value; 	
	 var bh = value17.value; 	 
     var bi = value18.value; 
     
     
     var bj = value19.value; 	 
	 var bk  = value20.value; 	
	 var bl = value21.value; 	 
     var bn = value22.value; 
     var bu = value23.value;
     var bx = value24.value;
	
	
	 document.getElementById('seat1').style.color = "blue";
	 document.getElementById('seat1').innerHTML = 'YES';
     document.getElementById('seat2').style.color = "blue";
     document.getElementById('seat2').innerHTML = 'YES';     
     document.getElementById('seat3').style.color = "blue";
   	 document.getElementById('seat3').innerHTML = 'YES';
     document.getElementById('seat4').style.color = "blue";
	 document.getElementById('seat4').innerHTML = 'YES';
     document.getElementById('seat5').style.color = "blue";
	 document.getElementById('seat5').innerHTML = 'YES';
	 document.getElementById('seat6').style.color = "blue";
	 document.getElementById('seat6').innerHTML = 'YES';
 
 
 if (ab >= op) {
	 document.getElementById('seat7').style.color = "red";
     document.getElementById('seat7').innerHTML = 'NO';
	 } 
else {
      document.getElementById('seat7').style.color = "blue";
      document.getElementById('seat7').innerHTML = 'YES';
  }
if (op >= bd) {
     document.getElementById('seat13').style.color = "red";
     document.getElementById('seat13').innerHTML = 'NO';
 }
else {
     document.getElementById('seat13').style.color = "blue";
     document.getElementById('seat13').innerHTML = 'YES';
 }
if (bd >= bj) {
	 document.getElementById('seat19').style.color = "red";	  
     document.getElementById('seat19').innerHTML = 'NO';
 }
else {
     document.getElementById('seat19').style.color = "blue";
     document.getElementById('seat19').innerHTML = 'YES';
 }
 
 
 
 

if (cd >= qr) {
    document.getElementById('seat8').style.color = "red";
    document.getElementById('seat8').innerHTML = 'NO';
}
else {
     document.getElementById('seat8').style.color = "blue";
     document.getElementById('seat8').innerHTML = 'YES';
 }

if (qr >= be) {
	 document.getElementById('seat14').style.color = "red";  
     document.getElementById('seat14').innerHTML = 'NO';
 }
else {
     document.getElementById('seat14').style.color = "blue";
     document.getElementById('seat14').innerHTML = 'YES';
 }
if (be >= bk) {
	 document.getElementById('seat20').style.color = "red";
     document.getElementById('seat20').innerHTML = 'NO';
 }
else {
     document.getElementById('seat20').style.color = "blue";
     document.getElementById('seat20').innerHTML = 'YES';
 }





if (ef >= tu) {
      document.getElementById('seat9').style.color = "red";	  
      document.getElementById('seat9').innerHTML = 'NO';
 }
else {
      document.getElementById('seat9').style.color = "blue";
      document.getElementById('seat9').innerHTML = 'YES';
 }

if (tu >= bf) {
	 document.getElementById('seat15').style.color = "red";  
     document.getElementById('seat15').innerHTML = 'NO';
 }
else {
     document.getElementById('seat15').style.color = "blue";
     document.getElementById('seat15').innerHTML = 'YES';
 }

if (bf >= bl) {
     document.getElementById('seat21').style.color = "red";
	 document.getElementById('seat21').innerHTML = 'NO';
 }
else {
     document.getElementById('seat21').style.color = "blue";
     document.getElementById('seat21').innerHTML = 'YES';
 }







if (gh >= vw) {   
	 document.getElementById('seat10').style.color = "red";
     document.getElementById('seat10').innerHTML = 'NO';
 }
else {
     document.getElementById('seat10').style.color = "blue";
     document.getElementById('seat10').innerHTML = 'YES';
 }

if (vw >= bg) {
     document.getElementById('seat16').style.color = "red";
     document.getElementById('seat16').innerHTML = 'NO';
 }
else {
     document.getElementById('seat16').style.color= "blue";
     document.getElementById('seat16').innerHTML = 'YES';
 }

if (bg >= bn) {
	 document.getElementById('seat22').style.color = "red";
     document.getElementById('seat22').innerHTML = 'NO';
 }
else {
     document.getElementById('seat22').style.color = "blue";
     document.getElementById('seat22').innerHTML = 'YES';
 }
 
 
 
 
 
 
if (kl >= xy) {   
	 document.getElementById('seat11').style.color = "red";
     document.getElementById('seat11').innerHTML = 'NO';
 }
else {
     document.getElementById('seat11').style.color = "blue";
     document.getElementById('seat11').innerHTML = 'YES';
 }

if (xy >= bh) {
     document.getElementById('seat17').style.color = "red";
     document.getElementById('seat17').innerHTML = 'NO';
 }
else {
     document.getElementById('seat17').style.color= "blue";
     document.getElementById('seat17').innerHTML = 'YES';
 }

if (bh >= bu) {
	 document.getElementById('seat23').style.color = "red";
     document.getElementById('seat23').innerHTML = 'NO';
 }
else {
     document.getElementById('seat23').style.color = "blue";
     document.getElementById('seat23').innerHTML = 'YES';
 }
 
 
 
 
 
 
if (mn >= bc) {   
     document.getElementById('seat12').style.color = "red";
     document.getElementById('seat12').innerHTML = 'NO';
 }
else {
     document.getElementById('seat12').style.color = "blue";
     document.getElementById('seat12').innerHTML = 'YES';
 }

if (bc >= bi) {
     document.getElementById('seat18').style.color = "red";
     document.getElementById('seat18').innerHTML = 'NO';
 }
else {
     document.getElementById('seat18').style.color= "blue";
     document.getElementById('seat18').innerHTML = 'YES';
 }

if (bi >= bx) {
     document.getElementById('seat24').style.color = "red";
     document.getElementById('seat24').innerHTML = 'NO';
 }
else {
     document.getElementById('seat24').style.color = "blue";
     document.getElementById('seat24').innerHTML = 'YES';
 }
 
 
 

 return false; 
}



