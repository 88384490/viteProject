<template>
  <div class="display">Tab{{ index }}</div>
  <p>{{ index2 }}</p>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Page",
  setup(props) {
    const store = useStore();

    const index = computed(() => store.state.tab.index);
    const index2 = computed(() => store.getters.getIndex);

    return { index, index2 };
  },
});
</script>

<style lang="scss" scoped>
.display {
  color: red;
}
</style>
