let main = async function() 
{
	let w = 700; 
	let h = 700;
    $('body').append('<div></div>');
    let pickBox = $('<canvas></canvas>');
    pickBox.attr("height", h);
    pickBox.attr("width", w);
    pickBox.appendTo('div');
};

$( document ).ready(main());