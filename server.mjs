import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { join, extname } from "node:path";

const server = createServer(async (req, res) => {
  try {
    const basePath = process.cwd(); // Chemin de base du projet
    const urlPath =
      req.url.split("?")[0] === "/" ? "/index.html" : req.url.split("?")[0];
    const filePath = join(
      basePath,
      decodeURIComponent(urlPath.replace(/^\//, ""))
    );

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
      ".aac": "audio/aac",
    };
    const contentType = mimeTypes[ext] || "application/octet-stream";

    // Vérifie si le fichier existe et obtient sa taille
    const stats = await stat(filePath);

    // Gère les requêtes avec en-tête Range
    if (req.headers.range) {
      const range = req.headers.range;
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
      const chunkSize = end - start + 1;

      const fileStream = createReadStream(filePath, { start, end });
      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${stats.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize,
        "Content-Type": contentType,
      });
      fileStream.pipe(res);
    } else {
      // Lit et envoie le fichier complet si pas de Range
      res.writeHead(200, {
        "Content-Type": contentType,
        "Content-Length": stats.size,
      });
      const fileStream = createReadStream(filePath);
      fileStream.pipe(res);
    }
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
