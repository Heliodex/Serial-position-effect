// Config file for pm2, a process manager that lets the website server run as a background process
// https://pm2.io/

module.exports = {
	apps: [
		{
			name: "Serial position effect",
			script: "build",
			node_args: "-r dotenv/config",
		},
	],
}
