import { app } from '@storybook/vue3'
import { createStore } from 'vuex'
import { createRouter, createMemoryHistory } from 'vue-router'

import IssueStory from './IssueStory.vue'

export default {
  title: 'IssueStory',
  component: IssueStory,
}

const Template = (args) => {
  // Mock store
  app.use(createStore({
    state: () => ({
      foo: 'bar',
    }),
  }))
  // Mock router
  app.use(createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'mock', component: { render: () => null } },
    ],
  }))
  return {
    components: { IssueStory },
    setup: () => ({ args }),
    template: '<IssueStory v-bind="args"/>',
  }
}

export const Example = Template.bind({})
