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
export function uploadFile(formData, pathUrl) {
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
    headers: headers,
    data: formData,
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

//下載
export function download(params = {}, type) {
  let msg = Message({
    message: "正在下载文件，请稍等",
    type: 'warning',
    duration: 0
  })
  let headers = {
    'Authorization': "Bearer " + getToken(),
  }
  let url = "/system/file_annexes/download"
  axios({
    method: 'get',
    url: url,
    baseURL: process.env.VUE_APP_BASE_API,
    params: params,
    responseType: 'blob',
    headers: headers
  }).then(response => {
    msg.close(); //关闭提示弹窗
    //兼容blob下载出错json提示//////////////////////////////////
    if (response.request.responseType === 'blob' && response.data instanceof Blob && response.data.type && response.data.type.toLowerCase().indexOf('json') != -1) {
      reject("blob下载出错json提示")
      // 兼容blob下载出错json提示
      let reader = new FileReader()
      reader.onload = () => {
        response.data = JSON.parse(reader.result);
        Message({
          message: response.data.info,
          type: 'warning',
          duration: 2000
        })
      }
      reader.readAsText(response.data)
      return;
    }
    ////////////////////////////////////
    let blob = new Blob([response.data]);
    let objectUrl = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.style.display = "none";
    link.href = objectUrl;
    ////////////////////////////////////
    if (response.headers.filename) {
      link.setAttribute("download", decodeURIComponent(response.headers.filename));
    } else {
      link.setAttribute("download", decodeURIComponent(response.headers["content-disposition"].split("filename=")[1]));
    }
    // link.setAttribute("download", decodeURIComponent(response.headers["content-disposition"].split("filename=")[1]));
    document.body.appendChild(link);
    link.click();
  }).catch(err => {
    msg.close();
    // reject(err)
  })
}


//通过ids删除文件
export function removeByIds(data) {
  return oarequest({
    url: "/system/file_annexes/removeByIds",
    method: "post",
    params: data
  })
}
