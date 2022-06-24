import LgInput from '../'

export default {
  title: "LgInput",
  compontent: LgInput,
}

export const Text = () => {
  return {
    compontents: { LgInput },
    template: '<lg-input v-model="value"></lg-input>',
    data() {
      return {
        value: "admin"
      }
    }
  }
}

export const Password = () => {
  return {
    compontents: { LgInput },
    template: '<lg-input type="password" v-model="value"></lg-input>',
    data() {
      return {
        value: "password"
      }
    }
  }
}