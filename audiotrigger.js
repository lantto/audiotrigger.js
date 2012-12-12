var audiotrigger = {
	interval: null,
	set: function(audio, trigger, callback, bpm, recurring) {
		if (bpm == true) {
			trigger = 60/trigger;
		}
		return this.interval = setInterval(function () {
			if (audio.currentTime >= trigger) {
				console.log('beat');
				clearInterval(this.interval);
			}
		}, 10);
	},
	clear: function(trigger) {
		clearInterval(trigger);
	}
};