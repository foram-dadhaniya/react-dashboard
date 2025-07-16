import styled from "styled-components";

export const PageWapper = styled.div`
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const FormWrapper = styled.div`
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
    border-radius: 10px;
    padding: 50px 40px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: white;
    width: 500px;
    text-align: left;
`
export const InputGroup = styled.div`
    margin-bottom: 20px;
    .errorMessage{
        color: #d86448;
        padding: 5px 0 0;
    }
`
export const InputLabel = styled.label`
    margin-bottom: 10px;
    color: white;
    display: block;
`
export const InputField = styled.input`
    width: 100%;
    border: 1px solid #666666;
    border-radius: 5px;
    background-color: transparent;
    height: 35px;
    padding: 10px;
    color: white;
    &:focus-visible{
        outline: unset;
        box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
    }
    &:-webkit-autofill {
    box-shadow: 0 0 0 1000px transparent inset !important;
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    -webkit-text-fill-color: white !important;
    transition: background-color 5000s ease-in-out 0s;
  }
  }
`

export const Button = styled.button`
    width: 100%;
    height: 45px;
    padding: 12px 24px;
    margin-top: 20px;
    border: unset;
    border-radius: 5px;
    background: linear-gradient(
        135deg,
        rgba(18, 33, 213, 0.8),
        rgba(0, 229, 255, 0.8)
    );
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: white;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);

    &:hover {
    background: linear-gradient(
      135deg,
      rgba(18, 33, 213, 0.9),
        rgba(0, 229, 255, 0.9)
    );
    box-shadow: 0 6px 30px rgba(255, 255, 255, 0.2);
  }
`
 