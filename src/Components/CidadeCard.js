import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    height: 90px;
    padding: 12px 24px 12px 16px;
    gap: 16px;
    flex-shrink: 0;
    align-self: stretch;
    background-color: #F6FAFD;

    display: flex;
    width: 360px;
    height: 90px;
    min-height: 90px;

    border-radius: 28px;

    align-items: center;
    justify-content: space-between;
`;

const CidadeNome = styled.h3`
    color: var(--material-theme-sys-light-on-surface, #001F2A);

    /* material-theme/body/large */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    line-height: 24px; /* 150% */
    letter-spacing: 0.5px;
    align-self: stretch;
    text-align: left;

    margin: 0;
`;

const CidadeDetalhes = styled.h4`
    color: var(--material-theme-sys-light-on-surface-variant, #001F2A);

    /* material-theme/body/medium */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.25px;
    align-self: stretch;
    text-align: left;

    margin: 0;
`;

const CidadeDias = styled.input`
color: var(--material-theme-sys-light-on-primary-container, #001F2A);
text-align: center;

/* material-theme/title/medium */
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
letter-spacing: 0.15px;
text-align: center;

background-color: #BEE9FF;
width: 58px;
height: 58px;
border-radius: 100px;
display: flex;
align-items: center;
justify-content: center;
margin: 0;

border: none;
`;

const Separacao = styled.div`
display: flex;
width: 2px;
height: 68px;
flex-direction: column;
align-items: center;
width: 1px;
height: 68px;
background-color: #CAC4CF;

`

const CidadeCard = ({ cidadeNome, cidadeDetalhes, cidadeDias,onDaysChange }) => {
    return (
      <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", width:"max-content", gap:"5px ", padding:"5px 0"}}>
          <Card>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 28 28" fill="none" style={{backgroundColor:"#BEE9FF", borderRadius:"100px", padding: "10px"}}>
                  <path d="M23.555 4.66667H4.66671C3.38337 4.66667 2.34504 5.71667 2.34504 7.00001V11.6667C3.62837 11.6667 4.66671 12.7167 4.66671 14C4.66671 15.2833 3.62837 16.3333 2.33337 16.3333V21C2.33337 22.2833 3.38337 23.3333 4.66671 23.3333H23.3334C24.6167 23.3333 25.6667 22.2833 25.6667 21V7.00001C25.6667 5.71667 24.7217 4.66667 23.555 4.66667ZM23.3334 21H4.66671V18.0367C6.05504 17.2317 7.00004 15.715 7.00004 14C7.00004 12.2733 6.06671 10.7683 4.67837 9.96334L4.66671 7.00001H23.3334V21ZM10.3484 18.27L8.41171 14.91L9.49671 14.6183L10.9667 15.7733L13.755 15.0267L10.955 10.1733L12.5884 9.73001L17.2667 14.0933L20.1134 13.335C20.7084 13.1717 21.3267 13.5333 21.49 14.1283C21.6417 14.7233 21.2917 15.3417 20.685 15.5167L10.3484 18.27Z" fill="#21005D"/>
              </svg>
              <div style={{width:"200px"}}>
                  <CidadeNome>
                      {cidadeNome}
                  </CidadeNome>
                  <CidadeDetalhes>
                      {cidadeDetalhes}
                  </CidadeDetalhes>
              </div>
              <div>
              <CidadeDias 
                    as="input"
                    type="number" 
                    value={cidadeDias} 
                    onChange={(e) => onDaysChange(cidadeNome, e.target.value)} 
                />
                  <CidadeDetalhes style={{textAlign:"center"}}>
                      Dias
                  </CidadeDetalhes>
              </div>
          </Card>
          <Separacao />
      </div>
    );
  }
  
  export default CidadeCard;