<template>
  <div id="testmodal" v-if="isVisible">
    <div class="modal-box">
      <div class="input-area">
        <input
          type="text"
          id="title"
          v-model="newTask.title"
          placeholder="title"
        />
        <textarea
          id="text"
          v-model="newTask.text"
          placeholder="text"
          maxlength="1000"
          rows="15"
          wrap="hard"
        />
        <date-picker
          v-model="newTask.date"
          :value="newTask.date"
          :is-dark="dpSetting.isDark"
          :color="dpSetting.color"
          :trim-weeks="dpSetting.trimWeeks"
          @dayclick="onDayClick"
        ></date-picker>
        <button class="submit-button" v-on:click="submit">Submit</button>
      </div>
      <button class="close-modal-button" v-on:click="closeModal">
        <img src="/icons_dark/close-64.png" />
      </button>
    </div>
  </div>
</template>

<script>
  import { DatePicker } from "v-calendar";

  export default {
    data() {
      return {
        visible: false,
        newTask: {
          title: "",
          text: "",
          date: new Date()
          // date: this.$moment().format("DD-MM-YYYY")
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
          // date: this.$moment().format("DD-MM-YYYY")
        };
        this.closeModal();
      },
      onDayClick(day) {
        console.log("dayClick", day);
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
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 9990;
  }

  .modal-box {
    position: relative;
    display: flex;
    height: 50%;
    width: 40%;
    background-color: #a6a6a8e6;
    z-index: 9999;
    /* margin-bottom: 5%; */
    border-radius: 2px;
    box-shadow: 0 0 10px 4px #ffffffaa;
    /* box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.8); */
  }

  .input-area {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* padding: 10% 16px 16px 16px; */

    align-items: center;
  }

  .input-area input {
    margin: 8px;
  }

  #title {
    width: 60%;
    align-items: center;
    text-align: center;
  }

  #text {
    width: 90%;
    resize: none;
    flex-grow: 1;
  }

  #date {
    text-align: center;
  }

  .submit-button {
    margin: 8px;
    width: 15%;
    height: 10%;
  }

  .close-modal-button {
    position: absolute;
    right: 0;
    top: 0;
    margin: 4px;

    /* background-color: #afafaf; */
    background: 0;
    border: 0;
    height: 28px;
    width: 28px;
    border-radius: 14px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hide;
  }

  .close-modal-button:hover {
    border: 2px solid #fff;
    /* background-color: #3e8e41; */
  }

  .close-modal-button img {
    height: 24px;
    width: 24px;
  }

  .close-modal-button:active,
  .close-modal-button:focus {
    outline: none;
  }

  .close-modal-button:active {
    /* background-color: #f66; */
    transform: scale(0.93);
    border-radius: 7px;
    border: 3px solid #fff;
  }
</style>
