<template>
  <div class="full-wrapper">
    No such page
  </div>
</template>

<script>
  export default {
    name: "NotFound"
  };
</script>

<style>
  .full-wrapper {
    display: flex;
    position: absolute;
    min-width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0);
    z-index: 9990;

    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 128px;
  }
</style>
