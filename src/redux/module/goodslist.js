import { createSlice } from "@reduxjs/toolkit";
const goodslist = createSlice({
    name: 'goodslist',
    initialState: {
        productList: [],
        imageList: []
    },
    reducers: {
        // 添加商品列表
        setProductList(state, action) {
            state.productList = action.payload
        },
        // 添加图片列表
        setImageList(state, action) {
            state.imageList = action.payload
        }
    }
})
// 读取商品列表数据
const productList = (state) => state.productList
const { setProductList, setImageList } = goodslist.actions
// 异步获取商品列表数据
const fetchProductList = (value) => {
    return async (dispatch) => {
        // 发起异步请求
        dispatch(setProductList([]))
    }
}
// 获取商品图片地址
const fetchImageList = (value) => {
    return async (dispatch) => {
        dispatch(setImageList([]))
    }
}
export { productList, fetchImageList, fetchProductList }
export default goodslist.reducer