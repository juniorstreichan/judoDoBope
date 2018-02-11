$('nav a').click(function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
	targetOffset = $(id).offset().top;
	$('html,body').animate({scrollTop: targetOffset - 50}, 600);
});


// apoio
/* Type-1 */
$('#myCarousel').carousel({
	interval: 7000
})

$('.carousel-multi .item').each(function(){
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));
	
	for (var i=0;i<2;i++) {
		next=next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		
		next.children(':first-child').clone().appendTo($(this));
	}
});

$('#galeria-carousel-video').carousel({
    pause: true,
    interval: false
});

function mudadata(){
	moment.locale('pt-br');
	var div  = document.getElementById('calc-data');
	var dataProjeto = new Date('05/10/2010');
	var dataAtual = new Date('DD/MM/YYYY');




        var diff  = dataAtual.diff(dataProjeto, 'years');
        	div.innerHTML= (diff);

    }


////// 