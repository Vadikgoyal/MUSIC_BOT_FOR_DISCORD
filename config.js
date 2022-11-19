module.exports = {
	TOKEN: "MTA0MDI5MTA2MDQxODYyMTQ2MA.GQz_te.SW5-pHQz6GolBgye2snh0ohWCVtnAe_2KLI6f8",
	ownerID: "698468132150444032", //write your discord user id.
	botInvite: "", //write your discord bot invite.
	mongodbURL: "mongodb+srv://VADIKOP:vadik123.go@cluster0.jcrqni7.mongodb.net/?retryWrites=true&w=majority", //write your mongodb url.
	status: '❤️ VYPER IS OP',
	commandsDir: './commands', //Please don't touch
	language: "en", //en, tr

	opt: {
		DJ: {
			commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
		},

		voiceConfig: {
			leaveOnEnd: false, //If this variable is "true", the bot will leave the channel the music ends.
			autoSelfDeaf: true, //IF YOU WANT TO DEAF THE BOT, set false to true.

			leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
				status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
				cooldown: 20000, //1000 = 1 second
			},

			leaveOnTimer: { //The leaveOnEnd variable must be "false" to use this system.
				status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
				cooldown: 20000, //1000 = 1 second
			}
		},

		maxVol: 150, //You can specify the maximum volume level.
		loopMessage: true,

		discordPlayer: {
			ytdlOptions: {
				quality: 'highestaudio', //Please don't touch
				highWaterMark: 1 << 25 //Please don't touch
			}
		}
	}
}
