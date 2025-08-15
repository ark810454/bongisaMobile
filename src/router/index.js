import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
/* import LoginView from '../views/loginView.vue' */
import CodeView from '../views/CodeView.vue'
import AboutView from '../views/AboutView.vue'
import NotifView from '../views/NotifView.vue'
import ServiceView from '../views/ServiceView.vue'
import AcountView from '../views/AcountView.vue'
import OpenAcountView from '../views/OpenAcountView.vue'
import PlusView from '../views/PlusView.vue'
import MessageView from '../views/MessageView.vue'
import MessContent from '@/components/MessContent.vue'
import PayCard from '@/components/PayCard.vue'
import PayForm from '@/components/PayForm.vue'
import AddMontant from '@/components/AddMontant.vue'
import ValidAss from '@/components/validAss.vue'
import HistoryView from '@/views/HistoryView.vue'
import UserMap from '@/components/UserMap.vue'
import PorteFeilleView from '@/views/PorteFeilleView.vue'


const routes = [

  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }/* ,
 {
    path: '/code',
    name: 'code',
    component: LoginView
  } */
  ,
 {
    path: '/login',
    name: 'login',
    component: CodeView
  }
  ,
  {
     path: '/',
     name: 'home',
     component: HomeView
   }
   ,
   {
    path: '/notif',
    name: 'notif',
    component: NotifView
  }
  ,{
    path: '/history',
    name: 'history',
    component: HistoryView
  }
  ,
  {
   path: '/service',
   name: 'services',
   component: ServiceView
 }
 ,
 {
  path: '/service/:serv',
  name: 'service',
  component: ServiceView
}
,
 {
  path: '/compte',
  name: 'compte',
  component: AcountView
}
,
 {
  path: '/plus',
  name: 'plus',
  component: PlusView
}
,
{
 path: '/message',
 name: 'message',
 component: MessageView
}
,
{
 path: '/portefeuille',
 name: 'portfeuille',
 component: PorteFeilleView
}
,
{
 path: '/readMessage/:id',
 name: 'readMessage',
 component: MessContent
},
{
 path: '/openEt/:id',
 name: 'openEt',
 component: OpenAcountView
},
{
 path: '/modePayement/:id/:montant',
 name: 'modePayement',
 component: PayCard
},
{
 path: '/PayForm/:id/:modePayement/:montant',
 name: 'PayForm',
 component: PayForm
},
{
 path: '/montant/:id/:services',
 name: 'montant',
 component: AddMontant
},
{
 path: '/validAss/:id/:id_p',
 name: 'validAss',
 component: ValidAss
},
{
 path: '/map/:adresse',
 name: 'map',
 component: UserMap
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
