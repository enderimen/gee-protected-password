const state = {
    noteList: [
      {
          id: 1,
          title: "Test Teknik Not",
          content: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum",
          lastModified: "Today at 12:09 PM",
          created: "Today at 03:25 AM"
        },
        {
          id: 2,
          title: "Test Yahoo Notu",
          content: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum, dolor sit.",
          lastModified: "Today at 12:09 PM",
          created: "Today at 02:25 AM"
        },
        {
          id: 3,
          title: "Vue 101",
          content: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum, dolor sit.",
          lastModified: "Today at 12:09 PM",
          created: "Today at 07:25 AM"
        },
        {
          id: 4,
          title: "Vue 201",
          content: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, expedita. Lorem ipsum, dolor sit.",
          lastModified: "Today at 12:09 PM",
          created: "Today at 07:25 AM"
        }
    ]
};
const getters = {
    getNoteList(state) {
      return state.noteList;
    },
    getNote(state) {
      return (noteId) => state.noteList.find(note => note.id === parseInt(noteId));
    }
};
const mutations = {
    deleteNote(state, noteId) {
      state.noteList.splice(state.noteList.findIndex(note => note.id === parseInt(noteId)), 1);
    },
    editNote(state) {
      return state.noteList;
    }
};
const actions = {
};

export default {
  state,
  getters,
  mutations,
  actions,
};