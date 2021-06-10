<template>
  <div class="tab-container">
    <a
      href="javascript:;"
      @click="changeIndex(1)"
      :class="[{ selected: selected === 1 }]"
      >tab1</a
    >
    <a
      href="javascript:;"
      @click="changeIndex(2)"
      :class="[{ selected: selected === 2 }]"
      >tab2</a
    >
    <a
      href="javascript:;"
      @click="changeIndex(3)"
      :class="[{ selected: selected === 3 }]"
      >tab3</a
    >
    <a
      href="javascript:;"
      @click="changeIndex(4)"
      :class="[{ selected: selected === 4 }]"
      >tab4</a
    >
  </div>
  <div>
    <Page :index="selected"></Page>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, createApp, onMounted, computed } from "vue";
import { useStore } from "vuex";
import Page from "./Page.vue";

export default defineComponent({
  name: "Tab",
  components: {
    Page,
  },
  setup() {
    const selected = ref(0);

    const store = useStore();

    const index = computed(() => store.getters.getIndex);

    function changeIndex(index: number) {
      selected.value = index;
      store.commit("setIndex", index);
    }

    onMounted(() => {
      changeIndex(1);
    });

    return {
      selected,
      changeIndex,
      index,
    };
  },
});
</script>

<style lang="scss" scoped>
.tab-container {
  a {
    display: inline-block;
    width: 50px;
  }
  .selected {
    color: #000000;
    text-decoration: none;
  }
}
</style>
