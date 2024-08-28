
// TODO: start menu

/*
// if running from file: protocol, try to sniff the username >:)
var username_match = location.href.match(/\/(Users|home)\/(\w+)\//);
var username = username_match && username_match[1] || "Admin";
*/

var $start_menu = $(".start-menu");
$start_menu.hide();
// TODO: legitimate contents or whatever

// thank you stackoverflow post from 2012 (https://stackoverflow.com/questions/10142867/reference-url-with-javascript-to-play-sound#:~:text=function%20playsound(url)%20%7B%20var%20a%20%3D%20new%20audio(url)%3B%20a.play()%3B%20%7D)
function playSound(url) {
    var a = new Audio(url);
    a.play();
}

var open_start_menu = function () {
	$start_button.addClass("selected");
	$start_menu.attr("hidden", null);
	$start_menu.slideDown(100); // DOWN AS IN UP (stupid jQuery)
	$start_menu.css({ zIndex: ++$Window.Z_INDEX + 5001 });
};
var close_start_menu = function () {
	$start_button.removeClass("selected");
	$start_menu.attr("hidden", "hidden");
	$start_menu.hide();
};
var toggle_start_menu = function () {
	if ($start_menu.is(":hidden")) {
		open_start_menu();
	} else {
		close_start_menu();
	}
};

var $start_button = $(".start-button");
$start_button.on("pointerdown", function () {
	// start menus are 4 week babeez111!1!!!
	// toggle_start_menu();
	playSound("https://files.catbox.moe/ztzyet.mp3");
});

/* nuh uh
$("body").on("pointerdown", function (e) {
	if ($(e.target).closest(".start-menu, .start-button").length === 0) {
		close_start_menu();
	}
});
// Note: A lot of the time it's good to use focusout (in jQuery, or else blur with useCapture?[1]) as opposed to 
// That might be the case here as well, but maybe not since programs opening might grab focus and that probably shouldn't close the start menu
// Although at the operating system level it would probably prevent focus switching in the first place, so maybe we could do that
// The point being this is an operating system control and so it may warrant special handling,
// but generally I'd recommend making a control focusable and detecting loss of focus as in this answer:
// [1]: https://stackoverflow.com/a/38317768/2624876

$(window).on("keydown", function (e) {
	if (e.which === 27) { // Esc to close
		close_start_menu();
	}
});
*/
