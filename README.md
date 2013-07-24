GPS-in-your-browser
===================

Simple JS functions to integrate localization in a web browser
The web browser will prompt the user if he accepts to be geo localized. 

Use: 

```
GPS.get();
[...]
var latitude = GPS.position.latitude;
var longitude = GPS.position.longitude;

```

You can use a callback as follow, to be called once the localization has been validated by the user and done. Or not: use GPS.default_position. 


```
GPS.get(init);

function init() {
    var latitude = GPS.position.latitude;
    var longitude = GPS.position.longitude;
    [...]
}

```

Have fun!
