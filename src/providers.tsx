import { WebStorageStateStore } from "oidc-client-ts";
import { AuthProvider } from "react-oidc-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider
      authority={import.meta.env.VITE_OIDC_AUTHORITY}
      client_id={import.meta.env.VITE_OIDC_CLIENT_ID}
      redirect_uri={import.meta.env.VITE_OIDC_REDIRECT_URI}
      post_logout_redirect_uri={import.meta.env.VITE_OIDC_REDIRECT_URI}
      response_type={import.meta.env.VITE_OIDC_RESPONSE_TYPE}
      scope={import.meta.env.VITE_OIDC_SCOPE}
      userStore={new WebStorageStateStore({ store: window.localStorage })}
    >
      {children}
    </AuthProvider>
  );
}
