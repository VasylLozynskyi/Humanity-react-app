import {
  ISVALIDADDRESS,
  ISVALIDEMAIL,
  ISVALIDFORM,
  ISVALIDMESSAGE,
  ISVALIDNAME,
  ISVALIDPHONE,
  RESETFORMCONTACTUS,
} from "store/constants/formConstants";

const validPhoneRegex =
  /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
// valid formats
// (123) 456-7890
// (123)456-7890
// 123-456-7890
// 1234567890
// +31636363634
// +3(123) 123-12-12
// +3(123)123-12-12
// +3(123)1231212
// +3(123) 12312123
// +3(123) 123 12 12
// 075-63546725
// +7910 120 54 54
// 910 120 54 54
// 8 999 999 99 99

const validEmailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const initialStateContactUs = {
  form: {
    name: "",
    phone: "",
    email: "",
    message: "",
  },
  valid: {
    isValidName: false,
    isValidPhone: false,
    isValidEmail: false,
    isValidMessage: false,
  },
  isValidFormCh: false,
};
export const formcontactusReducer = (state = initialStateContactUs, action) => {
  switch (action.type) {
    case ISVALIDNAME: {
      if (action.payload.value.length <= 3) {
        return {
          ...state,
          form: { ...state.form, name: action.payload.value },
          valid: { ...state.valid, isValidName: false },
          isValidFormCh: false,
        };
      } else
        return {
          ...state,
          form: { ...state.form, name: action.payload.value },
          valid: { ...state.valid, isValidName: true },
        };
    }
    case ISVALIDPHONE: {
      if (!action.payload.value.match(validPhoneRegex)) {
        return {
          ...state,
          form: { ...state.form, phone: action.payload.value },
          valid: { ...state.valid, isValidPhone: false },
          isValidFormCh: false,
        };
      } else {
        return {
          ...state,
          form: { ...state.form, phone: action.payload.value },
          valid: { ...state.valid, isValidPhone: true },
        };
      }
    }
    case ISVALIDEMAIL: {
      if (!action.payload.value.match(validEmailRegex)) {
        return {
          ...state,
          form: { ...state.form, email: action.payload.value },
          valid: { ...state.valid, isValidEmail: false },
          isValidFormCh: false,
        };
      } else {
        return {
          ...state,
          form: { ...state.form, email: action.payload.value },
          valid: { ...state.valid, isValidEmail: true },
        };
      }
    }
    case ISVALIDMESSAGE: {
      if (action.payload.value.length <= 5) {
        return {
          ...state,
          form: { ...state.form, message: action.payload.value },
          valid: { ...state.valid, isValidMessage: false },
          isValidFormCh: false,
        };
      } else {
        return {
          ...state,
          form: { ...state.form, message: action.payload.value },
          valid: { ...state.valid, isValidMessage: true },
        };
      }
    }
    case ISVALIDFORM: {
      return { ...state, isValidFormCh: true };
    }
    case RESETFORMCONTACTUS: {
      return {
        ...state,
        form: { ...state.form, name: "", phone: "", email: "", message: "" },
        valid: {
          ...state.valid,
          isValidName: false,
          isValidPhone: false,
          isValidEmail: false,
          isValidMessage: false,
        },
        isValidFormCh: false,
      };
    }
    default:
      return state;
  }
};

const initialStateVolunteer = {
  form: {
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  },
  valid: {
    isValidName: false,
    isValidPhone: false,
    isValidEmail: false,
    isValidAddress: false,
    isValidMessage: false,
  },
  isValidFormCh: false,
};

export const formvolunteerReducer = (state = initialStateVolunteer, action) => {
  switch (action.type) {
    case ISVALIDNAME: {
      if (action.payload.value.length <= 3) {
        return {
          ...state,
          form: { ...state.form, name: action.payload.value },
          valid: { ...state.valid, isValidName: false },
          isValidFormCh: false,
        };
      } else
        return {
          ...state,
          form: { ...state.form, name: action.payload.value },
          valid: { ...state.valid, isValidName: true },
        };
    }
    case ISVALIDPHONE: {
      if (!action.payload.value.match(validPhoneRegex)) {
        return {
          ...state,
          form: { ...state.form, phone: action.payload.value },
          valid: { ...state.valid, isValidPhone: false },
          isValidFormCh: false,
        };
      } else {
        return {
          ...state,
          form: { ...state.form, phone: action.payload.value },
          valid: { ...state.valid, isValidPhone: true },
        };
      }
    }
    case ISVALIDEMAIL: {
      if (!action.payload.value.match(validEmailRegex)) {
        return {
          ...state,
          form: { ...state.form, email: action.payload.value },
          valid: { ...state.valid, isValidEmail: false },
          isValidFormCh: false,
        };
      } else {
        return {
          ...state,
          form: { ...state.form, email: action.payload.value },
          valid: { ...state.valid, isValidEmail: true },
        };
      }
    }
    case ISVALIDMESSAGE: {
      if (action.payload.value.length <= 5) {
        return {
          ...state,
          form: { ...state.form, message: action.payload.value },
          valid: { ...state.valid, isValidMessage: false },
          isValidFormCh: false,
        };
      } else {
        return {
          ...state,
          form: { ...state.form, message: action.payload.value },
          valid: { ...state.valid, isValidMessage: true },
        };
      }
    }
    case ISVALIDADDRESS: {
      if (action.payload.value.length <= 5) {
        return {
          ...state,
          form: { ...state.form, address: action.payload.value },
          valid: { ...state.valid, isValidAddress: false },
          isValidFormCh: false,
        };
      } else {
        return {
          ...state,
          form: { ...state.form, address: action.payload.value },
          valid: { ...state.valid, isValidAddress: true },
        };
      }
    }
    case ISVALIDFORM: {
      return { ...state, isValidFormCh: true };
    }
    case RESETFORMCONTACTUS: {
      return {
        ...state,
        form: { ...state.form, name: "", phone: "", email: "", message: "", address: "" },
        valid: {
          ...state.valid,
          isValidName: false,
          isValidPhone: false,
          isValidEmail: false,
          isValidAddress: false,
          isValidMessage: false,
        },
        isValidFormCh: false,
      };
    }
    default:
      return state;
  }
};