var checkDevice={affiliateRedirect:!0,keepRegInfo(){var e=new URLSearchParams(window.location.search),i=e.get("affiliateCode"),t=e.get("r")||e.get("referralCode"),o={};i&&(o.affiliateCode=i),t&&(o.referralCode=t),Object.keys(o).length>0&&window.localStorage.setItem("reg_info",JSON.stringify(o))},init:function(){this.isIE();var e=window.location.pathname.replace(/^\//,"");this.equi(e)},isIE:function(){var e=navigator.userAgent,i=e.indexOf("Opera")>-1;e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1&&!i&&(new RegExp("MSIE (\\d+\\.\\d+);").test(e),parseFloat(RegExp.$1)<10&&alert("IE浏览器版本过低，请更新IE浏览器或使用其他浏览器,如果您使用的是搜狗或是360 浏览器，可以尝试切换极速模式"))},equi:function(e){var i=navigator.userAgent,t=/(?:Windows Phone)/.test(i),o=/(?:SymbianOS)/.test(i)||t,n=/(?:Android)/.test(i),a=/(?:Firefox)/.test(i),r=/(?:iPad|PlayBook)/.test(i)||n&&!/(?:Mobile)/.test(i)||a&&/(?:Tablet)/.test(i)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1,c=!(/(?:iPhone)/.test(i)&&!r||n||o||r),l=window.location.hostname.split("."),w=checkDevice.affiliateRedirect&&3===l.length&&!["www","preview"].includes(l[0]),d=e||"index",s=new URLSearchParams(window.location.search),g=window.location.origin,f=s.toString()?"?"+s.toString():"";checkDevice.affiliateRedirect&&(w&&(s.set("affiliateCode",l[0]),f=s.toString()?"?"+s.toString():"",g=window.location.origin.replace("//"+l[0]+".","//www.")),checkDevice.keepRegInfo());var h=s.has("r")||s.has("referralCode");if(h&&(d="register"),c)return w&&(window.stop(),window.location.replace(g+"/"+("index"===d?"":d)+f)),void(h&&"register"!==e&&(window.stop(),window.location.replace(g+"/register"+f)));if(window.stop(),"agent"===d)window.location.replace(g+"/m/"+d+f);else if(["index","register"].includes(d)){window.location.replace(g+{index:"/m/index.html",register:"/m/register"}[d]+f)}else window.location.replace(g+"/m/index.html"+f)}};checkDevice.init();