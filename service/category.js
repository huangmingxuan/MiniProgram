import request from "./network"
export function getCategory(){
  return request({
    url:"http://152.136.185.210:8000/api/z8/category",
  })
}
export function getSubcategory(maitKey){
  return request({
    url:"http://152.136.185.210:8000/api/z8/subcategory",
    data:{
      maitKey
    }
  })
}