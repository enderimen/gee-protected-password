<template>
    <div class="m-note__item">
        <header class="m-note__header -header">
            <app-text size="small" weight="bold">{{note.title}}</app-text>
            <div class="row">
                <IconEdit class="icon -black -mr10" @click="editNote(note.id)"/>
                <IconDelete class="icon -black" @click="deleteNote({title: note.title, id: note.id})"/>
            </div>
        </header>
        <article class="m-note__content">
            {{note.content}}
        </article>
        <header class="m-note__footer -footer">
            <app-text size="small" weight="bold"><strong>Oluşturulma:</strong> {{note.created}}</app-text>
            <app-text size="small" weight="bold"><strong>Son düzenleme:</strong> {{note.lastModified}}</app-text>
        </header>
    </div>
</template>

<script>
import appText from '@/components/Text.vue';
import IconDelete from '@/icons/delete.svg';
import IconEdit from '@/icons/edit.svg';
import { mapGetters, mapMutations } from "vuex";

export default {
    components: {
        appText,
        IconDelete,
        IconEdit
    },
    props: {
        note: Object
    },
    methods: {
        ...mapGetters(["getNote", "getCurrentComponentName"]),
        ...mapMutations(["setIsOpenWindow", "setCurrentItem"]),
        deleteNote(note){
            if(confirm(`${note.title} başlıklı notu silmek istediğinizden emin misiniz?`)){
                this.$store.commit("deleteNote", note.id);
            }
        },
        editNote(noteId) {
            this.setIsOpenWindow({status: true, component: this.getCurrentComponentName(), title: "Notu Güncelle"});
            this.$store.commit("setCurrentItem", this.$store.getters.getNote(noteId));
        },
        getCurrentComponentName() {
            return this.$router.currentRoute.path.split("/")[1]
        }
    }
}
</script>

<style lang="scss" scoped>
.m-note {
    &__item {
    height: 270px;
    margin-bottom: 20px;
    width: 33.3333%;
    border-radius: 5px;
    padding: 20px;
    cursor: pointer;
  }

  &__header, &__footer {
    height: 35px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--font-family);
    flex-shrink: 0;

    &.-header {
        position: relative;
        background-color: var(--note-header-bg-color);
        &:before {
            position: absolute;
            content: "";
            display: inline-block;
            height: 40px;
            width: 40px;
            left: 50%;
            top: -10px;
            transform: translateX(-50%);
            background-image: url("./../icons/pin.png");
            background-repeat: no-repeat;
            background-size: 100%;
        }
    }

    &.-footer {
        background-color: var(--note-header-bg-color);
        box-shadow: 0px 2px 10px rgba(0,0,0, .15);
    }
  }

  &__content {
    font-family: var(--font-family);
    padding: 13px;
    height: 180px;
    text-align: justify;
    color: var(--black-text-color);
    background-color: var(--note-content-bg-color);
    background-image: url("https://www.transparenttextures.com/patterns/lined-paper.png");
  }
}
</style>