/*
 * @Author: wjs
 * @Date: 2022-02-18 12:37:13
 * @Description: 文件管理操作方法
 * @FilePath: \oaweb\src\api\file.js
 * 
 */
import oarequest from "@/utils/axiosHttp";
import axios from 'axios';
import {
  getCookie
} from '@/utils/auth.js';

import {
  Message,
  MessageBox
} from 'element-ui';

//上传文件
export function uploadFile(formData,pathUrl) { 
  let headers = {
    'Authorization': "Bearer " + getCookie("systoken"),
    'content-type': 'multipart/form-data'
  }
  let url = "/system/file_annexes/uploadFile"
  if (pathUrl) { 
    url = pathUrl
  }

   return axios({
    baseURL: process.env.VUE_APP_BASE_API,
    url: url,
    method: 'post',
    headers:headers,
    data:formData,
  })
}


//folderId获取文件列表
export function queryList(data) {
  return oarequest({
    url: "/system/file_annexes/queryList",
    method: "post",
    data: data
  })
}

