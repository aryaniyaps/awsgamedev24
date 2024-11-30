import { createFileRoute, redirect } from "@tanstack/react-router";
import LandingPage from "../pages/landing-page";

export const Route = createFileRoute("/")({
  component: LandingPage,
  beforeLoad(ctx) {
    if (ctx.context.isAuthenticated) {
      throw redirect({ to: "/game" });
    }
  },
});
