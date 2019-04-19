async function drawImages(cont) 
{
    let first = await getPicture(1127163);
    await drawImg(0, 0, first, cont);
	let second = await getPicture(1065412);
    await drawImg(350, 0, second, cont);
	let third = await getPicture(1111680);
    await drawImg(0, 350, third, cont);
    let fourth = await getPicture(1127161);
    await drawImg(350, 350, fourth, cont);
};

async function getPicture(collection) 
{
	let pickLink = `https://source.unsplash.com/collection/${collection}/350x350`;
    let result = await fetch(pickLink);
    return await result.blob();
};

let drawImg = async function(x, y, pick, cont) 
{
    let	img = await createImageBitmap(pick);
    cont.drawImage(img, x, y);
};

let main = async function() 
{
	let w = 700; 
	let h = 700;
	
    $('body').append('<div></div>');
    let pickBox = $('<canvas></canvas>');
    pickBox.attr("height", h);
    pickBox.attr("width", w);
    pickBox.appendTo('div');
	let cont = pickBox[0].getContext('2d');
	drawImages(cont);
};

$( document ).ready(main());