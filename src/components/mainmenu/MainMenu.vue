<template>
  <div class="main-menu">
    <div class="menu-item">
      <router-link :to="{ name: 'daysview' }">
        <img src="/icons_dark/menu-64.png" title="Days View" />
      </router-link>
    </div>
    <div class="menu-item">
      <router-link :to="{ name: 'calendarview' }">
        <img src="/icons_dark/calendar-128.png" title="Calendar View" />
      </router-link>
    </div>
    <div class="menu-item">
      <router-link :to="{ name: 'main' }">
        <img src="/icons_dark/close-64.png" title="Home" />
      </router-link>
    </div>
    <div class="menu-item">
      <router-link :to="{ name: 'notimplemented' }">
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin: 2px 8px;

    position: absolute;
    left: 8px;
    top: 8px;
    width: 80px;
    height: 80px;

    z-index: 9999;

    border-radius: 8px;
    background: url("/icons_dark/menu-80.png") center no-repeat;
    background-size: cover;
    overflow: hidden;
  }
  .main-menu:hover {
    /* width: calc(98% - 8px); */
    height: max-content;
    background: #60606020;
  }

  .main-menu .menu-item {
    display: flex;

    width: 64px;
    height: 64px;
    margin-top: 8px;

    transform: scale(0);

    justify-content: center;
    align-items: center;

    border-radius: 32px;
    font: bold 24px/32px Arial;
  }
  .main-menu:hover .menu-item {
    transform: scale(1);
    transition: all 0.5s;
  }
  .main-menu:hover .menu-item:hover {
    transform: scale(1.1);
    background-color: #ffffff20;
  }

  .menu-item a {
    width: 100%;
    height: 100%;
  }
  .menu-item img {
    width: 100%;
    height: 100%;
  }
</style>
