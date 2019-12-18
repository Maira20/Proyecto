/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
var cssId = 'myCss';
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'images/style.css';
    link.media = 'all';
    head.appendChild(link);
}

(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.$("video").append('<track label="Subtítulos en Español" kind="subtitles" srclang="es" src="images/captions-esp.vtt" default>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${video}", "click", function(sym, e) {
         if (sym.$("video")[0].paused) {
         	sym.$("video")[0].play();
         } else {
         	sym.$("video")[0].pause();
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'contenido_opciones'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${bt_opciones6}", "click", function(sym, e) {
         window.open("vt.zip", "_blank");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_opciones5}", "click", function(sym, e) {
         window.open("utilidades/software_lpp.zip", "_blank");
         
         

      });
      //Edge binding end

   })("contenido_opciones");
   //Edge symbol end:'contenido_opciones'

   //=========================================================
   
   //Edge symbol: 'menu'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${zona_sensible_inCopy}", "click", function(sym, e) {
         sym.play();
         sym.getComposition().getStage().$("video")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${zono_activa_overCopy2}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${zono_activa_overCopy3}", "mouseover", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${zona_sensible_outCopy}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 555, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("menu");
   //Edge symbol end:'menu'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-169258127");