<template>
  <div id="testmodal" v-if="isVisible">
    <div class="modal-box">
      
      <button class="close-modal-button" v-on:click="closeModal">X</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    },
    methods: {
      closeModal() {
        console.log("close modal");
        this.visible = false;
      },
      openModal() {
        console.log("open modal");
        this.visible = true;
      }
    },
    computed: {
      isVisible: function() {
        return this.visible;
      }
    }
  };
</script>

<style scoped>
  #testmodal {
    display: flex;
    position: absolute;
    min-width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.35);
    z-index: 9990;
  }

  .modal-box {
    /* display: flex; */
    position: relative;
    height: 50%;
    width: 40%;
    background-color: rgba(20, 65, 190, 0.9);
    z-index: 9999;
    margin-bottom: 5%;
    border-radius: 2px;
    box-shadow: 0 0 10px 4px rgba(80, 125, 255, 0.8);
  }

  .close-modal-button {
    position: absolute;
    right: 0;
    top: 0;
    margin: 4px;
  }
</style>
