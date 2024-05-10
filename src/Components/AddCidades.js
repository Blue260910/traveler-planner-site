import React from 'react';
import styled from 'styled-components';

const ButtonAdd = styled.div`
display: flex;
padding: 8px;
justify-content: center;
align-items: center;

width: 24px;
height: 24px;
flex-shrink: 0;

border-radius: 12px;
background: var(--material-theme-sys-light-primary-container, #BEE9FF);

/* M3/Elevation Light/3 */
box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30);
`;

const AddCidades = () => {
return (
    <ButtonAdd>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M13 6V9H16V11H13V14H11V11H8V9H11V6H13ZM18 10.2C18 6.57 15.35 4 12 4C8.65 4 6 6.57 6 10.2C6 12.54 7.95 15.64 12 19.34C16.05 15.64 18 12.54 18 10.2ZM12 2C16.2 2 20 5.22 20 10.2C20 13.52 17.33 17.45 12 22C6.67 17.45 4 13.52 4 10.2C4 5.22 7.8 2 12 2Z" fill="#21005D"/>
        </svg>
    </ButtonAdd>
);
}

export default AddCidades;