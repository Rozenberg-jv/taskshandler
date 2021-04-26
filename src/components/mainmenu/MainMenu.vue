<template>
  <div class="main-menu">
    <div class="menu-item">
      <router-link :to="{ name: 'daysview' }">
        <img src="/icons_dark/menu-64.png" title="Days View" />
      </router-link>
    </div>
    <div class="menu-item">
      <router-link :to="{ name: 'daysview' }">
        <img src="/icons_dark/close-64.png" title="not implemented yet" />
      </router-link>
    </div>
    <div class="menu-item">
      <router-link :to="{ name: 'daysview' }">
        <img src="/icons_dark/close-64.png" title="not implemented yet" />
      </router-link>
    </div>
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
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    margin: 2px 8px;

    position: absolute;
    left: 8px;
    top: 8px;
    max-width: 80px;
    height: 80px;

    z-index: 9999;

    background: url("/icons_dark/menu-80.png") center no-repeat;
    background-size: cover;
    overflow: hidden;
  }
  .main-menu:hover {
    max-width: 50%;
    background: 0;
  }

  .main-menu .menu-item {
    display: flex;

    width: 80px;
    height: 80px;

    transform: scale(0);

    justify-content: center;
    align-items: center;

    /* background-color: blanchedalmond; */
    font: bold 24px/32px Arial;
  }
  .main-menu:hover .menu-item {
    transform: scale(1);
    transition: all 0.5s;
  }

  .menu-item a {
    width: 100%;
    height: 100%;
  }
  .menu-item img {
    width: 100%;
    height: 100%;
  }

  .text {
    flex: 0 0 120px;
    color: green;
  }
</style>
