import http from 'http';
import https from 'https';
const fs = require('fs');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const serverPort = process.env.PORT || 3000;
const sslEnabled = process.env.SSL_ENABLED === 'true';
const sslPrivateKeyPath = process.env.SSL_PRIVATE_KEY_PATH;
const sslCertPath = process.env.SSL_CERT_PATH;

app.prepare().then(() => {
  if (sslEnabled) {
    https
      .createServer(
        {
          key: fs.readFileSync(sslPrivateKeyPath),
          cert: fs.readFileSync(sslCertPath),
        },
        (req, res) => {
          // Be sure to pass `true` as the second argument to `url.parse`.
          // This tells it to parse the query portion of the URL.
          const parsedUrl = parse(req.url, true);
          handle(req, res, parsedUrl);
        },
      )
      .listen(serverPort, () => {
        console.log(`> Ready on https://localhost:${serverPort}`);
      })
      .on('error', (error) => {
        console.error(`Error starting http server on https://localhost:${serverPort} `, error);
        throw new Error('Could not start server');
      });
  } else {
    http
      .createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
      })
      .listen(serverPort, () => {
        console.log(`> Ready on http://localhost:${serverPort}`);
      })
      .on('error', (error) => {
        console.error(`Error starting http server on http://localhost:${serverPort} `, error);
        throw new Error('Could not start server');
      });
  }
});
