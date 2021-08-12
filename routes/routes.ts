import { Router } from "https://deno.land/x/oak/mod.ts";
import * as indexCtrl from "../controllers/index.controller.ts";

const router = new Router();

router
  .get("/:id", indexCtrl.createColor)
  .get("/", indexCtrl.getColors)


export default router;
