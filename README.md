Speedometer JQuery Plugin
=======================================

This component meant to create the speedometer with various divisions and start / end / danger ant etc point value.

##How to add this component in your app?

1] Add 'speedometer.js' & 'speedometer.css' into your project js and css folder.

2] Add the '<input id="myValues" />' on to your html file with required ID attributs

3] Call the spedometer method 'myfunc' as like '$("#myValues").myfunc({divFact:10,eventListenerType:'keyup'});'

###Demo URL
http://rmanivannan.github.io/demos/speedometer-reusable/

### Example Usage

```  
<html>
  <head>
  <link href="css/speedometer.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
  	<input id="myValues" /><br>
  	<input id="myValues2" />
  </body>
  <script src="js/jquery.js"></script>
  <script src="js/speedometer.js"></script>
  <script type="text/javascript">
  	$("#myValues").myfunc({divFact:10,eventListenerType:'keyup'});
  	$("#myValues2").myfunc({divFact:30});
  </script>
</html>
```

=========================================

###Configuration Options:

``` 
* maxVal              /**Max value of the meter*/
* divFact             /**Division value of the meter*/
* dangerLevel         /**more than this leval, color will be red*/
* initDeg             /**reading begins angle*/
* maxDeg              /**total angle of the meter reading*/
* edgeRadius          /**radius of the meter circle*/
* speedNobeH          /**speed nobe height*/
* speedoNobeW         /**speed nobe width*/
* speedoNobeL         /**speed nobe left position*/
* indicatorRadius     /**radius of indicators position*/
* indicatorNumbRadius /**radius of numbers position*/
* speedPositionTxtWH  /**speedo-meter current value cont*/
* nobW                /**indicator nob width*/
* nobH                /**indicator nob height*/
* numbW               /**indicator number width*/
* numbH               /**indicator number height*/
* midNobW             /**indicator mid nob width*/
* midNobH             /**indicator mid nob height*/
* noOfSmallDiv        /**no of small div between main div*/
* eventListenerType   /**no of small div between main div*/
``` 
