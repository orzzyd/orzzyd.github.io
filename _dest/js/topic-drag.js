!function(){function e(){$(".always-topics-items").mousedown(function(e){e.preventDefault(),$(this).addClass("draging");var t=$(this).offset(),i=e.pageX-t.left,f=e.pageY-t.top,p=e.pageX;e.pageY;o=$(this),s=$(this).clone(!0).insertAfter($(this)).css("visibility","hidden").hide(),$(document).mousemove(function(e){e.preventDefault(),o.appendTo(o.parent()),o.css({position:"fixed",left:e.pageX-i-$(document).scrollLeft(),top:e.pageY-f-$(document).scrollTop()}),e.pageX-p<=135&&e.pageX-p>=-135&&o.offset().top>=250&&o.offset().top<=500?(s.show(),o.offset().top>=250&&o.offset().top<330&&(n=0),o.offset().top>=330&&o.offset().top<400&&(n=1),o.offset().top>=400&&o.offset().top<=500&&(n=2),s.appendTo(s.parent()),s.insertBefore(s.parent().children().eq(n))):s.hide()})})}function t(){$(document).mouseup(function(e){e.preventDefault(),$(".always-topics-items").removeClass("draging"),$(document).unbind("mousemove"),s&&s.css("visibility","visible").show(),o.remove()})}$(document).ready(function(){e(),t()});var o=null,s=null,n=-1}();