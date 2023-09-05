import { FormPopUpSubmitSuccess } from "Components/components/FormPopUp/FormPopupSubmitSuccess";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isValidFormAction,
  isValidFormSubmitAction,
  resetFormAction,
} from "store/actions/formAction";
import {
  ISVALIDADDRESS,
  ISVALIDEMAIL,
  ISVALIDMESSAGE,
  ISVALIDNAME,
  ISVALIDPHONE,
} from "store/constants/formConstants";
import { VolunteerForm } from "../VolunteerForm";

export const FormVolunteerSectionContainer = ({ data, showForm }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.formvolunteer);
  const [showFormPopUpSuccess, setShowFormPopUpSuccess] = useState(false);

  const handleOnChange = (e) => {
    if (e.id === "name") {
      dispatch(isValidFormAction(ISVALIDNAME, e.value));
    } else if (e.id === "phone") {
      dispatch(isValidFormAction(ISVALIDPHONE, e.value));
    } else if (e.id === "email") {
      dispatch(isValidFormAction(ISVALIDEMAIL, e.value));
    } else if (e.id === "address") {
      dispatch(isValidFormAction(ISVALIDADDRESS, e.value));
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
      store.valid.isValidAddress &&
      store.valid.isValidName
    ) {
      console.log("Email was sent successfully");
      setShowFormPopUpSuccess(true);
      dispatch(resetFormAction());
    }
  };

  return (
    <>
      {showForm && (
        <VolunteerForm
          formInputs={store.form}
          data={data}
          isValidInput={store.valid}
          isValidFormCh={store.isValidFormCh}
          handleOnChange={(e) => handleOnChange(e)}
          submitHandler={(e) => submitHandler(e)}
        />
      )}
      {showFormPopUpSuccess && (
        <FormPopUpSubmitSuccess
          showFormPopUpSuccess={(value) => {
            setShowFormPopUpSuccess(value);
          }}
        />
      )}
    </>
  );
};
