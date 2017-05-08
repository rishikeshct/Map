(function(window,google,mapster){
var options = mapster.MAP_OPTIONS;
element = document.getElementById('map');
//map = new  google.maps.Map(element,options);
map = Mapster.create(element,options);
//map.gMap.setZoom(11);
//alert(map.gMap.getZoom());

//google.maps.event.addListener(map.gMap,'click',function(e){

//alert('click');
//});
map.zoom(18);
alert(map.zoom());
map._on('click',function(e){
  alert('click');
  console.log(e);
  console.log(this);
});
}(window,google,window.Mapster || (window.Mapster = {})));
