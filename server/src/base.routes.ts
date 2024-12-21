import { MainModule } from "./modules/main/main.module";
import { MAIN_ROUTES } from "./modules/main/main.routes";

export const BASE_ROUTES = [
    {path:'',module:MainModule,children:MAIN_ROUTES}
]