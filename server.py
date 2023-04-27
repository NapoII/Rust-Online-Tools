import http.server
import socketserver

PORT = 8080

Handler = http.server.SimpleHTTPRequestHandler

# Starte den Server und logge eine Nachricht
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Server läuft auf Port", PORT)
    print("Öffne die Seite unter http://localhost:", PORT)
    print("Beende den Server mit Strg+C")

    # Warte auf Anfragen und logge jeden Zugriff
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass

    # Schließe den Server und logge eine Nachricht
    httpd.server_close()
    print("Server gestoppt.")
