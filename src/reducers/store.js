import { configureStore } from "@reduxjs/toolkit";
import hackerNewsReducer from "./hackerNewsReducer";
import mediumReducer from "./mediumReducer";
import redditReducer from "./redditReducer";

export default configureStore({
    reducer: {
        hackerNews: hackerNewsReducer,
        medium: mediumReducer,
        reddit: redditReducer
    }
})