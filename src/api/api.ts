import axios from "axios";

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
        return instance.get(`profile/${userId}`)
    },

}

export const authApi = {
    authMe() {
        return instance.get('auth/me')
    }
}