import * as type from '../constants/actionType'
import { Service } from '../service'

export const getAllPost = () => async (dispatch) => {
  try {
    const res = await Service.Post.getAllPost()
    if(res) {
      dispatch({
        type: type.POST.GET_ALL,
        payload: res.data
      })
    }
  } catch (err) {
    console.log('ACTION_GET_ALL_POST: ', err)
  }
}