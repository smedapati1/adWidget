/**
 * Created by smedapati on 2/18/2017.
 */


var x = 1,y = 4, d= '';

ScriptPath();
 
function ScriptPath() {
    var scriptPath = '';
    try {
      throw new Error();
    }
    catch(e) {
      var stackLines = e.stack.split('\n');
      console.log(stackLines);
      var callerIndex = 0;
      
      var em= stackLines[2].split('\:');
      for(var i=0;i<em.length;i++){
        if(em[i].indexOf("?")!=-1){
          var tempParams= em[i].split("?");
          var params=tempParams[1].split("_");
          x=params[0];
          y=params[1] ;
          d= params[2]+"_"+params[3];
        }
      }

     
    }
 };   
var ad_library= [{
  img_url:'./sample.png',
  ad_text:'Hi there',
  ad_hyperlink:'http://google.com'
},
{
  img_url:'./sample.png',
  ad_text:'Hi there',
  ad_hyperlink:'http://google.com'
},
{
  img_url:'./sample.png',
  ad_text:'Hi there',
  ad_hyperlink:'http://google.com'
},
{
  img_url:'./sample.png',
  ad_text:'Hi there',
  ad_hyperlink:'http://google.com'
},
{
  img_url:'./sample.png',
  ad_text:'Hi there',
  ad_hyperlink:'http://google.com'
}
];
//console.log(createAd(0));
createAdCanvas(x,y);

function createAdCanvas(x,y) {
  var element_code='';
  element_code += '<div><p class = "ad_caption" style=" text-align: left;font-weight: bold;color:'+ document.getElementsByTagName('h1')[0].style.color+'">You Might Also Like</p></div><div style="float:left;clear:both;display:inline-block;width:100%">';
  var row_html='',ad_incrementor =0;
console.log(x);
 // var ad_data='  <figure class="ad_container"> <img src="./featured2-cb0dc81d.jpg" alt="Smiley face" class="image_container"> <figcaption><p>Put your text here </p></figcaption> </figure>';
  for(var i=0;i<y;i++){
    row_html=' ';
    for(var j=0;j<x;j++){
     //code logic 1  : use this if you want to fill all x-y blocks with ads no matter how many or few ads you have
     // row_html += createAd(ad_incrementor);
      //next line would make sure that if you have 6 ad blocks   
     // ad_incrementor = ad_incrementor>= ad_library.length -1 ? 0 : ad_incrementor++;
//end code logic 1

//code logic 2 
 
      //next line would make sure that if you have 6 ad blocks   
      
      row_html += ad_incrementor> ad_library.length -1 ?'<figure class="ad_container"></figure>' :createAd(ad_incrementor,j==0?1:0);
      ad_incrementor ++;
   //end code logic 2

    }

    //row_html +=' </div>';
    element_code += row_html;
  }
  element_code += '</div><div><span class="ad_owner">Powered by MyAdCompany</span></div>'
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

function createAd(ad_index,newLine){
  var ad_details = ad_library[ad_index];
  image_width=100/x - 1;
  var containerClass = 'ad_container-'+x;
  var ad_html='<a href = "'+  ad_details.ad_hyperlink+'"><figure class="'+ containerClass +'" ';
 // if(newLine==1) ad_html+= 'style="float:left;clear:both"';
  ad_html +='> <img src="' + ad_details.img_url +'" alt="Smiley face" class="image_container"> <figcaption><p style = "font-family:Arial;font-weight:bold ;color:'+document.getElementsByTagName('h1')[0].style.color+'">'+ ad_details.ad_text +'</p></figcaption> </figure></a>';
 return ad_html;
}
