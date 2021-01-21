import React from 'react';
import Routes from './Navigators/Routes';
import { AuthProvider } from './Navigators/AuthProvider';

const App = () => {
    return (
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    );
}

export default App;