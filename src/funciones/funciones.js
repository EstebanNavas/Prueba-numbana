import axios from 'axios'

const productAll = async (state)=>{
    const peticion = await axios.get('https://8933-181-233-90-124.ngrok.io/list')
    state(peticion.data.data);
}

export {
    productAll
}