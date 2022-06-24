<template>
  <div>
    <label>{{ label }}</label>
    <slot></slot>
    <p v-if="errMessage"> {{ errMessage }}</p>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
export default {
  name: "LgFormItem",
  inject: ["form"],
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      errMessage: "",
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      if (!this.prop) return;
      const { rules, model } = this.form;
      const value = model[this.prop];
      const rule = rules[this.prop];
      const descriptor = { [this.prop]: rule };
      const validator = new AsyncValidator(descriptor);
      return validator.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.errMessage = errors[0].message;
        } else {
          this.errMessage = "";
        }
      });
    },
  },
};
</script>

<style></style>
