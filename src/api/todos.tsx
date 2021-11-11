import axios from "axios"

// Получить все списки дел
export const getListTodo = async () => {
  const responce = await axios('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211111T201837Z&X-Amz-Expires=86400&X-Amz-Signature=ba2340481f086ee7bd1804da5bc5d4de7b039a3d8206e554cc239742d965c811&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"test_data.json"', {
    method: 'GET'
  })

  return responce.data
}