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
      <div class="left-box">
        <div class="type-picker-box" v-if="!isPickingType">
          <button @click="typePickerExpand">{{ selectedTypeName }}</button>
        </div>
        <div class="type-list" v-if="isPickingType">
          <button
            v-on:click="typePickerPick(type)"
            v-for="type in types"
            :key="type"
          >
            {{ type.name }}
          </button>
        </div>

        <div
          class="image-picker-box"
          @click="imagePickerExpand"
          v-if="!isPickingImage"
        >
          <img id="image" :src="newTask.image" />
          <!-- <img id="image" src="/task_icon/common_128.png" /> -->
        </div>
        <div class="image-list" v-if="isPickingImage">
          <button
            v-on:click="imagePickerPick(image)"
            v-for="image in images"
            :key="image"
          >
            <img :src="image" />
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

  export default {
    data() {
      return {
        visible: false,
        newTask: {
          title: "",
          text: "",
          date: new Date(),
          type: {
            name: "common"
          },
          image: "/task_icon/common_128.png"
          // date-picker: this.$moment().format("DD-MM-YYYY")
        },
        dpSetting: {
          isDark: true,
          color: "green",
          trimWeeks: true
        },
        isPickingType: false,
        isPickingImage: false,
        types: [
          {
            name: "common"
          },
          {
            name: "type2"
          },
          {
            name: "type3"
          }
        ],
        images: [
          "/task_icon/common_128.png",
          "/task_icon/leftarrow_white.png",
          "/task_icon/rightarrow.png",
          "/task_icon/trashcan-128.png",
          "/task_icon/vue.png"
        ]
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
      validateOnSubmit() {
        if (!(this.newTask.title && this.newTask.text)) {
          console.log("submit failed");
        } else {
          this.submit();
        }
      },
      submit() {
        this.$emit("newTaskSubmit", this.newTask);
        this.newTask = {
          title: "",
          text: "",
          date: new Date(),
          type: {
            name: "common"
          },
          image: "/task_icon/common_128.png"
          // date-picker: this.$moment().format("DD-MM-YYYY")
        };
        (this.isPickingImage = false), (this.isPickingType = false);
        this.closeModal();
      },
      onDayClick(day) {
        console.log("dayClick", day);
      },
      typePickerExpand() {
        console.log("typePickerExpand");
        this.isPickingType = !this.isPickingType;
      },
      typePickerPick(type) {
        console.log("typePickerPick", type);
        this.newTask.type.name = type.name;
        this.isPickingType = !this.isPickingType;
      },
      imagePickerExpand() {
        console.log("imagePickerExpand");
        this.isPickingImage = !this.isPickingImage;
      },
      imagePickerPick(image) {
        console.log("typePickerPick", image);
        this.newTask.image = image;
        this.isPickingImage = !this.isPickingImage;
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
  .image-picker-box #image {
    width: 64px;
    height: 64px;
  }

  .image-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 90%;

    flex-grow: 2;
  }
  .image-list button {
    display: flex;
    height: 48px;
    width: 48px;
    margin: 2px;
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

  /* type picker */
  .type-picker-box {
    width: 90%;
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
    width: 90%;

    flex-grow: 2;
  }
  .type-list button {
    display: block;
    height: 24px;
    width: 100%;
    margin: 1px;
    box-sizing: border-box;
    border-radius: 6px;
    background-color: #bbba;

    font-size: 1.1em;
    font-weight: bold;
  }
  .type-list button:active {
    transform: scale(0.93);
    border-radius: 2px;
    border: 3px solid #fff;
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
