import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { primerMayuscula } from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #ffff;
    margin-top: 1rem;
`;

const Resume = ({ data }) => {

    const { marca, year, plan } = data;

    if (marca === '' || year === '' || plan === '') return null;
    return (
        <ContenedorResumen>
            <h2>Resume de cotizacion</h2>
            <ul>
                <li> Narca: {primerMayuscula(marca)} </li>
                <li> Plan: {primerMayuscula(plan)} </li>
                <li> Año del Auto: {year} </li>
            </ul>

        </ContenedorResumen>
    );
}

Resume.propTypes = {
    data: PropTypes.object.isRequired
}
export default Resume;