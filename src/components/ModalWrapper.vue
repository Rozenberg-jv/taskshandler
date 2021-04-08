<template>
  <div id="testmodal" v-if="isVisible">
    <div class="date-picker">
      <date-picker
        v-model="newTask.date"
        :value="newTask.date"
        :is-dark="dpSetting.isDark"
        :color="dpSetting.color"
        @dayclick="onDayClick"
      ></date-picker>
    </div>
    <div class="modal-box">
      <!-- <div class="input-area"> -->
      <div class="left-box">
        <div class="image-picker-box" @click="imagePickerClick">
          <img id="image" src="/task_icon/task01.png" />
        </div>
        <div class="type-pick-box">
          <button v-on:click="typePickerClick">Set type</button>
          <p class="type-text">{{ selectedTypeName }}</p>
        </div>
      </div>
      <div class="title">
        <input
          type="text"
          id="title"
          v-model="newTask.title"
          placeholder="title"
        />
      </div>
      <div class="text">
        <textarea
          id="text"
          v-model="newTask.text"
          placeholder="text"
          maxlength="1000"
          rows="15"
          wrap="hard"
        />
      </div>
      <div class="submit-button">
        <button id="submit-button" v-on:click="submit">
          Submit
        </button>
      </div>
      <button id="close-modal-button" v-on:click="closeModal">
        <img src="/icons_dark/close-64.png" />
      </button>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
  import { DatePicker } from "v-calendar";

  export default {
    data() {
      return {
        visible: true,
        newTask: {
          title: "",
          text: "",
          date: new Date(),
          type: {
            name: "common"
          }
          // date-picker: this.$moment().format("DD-MM-YYYY")
        },
        dpSetting: {
          isDark: true,
          color: "green",
          trimWeeks: true
        }
      };
    },
    components: {
      DatePicker
    },
    methods: {
      closeModal() {
        this.visible = false;
      },
      openModal() {
        this.visible = true;
      },
      submit() {
        this.$emit("newTaskSubmit", this.newTask);
        this.newTask = {
          title: "",
          text: "",
          date: new Date()
          // date-picker: this.$moment().format("DD-MM-YYYY")
        };
        this.closeModal();
      },
      onDayClick(day) {
        console.log("dayClick", day);
      },
      typePickerClick() {
        console.log("typePickerClick");
      },
      imagePickerClick() {
        console.log("imagePickerClick");
      }
    },
    computed: {
      isVisible: function() {
        return this.visible;
      },
      selectedTypeName() {
        return this.newTask.type.name;
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
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 9990;

    font: bold "Georgia";
  }

  input,
  textarea,
  button {
    margin: 0;
    padding: 0;
  }

  button {
    background: 0;
    border: 0;
    font: 1.2em bolder Georgia;
  }

  button:hover {
    border: 2px solid #fff;
    /* box-shadow: 0 0 2px 2px rgb(220, 220, 220); */
  }

  /* date picker */
  .date-picker {
    position: absolute;
    text-align: center;
    left: 13%;
  }

  .vc-container.vc-is-dark {
    background-color: #555555e6;
  }

  /* main box */
  .modal-box {
    display: flex;
    position: relative;
    height: 60%;
    width: 40%;
    background-color: #555555e6;
    z-index: 9999;

    border-radius: 8px;
    border: 2px solid #ffff;
    box-shadow: 0 2px 4px 4px #00000066;
  }

  /* left box */
  .left-box {
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  /* image picker */
  .image-picker-box {
    background-color: #bbba;
    border-radius: 24px;

    height: 96px;
    margin: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .image-picker-box:hover {
    border: 2px solid #fff;
  }
  .image-picker-box:active {
    transform: scale(0.93);
    border-radius: 12px;
  }
  .image-picker-box #image {
    width: 64px;
    height: 64px;
  }

  /* type picker */
  .type-pick-box button {
    background-color: #bbba;
    border-radius: 16px;
    padding: 8px;
  }
  .type-pick-box button:active {
    transform: scale(0.93);
    border-radius: 6px;
    border: 3px solid #fff;
  }
  .type-text {
    height: 32px;
    color: white;
    line-height: 32px;
  }

  /* central box */

  .title {
  }
  #title {
    text-align: center;
    padding: 0;
  }

  .text {
  }
  #text {
    resize: none;
  }

  .date-button {
  }

  .submit-button {
    opacity: 0;
  }

  #close-modal-button {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;

    justify-content: center;
    align-items: center;
    overflow: hidden;

    height: 28px;
    width: 28px;
    border-radius: 14px;
  }

  #close-modal-button img {
    height: 24px;
    width: 24px;
  }

  #close-modal-button:active,
  #close-modal-button:focus {
    outline: none;
  }

  #close-modal-button:active {
    transform: scale(0.93);
    border-radius: 7px;
    border: 3px solid #fff;
  }
</style>
