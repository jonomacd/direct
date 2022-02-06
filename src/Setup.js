import React from "react";
import { FormControl, InputLabel, Input, FormHelperText, Typography } from '@material-ui/core';
import { sendFriendRequest } from "./friendrequest";


export default function Setup(props) {

    // sets the name in the store and in the state hook
    const setForm = value => {
        var newMe = { ...props.me };
        newMe.username = value;
        props.onMeUpdate(newMe);
    }

    const handleSetForm = e => setForm(e.target.value)

    const friendRequest = e => {
        if (e.key === 'Enter') {
            sendFriendRequest(props.me, e.target.value, "some phrase", function (b, confirm) {
                console.log("confirmed:", confirm)
                
               // confirmFriendRequest(b, function (friend) {
                    //props.onAddFriend(friend);
               // })

            })
        }
    }

    return (
        <div>
            <Typography>
                Direct is a way to message others directly without going through any intermediaries. It will connect your laptop, phone or tablet directly with theirs with no middleman.
            </Typography>
            <FormControl >
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="name" value={props.me.username ? props.me.username : ''} onChange={handleSetForm} aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">This is the name other people will see when talking to you</FormHelperText>
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="friend">Find Friend</InputLabel>
                <Input id="friend" onKeyDown={friendRequest} aria-describedby="my-helper-text" />
            </FormControl>

        </div>

    );
}