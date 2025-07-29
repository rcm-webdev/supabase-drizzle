import { Routes, Route } from 'react-router'
import Home from './pages/Home'

const App = () => {
    return (
        <div data-theme="bumblebee" className="w-full h-screen">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App;