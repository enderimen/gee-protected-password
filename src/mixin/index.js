export default {
  data() {
    return {
      generatedPasswordHistory: null
    }
  },
  created() {
    this.generatedPasswordHistory = this.generatePassword();
  },
  methods: {
    copyClipboard(input) {
      const copyText = document.querySelector(`[${input}]`);
      const alertMessage = document.querySelectorAll("[data-copy-alert]");
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      document.execCommand("copy");

      alertMessage.forEach(input => input.classList.add("-copied"));

      setTimeout(() => {
        alertMessage.forEach(input => input.classList.remove("-copied"));
      }, 3000);
    },
    generatePassword() {
      const characters = [".",",","@","?","/","!","&","#","*","$","^","£","-","_","%","A","B","C","Ç","D","E","F","G","Ğ","H","I","İ","K","K","L","M","N","O","Ö","P","R","S","Ş","T","U","Ü","V","Y","Z","a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"];

      let generatedPassword = characters[Math.floor(Math.random() * 10)] + (Math.random() * 1).toString(36) + characters[Math.floor(Math.random() * 73)];

      return generatedPassword;
    },
    actionGeneratePassword(event) {
      this.generatedPasswordHistory = this.generatePassword();

      const currentElement = event.target;
      currentElement.classList.add("-rotate");

      setTimeout(() => {
          currentElement.classList.remove("-rotate");
      }, 300);
    },
    getCurrentDate() {
      const today = new Date();

      const hour = today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
      const minute = today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
      const second = today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();

      const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
      const month = today.getMonth() < 10 ? `0${today.getMonth() + 1}` : today.getMonth();

      const fullDate = `${date}/${month}/${today.getFullYear()}`;
      const fullTime = `${hour}:${minute}:${second}`;

      return `${fullDate} ${fullTime}`;
    }
  }
}