const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const PORT = 3000;
const folder = __dirname;

const server = http.createServer((req, res) => {
    if (req.url !== "/") {
        res.writeHead(404);
        return res.end("Not found");
    }

    // Find every .js file except app.js
    const jsFiles = fs.readdirSync(folder)
        .filter(file => file.endsWith(".js") && file !== "app.js");

    // Automatically create script tags
    const scripts = jsFiles
        .map(file => `<script src="/${file}"></script>`)
        .join("\n");

    const html = `
<!DOCTYPE html>
<html>
<head>
    <title>My JavaScript Files</title>
</head>
<body>
    <h1>JavaScript Running</h1>

    ${scripts}
</body>
</html>
`;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
});

// Serve JS files automatically
server.on("request", (req, res) => {
    if (req.url === "/") return;

    const filePath = path.join(folder, req.url);

    if (filePath.endsWith(".js") && fs.existsSync(filePath)) {
        res.writeHead(200, {
            "Content-Type": "application/javascript"
        });

        res.end(fs.readFileSync(filePath));
    }
});

server.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;

    console.log(`Running: ${url}`);

    exec(`start ${url}`);
});