<template>
  <div
    class="card"
    :class="{ collapsed: !computeIsExpanded, expanded: computeIsExpanded }"
    @click="onCardClick"
  >
    <div class="card-block left">
      <div class="card-image">
        <img :src="image" alt="type-image" />
      </div>
    </div>
    <div class="card-block center">
      <div class="card-title">
        <p>{{ cardData.title }}</p>
      </div>

      <div class="card-content" v-if="computeIsExpanded">
        <div>type: {{ cardData.type.name }}</div>
        <div>timeType: {{ cardData.timetype.name }}</div>
        <div>date: {{ dateComputed }}</div>
        <div>text: {{ cardData.text }}</div>
        <div>id: {{ cardData.id }}</div>
      </div>
    </div>
    <div class="card-block right">
      <div class="card-actions">
        <button @click="onRemoveClick(cardData.id, $event)">
          <img src="/icons_dark/trashcan-64.png" />
        </button>
        <button @click="onEditClick(cardData.id, $event)">
          <img src="/icons_dark/edit-pencil-128.png" />
        </button>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: "TaskCard",
    components: {},
    data() {
      return {
        defaultImageName: "/task_icon/common_128.png",
        isExpanded: this.expandState,
        image: this.cardData.image
          ? this.cardData.image.file
            ? this.cardData.image.file
            : "/task_icon/common_128.png"
          : "/task_icon/common_128.png", // simplify after get rid of card.image field
        type: this.cardData.type ? this.cardData.type : { name: "common" }
      };
    },
    props: {
      cardData: {
        type: Object
      },
      expandState: {
        type: Boolean
      }
    },
    methods: {
      ...mapActions("tasksStore", ["removeTask"]),
      onCardClick() {
        this.isExpanded = !this.isExpanded;
        this.$emit("cardClick", this.cardData.id, this.isExpanded);
      },
      onRemoveClick(id, e) {
        e.stopPropagation();
        if (confirm("are you sure?")) {
          this.removeTask(id);
        }
      },
      onEditClick(id, e) {
        e.stopPropagation();
        this.$emit("editTask", id);
      }
    },
    watch: {
      expandState(newVal) {
        this.isExpanded = newVal;
      }
    },
    computed: {
      computeIsExpanded() {
        return this.isExpanded;
      },
      dateComputed() {
        return this.$moment.unix(this.cardData.date).format("LLLL");
      }
    }
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
    width: 100%;

    border: 2px solid #0000;
    border-radius: 8px;

    background-color: #c0c0c0e6;
    background-size: 100%;

    box-shadow: 0 2px 2px 2px #404040;
  }

  .card:hover {
    /* transform: scale(1.01); */
    /* box-shadow: 0 0 10px 0 rgba(170, 170, 255, 0.8); */
    /* border: 2px rgb(0, 20, 50) solid; */

    border: 2px #fff solid;
    box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.8);
  }

  .card.collapsed {
    height: 50px;
    transition: all 0.2s 0s ease;
  }

  .card.expanded {
    height: 200px;
    transition: all 0.4s 0.05s ease;
  }

  .card-block {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    margin: 4px;
  }

  .card-block.left {
    justify-content: baseline;
    align-items: center;
    margin-top: 12px;
  }

  .card-block.center {
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    flex-grow: 1;
    color: brown;
  }

  .card-block.right {
    display: flex;
    flex-direction: column;
    max-width: 64px;
    min-width: 64px;
  }

  .card-image {
    display: flex;
    min-height: 40px;
    min-width: 40px;
    max-height: 40px;
    max-width: 40px;
    justify-content: center;
    align-items: center;

    background-color: #ddd;
    border: 2px solid #00000044;
    border-radius: 12px;
  }

  .card-image img {
    min-height: 32px;
    min-width: 32px;
    max-height: 32px;
    max-width: 32px;
    display: flex;
  }

  .card-title {
    margin: 4px 4px;
    background-color: #ddd;
    border-radius: 8px;
    width: 100%;
    max-height: 44px;
    min-height: 44px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    height: inherit;
    margin: 0 5px;
    overflow: auto;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .card-content p {
    left: 0;
    right: 0;
    margin: auto;
  }

  .card-actions {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    padding: 0;
    justify-content: space-around;
    align-items: flex-start;
  }

  .card-actions button {
    height: 28px;
    width: 28px;
    border-radius: 14px;
    background: 0;
    border: 0;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hide;
  }

  .card-actions button img {
    height: 24px;
    width: 24px;
  }

  .card-actions button:hover {
    border: 2px solid #fff;
    box-shadow: 0 0 2px 2px rgb(220, 220, 220);
  }

  /*  */

  .card-actions button:active {
    transform: scale(0.93);
    border-radius: 8px;
    border: 3px solid #fff;
  }
</style>
