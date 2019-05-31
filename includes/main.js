/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/

	makeGallery(pictures);
	addModalCloseHandler();
	
	

}

function makeGallery(imageArray){
	//use loops and jquery dom creation to make the html structure inside the #gallery section

	//create a loop to go through the pictures
		//create the elements needed for each picture, store the elements in variable

		//attach a click handler to the figure you create.  call the "displayImage" function.  

		//append the element to the #gallery section
	
		// debugger;
		var hiddenTemplateContents = $('#hidden-template').html();

		// console.log(hiddenTemplateContents);
		
		// console.log($hiddenTemplateContents);

		for(var x=0; x < imageArray.length; x++){
			var $hiddenTemplateContents = $(hiddenTemplateContents);

			var eachPicture = imageArray[x];
		
		
			
			var getImageName = eachPicture.slice(7);
		
			//$hiddenTemplateContents.find('figcaption').text(getImageName);
			$('figcaption', $hiddenTemplateContents).text(getImageName);
			var backgroundImageUrl = 'background-image:url(' +eachPicture+ ')';
			var eachFigure = $hiddenTemplateContents.attr('style', backgroundImageUrl);

			// console.log(eachFigure);
			$(eachFigure).on('click', displayImage);
			
			$('#gallery').append(eachFigure);


			
		}
		
		sortImages();

		
}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	

	$('img').on('click', function(){
			$(this).modal('hide');
		});
}

function displayImage(){
	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method

	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on

	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
			// debugger;
			// var imageAttribute = $(this).attr('style');
			var imageAttribute = $(this).css('background-image');
			console.log(imageAttribute);
			var imageUrl = imageAttribute.slice(27, -2);

			console.log(imageUrl);
		

			//slice to get image name//
	
			var imageName = imageUrl.slice(7, -4);
			console.log(imageName);

			$('.modal-title').text(imageName);

			$('.imageSource').attr('src', imageUrl);

			$('#galleryModal').modal('show');


}

function sortImages(){
	// debugger;

		$('#gallery').sortable({
				// appendTo: document.body
				appendTo: document.body
			});

		$('figure').sortable({
				// appendTo: document.body
				appendTo: '#gallery'
		});

		
		

	// // Getter
			// var appendTo = $('figure').sortable( 'option', 'appendTo');
			var appendTo = $('figure').sortable( 'option','appendTo');
 
	// // Setter
		// $( 'figure').sortable( 'option', 'appendTo', document.body);
		$( 'figure').sortable( 'option','appendTo', '#gallery');



}








