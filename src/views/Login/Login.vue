<template>
  <div>
    <x-header :left-options="{ showBack: false }" slot="header" :title="$t('common.login')" :right-options="{ showMore: true }" @on-click-more="showLangs = true">
    </x-header>

    <view-box>
      <group>
        <x-input title="username" v-model="username"></x-input>
        <x-input title="password" v-model="password"></x-input>
        <x-button text="Login" type="primary"></x-button>
      </group>
    </view-box>

    <div v-transfer-dom>
      <actionsheet :menus="langs" v-model="showLangs" @on-click-menu="changeLang"></actionsheet>
    </div>
  </div>
</template>

<script>
const langList = {
  menu1: 'cn',
  menu2: 'ft',
  menu3: 'en'
}

export default {
  data () {
    return {
      username: 'admin',
      password: '123456',
      showLangs: false,
      langs: {
        menu1: '简体中文',
        menu2: '繁体中文',
        menu3: 'English'
      }
    }
  },
  methods: {
    changeLang (menuKey, menuItem) {
      this.$i18n.locale = langList[menuKey]
    }
  }
}
</script>
