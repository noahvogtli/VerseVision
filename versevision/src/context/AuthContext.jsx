import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../supabaseclient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setLoading(false)
        }).catch(() => {
            setSession(null)
            setLoading(false)
        })

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setLoading(false)
        })

        return () => subscription.unsubscribe()
    }, [])

    const signUpNewUser = async (email, password, username) => {
        const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { display_name: username } } })
        if (error) return { success: false, error: error.message }
        return { success: true, data }
    }

    const signInUser = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) return { success: false, error: error.message }
        setSession(data.session)
        return { success: true }
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
            console.error("Sign out error:", error)
            return
        }
        setSession(null)
    }

    return (
        <AuthContext.Provider value={{ session, loading, signUpNewUser, signInUser, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

// Named "useAuth" so the React Compiler recognizes it as a hook
export const useAuth = () => {
    return useContext(AuthContext);
}

// Keep UserAuth as an alias so nothing breaks if missed during rename
export const UserAuth = useAuth;
