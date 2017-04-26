import Ember from 'ember';

export default Ember.Component.extend({
  
    didRender: function() {
       console.log(this.get("userCoord.currentLocation.coordinates")); 
       var coordinates = this.get("userCoord.currentLocation.coordinates");
        var myLatLng = {lat: coordinates[0], lng: coordinates[1]};
        var mapOptions = {
        center: myLatLng,
        zoom: 4
    };
    
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
     var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
}
});
