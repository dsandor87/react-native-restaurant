import Axios from 'axios'

export default Axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer HvDA3xDCkLqFzpXNw5_jo_VwiLhu9G8jZ1qMwx6rYKAYUt8lSJTfi1uKc8s_pcfATXyEDLun6xmN_1xaPSJeCVFmnXmE6b_v3je7uJqPCTsyTAPrfv5tjtVk4DfGXnYx'

  }
  
})


// yelp.get('/search')