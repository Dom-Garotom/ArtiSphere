import React from 'react'
import { View } from 'react-native'
import InputDefault from '../../atomo/inputDefault'
import ButtonDefault from '../../atomo/button'
import colors from '@/src/styles/color'
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import useAuth from '@/src/hooks/auth'

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

const signUpForms = z.object({
    name: z.string().min(4, { message: "o nome deve ter no mínimo quatro letras" }),
    email: z.string().email( { message: "formato inválido de email"} ),
    senha: z.string().min(8 , {message: "A senha deve ter no mínimo 8 caracteres "})
    .regex(regex , {message : "A sua senha deve conter pelo menos uma letra maiùsucula , uma minùscula , um número e um caractere especial"}),
})

export default function SignUpForm() {
    const { control, handleSubmit, formState: { errors, isLoading } } = useForm({
        resolver: zodResolver(signUpForms)
    });

    // const {serverError , signUp} = useAuth();

    const onSubmit = (data: any) => {
        console.log('Dados enviados:', data);
        // signUp(data);
    };

    return (
        <View style={{ gap: 16 }}>

            <Controller
                control={control}
                name='name'
                render={({ field: { onBlur, onChange, value } }) => (
                    <InputDefault
                        label={"Nome"}
                        placeholder='Seu nome'
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        messageError={errors.name?.message}
                    />
                )}

            />

            <Controller
                control={control}
                name='email'
                render={({ field: { onBlur, onChange, value } }) => (
                    <InputDefault
                        label={'Email'}
                        placeholder='Seu melhor email'
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        messageError={errors.email?.message}
                        keyboardType='email-address'
                    />
                )}

            />

            <Controller
                control={control}
                name='senha'
                render={({ field: { onBlur, onChange, value } }) => (
                    <InputDefault
                        label={'Senha'}
                        placeholder='Sua senha'
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        messageError={errors.senha?.message}
                        secureTextEntry
                    />
                )}

            />

            <ButtonDefault
                text='Criar conta'
                color={colors.secondary}
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    )
}