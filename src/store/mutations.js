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
            case "theme-option":
                state.componentOptions.name = "app-theme-option-list";
                state.componentOptions.title = "Tema Seçin";
            break;
        }
    }
};

export const setThemeName = (state, themeName) => {
    state.currentTheme = themeName;
    document.documentElement.setAttribute("data-theme", state.currentTheme);
    localStorage.setItem("theme-name", state.currentTheme);
}

export const setTextureName = (state, textureName) => {
    state.textureName = textureName;
    document.documentElement.setAttribute("data-texture", state.textureName);
    localStorage.setItem("texture-name", state.textureName);
}