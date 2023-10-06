import axiosInstance from "../axios/axios.lib";

const coinprofile: any = {};

coinprofile.listCoins = async (payload?: any) => {
    return await axiosInstance.get('/currency/rate', {
        params: payload
    });
}

export default coinprofile;