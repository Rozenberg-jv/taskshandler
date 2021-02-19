<template>
  <div class="card collapsed" @click="onCardClick">
    <!-- <MdCard @click.native="onItemClick" class="md-with-hover"> -->

    <div class="card-image" :style="imageStyle"></div>

    <div class="card-title" v-if="!computeIsChecked">
      <p>{{ cardData.title }}</p>
    </div>

    <div class="card-content" v-else>
      <p>{{ cardData.text }}</p>
    </div>

    <div class="card-actions">
      <button @click="onAction1Click">Action1</button>
      <button @click="onAction2Click">Action2</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskCard",
  components: {},
  data() {
    return {
      defaultImageName: "task01.png",
      isChecked: false,
    };
  },
  methods: {
    // action handlers
    onAction1Click(e) {
      e.stopPropagation();
    },
    onAction2Click(e) {
      e.stopPropagation();
    },
    onCardClick() {
      this.isChecked = !this.isChecked;

      this.$el.classList.toggle("collapsed");
      this.$el.classList.toggle("expanded");
    },
    //
    resolveImageUrl: function (name) {
      let images = require.context("@/assets/", false, /\.png$|\.jpg$/);
      return images("./" + name);
    },
  },
  props: {
    cardData: {
      imageName: { type: String },
      id: { type: Number, require: true },
      title: { type: String, require: false },
      text: { type: String, require: true },
      date: { type: String, require: true },
    },
  },
  computed: {
    imageStyle() {
      return {
        "background-image": this.imageUrl,
      };
    },
    imageUrl() {
      let imageIs = this.cardData.imageName;

      let image = this.resolveImageUrl(imageIs || this.defaultImageName);

      return `url(${image})`;
    },
    computeIsChecked() {
      return this.isChecked;
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  margin: 5px 5px 0 5px;
  padding: 2px;
  align-items: center;
  justify-content: space-between;

  /* background-color: rgba(112, 59, 248, 0.7); */
  /* box-shadow: 0 3px 15px rgba(70, 35, 255, 0.7); */
  border: rgb(0, 20, 50) solid 0;
  border-radius: 1px;

  /* background: no-repeat url("~@/assets/top_line_bg_blue.png"); */
  background-color: rgba(57, 56, 66, 0.9);
  background-size: 100%;
}

.card.collapsed {
  height: 50px;
}

.card.expanded {
  height: 200px;
}

.card-image {
  display: flex;
  min-height: 30px;
  min-width: 30px;
  max-height: inherit;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
  /* overflow: hidden; */
  /* position: relative; */
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
}

.card-title {
  display: flex;
  margin: 0 5px;
}

.card-content {
  display: flex;
  height: inherit;
  margin: 0 5px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}

.card-content p {
  left: 0;
  right: 0;
  margin: auto;
}

.card-actions {
  right: 0;
  margin-right: -2px;
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  align-items: stretch;

  opacity: 0;
  transition: all 0.3s 0.2s ease;
  transform: translateX(1000%);
}

.card-actions button {
  background-color: rgb(47, 35, 80);
  border-radius: 4px;
  margin: 2px 0;
  color: white;
}

/*  */
.card:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
}

.card:hover .card-actions {
  color: black;
  opacity: 1;
  transform: translateX(0);
}

.card-actions button:active,
.card-actions button:focus {
  outline: none;
}
</style>
