import { useState } from 'react';
const LandingPage = () => {

    const [ nameComponent, setNameComponent ] = useState ('LandingPage');
    

    return (
        <>
            <p>Component name: {nameComponent}</p>
            <button onClick={() => setNameComponent('Curso de React!!!')}>Change Name</button>
        </>
    );
}
export default LandingPage;