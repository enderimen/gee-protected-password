import Vue from "vue";
import { api } from "@/api";

const state = {
    noteList: []
};
const getters = {
    getNoteList(state, getters, rootState) {
      if(rootState.searchQuery !== "") {
        return state.noteList.filter(noteItem => {
          return noteItem.title.toLowerCase().match(rootState.searchQuery) || noteItem.content.toLowerCase().match(rootState.searchQuery)
        });
      }
      return state.noteList;
    },
    getNoteListSize(state) {
      return state.noteList.length;
    },
    getNote(state) {
      return (noteId) => state.noteList.find(note => note.id === parseInt(noteId));
    }
};
const mutations = {
    deleteNote(state, noteId) {
      state.noteList.splice(state.noteList.findIndex(note => note.key === noteId), 1);
    },
    editNote(state, editedNote) {
      state.noteList.splice(state.noteList.findIndex(note => note.id === parseInt(editedNote.id)), 1, editedNote);
    },
    saveNote(state, noteData) {
      state.noteList.push(noteData);
    },
};
const actions = {
  fetchNoteListFromServer({commit}) {
    state.noteList = [];
    Vue.http.get(`${api.databaseUrl}notes.json`).then(response => {
      let data = response.data;

      for (const key in data) {
        data[key].key = key;
        commit("saveNote", data[key]);
      }
    });
  },
  saveNote({commit}, noteData) {
    Vue.http.post(`${api.databaseUrl}notes.json`, noteData).then(response => {
      commit("saveNote", noteData);
    });
  },
  editNote({commit}, editedNote) {
    Vue.http.put(`${api.databaseUrl}notes/${editedNote.key}.json`, editedNote).then(() => {
      commit("editNote", editedNote);
    });
  },
  deleteNote({commit}, noteId) {
    Vue.http.delete(`${api.databaseUrl}notes/${noteId}.json`).then(() => {
      commit("deleteNote", noteId);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};