let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue") //二级菜单专属

export default {
  path: '/plug',
  name: 'plug',
  component: layout,
  meta: {
    title: '插件',
    icon: "shezhi1",
  },
  children: [{
      path: 'wangEdit',
      name: 'wangEdit',
      component: blank,
      meta: {
        title: 'wangEdit',
        icon: "biaodanzujian-biaoge",
      },
      children: [{
        path: 'base',
        name: 'wangEdit-base',
        component: () => import( /* webpackChunkName: "wangEdit-base" */ "@/views/9-plug/1-wangEdit/1-base.vue"),
        meta: {
          title: '基础wangEdit',
          icon: "biaodanzujian-biaoge",
        }
      }]
    },
    {
      path: 'swiper',
      name: 'swiper',
      component: blank,
      meta: {
        title: '轮播图',
        icon: "biaodanzujian-biaoge",
      },
      children: [{
          path: 'base',
          name: 'swiper-base',
          component: () => import( /* webpackChunkName: "swiper-base" */ "@/views/9-plug/2-swiper/1-index.vue"),
          meta: {
            title: '轮播元素',
            icon: "biaodanzujian-biaoge",
          }
        },
        {
          path: 'two',
          name: 'swiper-two',
          component: () => import( /* webpackChunkName: "swiper-two" */ "@/views/9-plug/2-swiper/2-two.vue"),
          meta: {
            title: '当前元素变大',
            icon: "biaodanzujian-biaoge",
          }
        },
        {
          path: 'three',
          name: 'swiper-three',
          component: () => import( /* webpackChunkName: "swiper-three" */ "@/views/9-plug/2-swiper/3-three.vue"),
          meta: {
            title: '垂直播放',
            icon: "biaodanzujian-biaoge",
          }
        }
      ]
    },
    {
      path: 'map',
      name: 'map',
      component: blank,
      meta: {
        title: '地图',
        icon: "biaodanzujian-biaoge",
      },
      children: [{
        path: 'baidu',
        name: 'map-baidu',
        component: blank,
        meta: {
          title: '百度地图',
          icon: "biaodanzujian-biaoge",
        },
        children: [{
            path: 'base',
            name: 'map-baidu-base',
            component: () => import( /* webpackChunkName: "swiper-two" */ "@/views/9-plug/3-map/1-baidu/1-base.vue"),
            meta: {
              title: '百度地图基础',
              icon: "biaodanzujian-biaoge",
            }
          },
          {
            path: 'BmMarker',
            name: 'map-baidu-BmMarker',
            component: () => import( /* webpackChunkName: "swiper-two" */ "@/views/9-plug/3-map/1-baidu/2-BmMarker.vue"),
            meta: {
              title: '百度地图-点',
              icon: "biaodanzujian-biaoge",
            }
          },
          {
            path: 'BmCircle',
            name: 'map-baidu-BmCircle',
            component: () => import( /* webpackChunkName: "swiper-two" */ "@/views/9-plug/3-map/1-baidu/3-BmCircle.vue"),
            meta: {
              title: '百度地图-圆',
              icon: "biaodanzujian-biaoge",
            }
          },
        ]
      }, ]
    },
    {
      path: 'mxhflow',
      name: 'mxhflow',
      component: blank,
      meta: {
        title: 'mxhflow',
        icon: "biaodanzujian-biaoge",
      },
      children: [{
          path: 'base',
          name: 'mxhflow-base',
          component: () => import( /* webpackChunkName: "mxhflow-base" */ "@/views/9-plug/4-mxhflow/1-base.vue"),
          meta: {
            title: '基础mxhflow',
            icon: "biaodanzujian-biaoge",
          }
        },
        // {
        //     path: 'preLook',
        //     name: 'mxhflow-preLook',
        //     component: () => import(/* webpackChunkName: "mxhflow-preLook" */ "@/views/9-plug/4-mxhflow/2-preLook.vue"),
        //     meta: {
        //         title: '预览',
        //         icon: "biaodanzujian-biaoge",
        //     }
        // }
      ]
    }
  ]

}
