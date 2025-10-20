const Database = require('better-sqlite3');
const db = new Database('./database.sqlite');

const init = `
CREATE TABLE IF NOT EXISTS barbers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS bookings (
  id TEXT PRIMARY KEY,
  barber_id TEXT,
  client_name TEXT,
  client_phone TEXT,
  datetime TEXT,
  status TEXT,
  created_at TEXT
);

CREATE TABLE IF NOT EXISTS admins (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE,
  password_hash TEXT
);
`;

db.exec(init);
module.exports = db;
