let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue") //二级菜单专属

export default {
  path: '/fileUp',
  name: 'fileUp',
  component: layout,
  meta: {
    title: '文件上传',
    icon: "shezhi1",
  },
  children: [{
    path: 'base',
    name: 'fileUp-base',
    component: () => import( /* webpackChunkName: "fileUp-base" */ "@/views/4-fileUp/1-base.vue"),
    meta: {
      title: '文件上传',
      icon: "shezhi1",
    }
  }]
}
