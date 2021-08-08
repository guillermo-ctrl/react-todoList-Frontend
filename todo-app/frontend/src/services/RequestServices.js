import axios from 'axios'

const PATH = '/api/todo/'

export const getRequest = () => axios.get(PATH).catch(err => console.error(err))

export const putRequest = id =>
  axios({
    method: 'put',
    url: `${PATH}${id}`,
    data: {},
  }).catch(err => console.error(err))

export const postRequest = inputText =>
  axios
    .post(PATH, {
      description: inputText,
    })
    .catch(function (error) {
      console.log(error)
    })

export const deleteRequest = id =>
  axios.delete(`${PATH}${id}`).catch(err => console.error(err))
