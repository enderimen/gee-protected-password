export default {
  methods: {
    copyClipboard() {
      const copyText = document.querySelector("[data-copy-clipboard]");
      const alertMessage = document.querySelector("[data-copy-alert]");

      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      document.execCommand("copy");

      alertMessage.classList.add("-copied");

      setTimeout(() => {
        alertMessage.classList.remove("-copied");
      }, 3000);
    }
  }
}