<script setup>
import MyInfo from "../../logic/info";
import CloseIcon from "vue-material-design-icons/WindowClose.vue";
defineProps({
  shown: Boolean
})
const emit = defineEmits(["close"])
</script>
<template>
  <div class="modal-container" v-show="shown">
    <div class="modal app-padding" role="dialog">
      <app-button variant="icon" class="absolute right-0 top-0 pr-6 pt-6">
        <CloseIcon :size='24' @click="emit('close')" />
      </app-button>
      <h5 class="flex font-lg items-center" :style="{ fontWeight: 600 }">
        <img class="rounded-full w-10 h-10 mr-4" />Hire {{ MyInfo.name }}
      </h5>
      <form class="flex flex-wrap text-input-root mb-4">
        <input class="text-input flex-grow" name="name" placeholder="Name" />
        <input class="text-input flex-grow" name="email" placeholder="Email" type="email" />
        <!-- <div class="w-full flex-shrink-0"></div> -->
        <textarea class="text-input flex-grow" name="description"
          :placeholder="`Send a message to ${MyInfo.firstName}`"></textarea>
      </form>
      <div class="flex w-full items-baseline">
        <a class="link" v-if="MyInfo.resumeLink" :href="MyInfo.resumeLink">Download Resume</a>
        <spacer-view />
        <app-button class="py-2 px-3 mr-4 cancel-btn" @click="emit('close')">Cancel</app-button>
        <app-button class="py-2 px-3">Send</app-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 7, 44, 0.94);
  z-index: 30;
}

.modal {
  position: relative;
  background: white;
  min-width: 200px;
  width: 768px;
  max-width: 90vw;
  border-radius: 1rem;
}

@media (min-width:600px) {
  .modal {
    max-width: 80vw;
  }
}

@media (min-width: 1280px) {
  .app-padding {
    padding-left: 64px;
    padding-right: 64px;
  }
}

.text-input-root {
  margin: 0 -0.5rem;
}

.text-input {
  width: 15rem;
  border-radius: 0.5rem;
  margin: 0.75rem 0.5rem;
  padding: 0 0.75rem;
  color: var(--primary);
  height: 2.5rem;
  background: #E6E6E6;
  outline: 0 solid var(--primary);
  border: none;
}

.text-input:focus {
  outline-width: 2px;
}

textarea.text-input {
  height: 7.5rem;
  padding: 0.75rem;
}

.link {
  color: var(--primary-light);
  text-decoration: underline;
}

.cancel-btn {
  background: #E6E6E6;
  color: var(--primary);
}
</style>
