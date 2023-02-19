import { IncomingMessage, ServerResponse } from 'http';
import httpProxy from 'http-proxy';
const proxy = httpProxy.createProxyServer();

exports.handler = (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
  const target = req.headers['x-target'] as string;

  if (!target) {
    res.statusCode = 400;
    res.end('Missing x-target header');
    return;
  }

  proxy.web(req, res, {
    target,
    followRedirects: true,
    changeOrigin: true,
  });
}
