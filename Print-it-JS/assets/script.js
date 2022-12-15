const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const firstBanner = slides[0];
const secondBanner = slides[1];
const thirdBanner = slides[2];
const fourthBanner = slides[3];
const firstImage = firstBanner["image"];
const secondImage = secondBanner["image"];
const thirdImage = thirdBanner["image"];
const fourthImage = fourthBanner["image"];

const bannerImage = [firstImage, secondImage, thirdImage, fourthImage];

const firstText = firstBanner["tagLine"];
const secondText = secondBanner["tagLine"];
const thirdText = thirdBanner["tagLine"];
const fourthText = fourthBanner["tagLine"];

const bannerText = [firstText, secondText, thirdText, fourthText]

const rightArrow = document.querySelector(".arrow_right");
const leftArrow = document.querySelector(".arrow_left");
const slideNumber = 3;

function setImage(img) {
	img.setAttribute('src', "./assets/images/slideshow/" + bannerImage[i])
}
function setText(txt) {
	txt.innerHTML = bannerText[i]
}

function setImageAndText(a, b) {
	setImage(a),
		setText(b)
}

let i = 0;
let image = document.querySelector('#banner img');
let texte = document.querySelector('#banner p');

rightArrow.addEventListener('click', function (event) {
	event.preventDefault();

	if (i < slideNumber) {
		i++
		setImageAndText(image, texte)
	} else if (i === slideNumber) {
		i = 0
		setImageAndText(image, texte)
	} else {
		return (undefined)
	}
});

leftArrow.addEventListener('click', function (event) {
	event.preventDefault();

	if (i === 0) {
		i = 3
		setImageAndText(image, texte)
	} else if (i === slideNumber) {
		i--
		setImageAndText(image, texte)
	} else if (i < slideNumber) {
		i--
		setImageAndText(image, texte)
	} else {
		return (undefined)
	}
})
	;