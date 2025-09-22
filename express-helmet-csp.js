const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet({
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      "script-src": ["'self'"], // no inline scripts, no external scripts
      "object-src": ["'none'"],
      "base-uri": ["'self'"],
      "frame-ancestors": ["'none'"]
    }
  }
}));

app.use((req, res, next) => {
  res.cookie('session', 'token', { httpOnly: true, secure: true, sameSite: 'lax' });
  next();
});
