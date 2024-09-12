const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const socketOptions = {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
};

const io = require('socket.io')(3002, socketOptions);
const userSocketMap = new Map(); // Maps userId to socketId

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  console.log('CONNECTION: ', userSocketMap);

  socket.on('register', (userId) => {
    if (!userSocketMap.has(userId)) {
      userSocketMap.set(userId, new Set());
    }

    const userSockets = userSocketMap.get(userId);
    userSockets?.add(socket.id);

    console.log(`User ${userId} registered with socket ${socket.id}`);
    console.log('REGISTER: ', userSocketMap);
    socket.emit('message', 'User registered with socket');
  });

  socket.on('logout', (id) => {
    const userSockets = userSocketMap.get(id);

    if (userSockets) {
      userSockets.forEach((socketId) => {
        io.to(socketId).emit('logout');
      });
    }
  });

  socket.on('disconnect', () => {
    // Remove the socket ID from the user's set of socket IDs
    for (const [userId, socketIds] of userSocketMap.entries()) {
      if (socketIds.has(socket.id)) {
        socketIds.delete(socket.id);
        // Remove the user entry if there are no more socket IDs
        if (socketIds.size === 0) {
          userSocketMap.delete(userId);
        }
        console.log(`User ${userId} disconnected from socket ${socket.id}`);
        console.log('DISCONNECT: ', userSocketMap);
        break;
      }
    }
  });

  socket.on('message', ({ message, id }) => {
    console.log('Message: ', message);
    console.log('ID: ', id);

    const userSockets = userSocketMap.get(id);

    if (userSockets) {
      userSockets.forEach((socketId) => {
        io.to(socketId).emit('message', { message, id });
      });
    }
  });

  socket.on('sendRequest', ({ senderId, recipientId }) => {
    console.log('ha?');
    // Send a notification to the recipient's socket
    io.to(recipientId).emit('receiveNotification', {
      message: `User ${senderId} has sent you a friend request.`,
      senderId,
    });
  });
});

const app = express();
const PORT = 3001;

// Secret key for JWT
const JWT_SECRET = 'your_secret_key';

// Middleware to parse cookies
app.use(cookieParser());

// Middleware to parse JSON request bodies
app.use(express.json());

const allowedOrigins = [
  'http://a.localhost:3000',
  'http://b.localhost:3000',
  'http://localhost:3000',
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is in the allowed origins list
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }),
);

const categories = [
  { id: 1, name: 'orders' },
  { id: 2, name: 'feebacks' },
  { id: 3, name: 'persons' },
];

// Endpoint to return categories
app.get('/categories', (req, res) => {
  res.json({
    categories: categories,
  });
});

const status = [
  { id: 1, name: 'open' },
  { id: 2, name: 'inProgress' },
  { id: 3, name: 'closed' },
];

// Endpoint to return categories
app.get('/status', (req, res) => {
  res.json({
    status: status,
  });
});

const results = [
  {
    id: 1,
    urgent: true,
    status: 'inProgress', // "open", "inProgress", "completed"
    status_id: 2,
    title: 'Order #1234',
    category: 'orders', // "orders", "feedbacks", "persons"
    category_id: 1,
    admin: 'John Doe',
    date: '2024-09-11',
    sentiment: 'positive',
    degree_of_sentiment: 85,
  },
  {
    id: 2,
    urgent: false,
    status: 'completed', // "open", "inProgress", "completed"
    status_id: 3,
    title: 'Feedback #5678',
    category: 'feedbacks', // "orders", "feedbacks", "persons"
    category_id: 2,
    admin: 'Jane Smith',
    date: '2024-09-10',
    sentiment: 'neutral',
    degree_of_sentiment: 50,
  },
  {
    id: 3,
    urgent: true,
    status: 'open', // "open", "inProgress", "completed"
    status_id: 1,
    title: 'Person Update #2345',
    category: 'persons', // "orders", "feedbacks", "persons"
    category_id: 3,
    admin: 'Alice Johnson',
    date: '2024-09-09',
    sentiment: 'negative',
    degree_of_sentiment: 20,
  },
  {
    id: 4,
    urgent: false,
    status: 'completed', // "open", "inProgress", "completed"
    status_id: 3,
    title: 'Order #4321',
    category: 'orders', // "orders", "feedbacks", "persons"
    category_id: 1,
    admin: 'Bob Brown',
    date: '2024-09-08',
    sentiment: 'positive',
    degree_of_sentiment: 90,
  },
  {
    id: 5,
    urgent: true,
    status: 'open', // "open", "inProgress", "completed"
    status_id: 1,
    title: 'Feedback #8765',
    category: 'feedbacks', // "orders", "feedbacks", "persons"
    category_id: 2,
    admin: 'Charlie Green',
    date: '2024-09-07',
    sentiment: 'negative',
    degree_of_sentiment: 30,
  },
];

// Endpoint to return 5 results
app.get('/results', (req, res) => {
  res.json({
    results: results.slice(0, 5), // Return the first 5 results
  });
});

// Dummy user data (In real-world applications, you'd query this from a database)
const users = [
  {
    id: 1,
    username: 'john',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    subdomain: 'a',
  },
  {
    id: 2,
    username: 'jane',
    name: 'Jane Doe',
    email: 'jane@example.com',
    role: 'owner',
    subdomain: 'b',
  },
];

// Sign-in route
app.post('/login', (req, res) => {
  const { username } = req.body;

  console.log(req.body);

  // Find user by email
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username' });
  }

  // Create JWT token with user information
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      subdomain: user.subdomain,
      name: user.name,
      email: user.email,
      role: user.role,
      subdomain: user.subdomain,
    },
    JWT_SECRET,
    { expiresIn: '1h' }, // Token expires in 1 hour
  );

  // Set the token in an HttpOnly cookie
  res.cookie('token', token, {
    httpOnly: true, // Prevents client-side access to the cookie
    // secure: process.env.NODE_ENV === 'production', // Secure flag for HTTPS in production
    maxAge: 3600000, // 1 hour
    domain: '.localhost', // This allows cookies to be shared across subdomains

    sameSite: 'Lax', // 'Strict', 'Lax', or 'None' based on your requirements
    // domain: 'localhost:3000',
  });

  return res.json({ message: 'Login successful', user });
});

// Route to access user info from cookie
app.get('/profile', (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    return res.json({ user: decoded });
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
});

// Logout route to clear the cookie
app.post('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({ message: 'Logout successful' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

