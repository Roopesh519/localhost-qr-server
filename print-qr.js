// print-qr.js
const qrcode = require('qrcode-terminal');
const os = require('os');

function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (let name in interfaces) {
    for (let iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const ip = getLocalIPAddress();
const url = `http://${ip}:3000`;

console.log(`\n📱 Scan to open in your mobile browser:\n${url}`);
qrcode.generate(url, { small: true });
