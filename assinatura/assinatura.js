(function(){
var F="'Inter','Segoe UI',Helvetica,Arial,sans-serif";
var PAL={claro:{t1:'#111111',t2:'#52525C',t3:'#71717D',ac:'#10069F',ln:'#DFDFE5'},escuro:{t1:'#F5F5F7',t2:'#C6C6CE',t3:'#9B9BA6',ac:'#C0BBEF',ln:'#3A3A42'}};
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function telHref(t){return 'tel:'+String(t).replace(/[^0-9+]/g,'');}
function urlHref(u){u=String(u||'').trim();if(!u)return '';return /^https?:\/\//i.test(u)?u:'https://'+u;}
function build(d,mode){
 var P=PAL[mode],auto=mode==='claro',base=(d.base||'img/').replace(/\/?$/,'/');
 function tx(c,sz,lh,w,ex){return 'class="nj-'+c+'" style="font-family:'+F+';font-size:'+sz+'px;line-height:'+lh+'px;mso-line-height-rule:exactly;font-weight:'+w+';color:'+P[c]+';'+(ex||'')+'"';}
 function img(n,w,h,alt,href){function one(v,hide){return '<img src="'+base+n+'-'+v+'.png" width="'+w+'" height="'+h+'" alt="'+alt+'" class="'+(hide?'nj-dk':'nj-lt')+'" style="'+(hide?'display:none;mso-hide:all;max-height:0;overflow:hidden;':'display:block;')+'border:0;outline:none;width:'+w+'px;height:'+h+'px;">';}
  var s=auto?one('claro')+one('escuro',true):one('escuro');return href?'<a href="'+esc(href)+'" style="text-decoration:none;">'+s+'</a>':s;}
 function a(href,t,c){c=c||'t2';return '<a href="'+esc(href)+'" class="nj-'+c+'" style="color:'+P[c]+';text-decoration:none;">'+esc(t)+'</a>';}
 var site=urlHref(d.site), siteTxt=String(d.site||'').replace(/^https?:\/\//i,'').replace(/\/$/,'');
 var ic=[];if(site)ic.push(['icon-site','Site',site]);if(d.linkedin)ic.push(['icon-linkedin','LinkedIn',urlHref(d.linkedin)]);if(d.instagram)ic.push(['icon-instagram','Instagram',urlHref(d.instagram)]);
 var icons=ic.length?'<div style="padding-top:10px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>'+ic.map(function(x,i){return '<td style="'+(i<ic.length-1?'padding-right:10px;':'')+'">'+img(x[0],16,16,x[1],x[2])+'</td>';}).join('')+'</tr></table></div>':'';
 var lines='';
 if(d.telefone)lines+='<div '+tx('t2',12,20,400)+'>'+a(telHref(d.telefone),d.telefone)+'</div>';
 if(d.telefone2)lines+='<div '+tx('t2',12,20,400)+'>'+a(telHref(d.telefone2),d.telefone2)+'</div>';
 if(d.email)lines+='<div '+tx('t2',12,20,400)+'>'+a('mailto:'+d.email,d.email)+'</div>';
 if(site)lines+='<div '+tx('ac',12,20,600)+'>'+a(site,siteTxt,'ac')+'</div>';
 var body='<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">'+
 '<tr><td valign="top" style="padding-right:28px;">'+img('rubrica',200,47,'')+'<div style="padding-top:6px;"><div '+tx('t1',18,23,700,'letter-spacing:-0.3px;')+'>'+esc(d.nome)+'</div></div>'+(d.cargo?'<div '+tx('t2',13,18,400,'padding-top:2px;')+'>'+esc(d.cargo)+'</div>':'')+'</td>'+
 '<td valign="top" class="nj-bl" style="border-left:1px solid '+P.ln+';padding-left:28px;">'+img('logo',144,28,'nojurídico',site||'https://www.nojuridico.com.br')+'<div style="padding-top:14px;">'+lines+'</div>'+icons+'</td></tr>'+
 (d.referencia?'<tr><td colspan="2" style="padding-top:16px;"><div '+tx('t3',11,16,400,'font-style:italic;')+'>'+esc(d.referencia)+'</div></td></tr>':'')+
 (d.aviso?'<tr><td colspan="2" style="padding-top:10px;max-width:520px;"><div '+tx('t3',10,15,400)+'>'+esc(d.aviso)+'</div></td></tr>':'')+
 '</table>';
 return body;
}
function css(){var k=PAL.escuro,r='.nj-lt{display:none !important}.nj-dk{display:block !important;max-height:none !important}.nj-t1{color:'+k.t1+' !important}.nj-t2{color:'+k.t2+' !important}.nj-t3{color:'+k.t3+' !important}.nj-ac{color:'+k.ac+' !important}.nj-bl{border-left-color:'+k.ln+' !important}';
 return '<style>@media (prefers-color-scheme: dark){'+r+'}'+r.replace(/\.nj-/g,'[data-ogsc] .nj-')+'</style>';}
function page(d,mode){return '<!DOCTYPE html>\n<html lang="pt-BR"><head><meta charset="utf-8"><meta name="color-scheme" content="'+(mode==='claro'?'light dark':'dark')+'"><meta name="supported-color-schemes" content="'+(mode==='claro'?'light dark':'dark')+'"><title>Assinatura NoJurídico — '+esc(d.nome)+'</title>'+(mode==='claro'?css():'')+'</head>\n<body style="margin:0;padding:24px;background:transparent;">\n<!-- Copie a partir daqui -->\n'+build(d,mode)+'\n<!-- Até aqui -->\n</body></html>';}
window.NJAssinatura={build:build,page:page,css:css};
})();