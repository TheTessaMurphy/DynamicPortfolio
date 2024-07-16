window.addEventListener('resize', function(event){
  if(document.documentElement.clientWidth < 700){
    //document.getElementById("sidenav").style.transition = "all 2s ease-in-out";
    document.getElementById("sidenav").style.height = "0";
  } else {
      document.getElementById("sidenav").style.height = "100%"; 
  }
});
  
function toggleFunction(){
  var nav = document.getElementsByName("nav");
  var element = document.getElementById("sidenav");
  var count = (nav.length * 4) * 2.2;
  var count = Math.round(count * 10) / 10;
  var ht = count.toString() + "vh";
  
  
 if(window.matchMedia("(max-width: 700px)")){   
   element.style.height = (element.style.height == ht) ? 0 : ht;
 } else{
   element.style.height = "100%";}
}

/*document.getElementById("sidenav").addEventListener("click", function() {
    
    var el = event.target.id;
    
    var nav = document.getElementsByName("nav");
      for(i=0; i <nav.length; i++){
        nav[i].classList.remove("active");
      }
      event.target.classList.add("active")
      //getHTML(el)
    });*/


function getHTML(el){
  
  nm = el + ".html";
  fetch(nm).then(function (response) {
  // The API call was successful!
  return response.text();
  }).then(function (html) {
    
  // This is the HTML from our response as a text string
  document.getElementById("main").innerHTML = html;
  console.log(html);
  }).then(function (){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }).then(function (){
    //toggleFunction(); 
  }).catch(function (err) {
  // There was an error
  console.warn('Something went wrong.', err);
  });
}

 window.addEventListener("DOMContentLoaded",  function(){ 
  
  var x = document.body.getElementsByClassName("sidenav");
    
  for(i=0; i < x.length; i++){
        alert("id")
        nav[i].classList.remove("active");
      }
  
  if ( document.URL.includes("index.html") ) {
    
    document.getElementById("index").classList.add("active");
  }else if (document.URL.includes("readWriteJSON.html")){
    document.getElementById("readWriteJSON").classList.add("active");
  }
  /*fetch("home.html").then(function (response) {
  return response.text();
  }).then(function (html) {
    
  // This is the HTML from our response as a text string
  document.getElementById("main").innerHTML = html;
  console.log(html);
  }).catch(function (err) {
  // There was an error
  console.warn('Something went wrong.', err);
  });*/
});


document.getElementbyID("but").addEventListener(click, function(){

  const listItems = document.querySelectorAll('.sidenav li');
  const count = listItems.length;
   var element = document.getElementById("sidenav");
   element.classList.toggle("grow");
});


   
  //element.style.height = ht;
  //element.style.height.toggle(ht);
  
 // element.style..toggle(ht);*/


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
  }).then(function (html) {
    
  // This is the HTML from our response as a text string
  document.getElementById("sidenav").innerHTML = html;
  console.log(html);
  }).catch(function (err) {
  // There was an error
  console.warn('Something went wrong.', err);
  }); 
}
