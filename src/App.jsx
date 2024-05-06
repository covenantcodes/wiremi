import "./App.css"
import CustomButton from "./Components/CustomButton"


const App = () => {
  return (
    <div className="main_container">
      <CustomButton backgroundColor="var(--primary-color)" hoverTransformScale={0.9} borderRadius={0}>
        Click me
      </CustomButton>
    </div>
  )
}

export default App
