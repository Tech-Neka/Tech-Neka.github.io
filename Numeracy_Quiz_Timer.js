
// Set the date were counting down to 
  let  dt = new Date();
 dt = new Date(dt.getTime() + 20 * 60 * 1000);
    
// Update the count down every 1 second
    
    function start() {
var x = setInterval(function () {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = dt - now;



    
  // Time calculations - days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));  
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
  // Output the result- an element id="demo"
  document.getElementById("demo").innerHTML = minutes + ":" + seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
      alert('Its Time to Submit Your Work');
   // document.getElementById("demo").innerHTML = "Done";
  }

}, 1000)}

