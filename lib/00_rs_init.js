rs.initiate({
    _id: 'rs0',
    members: [
        {
            _id: 0,
            host: 'localhost:27017'
        }
    ],
});

while (rs.status().myState !== 1) {
    print('sleeping...');
    sleep(200);
}
