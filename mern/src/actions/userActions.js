import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../constants/userConstants"
import axios from "axios"

export const login = (email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    }

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    )

    localStorage.setItem("userInfo", JSON.stringify(data))

    dispatch({
      type: USER_LOGIN_SUCCESS,
      paylaod: data,
    })
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}