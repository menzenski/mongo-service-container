const databases = [
    'unit_test_database',
];

const adminDB = 'admin';
const username = 'admin';
const password = 'password';

// block until instance is ready for writes
while (!db.isMaster().ismaster) {
  print('not master. sleeping...');
  sleep(500);
}

// create admin user
db = db.getSiblingDB(adminDB);
db.dropAllUsers();
db.createUser({
  user: username,
  pwd: password,
  roles: [
      {
          role: 'root',
          db: adminDB,
      },
  ],
});

for (database in databases) {
    db = db.getSiblingDB(databases[database]);
    db.dropAllUsers();
    db.createUser({
        user: username,
        pwd: password,
        roles: [
            {
                role: 'dbAdmin',
                db: databases[database],
            },
            {
                role: 'readWrite',
                db: databases[database],
            },
        ],
    });
}
