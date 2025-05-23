import axios from 'axios'
export const apiRequest = async (endpoint: string, params?: any) => {
    const option = {
        method: "GET",
        url: endpoint,
        params: params ? params : {}
    }
    try {
        const { data } = await axios.request(option)
        return data;
    } catch (error) {
        console.error(error)
    }
}