import { createContext, ReactNode, useContext, useState } from 'react';

   interface ContextData {
      isOpen: boolean;  
   }

   interface ProviderProps {
      children: ReactNode,
   }

   const PageContext = createContext<ContextData>({} as ContextData) ;
   export function PageProvider({children} : ProviderProps): JSX.Element{
      const[isOpen, setIsOpen] = useState(false)
      
      return <></>
   }