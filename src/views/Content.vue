<template>
  <section class="m-content">
      <app-header>
          <app-button>
              <IconPlus class="icon -small -mr15"/>
              Ekle
          </app-button>
      </app-header>
      <slot/>
      <!-- <app-no-content>
            <icon-password class="icon -large -soft"/>
            <app-text tag="h3" size="large" weight="bold" class="-mt20">
                Tüm parolalarınız tek bir yerde!
            </app-text>
            <app-text tag="p" weight="thin" class="-mt20">
                Özenle korunan GEE kasanıza şifrelerinizi eklemeye başlayın.
            </app-text>
            <app-button class="-mt20">Yeni Şifre</app-button>
      </app-no-content> -->
  </section>
</template>

<script>
import appHeader from "@/components/Header.vue";
import appButton from "@/components/Button.vue";
import IconPlus from "@/icons/plus.svg";
import IconPassword from "@/icons/password.svg";
import appNoContent from "@/components/NoContent.vue";
import appText from "@/components/Text.vue";

export default {
    components: {
        appHeader,
        appNoContent,
        IconPassword,
        appButton,
        IconPlus,
        appText
    }
}
</script>

<style lang="scss">
.m-content {
    width: 100%;
    padding: 40px 65px;
    background-color: var(--content-bg-color);
}
</style>