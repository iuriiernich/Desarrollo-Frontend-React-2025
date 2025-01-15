import { useState } from 'react';
const About = () => {
    // los hooks en react son funciones ya definidas
    // los hooks siempre tienen el prefijo use
    // hook useState, useEffect, useContext, useRef, useTransition
    // es posible crear nuestros propios hooks: useService, useImage, useForm, useCounter

    // el hook useState me permite manejar variables de esado a nivel de componente
    const [ nameComponent, setNameComponent ] = useState ('About');
    

    return (
        <>
            <p>Component name: {nameComponent}</p>
            <button onClick={() => setNameComponent('Curso de React!!!')}>Change Name</button>
        </>
    );
}
export default About;