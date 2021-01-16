import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Input, FormHelperText, Typography } from '@material-ui/core';


export default function Setup({db}) {

    const [name, setName] = useState("")

    useEffect(
        () => {

            // perform a read/write transatiction on the new store
            db.transaction('rw', db.formData, async () => {
                // get the first and last name from the data
                const dbName = await db.formData.get('name')
                
                // if the first or last name fields have not be added, add them
                if (!dbName) await db.formData.add({ id: 'name', value: '' })                

                // set the initial values
                setName( dbName ? dbName.value : '')
            }).catch(e => {
                // log any errors
                console.log(e.stack || e)
            })
        },
        // run effect whenever the database connection changes
        [db]
    )

    // sets the name in the store and in the state hook
    const setForm = id => value => {        
        // update the store
        db.formData.put({ id, value })
        // update the state hook
        setName(value);
    }

    // partial application to make on change handler easier to deal with
    const handleSetForm = id => e => setForm(id)(e.target.value)


    return (
        <div>
            <Typography>
                Direct is a way to message others directly without going through any intermediaries. It will connect your laptop, phone or tablet directly with theirs with no middleman.
            </Typography>
            <FormControl color="#b0f6b6ff">
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="name" value={name} onChange={handleSetForm('name')} aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">This is the name other people will see when talking to you</FormHelperText>

            </FormControl>
        </div>

    );
}