$(".js-dropdown-toggle").click(function(o){o.stopPropagation(),$(".js-dropdown").is(":visible")?($(".js-dropdown").hide(),$(this).siblings(".js-dropdown").show()):$(this).siblings(".js-dropdown").show()}),$(document).click(function(o){$(o.target).closest(".js-dropdown").length||$(".js-dropdown").is(":visible")&&$(".js-dropdown").hide()});