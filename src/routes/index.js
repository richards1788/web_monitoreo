import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "First Web Node" });
});


export default router;
