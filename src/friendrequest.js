var Bugout = require("bugout");

function connectFriendRequest(me, requestCallback) {
    if (!me || !me.username) { return }
    if (me.username === 'Bob') { return }
    var b = new Bugout('direct-' + me.username);
    b.heartbeat(10000);
    console.log("connected to friend server: ", me.username)
    b.register("friend-request", function(address, args, cb) {
        console.log("got request", args)
        requestCallback(args, cb);

    });

    return b
}

function sendFriendRequest(me, username, passphrase, requestCallback) {
    console.log("sending friend request", username);
    var b = new Bugout('direct-' + username);
    b.on("seen", function(address) {
        console.log("seen", address);
        var roomID = makeid(12)
            // once we can see the server
            // make an API call on it
        b.rpc(address, "friend-request", {
            username: me.username,
            keys: { publicKey: me.keys.publicKey },
            roomID: roomID,
            passphrase: passphrase
        }, function(result) {
            requestCallback(b, result);
        });

    });
}


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export { connectFriendRequest, sendFriendRequest }