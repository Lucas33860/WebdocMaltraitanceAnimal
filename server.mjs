import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const server = createServer(async (req, res) => {
  try {
    // Si la requête est pour la page d'accueil
    if (req.url === "/" || req.url === "/index.html") {
      const filePath = join(process.cwd(), "index.html");
      const htmlContent = await readFile(filePath, "utf8");

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(htmlContent);

      // Si la requête est pour un fichier CSS
    } else if (req.url.endsWith(".css")) {
      const filePath = join(process.cwd(), req.url);
      const cssContent = await readFile(filePath, "utf8");

      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(cssContent);

      // Si le fichier demandé n'est pas trouvé
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404: Page not found");
    }
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Error: Unable to process the request");
  }
});

// Démarre un serveur HTTP sur le port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on http://127.0.0.1:3000");
});
