const { program } = require('commander');
program
	.argument('[username]', 'user to login','no password given')
	.argument('[password]', 'password for user, if required', 'no password given')
	.action((username, password) => {
		console.log('username:', username);
		console.log('password:', password);
	});
program.parse(process.argv);