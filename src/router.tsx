import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useEffect } from "react";
import { hasAuthParams, useAuth } from "react-oidc-context";
import { routeTree } from "./generated/routeTree.gen";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadDelay: 250,
  defaultPendingMinMs: 750,
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  context: {
    // queryClient,
    isAuthenticated: undefined,
  },
  //   defaultNotFoundComponent: () => <NotFoundPage />,
  //   defaultErrorComponent: () => <ErrorPage />,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function Router() {
  const auth = useAuth();

  // Clean up URL after successful authentication
  useEffect(() => {
    if (auth.isAuthenticated && hasAuthParams()) {
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, [auth.isAuthenticated]);

  if (auth.isLoading) return null;

  if (auth.error) {
    return <div>Authentication Error: {auth.error.message}</div>;
  }

  return (
    <RouterProvider
      router={router}
      context={{
        isAuthenticated: auth.isAuthenticated,
        signinRedirect: auth.signinRedirect,
      }}
    />
  );
}
