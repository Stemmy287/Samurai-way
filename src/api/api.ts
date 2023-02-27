import axios from "axios";
import {ProfileDataFormType} from "../Components/Profile/TopInfo/profileDataForm/ProfileDataForm";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '7d13a953-137d-462b-b5e2-b6c51dbfe64c'
  }
})

export const userApi = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  followUsers(id: number) {
    return instance.post(`follow/${id}`)
  },
  unFollowUsers(id: number) {
    return instance.delete(`follow/${id}`)
  },
  getProfile(userId: number) {
    console.warn('Use \'Profile api\' please')
    return profileApi.getProfile(userId)
  },
}

export const profileApi = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(title: string | null) {
    return instance.put('profile/status', {status: title})
  },
  savePhoto(img: File) {
    const formData = new FormData()
    formData.append('image', img)
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile: ProfileDataFormType) {
    return instance.put(`profile`, profile)
  }
}

export const authApi = {
  authMe() {
    return instance.get('auth/me')
  },
  login(email: string, password: string, rememberMe: boolean, captcha: string) {
    return instance.post('auth/login', {email, password, rememberMe, captcha})
  },
  logout() {
    return instance.delete('auth/login')
  }
}

export const securityApi = {
  getCaptcha() {
    return instance.get('security/get-captcha-url')
  }
}