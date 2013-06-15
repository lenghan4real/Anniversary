var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
	update_time();
};

function update_time() {
	/* */
	var start_itme = 1308412800;
	var duration = parseInt(Date.now() / 1000 - start_itme );

	var seconds = duration % 60;
	if(seconds < 10) {
		seconds = "0" + seconds;
	}

	duration = parseInt(duration / 60);
	var minutes = duration % 60;
	if(minutes < 10) {
		minutes = "0" + minutes;
	}

	duration = parseInt(duration / 60);
	var hours = duration % 24;
	if(hours < 10) {
		hours = "0" + hours;
	}

	duration = parseInt(duration / 24);
	var days = duration;

	$('day').innerText = days;
	$('hour').innerText = hours;
	$('minute').innerText = minutes;
	$('second').innerText = seconds;

	setTimeout('update_time()', 1000);
}