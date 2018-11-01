<template>
  <div class="message-box dialog-mask" @click="$close(false)">
    <div class="dialog-content">
      <header>{{ title }}</header>
      <div class="dialog-body">
        <p>{{ content }}</p>
      </div>
      <footer>
        <button @click="$close(true)">Yes</button>
        <button @click="$close(false)">No</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {}
};
</script>
