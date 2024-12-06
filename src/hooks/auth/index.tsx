import { useState } from "react"
import { router } from "expo-router";
import artiSphereApi from "@/src/service/api/artiSphere";
import * as SecureStore from "expo-secure-store"

export default function useAuth() {
    const [serverMessageError, setserverMessageError] = useState("");
    const [serverLoading, setLoading] = useState(false);

    // SecureStore
    const storeToken = async (token: string) => {
        try {
            await SecureStore.setItem(
                'user_token', 
                token
            );
            console.log('Token armazenado com segurança.');
        } catch (error) {
            console.error('Erro ao salvar o token:', error);
        }
    };



    const signUp = async (data: object) => {
        try {
            setLoading(true);
            const response = await artiSphereApi.post("/register", data)

            if (response.data.success) {
                storeToken(response.data.token.toString())
                setLoading(false);
                router.push("/home");
            }


        } catch (err: any) {
            setLoading(false);

            if (err.response) {
                // Erros com status HTTP fora da faixa 2xx
                setserverMessageError(err.response.data.menssage)
            } else if (err.request) {
                // Sem resposta do servidor
                console.log('Sem resposta do servidor. Verifique sua conexão.');
            } else {
                // Erros desconhecidos
                console.log('Ocorreu um erro inesperado.');
            }
        }
    }

    return { signUp, serverMessageError, serverLoading }
}
