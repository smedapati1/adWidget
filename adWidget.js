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
  ad_text:'Hi there!',
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
  element_code += '<div style="float:left;width:100%"><p class = "ad_caption" style=" text-align: left;font-weight: bold;color:'+ document.getElementsByTagName('h1')[0].style.color+'">You Might Also Like</p></div><div style="float:left;clear:both;display:inline-block;width:100%">';
  var row_html='',ad_incrementor =0;

 for(var i=0;i<y;i++){
    row_html=' ';
    for(var j=0;j<x;j++){
      
      row_html += ad_incrementor> ad_library.length -1 ?'<figure class="ad_container"></figure>' :createAd(ad_incrementor,j==0?1:0);
      ad_incrementor ++;
   

    }

 
    element_code += row_html;
  }
  element_code += '</div><div style="ad_owner">Powered by MyAdCompany</div>'
  var ls = document.createElement('style');
  ls.innerHTML = ".ad_container-1,.ad_container-2,.ad_container-3{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;float:left;min-width:65px}.ad_container-1,.ad_container-2,.ad_container-3,.ad_container-4{font-size:calc(9px + .25vw);padding:0}.ad_container-1,.ad_container-2,.ad_container-3,.ad_container-4,.image_container{position:relative;overflow:hidden}.ad_container-1{width:100%;margin:0}.ad_container-2{width:49%;margin:5px}.ad_container-3{width:32.5%;margin:5px 0 5px 5px}.ad_container-4{-webkit-text-size-adjust:80%;-ms-text-size-adjust:80%;width:23%;margin:5px;float:left;min-width:50px}.ad_caption,.ad_owner{font-size:calc(9px + .75vw);-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-weight:700;float:left}.image_container{width:100%;min-width:65px;height:90%}.main_container{background-color:transparent;width:100%;height:100%;min-width:15%}.ad_owner{color:gray;width:100%;text-align:right}.ad_caption{width:50%;text-align:left}@media (max-width:550px){.ad_container-1,.ad_container-2,.ad_container-3,.ad_container-4{width:98%}}@media (min-width:550px) and (max-width:750px){.ad_container-2,.ad_container-3,.ad_container-4{width:49%}}@media (min-width:750px) and (max-width:1000px){.ad_container-3,.ad_container-4{width:32%}}@media (min-width:750px){.ad_container-4{width:24%}}";

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
  ad_html +='> <img src="' + ad_details.img_url +'" alt="Smiley face" class="image_container"> <figcaption><p style = "font-family:Arial;font-weight:bold ;color:'+document.getElementsByTagName('h1')[0].style.color+'">'+ ad_details.ad_text +'</p></figcaption> </figure></a>';
 return ad_html;
}
