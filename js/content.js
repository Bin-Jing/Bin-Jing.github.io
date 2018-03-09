var gallery = {
    albums : [
              {
              name : "Pet",
              thumbnail : "images/img_1.JPG",
              photos : [
                        {
                        src : "images/img_1.JPG",
                        },
                        {
                        src : "images/img_2.JPG",
                        },
                        {
                        src : "images/img_3.JPG",
                        },
                        {
                        src : "images/img_4.JPG",
                        },
                        {
                        src : "images/img_5.JPG",
                        },
                        {
                        src : "images/img_6.JPG",
                        },
                        {
                        src : "images/img_7.JPG",
                        },
                        {
                        src : "images/img_8.JPG",
                        },
                        {
                        src : "images/img_9.JPG",
                        },
                        {
                        src : "images/img_10.JPG",
                        }, 
                        {	
                        src : "images/img_11.JPG",
                        }, 
                        {	
                        src : "images/img_12.JPG",
                        } 
                        ]
              }
              
              ]
};

var photos_template;
var current_album = gallery.albums[0];
var current_photo = current_album.photos[0];

function showTemplate(template, data){
    var html    = template(data);
    ('#content').html(html);
}

$(document).ready(function(){
	
	source   = $("#photos-template").html();
	photos_template = Handlebars.compile(source);

    $("#photos-tab").click(function () {
		
        showTemplate(photos_template, current_album);

		$("#photos-tab").addClass("active");

	});
	

});

