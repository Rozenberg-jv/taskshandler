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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    position: absolute;
    left: 0;
    top: 0;
    width: 64px;
    height: 64px;

    z-index: 9999;

    transition: all 1.3s;
  }
  .main-menu:hover {
    width: 128px;
    height: 100%;
    transition: all 1.3s;
  }

  .main-menu .menu-item {
    opacity: 0;
    margin: 16px;

    justify-content: center;
    align-items: center;

    background-color: blanchedalmond;
    font: bold 24px/32px Arial;
  }
  .main-menu:hover .menu-item {
    width: 100%;
    height: 64px;

    display: flex;
    opacity: 100%;
    transition: opacity 1.2s;
  }
  .text {
    flex: 0 0 120px;
    color: green;
  }
</style>
