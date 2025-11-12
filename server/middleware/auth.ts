import { Request, Response, NextFunction } from "express";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session.isAdmin) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized - Please log in" });
}
