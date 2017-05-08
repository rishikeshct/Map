(function(window,google){
  var Mapster = (function(){
      function Mapster(element,opts){
        console.log("cdjcjisdji"+this);
        this.gMap = new google.maps.Map(element,opts);

      }
      Mapster.prototype = {
          zoom : function(level){
            if(level){
              this.gMap.setZoom(level);
            }
            else{
              return this.gMap.getZoom();
            }
          },
          _on : function(event,callback){
              google.maps.event.addListener(this.gMap,event,callback);
          }
      };
      return Mapster;
  }());

  Mapster.create = function(element,opts){
    return new Mapster(element,opts);
  };

  window.Mapster = Mapster;

}(window,google));
