const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');

try {
  console.log("files columns:", db.prepare("PRAGMA table_info(files)").all().map(c => `${c.name} (${c.type})`));
  console.log("files rows (first 3):", db.prepare("SELECT id, name, url FROM files LIMIT 3").all());
  
  console.log("files_related_mph columns:", db.prepare("PRAGMA table_info(files_related_mph)").all().map(c => `${c.name} (${c.type})`));
  console.log("files_related_mph rows:", db.prepare("SELECT * FROM files_related_mph").all());
} catch (e) {
  console.error(e);
} finally {
  db.close();
}
