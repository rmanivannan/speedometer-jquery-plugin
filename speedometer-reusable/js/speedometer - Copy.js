/*!
	*speedometer.js
	*author: Manivannan R
	*project: Speedometer
*/
$(function(){

  var maxVal              = 180;	/**Max value of the meter*/
  var divFact             = 10;	/**Division value of the meter*/
  var dangerLevel         = 120;	/**more than this leval, color will be red*/
  var initDeg             = -45;	/**reading begins angle*/
  var maxDeg              = 270;	/**total angle of the meter reading*/
  var edgeRadius          = 150;	/**radius of the meter circle*/
  var speedNobeH          = 4;	/**speed nobe height*/
  var speedoNobeW         = 95;	/**speed nobe width*/
  var speedoNobeL         = 13;	/**speed nobe left position*/
  var indicatorRadius     = 125;	/**radius of indicators position*/
  var indicatorNumbRadius = 90;	/**radius of numbers position*/
  var speedPositionTxtWH  = 80;	/**speedo-meter current value cont*/
  var nobW                = 20;	/**indicator nob width*/
  var nobH                = 4;	/**indicator nob height*/
  var numbW               = 30;	/**indicator number width*/
  var numbH               = 16;	/**indicator number height*/
  var midNobW             = 10;	/**indicator mid nob width*/
  var midNobH             = 3;	/**indicator mid nob height*/
  var noOfSmallDiv        = 2;	/**no of small div between main div*/
	
	var speedInDeg;
  var noOfDev            = maxVal/divFact;
  var divDeg             = maxDeg/noOfDev;
  var speedBgPosY;
  var speedoWH           = edgeRadius*2;
  var speedNobeTop       = edgeRadius - speedNobeH/2;
  var speedNobeAngle     = initDeg;
  var speedPositionTxtTL = edgeRadius - speedPositionTxtWH/2;
	
	var tempDiv 			= '';
	
	var induCatorLinesPosY,induCatorLinesPosX,induCatorNumbPosY,induCatorNumbPosX;
	var induCatorLinesPosLeft,induCatorLinesPosTop,induCatorNumbPosLeft,induCatorNumbPosTop;
	
	
	function setCssProperty(){
		var tempStyleVar = [
			'<style>',
				'.envelope{',
					'width	:'+ speedoWH + 'px;',
					'height	:'+ speedoWH + 'px;',
				'}',
				'.speedNobe{',
					'height				:'+ speedNobeH + 'px;',
					'top				:'+ speedNobeTop + 'px;',
					'transform			:rotate('+speedNobeAngle+'deg);',
					'-webkit-transform	:rotate('+speedNobeAngle+'deg);',
					'-moz-transform		:rotate('+speedNobeAngle+'deg);',
					'-o-transform		:rotate('+speedNobeAngle+'deg);',
				'}',
				'.speedPosition{',
					'width	:'+speedPositionTxtWH + 'px;',
					'height	:'+speedPositionTxtWH + 'px;',
					'top	:'+speedPositionTxtTL + 'px;',
					'left	:'+speedPositionTxtTL + 'px;',
				'}',
				'.speedNobe div{',
					'width	:'+ speedoNobeW + 'px;',
					'left	:'+ speedoNobeL + 'px;',
				'}',			
				'.nob{',
					'width	:'+ nobW + 'px;',
					'height	:'+ nobH + 'px;',
				'}',
				'.numb{',
					'width	:'+ numbW + 'px;',
					'height	:'+ numbH + 'px;',
				'}',
				'.midNob{',
					'width	:'+ midNobW + 'px;',
					'height	:'+ midNobH + 'px;',
				'}',
			'</style>',
		].join('');
		$('.envelope').append(tempStyleVar);		
	}
	
	function changePosition(){		
		var speed = $("#textBox").val();
		if(speed > maxVal){
			speed = maxVal;
		}
		if(speed < 0 || isNaN(speed)){
			speed = 0;
		}
		speedInDeg = (maxDeg/maxVal)*speed + initDeg;
		
		$(".speedNobe").css({
			"-webkit-transform"	:'rotate('+speedInDeg+'deg)',
			"-webkit-transform"	:'rotate('+speedInDeg+'deg)',
			"-moz-transform"	:'rotate('+speedInDeg+'deg)',
			"-o-transform"		:'rotate('+speedInDeg+'deg)'
		});
		$(".speedPosition").html(speed);
		
		$(".envelope .nob,.envelope .numb").removeClass("bright");
		for(var i=0; i<=noOfDev; i++){
			if(speed >= i*divFact){
				$(".envelope .nob").eq(i).addClass("bright");
				$(".envelope .numb").eq(i).addClass("bright");
			}else{
				break;
			}
		}
	}
	for(var i=0; i<=noOfDev; i++){
		var curDig = initDeg + i*divDeg;
		var curIndVal = i*divFact;
		var dangCls = "";
		if(curIndVal >= dangerLevel){
			dangCls = "danger";
		}		
		var induCatorLinesPosY = indicatorRadius * Math.cos( 0.01746 * curDig);
		var induCatorLinesPosX = indicatorRadius * Math.sin( 0.01746 * curDig);
		
		var induCatorNumbPosY = indicatorNumbRadius * Math.cos( 0.01746 * curDig);
		var induCatorNumbPosX = indicatorNumbRadius * Math.sin( 0.01746 * curDig);
		
		if(i%noOfSmallDiv == 0){
			induCatorLinesPosLeft = (edgeRadius - induCatorLinesPosX )-2;
			induCatorLinesPosTop  = (edgeRadius - induCatorLinesPosY)-10;
			var tempDegInd = [
								'transform			:rotate('+curDig+'deg)',
								'-webkit-transform	:rotate('+curDig+'deg)',
								'-o-transform		:rotate('+curDig+'deg)',
								'-moz-transform		:rotate('+curDig+'deg)',
							].join(";");
			tempDiv += '<div class="nob '+dangCls+'" style="left:'+induCatorLinesPosTop+'px;top:'+induCatorLinesPosLeft+'px;'+tempDegInd+'"></div>';
			induCatorNumbPosLeft = (edgeRadius - induCatorNumbPosX) - (numbW/2);
			induCatorNumbPosTop  = (edgeRadius - induCatorNumbPosY) - (numbH/2);
			tempDiv += '<div class="numb '+dangCls+'" style="left:'+ induCatorNumbPosTop +'px;top:'+induCatorNumbPosLeft+'px;">'+ curIndVal +'</div>';
		}else{
			induCatorLinesPosLeft = (edgeRadius - induCatorLinesPosX )-(midNobH/2);
			induCatorLinesPosTop = (edgeRadius - induCatorLinesPosY)-(midNobW/2);
			var tempDegInd = [
								'transform			:rotate('+curDig+'deg)',
								'-webkit-transform	:rotate('+curDig+'deg)',
								'-o-transform		:rotate('+curDig+'deg)',
								'-moz-transform		:rotate('+curDig+'deg)',
							].join(";");
			tempDiv += '<div class="nob '+dangCls+' midNob" style="left:'+induCatorLinesPosTop+'px;top:'+induCatorLinesPosLeft+'px;'+tempDegInd+'"></div>';
			tempDiv += '<div class="numb"></div>';
		}	
	}
	$(".envelope").append(tempDiv);
	$("#textBox").keyup(changePosition);
	setCssProperty();
});