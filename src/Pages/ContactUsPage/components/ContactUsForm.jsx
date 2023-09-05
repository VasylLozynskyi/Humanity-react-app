import { FormPopUpSubmitSuccess } from "Components/components/FormPopUp/FormPopupSubmitSuccess";
import PropTypes from "prop-types";
import "./scss/contactusform.scss";

export const ContactUsForm = ({
  data,
  formInputs,
  validFormatsPhoneNumber,
  nameSubmitBtn,
  isValidInput,
  isValidFormCh,
  showFormPopUpSuccess,
  handleOnChange,
  submitHandler,
  ShowFormPopUpSuccess,
}) => {
  return (
    <div className="form-pure">
      <form id="form">
        <div>
          <input
            className={
              !isValidInput.isValidName && isValidFormCh ? "inValidInput" : ""
            }
            type="text"
            id="name"
            placeholder={data.namePlaceholder}
            value={formInputs.name}
            onChange={(e) => handleOnChange(e.target)}
          />
          {!isValidInput.isValidName && isValidFormCh && <p>{data.error_name}</p>}
        </div>
        <div>
          <input
            className={
              !isValidInput.isValidPhone && isValidFormCh ? "inValidInput" : ""
            }
            type="text"
            id="phone"
            title={validFormatsPhoneNumber}
            placeholder={data.phonePlaceholder}
            value={formInputs.phone}
            onChange={(e) => handleOnChange(e.target)}
          />
          {!isValidInput.isValidPhone && isValidFormCh && (
            <p>{data.error_phone}</p>
          )}
        </div>
        <div>
          <input
            className={
              !isValidInput.isValidEmail && isValidFormCh ? "inValidInput" : ""
            }
            type="text"
            id="email"
            placeholder={data.emailPlaceholder}
            value={formInputs.email}
            onChange={(e) => handleOnChange(e.target)}
          />
          {!isValidInput.isValidEmail && isValidFormCh && (
            <p>{data.error_email}</p>
          )}
        </div>
        <div>
          <textarea
            className={
              !isValidInput.isValidMessage && isValidFormCh ? "inValidInput" : ""
            }
            type="text"
            id="message"
            placeholder={data.messagePlaceholder}
            value={formInputs.message}
            onChange={(e) => handleOnChange(e.target)}
          />
          {!isValidInput.isValidMessage && isValidFormCh && (
            <p>{data.error_message}</p>
          )}
        </div>
        <div>
          <input
            type="submit"
            id="submit"
            value={nameSubmitBtn}
            onClick={(e) => submitHandler(e)}
          />
        </div>
      </form>
      {showFormPopUpSuccess && (
        <FormPopUpSubmitSuccess
        showFormPopUpSuccess={() => ShowFormPopUpSuccess()}
        />
      )}
    </div>
  );
};

ContactUsForm.propTypes = {
  data: PropTypes.shape({
    namePlaceholder: PropTypes.string,
    phonePlaceholder: PropTypes.string,
    emailPlaceholder: PropTypes.string,
    messagePlaceholder: PropTypes.string,
    nameSubmitBtn: PropTypes.string,
    error_name: PropTypes.string,
    error_phone: PropTypes.string,
    error_email: PropTypes.string,
    error_message: PropTypes.string,
  }),
  formInputs: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
  }),
  validFormatsPhoneNumber: PropTypes.string,
  isValidInput: PropTypes.shape({
    isValidName: PropTypes.bool,
    isValidPhone: PropTypes.bool,
    isValidEmail: PropTypes.bool,
    isValidMessage: PropTypes.bool,
  }),
  isValidFormCh: PropTypes.bool,
  showFormPopUpSuccess: PropTypes.bool,
  handleOnChange: PropTypes.func,
  submitHandler: PropTypes.func,
  ShowFormPopUpSuccess: PropTypes.func,
};
