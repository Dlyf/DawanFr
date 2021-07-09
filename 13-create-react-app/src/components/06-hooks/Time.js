import React, { useState } from 'react';

function HookLifeCycle(props) {
    const [date, setDate] = useState(new Date());

    return (
        <React.Fragment>
            <p>Heure: { date.toLocaleTimeString() }</p>
        </React.Fragment>
    );
}
export default HookLifeCycle;