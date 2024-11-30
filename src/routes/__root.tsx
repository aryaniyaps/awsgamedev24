import {
  createRootRouteWithContext,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";

import { type AuthContextProps } from "react-oidc-context";

interface MyRouterContext {
  isAuthenticated: boolean | undefined;
  signinRedirect: AuthContextProps["signinRedirect"];
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  ),
});
