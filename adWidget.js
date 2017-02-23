/**
 * Created by smedapati on 2/18/2017.
 */

var x = window.adWidget_x ? window.adWidget_x:1;
var y = window.adWidget_y ? window.adWidget_y:4;
var d= window.d ? window.d: 'WIDGET_abd0';
var ad_library= [{
  img_url:'./featured2-cb0dc81d.jpg',
  ad_text:'HI there 1',
  ad_hyperlink:'http://google.com'
},
{
  img_url:'./featured2-cb0dc81d.jpg',
  ad_text:'HI there',
  ad_hyperlink:'http://google.com'
},
{
  img_url:'./featured2-cb0dc81d.jpg',
  ad_text:'HI there',
  ad_hyperlink:'http://google.com'
},
{
  img_url:'./featured2-cb0dc81d.jpg',
  ad_text:'HI there',
  ad_hyperlink:'http://google.com'
}
];
//console.log(createAd(0));
createAdCanvas(x,y);

function createAdCanvas(x,y) {
  var element_code='<div style="padding-right:5px;">';
  element_code += '<span style=" text-align: left;font-weight: bold;color:'+ document.getElementsByTagName('h1')[0].style.color+'">You Might Also Like</span>  <span class="ad_owner">Powered by MyAdCompany</span></div>';
  var row_html='',ad_incrementor =0;

  var ad_data='  <figure class="ad_container"> <img src="./featured2-cb0dc81d.jpg" alt="Smiley face" class="image_container"> <figcaption><p>Put your text here </p></figcaption> </figure>';
  for(var i=0;i<y;i++){
    row_html=' <div style="clear:both;">';
    for(var j=0;j<x;j++){
     //code logic 1  : use this if you want to fill all x-y blocks with ads no matter how many or few ads you have
     // row_html += createAd(ad_incrementor);
      //next line would make sure that if you have 6 ad blocks   
     // ad_incrementor = ad_incrementor>= ad_library.length -1 ? 0 : ad_incrementor++;
//end code logic 1

//code logic 2 
 
      //next line would make sure that if you have 6 ad blocks   
      
      row_html += ad_incrementor> ad_library.length -1 ?'<figure class="ad_container"></figure>' :createAd(ad_incrementor);
      ad_incrementor ++;
   //end code logic 2

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

function createAd(ad_index){
  var ad_details = ad_library[ad_index];
  console.log(ad_details);
   var ad_html='<figure class="ad_container"> <img src="' + ad_details.img_url +'" alt="Smiley face" class="image_container"> <figcaption><a href = "'+
   ad_details.ad_hyperlink + '">'+ ad_details.ad_text +'</a></figcaption> </figure>';
 return ad_html;
}