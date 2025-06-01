# 📡 localhost-qr-server

> Run a local server and instantly get a QR code to open it on your mobile device.

This tool is great for **frontend developers**, **testers**, and **mobile app teams** who want to quickly test or preview web apps on different devices connected to the same network (like a phone or tablet).

---

## ✨ Features

- 🔌 Spin up a local Express server instantly
- 📱 Displays a QR code that opens your local server URL
- 📤 Works across devices on the same Wi-Fi network
- 🛠 Easy to modify and extend

---

## 📦 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)

---

## 📂 Folder Structure

localhost-qr-server/
├── public/
│   └── index.html         # Your static site files
├── server.js              # Express server
├── print-qr.js            # Prints local IP + QR code
├── package.json           # NPM scripts and dependencies
├── .gitignore             # Node modules ignored
└── README.md              # You're reading this 😄

````

---

## 🔧 How to Use

### 1. Clone the repo

```bash
git clone https://github.com/Roopesh519/localhost-qr-server.git
cd localhost-qr-server
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server and generate QR

```bash
npm run dev
```

This will:

* Start a local server at `http://<your-local-ip>:3000`
* Display a QR code in your terminal (scan it with your mobile device)

---

## 🧪 Example Output

```bash
✅ Local server running at: http://192.168.1.42:3000

📱 Scan to open in your mobile browser:

 ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ 
 ▄     ▄   ▄ ▄▄▄ ▄   ▄   ▄ ▄   ▄     ▄     ▄ ▄▄  
 ▄ ▄▄▄ ▄ ▄ ▄   ▄ ▄ ▄ ▄ ▄▄▄ ▄ ▄ ▄ ▄ ▄ ▄▄▄   ▄ ▄   
 ▄ ▄ ▄ ▄ ▄ ▄ ▄   ▄ ▄ ▄ ▄ ▄   ▄   ▄ ▄   ▄ ▄ ▄ ▄   
 ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄ ▄▄  
```

---

## 🌐 What’s Actually Happening?

When you run:

```bash
npm run dev
```

This internally runs:

* `server.js`: starts an Express server on port 3000
* `print-qr.js`: detects your local IP and prints a QR code pointing to `http://<your-ip>:3000`

Your phone must be on the **same Wi-Fi network** to access your laptop via local IP.

---

## 💡 Customizing

* 🛠 Add or replace files in the `public/` folder to serve different HTML/CSS/JS files.
* 🌍 Want HTTPS? Integrate with self-signed certs or ngrok.
* 🔄 Want auto-reload? Add [`nodemon`](https://www.npmjs.com/package/nodemon) to watch changes.

---

## 🙋 FAQ

### Why do I get `localhost` instead of a real IP?

Make sure you're **connected to a Wi-Fi network**, and not using mobile hotspot or disconnected Ethernet. The tool uses `os.networkInterfaces()` to detect your IP.

---

### Does it work offline?

Yes! As long as your mobile and computer are on the same LAN/Wi-Fi network, it works without internet.

---

### Can I use this for mobile testing?

Absolutely. This is perfect for:

* Manual QA on real devices
* Frontend layout testing
* Browser compatibility checking

---

## 🧑‍💻 Author

**Roopesh** – [@Roopesh519](https://github.com/Roopesh519)

---

## 📃 License

MIT License. Use it, share it, hack it.

---

## 📌 Future Ideas (PRs welcome!)

* 📦 Make it an NPM global CLI tool
* 🌐 Auto-detect and support HTTPS
* 📲 Generate deep link-ready QR codes
* 🧠 Add file watching and live reload

---

Happy testing ✨

```

---

Let me know if you want to convert this into an NPM CLI tool next (`localhost-qr` command globally), or want to extend this with file watching, HTTPS support, or auto UI preview on mobile.
```
