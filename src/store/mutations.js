export const setIsOpenWindow = (state, payload) => {
    state.isOpenWindow = payload.status;

    if(payload.status){
        switch(payload.component){
            case "":
            case "passwords":
                state.componentOptions.name = "app-new-password";
                state.componentOptions.title = payload.title ? payload.title : "Yeni Parola Ekle";
            break;
            case "secure-notes":
                state.componentOptions.name = "app-new-note";
                state.componentOptions.title = payload.title ? payload.title : "Yeni Not Ekle";
            break;
            case "account":
                state.componentOptions.name = "app-new-account";
                state.componentOptions.title = payload.title ? payload.title : "Yeni Hesap Ekle";
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

export const setCurrentItem = (state, currentItem) => {
    state.currentItem = currentItem;
}

export const setSearchQuery = (state, searchText) => {
    state.searchQuery = searchText.toLowerCase();
}

export const setLanguage = (state, currentLanguage) => {
    state.language = currentLanguage;
}

export const setToken = (state, token) => {
    state.token = token;
}

export const clearToken = (state) => {
    state.token = "";
}