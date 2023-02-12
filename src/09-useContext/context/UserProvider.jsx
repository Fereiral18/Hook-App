import { UserContext } from './UserContext'


const user = {
  id: 123,
  name: 'Luis fereira',
  email: 'Luis@gmail.com'
}


export const UserProvider = ({children}) => {
  return (
   <UserContext value={{hola: 'mundo',  user}}>
    {children}
   </UserContext>
  )
  }
