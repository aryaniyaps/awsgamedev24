import { createFileRoute } from "@tanstack/react-router";
import GamePage from "../pages/game-page";

export const Route = createFileRoute("/game")({
  component: GamePage,
  beforeLoad(ctx) {
    if (!ctx.context.isAuthenticated) {
      void ctx.context.signinRedirect();
    }
  },
});
