<template>
  <div id="testmodal">
    <div class="date-picker">
      <DatePicker
        v-model="datepickerDate"
        :is-dark="dpSettings.isDark"
        :color="dpSettings.color"
        :model-config="dpSettings.modelConfig"
        @dayclick="onDayClick"
      ></DatePicker>
    </div>
    <div class="modal-box">
      <div class="left-box">
        <div
          class="timetype-picker-box"
          v-if="!isPicking"
          @click="timetypePickerExpand"
        >
          <img :src="newTask.timetype.image" />
        </div>
        <div
          class="type-picker-box"
          v-if="!isPicking"
          @click="typePickerExpand"
        >
          <button>{{ selectedTypeName }}</button>
        </div>
        <div
          class="image-picker-box"
          @click="imagePickerExpand"
          v-if="!isPicking"
        >
          <img :src="newTask.image.file" />
        </div>
        <!--  -->
        <div class="timetype-list" v-if="isPickingTimeType">
          <button
            v-on:click="timetypePickerPick(tType)"
            v-for="tType in timeTypes"
            :key="tType.name"
            :class="{ picked: tType.name === newTask.timetype.name }"
          >
            <img :src="tType.image" />
          </button>
        </div>
        <div class="type-list" v-if="isPickingType">
          <button
            v-on:click="typePickerPick(type)"
            v-for="type in types"
            :key="type.name"
            :class="{ picked: type.name === newTask.type.name }"
          >
            {{ type.name }}
          </button>
        </div>
        <div class="image-list" v-if="isPickingImage">
          <button
            v-on:click="imagePickerPick(image)"
            v-for="image in images"
            :key="image"
            :class="{ picked: image.name === newTask.image.name }"
          >
            <img :src="image.file" />
          </button>
        </div>
      </div>

      <div class="middle-box">
        <input
          type="text"
          id="title"
          class="inputs"
          v-model="newTask.title"
          placeholder="Title"
        />
        <textarea
          id="text"
          class="inputs"
          v-model="newTask.text"
          placeholder="Text"
          maxlength="1000"
          rows="15"
          wrap="hard"
        />
      </div>

      <div class="right-box"></div>

      <button id="submit-button" v-on:click="validateOnSubmit">
        <img src="/icons_dark/ok-256.png" />
      </button>
      <button id="close-modal-button" v-on:click="closeModal">
        <img src="/icons_dark/close-64.png" />
      </button>
    </div>
  </div>
</template>

