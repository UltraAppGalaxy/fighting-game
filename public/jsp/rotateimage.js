var iCurrentImage = 0;
var arrImages = new Array();

arrImages[0] = new Image(411,295); arrImages[0].src = 'public/img/content_img_1.jpg';
arrImages[1] = new Image(411,295); arrImages[1].src = 'public/img/content_img_2.jpg';
arrImages[2] = new Image(411,295); arrImages[2].src = 'public/img/content_img_3.jpg';
arrImages[3] = new Image(411,295); arrImages[3].src = 'public/img/content_img_4.jpg';
arrImages[4] = new Image(411,295); arrImages[4].src = 'public/img/content_img_5.jpg';
arrImages[5] = new Image(411,295); arrImages[5].src = 'public/img/content_img_6.jpg';
arrImages[6] = new Image(411,295); arrImages[6].src = 'public/img/content_img_7.jpg';
arrImages[7] = new Image(411,295); arrImages[7].src = 'public/img/content_img_8.jpg';
arrImages[8] = new Image(411,295); arrImages[8].src = 'public/img/content_img_9.jpgimage) {
  if (image.src.length != 0) {
    if (document.layers) {
      document[id].background.src = image.src;
    }
    else if (document.all) {
      document.all[id].style.backgroundImage = 'url(' + image.src + ')';
    }
    else if (document.getElementById) {
      document.getElementById(id).style.backgroundImage = 'url(' + image.src + ')';
    }
  }
}

function setNextImage() {
	iCurrentImage = (iCurrentImage + 1) % arrImages.length;
	if (document.images) {
		setBackgroundImage('screenshot', arrImages[iCurrentImage]);
	}
}

setInterval("setNextImage()", 3000);
