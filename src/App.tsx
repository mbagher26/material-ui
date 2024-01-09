import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layout"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={< Navigate replace to='/' />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
