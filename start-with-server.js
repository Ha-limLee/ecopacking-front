const { exec } = require('child_process');
const fs = require('fs/promises');

(async function() {
    let server = '';
    if (process.argv[2]) {
        server = process.argv[2];
        console.log(`set server to ${server}`);
    } else {
        server = 'http://localhost:5000';
        console.log(`use default server: ${server}`);    
    }

    const setupFilePath = './src/setupProxy.js';

    const out = [];
    const setupFile = (await fs.readFile(setupFilePath)).toString();

    setupFile.split(/\r?\n/).forEach(line => {
        if (line.search('const url') !== -1) {
            out.push(`const url = \'${server}\'`);
        } else {
            out.push(line);
        }
    });

    await fs.writeFile(setupFilePath, out.join('\n'));
    
    const child = exec('yarn start');
    child.stdout.on('data', console.log);
    child.stderr.on('data', console.error);
})();