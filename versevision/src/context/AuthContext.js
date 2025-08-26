import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../supabaseclient";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined)

    const signUpNewUser = async (email, password) => {
        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if(error){
            console.log('There was an error: ', error)
            return {success: false, error: error.message}
        }
        return {success: true, data}
    }

    const signInUser = async (email, password) => {
        try{
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })
            if(error){
                console.error("Sign in error: ", error)
                return {success: false, error: error.message}
            }

            console.log("Sign in success")
            return {success: true}

        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        supabase.auth.getSession().then(({data: { session }}) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    },[])

    const signOut = async () => {
        const {error} = await supabase.auth.signOut()
        if(error){
            console.error("There was an error: ", error)
        }
    }

    return (
        <AuthContext.Provider value={{session, signUpNewUser, signInUser, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}