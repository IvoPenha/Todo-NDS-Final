import styled from "styled-components";

export const Container = styled.div`
   background: white;
   width: 250px;
   border: none;
   border-radius: 10px;
   box-shadow: 0.4em 0.4em 1em rgba(0, 0, 0, 0.3);
   padding: 12px;
   font-family: karla;
   display: flex;
   flex-direction: column;
   gap: .6rem;
`

export const Title = styled.h1`
   font-size: 1rem;
   font-weight: 400;
   color: var(--positive);
   padding-bottom: .1rem;   
   border-bottom: 1px solid var(--background);


`
export const TopSection = styled.div`

`
export const Content = styled.div`
   display: flex;
   justify-content: space-between;
   border-left: 2px solid var(--positive);
   padding-left: 10px;
   button{
      border: none;
      background: none;
      height: fit-content;
      text-align: unset;
      cursor: pointer;
   }
   h3{
      color: var(--textPrimary);
      font-weight: 600;
   }
   p{
      font-size: 12px;
      color: var(--textTerciary);
      opacity: .5;
   }

`
export const CardFooter = styled.div`
   display: flex;
   gap: 1rem;
   div {
      display: flex;
      gap: .2rem;
      align-items:center;
      span{
         font-size: 12px;
         color:var(--textPrimary);
         opacity: .6;
         font-weight: 600;
      }
   }
`