/*
Software License Agreement (BSD License)
http://taffydb.com/?oa=agree
1.7.3
*/
if(typeof TAFFY=="undefined"||!TAFFY){var TAFFY=function(g){var k={template:null},e=TAFFY,n=(e.isString(g))?e.JSON.parse(g):g,i=n,a=[],o=true,j=false;var m=function(q,p){var p=p||k.template;if(!TAFFY.isNull(p)){for(var f=0,r=q.length;f<r;f++){i[q[f]]=TAFFY.mergeObj(i[q[f]],p)}}};var h=function(){a=[];for(var f=0,p=i.length;f<p;f++){a[a.length]=f}};h();var l={pickTest:function(p){var f=(p.indexOf("!")===0)?j:o;if(!f){p=p.substring(1,p.length)}return{test:(p=="equal")?"is":(p=="notequal")?"not":(p=="startswith")?"starts":(p=="endswith")?"ends":(p=="greaterthan")?"gt":(p=="lessthan")?"lt":(p=="regexppass")?"regex":p,mode:(f)?{s:o,f:j}:{s:j,f:o}}},run:function(q,r,p,f){return((q=="regex")?(p.test(r)):(q=="lt")?(r<p):(q=="gt")?(r>p):(q=="lte")?(r<=p):(q=="gte")?(r>=p):(q=="starts")?(r.indexOf(p)===0):(q=="ends")?(r.substring((r.length-p.length))==p):(q=="like")?(r.indexOf(p)>=0):(q=="is")?(r==p):(q=="has")?(e.has(r,p)):(q=="hasAll")?(e.hasAll(r,p)):(q=="length")?(l.length(r,p,f)):l[q](r,p))?f.s:f.f},length:function(t,p,f){var s=(!e.isUndefined(t.length))?t.length:(!e.isUndefined(t.getLength))?t.getLength():0;if(e.isObject(p)){for(var r in p){if(p.hasOwnProperty(r)){var q=l.pickTest(r);return l.run(q.test,s,p[r],q.mode)?o:j}}}return s==p?f.s:f.f}};(function(){for(var f in TAFFY){if(TAFFY.hasOwnProperty(f)&&f.indexOf("is")===0){(function(p){l["is"+p]=function(s,r,q){return(TAFFY["is"+p](s)==r)?o:j}}(f.substring(2,f.length)))}}}());var d=function(p,q){var r=[];if(!e.isArray(p)&&TAFFY.isNumber(p)){r[r.length]=p}else{if(e.isArray(p)){r=p}else{if(e.isObject(p)){r=q(p)}else{if(!e.isArray(p)&&!e.isNumber(p)){r=a}}}}return r};var b=function(r){var p=[0],q="none",r=r+"";if(!e.isNull(r)&&!e.isUndefined(r)){for(var t=0,f=r.length;t<f;t++){var s=r.slice(t,(t+1));if(e.isNumeric(s)){if(q!="number"){p[p.length]=s;q="number"}else{p[(p.length-1)]=p[(p.length-1)]+""+s}}else{if(q!="string"){p[p.length]=s;q="string"}else{p[(p.length-1)]=p[(p.length-1)]+s}}}for(var t=0,f=p.length;t<f;t++){if(e.isNumeric(p[t])){p[t]=parseFloat(p[t])}}}else{p[p.length]=null}return p};var c=function(q){var r=[],p=[];if(e.isString(q)){p[0]=q}else{if(e.isObject(q)){p=[q]}else{p=q}}if(e.isArray(p)){for(var f=0,t=p.length;f<t;f++){if(e.isString(p[f])){if(e.isString(i[0][p[f]])){r[r.length]={sortCol:p[f],sortDir:"asc",type:"string"}}else{r[r.length]={sortCol:p[f],sortDir:"asc",type:"number"}}}else{if(e.isObject(p[f])){for(var s in p[f]){if(p[f].hasOwnProperty(s)){if(e.isString(i[0][p[f].sortCol])){r[r.length]={sortCol:s,sortDir:p[f][s],type:"string"}}else{r[r.length]={sortCol:s,sortDir:p[f][s],type:"number"}}}}}}}}return function(E,D){var w=0,v=E,u=D,F,C;for(var G=0,A=r.length;G<A;G++){if(w===0){F=v[r[G].sortCol];C=u[r[G].sortCol];if(r[G].type=="string"){F=(e.isString(F))?F.toLowerCase():F;C=(e.isString(C))?C.toLowerCase():C}if(r[G].sortDir=="desc"){if(e.isNull(C)||e.isUndefined(C)||C<F){w=-1}else{if(e.isNull(F)||e.isUndefined(F)||F<C){w=1}}}else{if(r[G].sortDir=="logical"){F=b(F);C=b(C);for(var B=0,H=C.length;B<H;B++){if(F[B]<C[B]&&B<F.length){w=-1;break}else{if(F[B]>C[B]){w=1;break}}}if(F.length<C.length&&w==0){w=-1}else{if(F.length>C.length&&w==0){w=1}}}else{if(r[G].sortDir=="logicaldesc"){F=b(F);C=b(C);for(var B=0,H=C.length;B<H;B++){if(F[B]>C[B]&&B<F.length){w=-1;break}else{if(F[B]<C[B]){w=1;break}}}if(F.length<C.length&&w==0){w=1}else{if(F.length>C.length&&w==0){w=-1}}}else{if(e.isNull(F)||e.isUndefined(F)||F<C){w=-1}else{if(e.isNull(C)||e.isUndefined(C)||F>C){w=1}}}}}}}return w}};return{TAFFY:true,getLength:function(){return i.length},lastModifyDate:new Date(),find:function(t,C){var p=0;if(e.isArray(C)){var r=C}else{var r=a}if(e.isFunction(t)){var s=[];for(var w=0,u=r.length;w<u;w++){if(t(i[w],w)){s[s.length]=r[w]}}r=s}else{for(var v in t){if(t.hasOwnProperty(v)){var q="is",f="",B=v,y={s:o,f:j},A={};if(e.isObject(t[v])){for(var z in t[v]){if(t[v].hasOwnProperty(z)){A=l.pickTest(z);q=A.test;y=A.mode;f=t[v][z]}}}else{f=t[v]}var s=[];for(var w=0,u=r.length;w<u;w++){if(e.isArray(f)&&q!="isSameArray"&&q!="hasAll"){if(y.s){for(var x=0;x<f.length;x++){if(l.run(q,i[r[w]][B],f[x],y)){s[s.length]=r[w]}}}else{var A=1;for(var x=0;x<f.length;x++){if(!l.run(q,i[r[w]][B],f[x],y)){A=0}}if(A==1){s[s.length]=r[w]}}}else{if(e.isFunction(f)&&f(i[r[w]][B],w)){s[s.length]=r[w]}else{if(l.run(q,i[r[w]][B],f,y)){s[s.length]=r[w]}}}}r=s}}}r=e.gatherUniques(r);return r},remove:function(f){var s=d(f,this.find);for(var t=0,u=s.length;t<u;t++){if(!e.isNull(this.onRemove)){this.onRemove(i[s[t]])}i[s[t]]="remove"}var q=function(){for(var w=0,v=i.length;w<v;w++){if(i[w]==="remove"){return o}}return j};while(q()){for(var r=0,p=i.length;r<p;r++){if(i[r]==="remove"){i.splice(r,1);this.lastModifyDate=new Date()}}}h();return s},insert:function(q){var p=(TAFFY.isArray(q))?q:[q];for(var f=0;f<p.length;f++){if(!e.isNull(this.onInsert)){this.onInsert(p[f])}i[i.length]=(TAFFY.isNull(k.template))?p[f]:TAFFY.mergeObj(k.template,p[f]);this.lastModifyDate=new Date();a[a.length]=i.length-1}return[i.length-1]},update:function(q,p){var t=d(p,this.find),f=0;for(var u=0,r=t.length;u<r;u++){var s=t[u];if(!e.isNull(this.onUpdate)){this.onUpdate(q,i[s])}i[s]=e.mergeObj(i[s],q);f++}return t},get:function(f){var q=[];var s=d(f,this.find);for(var r=0,p=s.length;r<p;r++){q[q.length]=i[s[r]]}return q},first:function(f){var p=d(f,this.find);return(p.length>0)?i[p[0]]:false},last:function(f){var p=d(f,this.find);return(p.length>0)?i[p[(p.length-1)]]:false},stringify:function(f){return e.JSON.stringify(this.get(f))},orderBy:function(f){if(i.length>0){if(e.isFunction(f)){var p=f}else{var p=c(f)}i.sort(p);this.lastModifyDate=new Date()}},forEach:function(t,f){var s=d(f,this.find);var u;for(var p=0,q=s.length;p<q;p++){u=i[s[p]];var r=t(u,s[p]);if(e.isObject(r)){if(TAFFY.isSameObject(r,TAFFY.EXIT)){break}else{this.update(r,s[p])}}}},sum:function(p,f){var q=0;this.forEach(function(s){if(TAFFY.isNumeric(s[p])){q=q+s[p]}},f);return q},max:function(q,p){var r,s=0;this.forEach(function(f){if(s==1&&f[q]>r){r=f[q]}else{if(s==0){r=f[q];s=1}}},p);return r},min:function(q,p){var r,s=0;this.forEach(function(f){if(s==1&&f[q]<r){r=f[q]}else{if(s==0){r=f[q];s=1}}},p);return r},values:function(p,f){var q=[];this.forEach(function(s){q[q.length]=s[p]},f);return q},uniqueValues:function(p,f){var q=TAFFY([]);this.forEach(function(s){if(q.find({value:s[p]}).length==0){q.insert({value:s[p]})}},f);return q.values("value")},config:{set:function(p,f){k[p]=f;if(p=="template"&&!TAFFY.isNull(f)){m(a,f)}},get:function(f){return k[f]}},applyTemplate:function(p,f){var q=d(f,this.find);m(q,p)},onUpdate:null,onRemove:null,onInsert:null}};TAFFY.typeOf=function(a){var b=typeof a;if(b==="object"){if(a){if(typeof a.length==="number"&&!(a.propertyIsEnumerable("length"))&&typeof a.splice==="function"){b="array"}}else{b="null"}}return b};TAFFY.JSON=function(){function f(n){return n<10?"0"+n:n}Date.prototype.toJSON=function(){return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z"};var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function stringify(value,whitelist){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];if(c){return c}c=a.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)})+'"':'"'+value+'"';case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}if(typeof value.toJSON==="function"){return stringify(value.toJSON())}a=[];if(typeof value.length==="number"&&!(value.propertyIsEnumerable("length"))){l=value.length;for(i=0;i<l;i+=1){a.push(stringify(value[i],whitelist)||"null")}return"["+a.join(",")+"]"}if(whitelist){l=whitelist.length;for(i=0;i<l;i+=1){k=whitelist[i];if(typeof k==="string"){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+":"+v)}}}}else{for(k in value){if(typeof k==="string"){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+":"+v)}}}}return"{"+a.join(",")+"}"}return""}return{stringify:stringify,parse:function(text,filter){var j;function walk(k,v){var i,n;if(v&&typeof v==="object"){for(i in v){if(Object.prototype.hasOwnProperty.apply(v,[i])){n=walk(i,v[i]);if(n!==undefined){v[i]=n}else{delete v[i]}}}}return filter(k,v)}if(/^[\],:{}\s]*$/.test(text.replace(/\\./g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof filter==="function"?walk("",j):j}throw new SyntaxError("parseJSON")}}}();TAFFY.mergeObj=function(e,a){var d={};for(var b in e){if(e.hasOwnProperty(b)){d[b]=e[b]}}for(var b in a){if(a.hasOwnProperty(b)){d[b]=a[b]}}return d};TAFFY.getObjectKeys=function(a){var b=[];for(var c in a){if(a.hasOwnProperty(c)){b[b.length]=c}}b.sort();return b};TAFFY.isSameArray=function(b,a){return(TAFFY.isArray(b)&&TAFFY.isArray(a)&&b.join(",")==a.join(","))?true:false};TAFFY.isSameObject=function(d,b){var a=TAFFY;if(a.isObject(d)&&a.isObject(b)){if(a.isSameArray(a.getObjectKeys(d),a.getObjectKeys(b))){for(var c in d){if(d.hasOwnProperty(c)){if((a.isObject(d[c])&&a.isObject(b[c])&&a.isSameObject(d[c],b[c]))||(a.isArray(d[c])&&a.isArray(b[c])&&a.isSameArray(d[c],b[c]))||(d[c]==b[c])){}else{return false}}}}else{return false}}else{return false}return true};TAFFY.has=function(e,d){var b=TAFFY;var c=true;if(b.isTAFFY(e)){c=e.find(d);if(c.length>0){return true}else{return false}}else{switch(b.typeOf(e)){case"object":if(b.isObject(d)){for(var a in d){if(c===true&&d.hasOwnProperty(a)&&!b.isUndefined(e[a])&&e.hasOwnProperty(a)){c=b.has(e[a],d[a])}else{return false}}return c}else{if(b.isArray(d)){for(var a=0;a<d.length;a++){c=b.has(e,d[a]);if(c===true){return true}}}else{if(b.isString(d)&&!TAFFY.isUndefined(e[d])){return true}}}break;case"array":if(b.isObject(d)){for(var f=0;f<e.length;f++){c=b.has(e[f],d);if(c==true){return true}}}else{if(b.isArray(d)){for(var a=0;a<d.length;a++){for(var f=0;f<e.length;f++){c=b.has(e[f],d[a]);if(c==true){return true}}}}else{if(b.isString(d)){for(var f=0;f<e.length;f++){c=b.has(e[f],d);if(c==true){return true}}}}}break;case"string":if(b.isString(d)&&d==e){return true}break;default:if(b.typeOf(e)==b.typeOf(d)&&e==d){return true}break}}return false};TAFFY.hasAll=function(f,e){var c=TAFFY;if(c.isArray(e)){var b=true;for(var d=0,a=e.length;d<a;d++){b=c.has(f,e[d]);if(b==false){return b}}return true}else{return c.has(f,e)}};TAFFY.gatherUniques=function(b){var h=[];for(var f=0;f<b.length;f++){var e=true;for(var g=0;g<h.length;g++){if(h[g]==b[f]){e=false}}if(e==true){h[h.length]=b[f]}}return h};(function(a){for(var b=0;b<a.length;b++){(function(c){TAFFY["is"+c]=function(d){return(TAFFY.typeOf(d)==c.toLowerCase())?true:false}}(a[b]))}}(["String","Number","Object","Array","Boolean","Null","Function","Undefined"]));TAFFY.isNumeric=function(b){var c="0123456789";var a=true;for(var d=0;d<b.length&&a==true;d++){if(c.indexOf(b.charAt(d))==-1){return false}}return a};TAFFY.isTAFFY=function(a){return(TAFFY.isObject(a)&&a.TAFFY)?true:false};TAFFY.EXIT={EXIT:true}};