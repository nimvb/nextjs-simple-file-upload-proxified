import axios from "axios";
import getConfig from 'next/config'

export const config = {
    api: {
      bodyParser: false
    }
  };

const { serverRuntimeConfig } = getConfig()

const post = async (req, res) => {

    const axiosRequest = await axios({
        url: serverRuntimeConfig.AXIOS_PROXY_URL +'/api/upload',
        method: 'POST',
        responseType: 'stream',
        data: req,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        headers: {
            ...req.headers
        }
    })


    return axiosRequest;

  };

  export default async function handler(req, res) {
      if(req.method == "POST"){
        const response = await post(req, res);
        res.status(response.status).send(response.data);
      }else{
        res.status(404).json({ name: 'invalid request' });
      }
  }
  