import React , {createContext, useState, useContext, useEffect} from 'react'
import { UserSignUp, UserLogin } from '../services/userServices';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
    user: string | null,
    token: string | null,
    loginUser: (username: string, password: string) => any
    register: (email: string, username: string, password: string) => any
    isLoggedIn: () => boolean;
    logoutUser: () => void
  }
  
  const AuthContext = createContext<AuthContextType>({} as AuthContextType);
  
  interface Props {
      children : React.ReactNode
  }
  
export const AuthProvider = ( {children} : Props ) => {
      const navigate = useNavigate();
      const [user , setUser] = useState<string | null>(null);
      const [token , setToken] = useState<string | null>(null)
      const [isAuthenticated , setIsAuthenticated] = useState<boolean>(false)
  
      useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
          if(user && token) {
            setUser(user);
            setToken(token);
          }
          setIsAuthenticated(true)
      }, [])
  
      const register = async (username: string, email: string,  password: string) => {

        try {
          const res = await UserSignUp(username, email, password);
          //console.log("Auth:", res); // Log the response
          return res;
        } catch (error) {
            throw error;
        }
      } 
  
      const loginUser =  async (username: string, password: string) => {
        return await UserLogin(username, password)
          .then((res) => {
            if(res){
              localStorage.setItem("token", res.url + res.statusText)
              localStorage.setItem("user", username);
              setToken(res.url + res.statusText);
              setUser(username!);
              return res;
            }
          })
          .catch((error) => {
            console.error(error);
          })
        }
  
      const logoutUser = () => {
        // UserLogout;
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        setToken("");
        // navigate("/login")
      }
  
      const isLoggedIn = () => {
        return !!user
      }
  
    return (

        <AuthContext.Provider value = {{ loginUser, isLoggedIn, user, token, register, logoutUser }} >
            {isAuthenticated ? children : null}
        </AuthContext.Provider>
    )
}
  
export const useAuth = () => useContext(AuthContext)