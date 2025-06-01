// server.js
const express = require('express');
const os = require('os');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

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

app.listen(PORT, () => {
  const ip = getLocalIPAddress();
  console.log(`\n✅ Local server running at: http://${ip}:${PORT}`);
});
