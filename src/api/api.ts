import axios, {AxiosResponse} from "axios";
import profile from "../Components/Profile/Profile";

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
    getProfile(userId: string) {
        console.warn('Use \'Profile api\' please')
        return profileApi.getProfile(userId)
    },
}

export const profileApi = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(title: string | null) {
        return instance.put('profile/status', {status: title})
    }
}

export const authApi = {
    authMe() {
        return instance.get('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}