import MonsterPage from './MonsterPage.vue'
import MonsterNavigation from './MonsterNavigation.vue'
import MonsterChapter from './MonsterChapter.vue'
import MonstersList from './MonstersList.vue'
import MonsterDetail from './MonsterDetail.vue'

export default {
  path: '/monsters',
  components: {
    default: MonsterPage,
    navigation: MonsterNavigation
  },
  children: [
    {
      path: 'monsters/:monsterName',
      component: MonsterDetail,
      props: true
    },
    {
      path: 'monsters',
      component: MonstersList
    },
    {
      path: ':chapter',
      component: MonsterChapter,
      props: true
    },
    {
      path: '',
      component: MonstersList
    }
  ]
}