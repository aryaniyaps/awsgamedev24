import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  beforeLoad(ctx) {
    if (ctx.context.isAuthenticated) {
      throw redirect({ to: "/game" });
    }
  },
});

function RouteComponent() {
  return <div>Hello "/"!</div>;
}
