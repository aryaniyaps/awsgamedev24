import GamePage from "@/pages/game-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/game")({
  component: GamePage,
  beforeLoad(ctx) {
    if (!ctx.context.isAuthenticated) {
      void ctx.context.signinRedirect();
    }
  },
});
