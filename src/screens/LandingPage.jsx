import '../styles/stylesLandingPage.css';

const LandingPage = () => {
    return (
        <div className='landingPage'>
            <div className="container">
                <div className="cabecera">Módulo 7: DESARROLLO FRONTEND CON REACTJS</div>

                <div className="section">
                    <h2>Bienvenido</h2>
                    <p>Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.</p>
                </div>

                <div className="section">
                    <h2>Temas Cubiertos</h2>
                    <div className="topics">
                        <div><p>Componentes funcionales y de clase</p></div>
                        <div><p>Uso de <strong>React hooks</strong> como useState y useEffect</p></div>
                        <div><p>Creación de <strong>custom hooks</strong> como useForm</p></div>
                        <div><p>Gestión de variables de estado con <strong>useState</strong></p></div>
                        <div><p>Gestión de estado global con <strong>Redux</strong></p></div>
                        <div><p>Integración de <strong>Redux</strong> con <strong>React</strong></p></div>
                        <div><p>Manejo de <strong>Formularios</strong> en <strong>React</strong></p></div>
                        <div><p>Publicando nuestra <strong>Página</strong> con <strong>GitHub Pages</strong></p></div>
                    </div>
                </div>

                <div className="section">
                    <h2>Recursos Adicionales</h2>
                    <div className="resources">
                        <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
                    </div>
                </div>

                <div className="footer">© 2025 Módulo 7. USIP.</div>
            </div>
        </div>

    );
}

export default LandingPage;