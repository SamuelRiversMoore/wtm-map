<template>
  <div class="message-box dialog-mask" @click="$close(false)">
    <div class="dialog-content">
      <header>{{ title }}</header>
      <div class="dialog-body">
        <p>{{ content }}</p>
      </div>
      <footer class="align-right">
        <el-button @click="$close(false)">No</el-button>
        <el-button type="primary" @click="$close(true)">Yes</el-button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {}
};
</script>
