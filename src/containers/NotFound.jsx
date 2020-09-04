import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
    <section className="error">
        <div className="error_number">
            <p>404</p>
        </div>
        <div className="error_description">
            <p>Página no encontrada</p>
        </div>
    </section>
);

export default NotFound;