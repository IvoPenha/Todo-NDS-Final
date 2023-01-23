import { createContext, useState, ReactNode, useContext} from 'react';



   interface SidebarProviderProps{
      isOpen: boolean;
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>

   }

   export const SidebarContext = createContext<SidebarProviderProps>({} as SidebarProviderProps) ;


   export function SidebarProvider({children}:any):JSX.Element{
      const [isOpen, setIsOpen] = useState(true)
      return(
         <SidebarContext.Provider value={{isOpen, setIsOpen}} >
            {children}
         </SidebarContext.Provider>
   )}

   export function useSidebar(){
      const context = useContext(SidebarContext)

      return context
   }