import { configureStore } from '@reduxjs/toolkit'
import { formcontactusReducer, formvolunteerReducer } from './reducers/formReducer'

export const store = configureStore({
  reducer: {
    formcontactus: formcontactusReducer,
    formvolunteer: formvolunteerReducer,
  },
})