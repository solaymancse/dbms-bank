import styled  from 'styled-components';

export const Wrapper = styled.div`
    padding: 80px 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #F7F7F7;

    @media (max-width: 991px){
        padding: 30px 10px;
    }
`
export const H1 = styled.h1`
  font-size: 20px;
  color: #737373;

  @media (max-width: 991px){
    margin-top: 20px;
        font-size: 16px;
    }
`
export const H2 = styled.h2`
  font-size: 24px;
  color: #737373;
  margin-bottom: 20px;

`
export const Desc = styled.p`
  font-size: 18px;
  color: #737373;
  margin-bottom: 20px;

`
export const Container = styled.div`
  display: flex;
  margin-top: 100px;
  gap: 10px;

  @media (max-width: 991px){
    flex-direction: column;
  }
`
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

  a{
      text-decoration: none;
      color: #737373;
      font-weight: bold;
      color: #3facda;

  }

  @media (max-width: 991px){
    text-align: center;
    margin-bottom: 20px;
    }

`
export const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 30px;
  color: #3facda;
`

