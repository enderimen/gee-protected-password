export const setIsOpenWindow = (state, payload) => {
    state.isOpenWindow = payload.status;

    if(payload.status){
        switch(payload.component){
            case "passwords":
                state.componentOptions.name = "app-new-password";
                state.componentOptions.title = "Yeni Parola Ekle";
            break;
            case "secure-notes":
                state.componentOptions.name = "app-new-note";
                state.componentOptions.title = "Yeni Not Ekle";
            break;
            case "account":
                state.componentOptions.name = "app-new-account";
                state.componentOptions.title = "Yeni Hesap Ekle";
            break;
        }
    }
};