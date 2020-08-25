
$("body")
	.css({
		"margin": "0",
		"font-family": "Montserrat"

	});

//Header

$("body")
	.prepend("<div></div>");
$("div")
	.addClass("header");
$(".header")
	.html("TESLA")
	.css("display", "block");

//Title

$("<div></div>")
	.insertAfter( $(".header") )
	.addClass("title");
$(".title")
	.css({
		"text-align": "center",
	    "color": "#333333",
	    "filter": "saturate(50%)",
	    "display": "block"
	});

$(".title")
	.prepend("<h1></h1>");

$("h1")
	.html("Tesla")
	.css({
		"font-size": "23px",
	    "font-weight": "300",
	    "margin": "4px 0 0 0",
	    "line-height": "1"
	});


$("<h2></h2>")
	.insertAfter( $("h1"))
	.html("Roadster")
	.css({
		"font-size": "50px",
	    "margin-top": "5px",
	    "font-weight": "500",
	    "line-height": "1",
	    "margin-bottom": "14px"
	});

$("<h3></h3>")
	.insertAfter( $("h2"))
	.addClass("colors")
	.html("Colors");

$(".colors")
	.css({
    "font-size": "23px",
    "font-weight": "300",
    "margin-top": "5px",
    "line-height": "1",
    "color": "#f35626",
	})

//Slideshow

$("<div></div>")
	.insertAfter( $(".title") )
	.addClass("slideshow-container");
$(".slideshow-container")
	.css({
		"max-width": "1000px",
	    "position": "relative",
	    "margin": "auto"
	});

//Color-picker

$("<div></div>")
	.insertAfter( $(".slideshow-container") )
	.addClass("color-picker");
$(".color-picker")
	.css({
	"margin": "20px 10px 60px 10px",
    "text-align": "center",
    "display": "block"
	});


async function colorPicker (URL) {

	fetch(URL)
		.then(response => response.json())
		.then(json => {

			addElements(json);
			
			addText();


			$("span.solid-black").addClass("active");

			$("div.solid-black")
				.removeClass("noshow")
				.addClass("show");


			$("span").click(function () {

				$("span.active").removeClass("active");
				
				$(this).addClass("active");

				let x =  $(this)[0].className.split(" ")[1];

				let list = $(".slideshow-container div");


				for (let element of list) {

					if (element.className.split(" ")[0] == x) {

						$("div.show")
							.removeClass("show")
							.addClass("noshow");

						element.classList.remove("noshow");
						element.classList.add("show");

					}

				}

			})

		})

}

function addElements (obj) {


	for (let key of Object.keys(obj)) {

		$(".color-picker")
			.append("<span></span>");
			
		$("span:not([class])") 
			.addClass(`dot ${key}`);

		$(".slideshow-container")
			.prepend("<div></div>");

		$(".slideshow-container>div:empty")
			.prepend("<img>")
			.addClass(`${key}`)
			.addClass("noshow")
			.append("<div></div>");

		$(".slideshow-container div>div")
			.addClass("text");
			
		$("img:not([src])") 
			.attr("src", obj[key])
			.css("width", "100%")

	}

}

function addText () {

	$(".solid-black>.text")
		.html("Solid Black");

	$(".midnight-silver>.text")
		.html("Midnight Silver Metallic");

	$(".obsidian-black>.text")
		.html("Obsidian Black Metallic");

	$(".deep-blue>.text")
		.html("Deep Blue Metallic");

	$(".silver>.text")
		.html("Silver Metallic");

	$(".white>.text")
		.html("Pearl White Multi-Coat");

	$(".red>.text")
		.html("Red Multi-Coat");

	$(".orange>.text")
		.html("Very Orange Multi-Coat");

	$(".yellow>.text")
		.html("Brilliant Yellow Multi-Coat");

	$(".glacier-blue>.text")
		.html("Glasier Blue Multi-Coat");

	$(".electric-blue>.text")
		.html("Electric Blue Multi-Coat");

	$(".green-lotus>.text")
		.html("Green Lotus Multi-Coat");

}

colorPicker('tesla.json');