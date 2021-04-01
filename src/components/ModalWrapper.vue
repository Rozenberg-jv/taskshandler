<template>
  <div id="testmodal" v-if="isVisible">
    <div class="date-picker" v-bind:class="{ shown: datePickerShow }">
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
      <div class="image-picker"></div>
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
      <div class="date-button">
        <button v-on:click="datePickerToggle">
          Set date
        </button>
      </div>
      <div class="submit-button">
        <button id="submit-button" v-on:click="submit">
          Submit
        </button>
      </div>
      <div class="close-modal-button">
        <button
          id="close-modal-button"
          class="close-modal-button"
          v-on:click="closeModal"
        >
          <img src="/icons_dark/close-64.png" />
        </button>
      </div>
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
          date: new Date()
          // date-picker: this.$moment().format("DD-MM-YYYY")
        },
        dpSetting: {
          isDark: true,
          color: "green",
          trimWeeks: true
        },
        datePickerShown: false
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
      datePickerToggle() {
        this.datePickerShown = !this.datePickerShown;
        console.log("datePickerShown", this.datePickerShown);
        console.log("datePickerShow", this.datePickerShow);
      }
    },
    computed: {
      isVisible: function() {
        return this.visible;
      },
      datePickerShow() {
        return this.datePickerShown;
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

  .date-picker {
    position: absolute;
    text-align: center;
    left: 13%;
    transition: 0.5s ease;
    transform: scale(10);
    opacity: 0;
  }

  .date-picker.shown {
    opacity: 1;
    transition: 0.2s ease;
    transform: scale(1);
  }

  .modal-box {
    display: grid;
    /* position: relative; */
    height: 60%;
    width: 40%;
    background-color: #a6a6a8e6;
    z-index: 9999;

    border-radius: 8px;
    border: 2px solid #ffff;
    /* box-shadow: 0 0 10px 4px #ffffffaa; */
    box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.4);

    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(18, 1fr);
    grid-template-rows: repeat(18, 1fr);
    grid-template-areas:
      ".   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   cls "
      ".   imp imp .   ttl ttl ttl ttl ttl ttl ttl ttl ttl ttl ttl ttl .   .   "
      ".   imp imp .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   "
      ".   imp imp .   txt txt txt txt txt txt txt txt txt txt txt txt .   .   "
      ".   .   .   .   txt txt txt txt txt txt txt txt txt txt txt txt .   .   "
      ".   .   .   .   txt txt txt txt txt txt txt txt txt txt txt txt .   .   "
      ".   .   .   .   txt txt txt txt txt txt txt txt txt txt txt txt .   .   "
      ".   .   .   .   txt txt txt txt txt txt txt txt txt txt txt txt .   .   "
      ".   .   .   .   txt txt txt txt txt txt txt txt txt txt txt txt .   .   "
      ".   .   .   .   txt txt txt txt txt txt txt txt txt txt txt txt .   .   "
      ".   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   "
      ".   .   .   .   .   .    .   .   .   .   .   .   .   .   .   .   .   .   "
      ".   .   .   .   .   .    .   .   .   .   .   .   .   .   .   .   .   .   "
      ".   .   .   .   .   .    .   .   .   .   .   .   .   .   .   .   .   .   "
      ".   .   .   .   .   .    .   .   .   .   .   .   .   .   .   .   .   .   "
      ".   .   .   .   .   .    .   .   .   .   .   .   .   .   .   .   .   .   "
      "dtb dtb .   .   .   .   .   .   .   .   .   .   .   .   .   .   sbm sbm "
      "dtb dtb .   .   .   .   .   .   .   .   .   .   .   .   .   .   sbm sbm ";
  }
  /* imp ttl txt dtb sbm cls */

  input,
  textarea,
  button {
    width: 100%;
    height: 100%;
  }

  .image-picker {
    grid-area: imp;
    width: 100%;
    height: 100%;
    background-color: #dddd;
    border-radius: 16px;
  }

  .title {
    grid-area: ttl;
    width: 90%;
    height: 90%;
  }
  #title {
    /* align-items: center; */
    text-align: center;
    padding: 0;
  }

  .text {
    width: 100%;
    height: 100%;
    grid-area: txt;
  }
  #text {
    resize: none;
  }

  .date-button {
    grid-area: dtb;
    width: 100%;
    height: 100%;
  }

  .submit-button {
    width: 100%;
    height: 100%;
    grid-area: sbm;
  }

  .close-modal-button {
    /* position: absolute; */
    /* right: 0; */
    /* top: 0; */
    /* margin: 4px; */

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

    grid-area: cls;
  }

  #close-modal-button:hover {
    border: 2px solid #fff;
    /* background-color: #3e8e41; */
  }

  #close-modal-button img {
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
