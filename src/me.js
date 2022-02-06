import webpush from 'web-push';

function initMe(db, setMe) {
    // create the store
    db.version(1).stores({ users: 'userID' })
    db.version(1).stores({ messages: 'roomID,userID' })

    // perform a read/write transatiction on the new store
    db.transaction('rw', db.users, async() => {
        // get the first and last name from the data
        var dbMe = await db.users.get('me')

        // if the first or last name fields have not be added, add them
        if (!dbMe) {
            dbMe = newMe()
            await db.users.add(dbMe);
        }

        // set the initial values
        setMe(dbMe);

    }).catch(e => {
        // log any errors
        console.log(e.stack || e)
    })
}

function updateMe(db, me, setMe) {
    db.users.put(me);
    setMe(me);
}

function newMe() {
    return {
        userID: 'me',
        username: '',
        keys: webpush.generateVAPIDKeys()

    }
}

export { initMe, updateMe }