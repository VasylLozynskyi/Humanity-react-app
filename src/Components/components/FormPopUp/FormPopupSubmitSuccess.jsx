import { DataContext } from "Components/Context/DataContext"
import { useContext } from "react"
import "./formpopupsubmitsuccess.scss"

export const FormPopUpSubmitSuccess = ({showFormPopUpSuccess}) => {
  const data = useContext(DataContext).formpopupsubmitsuccess;
  return(
    <>
    <div className="container content-wrapper formpopupsubmitsuccess">
      <div className="_content">
        <h2>{data.text}</h2>
        <button className="closebtn" onClick={() => showFormPopUpSuccess(false)}>x</button>
      </div>
    </div>
    </>
  )
}