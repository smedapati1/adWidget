/**
 * Created by smedapati on 2/18/2017.
 */

var x = window.adWidget_x ? window.adWidget_x:1;
var y = window.adWidget_y ? window.adWidget_y:4;
var d= window.d ? window.d: 'WIDGET_abd0';

createAdCanvas(x,y);

function createAdCanvas(x,y) {
  var element_code='<div style="padding-right:5px;">';
  element_code += '<span style=" text-align: left;font-weight: bold;color:'+ document.getElementsByTagName('h1')[0].style.color+'">You Might Also Like</span>  <span class="ad_owner">Powered by MyAdCompany</span></div>';
  var row_html='';
  var ad_data='  <figure class="ad_container"> <img src="./featured2-cb0dc81d.jpg" alt="Smiley face" class="image_container"> <figcaption><p>Put your text here </p></figcaption> </figure>';
  for(var i=0;i<y;i++){
    row_html=' <div style="clear:both;">';
    for(var j=0;j<x;j++){
      row_html += ad_data;
    }
    row_html +=' </div>';
    element_code += row_html;
  }
  var ls = document.createElement('link');
  ls.rel = "stylesheet";
  ls.href = 'inde.css';
 document.getElementsByTagName('head')[0].appendChild(ls);
 console.log(document.getElementsByTagName('h1')[0].style.color);
 var div = document.createElement('div');
 div.className='main_container';
 div.innerHTML = element_code;
 document.getElementById(d).appendChild(div);

}