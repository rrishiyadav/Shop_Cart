import axios from "axios";

class WebService{
    getproductData(url)
    {
        return axios.get(url)
    }
}
export default new WebService(); //send object , new keyword is use for object 