import express from "express";
import try_catch from "../middlewares/try-catch.js";
import { createPost, getPosts, postComment, postLike, sample,} from "../controllers/postController.js";
import uploadImage from "../middlewares/uploadImage.js";


const postRouter = express.Router();

postRouter.get("/", try_catch(getPosts));
postRouter.post("/", uploadImage, try_catch(createPost));

postRouter.post("/comment/:id", try_catch(postComment));
postRouter.patch("/like/:id", try_catch(postLike));

export default postRouter;