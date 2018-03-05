const os = require('os'),
	upTime = require('./upTime');

function getOSinfo() {
	let type = os.type();
	const release = os.release(),
		cpu = os.cpus()[0].model,
		userInfo = os.userInfo();
	type = type === 'Darwin' ? 'OSX' : type === 'Windows-NT' ? 'Windows' : type;
	console.log('System: ', type);
	console.log('Release: ', release);
	console.log('CPU model: ', cpu);
	console.log(`Uptime: `, upTime.print());
	console.log('User name: ', userInfo.username);
	console.log('Home dir: ', userInfo.homedir);
}

exports.print = getOSinfo


