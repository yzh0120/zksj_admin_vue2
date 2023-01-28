let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue") //二级菜单专属

export default {
  path: '/localCopy',
  name: 'localCopy',
  redirect: {
    name: "localCopy-disabled"
  },
  component: layout,
  meta: {
    title: '局部复制',
    icon: "lcd",
  },
  children: [{
    path: 'disabled',
    name: 'localCopy-disabled',
    component: () => import( /* webpackChunkName: "localCopy-disabled" */ "@/views/5-localCopy/1-disabled.vue"),
    meta: {
      title: '禁用全部按钮',
      icon: "lcd",
    }
  },
  {
    path: 'fastAlert',
    name: 'localCopy-fastAlert',
    component: () => import( /* webpackChunkName: "localCopy-fastAlert" */ "@/views/5-localCopy/2-fastAlert.vue"),
    meta: {
      title: '快速弹窗方便校验',
      icon: "lcd",
    }
    },
    {
      path: 'popSelect',
      name: 'localCopy-popSelect',
      component: () => import( /* webpackChunkName: "localCopy-popSelect" */ "@/views/5-localCopy/3-popSelect.vue"),
      meta: {
        title: 'popSelect',
        icon: "lcd",
      }
    }
  ]
}