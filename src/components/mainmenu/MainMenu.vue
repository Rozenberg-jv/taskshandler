<template>
  <div class="main-menu">
    <div class="menu-item"><div class="text">menu 1</div></div>
    <div class="menu-item"><div class="text">menu 2</div></div>
    <div class="menu-item"><div class="text">menu 3</div></div>
  </div>
</template>

<script>
  export default {
    name: "MainMenu"
  };
</script>

<style>
  .main-menu {
    position: absolute;
    display: none;
  }
  .main-menu:hover {
    display: flex;
    /* position: absolute; */
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;

    width: 12%;
    height: 100%;
    left: 0;
    top: 0;

    /* background-color: red; */
    z-index: 9999;
  }
  .menu-item {
    display: flex;
    width: 100%;
    height: 128px;

    justify-content: center;
    align-items: center;

    background-color: blanchedalmond;
    font: bold 24px/32px Arial;
  }
  .text {
    flex: 0 0 120px;
  }
</style>
