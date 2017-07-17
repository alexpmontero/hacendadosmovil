$(window).load(function() {
setTimeout(function(){
	$(".loader").fadeOut(200);
},5000);
});   

$(".btn_menu").click(function() {
	$("#menu_inicial").css({
    	"margin-left": "0"
	});
});

$(".a_btn_close_menu").click(function() {
	$("#menu_inicial").css({
    	"margin-left": "-100%"
	});
});



$("#a_btn_indice").click(function() {
	$("#sub_menu_indice").css({
    	"margin-left": "0"
	});
});

$(".a_indice").click(function() {
	$("#sub_menu_indice").css({
    	"margin-left": "-100%"
	});
	$("#menu_inicial").css({
    	"margin-left": "-100%"
	});
});

$("#btn_close_indice").click(function() {
	$("#sub_menu_indice").css({
    	"margin-left": "-100%"
	});
});



$("#a_btn_categorias").click(function() {
	$("#sub_menu_catego").css({
    	"margin-left": "0"
	});
});

$("#btn_close_categ").click(function() {
	$("#sub_menu_catego").css({
    	"margin-left": "100%"
	});
});


// ----- Botones de enlace a las categorias-------------
$("#a_categ_i").click(function() {
	$(".sub_menu_editorial").css({
    	"margin-left": "0"
	});
});

$("#btn_close_editorial").click(function() {
	$(".sub_menu_editorial").css({
    	"margin-left": "100%"
	});
});


$("#a_categ_ii").click(function() {
	$(".sub_menu_lienzos").css({
    	"margin-left": "0"
	});
});

$("#btn_close_lienzo").click(function() {
	$(".sub_menu_lienzos").css({
    	"margin-left": "100%"
	});
});



function cargasComun() {
	$("footer").load("footer.html");
}

function fancybox() {
	$(".videos").fancybox({
		autoSize:false,
			height:"50%",
			width:"100%"
	});

	$(".publicidad_img").fancybox({
		helpers	: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});
}


function slider() {
  $('.bxslider').bxSlider({
		auto: true,
		speed: 600,
		pager: false,
		adaptiveHeight: true,
		oneToOneTouch: false,
		preventDefaultSwipeX: false
  });

  var alto= $(window).height();

  $(".alto_slider").css({
  	"height": alto
  });

}

function btns_post() {

	$("#btn_post_editorial").click(function(a) {
		$(".sub_menu_editorial").css({
	    	"margin-left": "0"
		});
	});

	$(".btn_post_lienzo").click(function() {
		$(".sub_menu_lienzos").css({
	    	"margin-left": "0"
		});
	});

	$("#btn_post_agro").click(function() {
		alert("Post´s de Agroindustria");
	});

	$("#btn_post_estirpe").click(function() {
		alert("Post´s de Estirpe");
	});

	$("#btn_post_salud").click(function() {
		alert("Post´s de Salud");
	});

	$("#btn_post_perfiles").click(function() {
		alert("Post´s de Perfiles");
	});
}


function cargarEfectos() {
	cargasComun();
	slider();
	fancybox(); 
	btns_post();
}