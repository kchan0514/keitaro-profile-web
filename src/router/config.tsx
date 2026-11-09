import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import LanguageWrapper from "../components/LanguageWrapper";
import SitePage from "../site/SitePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/ja" replace />,
  },
  {
    path: "/:lang",
    element: <LanguageWrapper />,
    children: [
      { index: true, element: <SitePage page="home" /> },
      { path: "about", element: <SitePage page="about" /> },
      { path: "research", element: <SitePage page="research" /> },
      { path: "works/yomikikase-agent", element: <SitePage page="yomikikase" /> },
      { path: "*", element: <Navigate to=".." replace /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/ja" replace />,
  },
];

export default routes;
