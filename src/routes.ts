
import { InvitationWithoutRest } from "./pages/Invation/InvitationWithoutRest";
import { InvitationWithRest } from "./pages/Invation/InvitationWithRest";
import { NameForm } from "./pages/Start/NameForm";
import { START_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: START_ROUTE,
        Component: NameForm
    },
    {
        path: "/invite456/:name",
        Component: InvitationWithRest
    },
    {
        path: "/invite876/:name",
        Component: InvitationWithoutRest
    },

]