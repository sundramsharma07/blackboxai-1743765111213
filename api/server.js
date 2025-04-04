const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
server.use(jsonServer.bodyParser);

// Custom authentication middleware
server.use((req, res, next) => {
  if (req.method === 'POST' && req.path === '/auth/login') {
    const { email, password } = req.body;
    const db = router.db.getState();
    const user = db.users.find(u => u.email === email && u.password === password);
    
    if (user) {
      return res.jsonp({
        success: true,
        token: 'fake-jwt-token',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          type: user.type
        }
      });
    } else {
      return res.status(401).jsonp({
        success: false,
        message: 'Invalid credentials'
      });
    }
  }
  next();
});

// Use default router
server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});