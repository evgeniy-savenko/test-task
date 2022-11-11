<template>
  <select class="gender" :value="modelValue" @change="changeOptions">
    <option value="">Выберите пол из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SortGender',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
    methods: {
      changeOptions(e) {
        this.$emit('update:modelValue', e.target.value);
      },
    },
  },
};
</script>

<style>
.sort {
  display: flex;
  justify-content: center;
}
</style>
