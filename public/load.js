function getImports(){
 
  fetch("header.html").then(function (response) {
  return response.text();
  }).then(function (html) {
    
  // This is the HTML from our response as a text string
  document.getElementById("header").innerHTML = html;
  console.log(html);
  }).catch(function (err) {
  // There was an error
  console.warn('Something went wrong.', err);
  });

  fetch("nav.html").then(function (response) {
  return response.text();
  })
  
    .then(function (html) {
      // This is the HTML from our response as a text string
      document.getElementById("sidenav").innerHTML = html;
      console.log(html);
      })
  
    .then(function(){
      if(window.location.href.includes("index.html")){
        document.getElementById("index").setAttribute("class", "active");
      } else if (window.location.href.includes("readWriteJSON.html")){
        document.getElementById("readWriteJSON").setAttribute("class", "active")
      } else {document.getElementById("index").setAttribute("class", "active");}
  })
  
    .catch(function (err) {
  // There was an error
      console.warn('Something went wrong.', err);
  });
 
  fetch("footer.html").then(function (response) {
    return response.text();
    }).then(function (html) {
      
    // This is the HTML from our response as a text string
    document.getElementById("footer").innerHTML = html;
    console.log(html);
    }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
    });
  
}

function toggleFunction(){
  var nav = document.getElementsByName("nav");
  var element = document.getElementById("sidenav");
  var count = (nav.length * 4) * 2.3;
  var count = Math.round(count * 10) / 10;
  var ht = count.toString() + "vh";
  
  
 if(window.matchMedia("(max-width: 700px)")){   
   element.style.height = (element.style.height == ht) ? 0 : ht;
 } else{
   element.style.height = "100%";}
}

window.addEventListener('resize', function(event){
  if(document.documentElement.clientWidth < 700){
    //document.getElementById("sidenav").style.transition = "all 2s ease-in-out";
    document.getElementById("sidenav").style.height = "0";
  } else {
      document.getElementById("sidenav").style.height = "100%"; 
  }
});