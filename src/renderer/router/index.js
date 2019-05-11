import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import lawsuit from '@/pages/lawsuit'
import civil from '@/pages/civil'
import civil01 from '@/pages/civil/item01'
import civil011 from '@/pages/civil/item011'
import civil02 from '@/pages/civil/item02'
import civil03 from '@/pages/civil/item03'
import civil04 from '@/pages/civil/item04'
import civil05 from '@/pages/civil/item05'
import civil06 from '@/pages/civil/item06'
import civil07 from '@/pages/civil/item07'
import civil08 from '@/pages/civil/item08'
import civil09 from '@/pages/civil/item09'
import administrative from '@/pages/administrative'
import administrative01 from '@/pages/administrative/item01'
import administrative02 from '@/pages/administrative/item02'
import administrative03 from '@/pages/administrative/item03'
import discontent from '@/pages/discontent'
import discontent01 from '@/pages/discontent/item01'
import discontent02 from '@/pages/discontent/item02'
import discontent03 from '@/pages/discontent/item03'
import execution from '@/pages/execution'
import execution01 from '@/pages/execution/item01'
import execution02 from '@/pages/execution/item02'
import finish from '@/pages/finish'
import finish01 from '@/pages/finish/item01'
import finish02 from '@/pages/finish/item02'
import finish03 from '@/pages/finish/item03'
import lawyer from '@/pages/lawyer'
import lawyer01 from '@/pages/lawyer/item01'
import lawyer02 from '@/pages/lawyer/item02'
import lawyer03 from '@/pages/lawyer/item03'
import lawyer04 from '@/pages/lawyer/item04'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/lawyer',
      name: '',
      component: lawyer
    },
    {
      path: '/lawyer01',
      name: '',
      component: lawyer01
    },
    {
      path: '/lawyer02',
      name: '',
      component: lawyer02
    },
    {
      path: '/lawyer03',
      name: '',
      component: lawyer03
    },
    {
      path: '/lawyer04',
      name: '',
      component: lawyer04
    },
    {
      path: '/finish',
      name: '',
      component: finish
    },
    {
      path: '/finish01',
      name: '',
      component: finish01
    },
    {
      path: '/finish02',
      name: '',
      component: finish02
    },
    {
      path: '/finish03',
      name: '',
      component: finish03
    },
    {
      path: '/execution',
      name: '',
      component: execution
    },
    {
      path: '/execution01',
      name: '',
      component: execution01
    },
    {
      path: '/execution02',
      name: '',
      component: execution02
    },
    {
      path: '/discontent',
      name: '',
      component: discontent
    },
    {
      path: '/discontent01',
      name: '',
      component: discontent01
    },
    {
      path: '/discontent02',
      name: '',
      component: discontent02
    },
    {
      path: '/discontent03',
      name: '',
      component: discontent03
    },
    {
      path: '/administrative',
      name: '',
      component: administrative
    },
    {
      path: '/administrative01',
      name: '',
      component: administrative01
    },
    {
      path: '/administrative02',
      name: '',
      component: administrative02
    },
    {
      path: '/administrative03',
      name: '',
      component: administrative03
    },
    {
      path: '/lawsuit',
      name: '',
      component: lawsuit
    },
    {
      path: '/civil',
      name: '',
      component: civil
    },
    {
      path: '/civil01',
      name: '',
      component: civil01
    },
    {
      path: '/civil011',
      name: '',
      component: civil011
    },
    {
      path: '/civil02',
      name: '',
      component: civil02
    },
    {
      path: '/civil03',
      name: '',
      component: civil03
    },
    {
      path: '/civil04',
      name: '',
      component: civil04
    },
    {
      path: '/civil05',
      name: '',
      component: civil05
    },
    {
      path: '/civil05',
      name: '',
      component: civil05
    },
    {
      path: '/civil06',
      name: '',
      component: civil06
    },
    {
      path: '/civil07',
      name: '',
      component: civil07
    },
    {
      path: '/civil08',
      name: '',
      component: civil08
    },
    {
      path: '/civil09',
      name: '',
      component: civil09
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
