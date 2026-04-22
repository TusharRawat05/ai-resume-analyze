import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { logIn, register, logOut } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext);
    const { user, setUser, loading, setLoading } = context;

    const handleLogin = async ({ email, password }) => {
        setLoading(true);
        const data = await logIn({ email, password });
        if (data?.user) {
            setUser(data.user);
        }
        setLoading(false);
    };

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true);
        const data = await register({ username, email, password });
        if (data?.user) {
            setUser(data.user);
        }
        setLoading(false);
    };

    const handleLogout = async () => {
        setLoading(true);
        await logOut();
        setUser(null);
        setLoading(false);
    };

    return { user, loading, handleRegister, handleLogin, handleLogout };
};