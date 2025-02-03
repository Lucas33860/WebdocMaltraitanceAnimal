import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, extname } from "node:path";

const server = createServer(async (req, res) => {
  try {
    const basePath = process.cwd(); // Chemin de base du projet
    const urlPath = req.url === "/" ? "/index.html" : req.url; // Gère l'accueil comme index.html
    const filePath = join(basePath, urlPath);

    // Détermine le type MIME en fonction de l'extension du fichier
    const ext = extname(filePath);
    const mimeTypes = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".ttf": "font/ttf",
      ".otf": "font/otf",
      ".woff": "font/woff",
      ".woff2": "font/woff2",
      ".mp3": "audio/mp3",
      ".wav": "audio/wav",
      ".ogg": "audio/ogg",
      ".mp4": "video/mp4",
      ".webm": "video/webm",
      ".avi": "video/x-msvideo",
      ".mov": "video/quicktime",
    };
    const contentType = mimeTypes[ext] || "application/octet-stream";

    // Lit et envoie le fichier demandé
    const fileContent = await readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(fileContent);
  } catch (err) {
    // En cas d'erreur, retourne une page 404 ou une erreur 500
    if (err.code === "ENOENT") {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404: File not found");
    } else {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500: Internal Server Error");
    }
  }
});

// Utiliser le port dynamique fourni par Scalingo
const port = process.env.PORT || 3000;

server.listen(port, "0.0.0.0", () => {
  console.log(`Listening on port ${port}`);
});
