import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ user: userReducer });
//리덕스의 상태를 지속하기 위해 redux-persist라이브러리 사용
const persistConfig = {
  key: "root", //지속성스토어의 키
  version: 1,
  storage, //사용할 엔진 여기서는 로컬스토리지
};
//설정된 지속성을 적용한 리듀서 생성
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
