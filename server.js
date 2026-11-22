// server.js
const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'mockDB', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// 1. Custom Register Route
server.post('/api/auth/register', (req, res) => {
  const db = router.db; // Lowdb instance
  const { email, password, firstname, lastname, age, phone } = req.body;

  const existingUser = db.get('users').find({ email }).value();
  if (existingUser) {
    return res.status(409).json({ field: 'email', message: 'Email already registered' });
  }

  const newUser = {
    id: Date.now().toString(),
    firstname,
    lastname,
    email,
    age,
    phone,
    password, // Stored plain only for local mock testing
    role: 'USER',
  };

  db.get('users').push(newUser).write();

  const { password: _, ...safeUser } = newUser;
  return res.status(201).json({
    user: safeUser,
    accessToken: `mock-jwt-token-${newUser.id}`,
  });
});

// 2. Custom Login Route
server.post('/api/auth/login', (req, res) => {
  console.log('apicalled===========')
  const db = router.db;
  const { email, password } = req.body;

  const user = db.get('users').find({ email, password }).value();
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const { password: _, ...safeUser } = user;
  return res.status(200).json({
    user: safeUser,
    accessToken: `mock-jwt-token-${user.id}`,
  });
});
console.log('is it hitting ==============')
server.use('/api', router);

server.listen(3000, () => {
  console.log('Mock Auth JSON Server running on http://localhost:3000');
});
