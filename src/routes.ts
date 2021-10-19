import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { esureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", esureAuthenticated, new CreateMessageController().handle);
router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", esureAuthenticated, new ProfileUserController().handle);

export { router };