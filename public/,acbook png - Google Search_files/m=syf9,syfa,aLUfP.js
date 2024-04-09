this._s=this._s||{};(function(_){var window=this;
try{
_.dsb=function(a){this.Im=a};
}catch(e){_._DumpException(e)}
try{
var esb=function(a){_.Wn.call(this,a.Ka);var b=this;this.window=a.service.window.get();this.wa=this.Im();this.oa=window.orientation;this.ka=function(){var c=b.Im(),d=b.dKb()&&90===Math.abs(window.orientation)&&b.oa===-1*window.orientation;b.oa=window.orientation;if(c!==b.wa||d){b.wa=c;d=_.n(b.Qe);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=new _.dsb(c);try{e(f)}catch(g){_.ca(g)}}}};this.Qe=new Set;this.window.addEventListener("resize",this.ka);this.dKb()&&this.window.addEventListener("orientationchange",
this.ka)};_.G(esb,_.Wn);esb.kb=_.Wn.kb;esb.Ga=function(){return{service:{window:_.Xn}}};esb.prototype.addListener=function(a){this.Qe.add(a)};esb.prototype.removeListener=function(a){this.Qe.delete(a)};
esb.prototype.Im=function(){if(fsb()){var a=_.Jl(this.window);a=new _.ql(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.Zb()||(_.ja()?fsb():this.window.visualViewport)?_.Jl(this.window):new _.ql(this.window.innerWidth,this.window.innerHeight);return a.height<a.width};esb.prototype.destroy=function(){this.window.removeEventListener("resize",this.ka);this.window.removeEventListener("orientationchange",this.ka)};var fsb=function(){return _.ja()&&_.bf.JH()&&!navigator.userAgent.includes("GSA")};
esb.prototype.Zb=function(){return _.gsb};esb.prototype.dKb=function(){return"orientation"in window};_.gsb=!1;_.Yn(_.jTa,esb);
_.gsb=!0;
}catch(e){_._DumpException(e)}
try{
_.y("aLUfP");

_.z();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
