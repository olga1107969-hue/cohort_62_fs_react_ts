import { createAppSlice } from "store/createAppSlice";


const counterInitialState = {
  count: 0
}

export const counterSlice = createAppSlice({
  // name имя для Slice
  name: "COUNTER",
  // initialState значение по умолчанию
  initialState: counterInitialState,
  // reducers обьект содержащий функции и изменяет стейт
  reducers: {
    plus: state => {
      state.count = state.count + 1
    },
    minus: state => {
      state.count = state.count - 1
    }
  },
  // selectors прописываем какие данные передать компонентам
  selectors: {
    count: state => {
      return state.count
    },
  },
});

// counterSlice создает action для каждого reducer
export const counterSliceAction = counterSlice.actions

export const counterSliceSelectors = counterSlice.selectors