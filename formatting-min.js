d=(e=>e.getDate()>9?e.getDate():"0"+String(e.getDate())),D=(e=>{return["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"][e.getDay()]}),j=(e=>e.getDate()),l=(e=>{return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]}),N=(e=>0==e.getDay()?7:e.getDay()),S=(e=>{return[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,24,25,26,27,28,29,30].includes(e.getDate())?"th":"1"==String(e.getDate()).charAt(e.getDate().length-1)?"st":"2"==String(e.getDate()).charAt(e.getDate().length-1)?"nd":"rd"}),w=(e=>e.getDay()),z=(e=>{var t=new Date(e.getFullYear(),0,0),r=e-t+60*(t.getTimezoneOffset()-e.getTimezoneOffset())*1e3;return Math.floor(r/864e5)}),W=(e=>{e.setUTCDate(e.getUTCDate()+4-(e.getUTCDay()||7));var t=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e-t)/864e5+1)/7)}),F=(e=>{return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]}),m=(e=>e.getMonth()+1>9?e.getMonth()+1:"0"+String(e.getMonth()+1)),M=(e=>{return["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][e.getMonth()]}),n=(e=>e.getMonth()+1),t=(e=>new Date(e.getFullYear(),e.getMonth()+1,0).getDate()),L=(e=>{var t=e.getFullYear();return t%100==0?t%400==0:t%4==0}),o=(e=>z(e)<7&&W(e)>50?e.getFullYear()-1:(z(e)>350&&W(e),e.getFullYear())),Y=(e=>e.getFullYear()),y=(e=>String(e.getFullYear()).substr(2)),a=(e=>e.getHours()<12?"am":"pm"),A=(e=>e.getHours()<12?"AM":"PM"),g=(e=>e.getHours()>12?e.getHours()-12:e.getHours()),G=(e=>e.getHours()),h=(e=>g(e)<10?"0"+g(e):g(e)),H=(e=>e.getHours()<10?"0"+String(e.getHours()):e.getHours()),i=(e=>e.getMinutes()<10?"0"+String(e.getMinutes()):e.getMinutes()),K=(e=>e.getMinutes()),s=(e=>e.getSeconds()<10?"0"+String(e.getSeconds()):e.getSeconds()),P=(e=>e.getSeconds()),v=(e=>3==e.getMilliseconds().length?e.getMilliseconds():2==e.getMilliseconds().length?String(e.getMilliseconds())+"0":String(e.getMilliseconds())+"00"),e=(e=>String(e).split("(").pop().split(")")[0]),T=(t=>{var r=e(t),g="";return r.split(" ").forEach(e=>{g+=e.charAt(0)}),g}),Z=(e=>e.getTimezoneOffset()),I=(e=>{var t=Y(e),r=new Date(t,0,1),g=new Date(t,6,1);return Z(e)<Math.max(Z(r),Z(g))}),c=(e=>{const t=Y(e)+"-"+m(e)+"-"+d(e)+"T",r=G(e)+":"+i(e)+":"+s(e)+"."+v(e);var g=Z(e)>=0?"+":"-";return Z(e)>59?(g+=Math.floor(Z(e)/60)<10?"0"+String(Math.floor(Z(e)/60)):Math.floor(Z(e)),g+=":",g+=Z(e)%60<10?"0"+String(Z(e)%60):Z(e)%60):(g+="00:",g+=Z(e)<10?"0"+String(Z(e)):Z(e)),t+r+g}),r=(e=>e),U=(e=>Math.round(e.getTime()/1e3)),module.exports={d:d,D:D,j:j,l:l,N:N,S:S,w:w,z:z,W:W,F:F,M:M,m:m,n:n,t:t,L:L,o:o,Y:Y,y:y,a:a,A:A,g:g,G:G,h:h,H:H,i:i,K:K,s:s,P:P,v:v,e:e,T:T,Z:Z,I:I,c:c,r:r,U:U};