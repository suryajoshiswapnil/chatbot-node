import { Router } from "express";
const OrgRouter = Router();

const orgData = [
  {
    id: "1000",
    name: "Swapnil Inc"
  }
];

OrgRouter.get("/", (req, res) => {
  const { limit = 10 } = req.query;
  res.json({
    total: orgData.length,
    has_more: orgData.length > limit,
    organizations: orgData.slice(0, limit)
  });
});

OrgRouter.get("/:id", (req, res) => {
  const org = orgData.find(o => o.id === req.params.id);
  if (org) {
    res.json(org);
  }
  throw new Error("Organization not found!");
});

OrgRouter.delete("/:id", (req, res) => {
  res.json({
    message: `Organization ${req.params.id} deleted!`
  });
});

OrgRouter.patch("/:id", (req, res) => {
  res.json({
    message: `Organization ${req.params.id} updated!`
  });
});

export default OrgRouter;
