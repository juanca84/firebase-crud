<template>
  <div class="hello">
    <h1>Crear empleado</h1>
    <input type="text" class="form-control my-2" v-model="name" placeholder="Nombre">
    <input type="text" class="form-control my-2" v-model="date" placeholder="Fecha de nacimiento (DD/MM/AAAA)">
    <button class="btn btn-success btn-sm my-2" @click="createEmployee">Guardar</button>
  </div>
</template>

<script>
import firebase from "../firebaseInit";
const db = firebase.firestore();

export default {
  name: 'Principal',
  props: {
    msg: String,
  },
  data(){
    return {
      name: '',
      date: ''
    }
  },
  methods: {
    createEmployee() {
      if (this.name != "") {
        db.collection("employees")
          .add({ date: this.date, name: this.name })
          .then(() => {
            alert("Document successfully written!");
            this.name='';
            this.date='';
            // this.readEmployees();
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    }
  }
}
</script>

<style>
</style>