<script>
  import { DatePicker } from "v-calendar";
  import { mapGetters } from "vuex";

  export default {
    name: "NewTaskModal",
    props: {
      taskDataProp: {
        type: Object
      }
    },
    data() {
      return {
        newTask: {
          title: this.taskDataProp.title,
          text: this.taskDataProp.text,
          date: this.taskDataProp.date,
          type: this.taskDataProp.type,
          timetype: this.taskDataProp.timetype,
          image: this.taskDataProp.image
        },
        datepickerDate: this.taskDataProp.date * 1000,
        dpSettings: {
          isDark: true,
          color: "green",
          trimWeeks: true,
          modelConfig: {
            type: "number"
          }
        },
        isPickingType: false,
        isPickingImage: false,
        isPickingTimeType: false,
        types: this.getTaskTypes(),
        images: this.getIconImages(),
        timeTypes: this.getTimeTypes()
      };
    },
    components: {
      DatePicker
    },
    methods: {
      ...mapGetters([
        "getTaskTypes",
        "getIconImages",
        "getIconImageByName",
        "getTimeTypes"
      ]),
      closeModal() {
        this.$emit("closeModal");
      },
      validateOnSubmit() {
        if (!(this.newTask.title && this.newTask.text)) {
          console.log("submit failed");
        } else {
          this.submit();
        }
      },
      submit() {
        this.newTask.date = this.datepickerDate / 1000;

        this.$emit("newTaskSubmit", this.newTask);

        this.isPickingImage = false;
        this.isPickingType = false;
        this.isPickingTimeType = false;
        this.closeModal();
      },
      onDayClick(day) {
        console.log("onDayClick", day);
        // console.log("newTask.date", this.newTask.date);
      },

      timetypePickerExpand() {
        console.log("timetypePickerExpand");
        this.isPickingTimeType = true;
      },
      typePickerExpand() {
        console.log("typePickerExpand");
        this.isPickingType = true;
      },
      imagePickerExpand() {
        console.log("imagePickerExpand");
        this.isPickingImage = true;
      },

      timetypePickerPick(timetype) {
        console.log("timetypePickerPick", timetype);
        this.newTask.timetype = timetype;
        this.isPickingTimeType = false;
      },
      typePickerPick(type) {
        console.log("typePickerPick", type);
        this.newTask.type = type;
        this.newTask.image = this.getIconImageByName()(type.name);
        console.log(this.newTask.image);
        this.isPickingType = false;
      },
      imagePickerPick(image) {
        console.log("typePickerPick", image);
        this.newTask.image = image;
        this.isPickingImage = false;
      }
    },
    computed: {
      selectedTypeName() {
        return this.newTask.type.name;
      },
      isPicking() {
        return (
          this.isPickingType || this.isPickingImage || this.isPickingTimeType
        );
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

    font-family: "Roboto", sans-serif;
    font: bold Roboto, sans-serif;
    font-weight: bold;
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
    font-size: 1.4em;
  }

  button:hover {
    border: 2px solid #fff;
  }

  /* date picker */
  .date-picker {
    position: absolute;
    text-align: center;
    left: 13%;
    box-shadow: 0 2px 4px 4px #00000066;
  }

  .vc-container.vc-is-dark {
    background-color: #555555e6;
  }

  /* main box */
  .modal-box {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: stretch;
    height: 60%;
    width: 40%;
    background-color: #555555e6;
    z-index: 9999;

    border-radius: 8px;
    box-shadow: 0 2px 4px 4px #00000066;
  }

  /* left box */
  .left-box {
    width: 18%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 8px;
  }

  /* timetype picker */
  .timetype-picker-box {
    background-color: #bbba;
    border-radius: 24px;

    height: 128px;
    width: 128px;
    margin: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
  }
  .timetype-picker-box:hover {
    border: 2px solid #fff;
  }
  .timetype-picker-box:active {
    transform: scale(0.93);
    border-radius: 12px;
  }
  .timetype-picker-box img {
    width: 112px;
    height: 112px;
  }

  .timetype-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 128px;
    gap: 4px;
  }
  .timetype-list button {
    display: flex;
    height: 60px;
    width: 60px;
    box-sizing: border-box;
    border-radius: 12px;
    background-color: #bbba;

    justify-content: center;
    align-items: center;
  }
  .timetype-list button:active {
    transform: scale(0.93);
    border-radius: 6px;
    border: 3px solid #fff;
  }
  .timetype-list button img {
    height: 90%;
    width: 90%;
  }
  .timetype-list button.picked {
    background-color: #cceecc;
  }

  /* type picker */
  .type-picker-box {
    width: 128px;
    box-sizing: border-box;
    margin: 8px;
  }

  .type-picker-box button {
    width: 100%;
    height: 36px;
    background-color: #bbba;
    border-radius: 16px;
    font-weight: bold;
  }
  .type-picker-box button:active {
    transform: scale(0.93);
    border-radius: 6px;
    border: 3px solid #fff;
  }
  .type-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;

    width: 128px;
  }
  .type-list button {
    display: block;
    height: 24px;
    width: 100%;

    box-sizing: border-box;
    border-radius: 6px;
    background-color: #bbba;

    font-size: 1.1em;
    font-weight: 400;
  }
  .type-list button:active {
    transform: scale(0.93);
    border-radius: 2px;
    border: 3px solid #fff;
  }
  .type-list button.picked {
    font-weight: bold;
  }

  /* image picker */
  .image-picker-box {
    background-color: #bbba;
    border-radius: 24px;

    height: 96px;
    width: 90%;
    margin: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
  }
  .image-picker-box:hover {
    border: 2px solid #fff;
  }
  .image-picker-box:active {
    transform: scale(0.93);
    border-radius: 12px;
  }
  .image-picker-box img {
    width: 64px;
    height: 64px;
  }

  .image-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 128px;
    gap: 4px;
  }
  .image-list button {
    display: flex;
    height: 60px;
    width: 60px;
    box-sizing: border-box;
    border-radius: 6px;
    background-color: #bbba;

    justify-content: center;
    align-items: center;
  }
  .image-list button:active {
    transform: scale(0.93);
    border-radius: 2px;
    border: 3px solid #fff;
  }
  .image-list button img {
    height: 90%;
    width: 90%;
  }
  .image-list button.picked {
    background-color: #cceecc;
  }

  /* middle box */
  .middle-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 2;
  }
  .inputs {
    background-color: #888888;
    margin: 8px 0;
    width: 98%;

    padding: 4px;
    border: 0;
    border-radius: 4px;
  }
  .inputs:focus {
    background-color: #cceecc;
  }
  /* title */
  #title {
    height: 48px;

    line-height: 48px;
    text-align: center;
    font-size: 38px;
  }
  /* text */
  #text {
    flex-grow: 2;

    resize: none;
    font-size: 24px;
    text-indent: 18px;
  }

  /* right box */
  .right-box {
    width: 15%;
  }

  /* close button */
  #close-modal-button {
    display: flex;
    position: absolute;
    right: 2px;
    top: 2px;

    justify-content: center;
    align-items: center;
    overflow: hidden;

    height: 36px;
    width: 36px;
    border-radius: 18px;
  }

  #close-modal-button img {
    height: 32px;
    width: 32px;
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

  /* submit button */
  #submit-button {
    display: flex;
    position: absolute;
    right: 8px;
    bottom: 8px;

    justify-content: center;
    align-items: center;
    overflow: hidden;

    height: 96px;
    width: 96px;
    border-radius: 48px;
  }

  #submit-button img {
    height: 90px;
    width: 90px;
  }

  #submit-button:active,
  #submitl-button:focus {
    outline: none;
  }

  #submit-button:active {
    transform: scale(0.93);
    border-radius: 7px;
    border: 3px solid #fff;
  }
</style>
