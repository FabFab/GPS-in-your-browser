/**
 * Fabien Vauthey
 * GPS-in-your-browser
 *
 * 2013-07-20 Tokyo
 * v1
 * @type {Object}
 */
var GPS = {

    position: {},
    default_position: {  // Shibuya
        "latitude": 35.6647,
        "longitude": 139.6982
    },

    callback: null,

    options: {
       enableHighAccuracy: true,
       timeout: 5000,
       maximumAge: 0
     },

    success: function(location) {
        GPS.position.latitude = location.coords.latitude;
        GPS.position.longitude = location.coords.longitude;
        console.log('Your current position is:');
        console.log('Latitude : ' + location.coords.latitude);
        console.log('Longitude: ' + location.coords.longitude);
//        console.log('More or less ' + location.coords.accuracy + ' meters.');
//        console.log(GPS.position);

        if (typeof GPS.callback == 'function') { // make sure the callback is a function
            GPS.callback.call(GPS); // brings the scope to the callback
        }

    },

    error: function(err){
        console.warn('ERROR(' + err.code + '): ' + err.message);

        GPS.position.latitude = GPS.default_position.latitude;
        GPS.position.longitude = GPS.default_position.longitude;

        if (typeof GPS.callback == 'function') { // make sure the callback is a function
            GPS.callback.call(GPS); // brings the scope to the callback
        }

    },


    get: function(callback)
    {
        GPS.callback = callback;

        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(GPS.success, GPS.error, GPS.options);
        }
        else
        {
            GPS.position.latitude = GPS.default_position.latitude;
            GPS.position.longitude = GPS.default_position.longitude;

            if (typeof GPS.callback == 'function') { // make sure the callback is a function
                GPS.callback.call(GPS); // brings the scope to the callback
            }
        }
    }
}
