import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('test1234', 12),
    isAdmin: true,
  },
  {
    name: 'john doe',
    email: 'john@gmail.com',
    password: bcrypt.hashSync('test1234', 12),
  },
  {
    name: 'Jane doe',
    email: 'jane@gmail.com',
    password: bcrypt.hashSync('test1235', 12),
  },
];

module.exports = users;
