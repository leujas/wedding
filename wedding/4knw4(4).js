(function(window, $){
if(mejs.plugins===undefined){
mejs.plugins={};
mejs.plugins.silverlight=[];
mejs.plugins.silverlight.push({
types: []
});
}
mejs.HtmlMediaElementShim=mejs.HtmlMediaElementShim||{
getTypeFromFile: mejs.Utils.getTypeFromFile
};
if(mejs.MediaFeatures===undefined){
mejs.MediaFeatures=mejs.Features;
}
if(mejs.Utility===undefined){
mejs.Utility=mejs.Utils;
}
var init=MediaElementPlayer.prototype.init;
MediaElementPlayer.prototype.init=function (){
this.options.classPrefix='mejs-';
this.$media=this.$node=$(this.node);
init.call(this);
};
var ready=MediaElementPlayer.prototype._meReady;
MediaElementPlayer.prototype._meReady=function (){
this.container=$(this.container) ;
this.controls=$(this.controls);
this.layers=$(this.layers);
ready.apply(this, arguments);
};
MediaElementPlayer.prototype.getElement=function(el){
return $!==undefined&&el instanceof $ ? el[0]:el;
};
MediaElementPlayer.prototype.buildfeatures=function(player, controls, layers, media){
var defaultFeatures=[
'playpause',
'current',
'progress',
'duration',
'tracks',
'volume',
'fullscreen'
];
for (var i=0, total=this.options.features.length; i < total; i++){
var feature=this.options.features[i];
if(this['build' + feature]){
try {
if(defaultFeatures.indexOf(feature)===-1){
this['build' + feature](player, $(controls), $(layers), media);
}else{
this['build' + feature](player, controls, layers, media);
}} catch (e){
console.error('error building ' + feature, e);
}}
}};})(window, jQuery);