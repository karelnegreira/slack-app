import { convexAuthNextjsMiddleware, nextjsMiddlewareRedirect } from "@convex-dev/auth/nextjs/server";

import { createRouteMatcher, isAuthenticatedNextjs } from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(["/signin"]);

export default convexAuthNextjsMiddleware((request) => {
    if (!isPublicPage(request) && !isAuthenticatedNextjs()) {
        return nextjsMiddlewareRedirect(request, '/signin')
    }
    
    if (isPublicPage(request) && isAuthenticatedNextjs()) {
      return nextjsMiddlewareRedirect(request, "/");
    }
})

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};