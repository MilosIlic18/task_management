
import { AuthModule } from "./auth/auth.module";
import { ItemsModule } from "./items/items.module";
import { UsersModule } from "./users/users.module";

export const MAIN_ROUTES = [
    {path:'auth' ,module:AuthModule},
    {path:'users',module:UsersModule},
    {path:'items',module:ItemsModule}
]