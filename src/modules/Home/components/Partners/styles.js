import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  /* height: 100vh; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;

  background-image: linear-gradient(180deg, #0C0D0F, var(--color-background));

  #Wrapper-Item{
    width: 100%;
  }

  hr {
    /* bottom: 50%; */
    bottom: 400px;
    height: 1px;
    width: 100%;
    border: none;
    position: absolute;
    background: radial-gradient(#3D3D40 10%, var(--color-background));
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 1150px;

  margin: 10rem 0rem;
`;

export const TitlePartner = styled.h3`
  margin-bottom: 24px;

  padding: 0rem 3rem;

  font-size: 4.8rem;
  line-height: 54px;
  text-align: center;
  color: var(--color-gray);

  @media only screen and (max-width: 580px){
    font-size: 4rem
  }
`;

export const DescriptionPartner = styled.p`
  display: block;

  width: 100%;
  max-width: 490px;

  padding: 0rem 3rem;

  font-size: 1.6rem;
  line-height: 26px;
  text-align: center;
  color: var(--color-gray);

  @media only screen and (max-width: 580px){
    font-size: 1.3rem;
  }
`;

export const WrapperItem = styled.ul`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;

  width: 100%;
  max-width: 1150px;

  margin-top: 70px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 10px;
    padding: 5px;

    width: 100%;
    max-width: 260px;

    img {
      width: 200px;
      height: auto;
    }
  }
`;
