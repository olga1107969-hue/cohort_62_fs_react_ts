import { createAppSlice } from "store/createAppSlice"
import { EmployeeInitialState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"
import { EmployeeData } from "lessons/EmployeeProject/types"


const employeeInitialState: EmployeeInitialState  = {
  person: []
}

export const employeeSlice  = createAppSlice({
  name: "EMPLOYEE_CARD",
  initialState: employeeInitialState,
  reducers:{
    personCard: (state: EmployeeInitialState,action: PayloadAction<EmployeeData>) => {
      state.person.push(action.payload)
      console.log(action);
      
    },
    deleteCard: () => employeeInitialState,
    deleteCards: () => employeeInitialState,
  },
  selectors: {
    person: (state: EmployeeInitialState) => {
      return state.person
    }
  }
})

export const employeeSliceAction = employeeSlice.actions

export const employeeSliceSelectors = employeeSlice.selectors