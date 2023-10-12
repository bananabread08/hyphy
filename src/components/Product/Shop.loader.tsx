import { LoaderFunction } from 'react-router-dom'
import { data } from '../../data'

// just a mock loader to get data. This should be an api call

export const loader: LoaderFunction = () => {
  return data
}
