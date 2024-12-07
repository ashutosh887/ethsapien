type RouteType = {
  path: string;
};

export const routerConfig: Record<string, RouteType> = {
  home: { path: "/" },
  bounties: { path: "/bounties" },
  signin: { path: "/auth/signin" },
  dashboard: { path: "/dashboard" },
  profile: { path: "/profile" },
};
