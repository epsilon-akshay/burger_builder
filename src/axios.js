import axios from 'axios'

const instance = axios.create(
	{
		baseURL: 'https://createburger-36d4f.firebaseio.com/',

	}
)
export default instance
