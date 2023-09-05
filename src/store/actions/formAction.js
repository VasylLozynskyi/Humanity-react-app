import {
  ISVALIDADDRESS,
  ISVALIDEMAIL,
  ISVALIDFORM,
  ISVALIDMESSAGE,
  ISVALIDNAME,
  ISVALIDPHONE,
  RESETFORMCONTACTUS,
} from "store/constants/formConstants";

export const isValidFormAction = (typeInput, value) => {
  if (typeInput === ISVALIDNAME) {
    return {
      type: ISVALIDNAME,
      payload: { value },
    };
  } else if (typeInput === ISVALIDPHONE) {
    return {
      type: ISVALIDPHONE,
      payload: { value },
    };
  } else if (typeInput === ISVALIDEMAIL) {
    return {
      type: ISVALIDEMAIL,
      payload: { value },
    };
  } else if (typeInput === ISVALIDMESSAGE) {
    return {
      type: ISVALIDMESSAGE,
      payload: { value },
    };
  } else if (typeInput === ISVALIDADDRESS) {
    return {
      type: ISVALIDADDRESS,
      payload: { value },
    };
  }
};

export const isValidFormSubmitAction = () => {
  return {
    type: ISVALIDFORM,
  };
}

export const resetFormAction = () => {
  return {
    type: RESETFORMCONTACTUS,
  }
}
