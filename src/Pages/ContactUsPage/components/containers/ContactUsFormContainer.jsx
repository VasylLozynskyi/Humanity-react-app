import { validFormatsPhoneNumber } from "data/validFormatPhoneNumber";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isValidFormAction,
  isValidFormSubmitAction,
  resetFormAction,
} from "store/actions/formAction";
import {
  ISVALIDEMAIL,
  ISVALIDMESSAGE,
  ISVALIDNAME,
  ISVALIDPHONE,
} from "store/constants/formConstants";
import { ContactUsForm } from "../ContactUsForm";

export const ContactUsFormContainer = ({ data }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.formcontactus);
  const [showFormPopUpSuccess, setShowFormPopUpSuccess] = useState(false);

  const handleOnChange = (e) => {
    if (e.id === "name") {
      dispatch(isValidFormAction(ISVALIDNAME, e.value));
    } else if (e.id === "phone") {
      dispatch(isValidFormAction(ISVALIDPHONE, e.value));
    } else if (e.id === "email") {
      dispatch(isValidFormAction(ISVALIDEMAIL, e.value));
    } else {
      dispatch(isValidFormAction(ISVALIDMESSAGE, e.value));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(isValidFormSubmitAction());
    if (
      store.valid.isValidMessage &&
      store.valid.isValidEmail &&
      store.valid.isValidPhone &&
      store.valid.isValidName
    ) {
      console.log("Email was sent successfully");
      setShowFormPopUpSuccess(true);
      dispatch(resetFormAction());
    }
  };

  return (
      <ContactUsForm
        formInputs={store.form}
        data={data}
        validFormatsPhoneNumber={validFormatsPhoneNumber}
        isValidInput={store.valid}
        isValidFormCh={store.isValidFormCh}
        showFormPopUpSuccess={showFormPopUpSuccess}
        handleOnChange={(e) => handleOnChange(e)}
        submitHandler={(e) => submitHandler(e)}
        ShowFormPopUpSuccess={(value) => setShowFormPopUpSuccess(value)}
      />
  );
};
