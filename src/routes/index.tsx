import LandingPage from "@/pages/landing-page";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: LandingPage,
  beforeLoad(ctx) {
    if (ctx.context.isAuthenticated) {
      throw redirect({ to: "/game" });
    }
  },
});
