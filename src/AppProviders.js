import {BrowserRouter} from 'react-router-dom'

const AppProviders = ({children}) => {
  return (
    <div>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </div>
  )
}

export default AppProviders