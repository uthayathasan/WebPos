import{Routes,RouterModule} from "@angular/router";
import{TillComponent} from "./Till/till.component";
import { ItemComponent } from "./Till/item.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import {VbrComponent}from "./auth/vbr.component";
import {ClearDeviceComponent} from "./auth/clearDevice.component";
const routes : Routes=[
    {path: "", component: VbrComponent },
    {path: "login", component: AuthenticationComponent },
    {path: "till", component: TillComponent },
    {path: "clear", component: ClearDeviceComponent},
    {path: "detail/:id", component: ItemComponent}]
export const RoutingConfig=RouterModule.forRoot(routes);