import React from 'react';

function Admin(props) {
    function deconnexion(history) {
        console.log();
        // localStorage.removeItem('user');
        // history.push('/login');
    }
    return (
        <React.Fragment>
            <h1>Page d'administration</h1>
            <button onClick={() => {
                    console.log(props);
                    localStorage.removeItem('user');
                    props.history.push('/login');
            }}>
                Deconnexion
            </button>
        </React.Fragment>
    );
}
export default Admin;