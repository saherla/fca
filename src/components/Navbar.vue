<script setup lang="ts">
import { ref } from "vue"

const showMenu = ref(false)
const toggleNavbar = () => (showMenu.value = !showMenu.value)
</script>

<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <a
          class="text-xl font-title leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          >Fisioterapia con Amor</a
        ><button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
        v-bind:class="{ hidden: !showMenu, block: showMenu }"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              target="_blank"
              href="https://wa.me/529621068291/"
            >
              <i
                class="lg:text-gray-300 text-gray-500 fab fa-whatsapp leading-lg fa-2xl"
              ></i>
              <span class="lg:hidden inline-block ml-2">Whatsapp</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              target="_blank"
              href="https://www.instagram.com/fisioterapia_conamor/"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-instagram leading-lg fa-2xl"
              ></i
              ><span class="lg:hidden inline-block ml-2">Instagram</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
