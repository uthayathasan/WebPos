import{Routes,RouterModule} from "@angular/router";
import{TillComponent} from "./Till/till.component";
import { ItemComponent } from "./Till/item.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import {VbrComponent}from "./auth/vbr.component";
import {ClearDeviceComponent} from "./auth/clearDevice.component";
import {TablesComponent} from "./Till/tables.component";
import {SeatsComponent} from "./Till/seats.component";
const routes : Routes=[
    {path: "", component: VbrComponent },
    {path: "login", component: AuthenticationComponent },
    {path: "till", component: TillComponent },
    {path: "clear", component: ClearDeviceComponent},
    {path: "detail/:id", component: ItemComponent},
    {path:"tables",component:TablesComponent},
    {path:"seats",component:SeatsComponent}
]
export const RoutingConfig=RouterModule.forRoot(routes);