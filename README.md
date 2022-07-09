Speedometer Javascript Plugin
=======================================

This component meant to create the speedometer with various divisions and start / end / danger ant etc point value.

Demo URL: http://rmanivannan.github.io/demos/speedometer-reusable/

## How to add this component in your app?
1] Add `speedometer.js` & `speedometer.css` into your project js and css folder.

2] Add the `<div id="speedometer-1"></div>` on to your html file with required ID attributs

3] Create instance of the spedometer 
```
    var speedoMeter1 = new speedometer({
      divFact:10, 
      initVal:30, 

      edgeRadius: 300, 
      indicatorRadius: 280, 
      indicatorNumbRadius:220,
      
      speedoNobeW: 250,
      id: 'mani-1'
    });
    
    document.getElementById('speedometer-1').innerHTML = '';
    document.getElementById('speedometer-1').append(speedoMeter1.elm);
    
    // Change Speed Value
    speedoMeter1.setPosition(40);
```

### Example Usage

```  
<html>
  <head>
  <link href="css/speedometer.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
  	<div id="speedometer-1"></div>
  </body>
  <script src="js/speedometer.js"></script>
  <script type="text/javascript">
    var speedoMeter1 = new speedometer({
      divFact:10, 
      initVal:30, 

      edgeRadius: 300, 
      indicatorRadius: 280, 
      indicatorNumbRadius:220,
      
      speedoNobeW: 250,
      id: 'mani-1'
    });
    
    document.getElementById('speedometer-1').innerHTML = '';
    document.getElementById('speedometer-1').append(speedoMeter1.elm);
    
    // Change Speed Value
    speedoMeter1.setPosition(40);
    
  </script>
</html>
```


### Configuration Options:

``` 
    id                  : 'speedometer-cnt-' + Math.floor(Math.random() * 100000) + 1,  
                                              /**Speedometer container id*/
    maxVal              : 180,                /**Max value of the meter*/
    divFact             : 10,                 /**Division value of the meter*/
    dangerLevel         : 120,                /**more than this leval, color will be red*/
    initDeg             : -45,                /**reading begins angle*/
    maxDeg              : 270,                /**total angle of the meter reading*/
    
    speedNobeH          : 4,                  /**speed nobe height*/
    speedoNobeW         : 95,                 /**speed nobe width*/
    speedoNobeL         : 13,                 /**speed nobe left position*/
    
    edgeRadius          : 150,                /**radius of the meter circle*/
    indicatorRadius     : 125,                /**radius of indicators position*/
    indicatorNumbRadius : 90,                 /**radius of numbers position*/
    
    speedPositionTxtWH  : 80,                 /**speedo-meter current value cont*/
    
    nobW                : 20,                 /**indicator nob width*/
    nobH                : 4,                  /**indicator nob height*/
    
    numbW               : 30,                 /**indicator number width*/
    numbH               : 16,                 /**indicator number height*/
    
    midNobW             : 10,                 /**indicator mid nob width*/
    midNobH             : 3,                  /**indicator mid nob height*/
    
    noOfSmallDiv        : 2,                  /**no of small div between main div*/
    multiplier          : 1,                  /**Center value multiplier e.g. 1 x 1000 RPM*/	
    
    gagueLabel          : 'km/h',             /**Label on guage Face*/	
    
    initVal             : 0,                  /**Initial value*/

    dangerColor         : '#FF113A',          /**Danger speed color (red)*/
    bgColor             : '#0F0F0F',          /**Speedometer background color */
    speedValBGColor     : '#191919',          /**Center speed value background color */
    speedValTxtColor    : '#fff',             /**Center speed value color */
    speedArrowColor     : '#48a3cb',          /**Speed indicator arrow color */
    nobNumbColor        : '#eee',             /**Indicator Nob number color around circle */
``` 
