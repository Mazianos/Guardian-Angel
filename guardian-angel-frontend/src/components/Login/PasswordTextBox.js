import React, { Component } from 'react';

import { Hide, View } from 'grommet-icons';
import { Box, Button, Grommet, TextInput } from 'grommet';
import { grommet } from 'grommet/themes';

export const PasswordTextBox = (props) => {
    const [value, setValue] = React.useState('');
    const [reveal, setReveal] = React.useState(true);


    setTimeout(
        () => setReveal(false),
        200
    );

    return (
        <Box
            direction='row'
        >
            <TextInput
                plain
                style={{ borderRadius: "12px" }}
                type={reveal ? 'text' : 'password'}
                value={value}
                onChange={event => setValue(event.target.value)}
                placeholder="type here"
                disabled={props.emailFilled == 0}

            />
            <Button
                icon={reveal ? <View size="medium" color="white" /> : <Hide size="medium" color="white" />}
                onClick={() => setReveal(!reveal)}
            />
        </Box>
    );
};

export default PasswordTextBox;