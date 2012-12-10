var BPM = {
	trigger: function(audio, bpm, callback) {
		var beat = 0;
		setInterval(function () {
			if (audio.currentTime >= 60/bpm*beat) {
				console.log(beat + 1);
				beat++;
			}
		}, 10);
	}
};