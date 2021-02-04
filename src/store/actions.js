import Vue from "vue";
import { api } from "@/api/index.js";
import router from '@/router/index';

export const initAuth = ({commit, dispatch}) => {
    const token = localStorage.getItem("token");

    if (token) {
        const expirationDate = localStorage.getItem("expirationDate");
        let time = new Date().getTime();

        if (time >= +expirationDate) {
            dispatch("logout");
        } else {
            commit("setToken", token);
            let timerSecond = +expirationDate - time;
            dispatch("expiresIn", timerSecond);
            router.push("/");
        }
    } else {
        router.push("/login");
        return false;
    }
}

export const login = ({commit, dispatch, state}, authData) => {
    Vue.http.post(`${api.baseUrl}signInWithPassword?key=${state.apiKey}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
    }).then(response => {
        commit("setToken", response.data.idToken);
        commit("setUserInfo", authData);
        router.push("/");
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", new Date().getTime() + +response.data.expiresIn * 1000);

        dispatch("expiresIn", new Date().getTime() + +response.data.expiresIn * 1000);
    }).catch((error) => {

        switch (error.body.error.message) {
            case "EMAIL_NOT_FOUND":
                state.authenticationMessage.email = "E-posta adresi bulunamadı!";
            break;
            case "INVALID_PASSWORD":
                state.authenticationMessage.password = "Parolanızı kontrol ediniz!";
            break;
        }
    });
}

export const signup = ({commit, dispatch, state}, authData) => {
    Vue.http.post(`${api.baseUrl}signUp?key=${state.apiKey}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
    }).then(response => {
        router.push("/login");
    });
}

export const expiresIn = ({dispatch}, expiresIn) => {
    setTimeout(() => {
        dispatch("logout");
    }, expiresIn);
}

export const logout = ({commit}) => {
    commit("clearToken");
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    router.replace("/login");
}