/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
    const {mutate: signUp, isPending} = useMutation({
        mutationFn : signupApi,
        onSuccess : (user) =>{
            toast.success("Account successfully created! Please verify the new account from user's email assress")
        }
    });
    return {signUp, isPending}
}
