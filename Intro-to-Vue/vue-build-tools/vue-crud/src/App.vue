<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>
<script>
export default {
  data() {
    return {
      names: ['Shaheda, Charles', 'Elaine, Imperial', 'Hasnaa, Benis', 'Tapiwa, Taps', 'Jaykef, Jaward'],
      selected: '',
      prefix: '',
      first: '',
      last: ''
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter((n) =>
        n.toLowerCase().startsWith(this.prefix.toLowerCase())
      )
    }
  },
  watch: {
    selected(name) {
      ;[this.last, this.first] = name.split(', ')
    }
  },
  methods: {
    create() {
      if (this.hasValidInput()) {
        const fullName = `${this.last}, ${this.first}`
        if (!this.names.includes(fullName)) {
          this.names.push(fullName)
          this.first = this.last = ''
        }
      }
    },
    update() {
      if (this.hasValidInput() && this.selected) {
        const i = this.names.indexOf(this.selected)
        this.names[i] = this.selected = `${this.last}, ${this.first}`
      }
    },
    del() {
      if (this.selected) {
        const i = this.names.indexOf(this.selected)
        this.names.splice(i, 1)
        this.selected = this.first = this.last = ''
      }
    },
    hasValidInput() {
      return this.first.trim() && this.last.trim()
    }
  }
}
</script>

<template>
  <header>
    <img alt="My profile pic" class="logo" src="@/assets/jaykef.jpg" width="150" height="150" />

    <div class="wrapper" style="">
      <HelloWorld msg="Hi Jaykef, You did it!" />
      <div style="margin-top: 40px">
        <h2 style="padding-bottom: 14px; color: #00bd7e; font-weight: 500">Vue CRUD </h2>
        <input v-model="prefix" placeholder="Filter prefix"  style="width: 100%"></div>
        
        <select size="5" v-model="selected" style="margin: 15px 0px 0px 0px; width: 100%">
          <option v-for="name in filteredNames">{{ name }}</option>
        </select>
        <div style="padding: 15px 0px 15px">
          <label>Name: <input v-model="first"></label>
          <label>Surname: <input v-model="last"></label>
        </div>
        <div class="buttons" style="width: 100%">
          <button @click="create">Create</button>
          <button @click="update">Update</button>
          <button @click="del">Delete</button>
        </div>
      </div>
  </header>
</template>

<style scoped>
.buttons {
  display: block;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  background-size: cover;
  border-radius: 50%;
  border: 7px solid #00bd7e;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
