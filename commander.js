const { program } = require('commander');

program.option('--first').option('-f, --filename [char]', 'filename');

program
	.option('-s --size [size]', 'Pizza size', /^(large|medium|small)$/i, 'medium')
	.option('-d --drink [drink]', 'Drink', /^(coke|pepsi|izze)$/i);
program.parse(process.argv);
const options = program.opts();
console.log(' size: %j', options.size);
console.log(' drink: %j', options.drink);
console.log(' filename: %j', options.filename);

// program.on('--help', function () {
// 	console.log('');
// 	console.log('Examples:');
// 	console.log('  $ custom-help --help');
// 	console.log('  $ custom-help -h');
// });

console.log(options.filename, '==========');
// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0]?.split(options.separator, limit));
