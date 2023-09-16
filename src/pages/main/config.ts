import { GamePage } from "../game";
import { InformationPage } from "../information";
import { SettingsPage } from "../settings";
import { TeamPage } from "../team";

export const menu = [
    {
        label:'新游戏',
        path:'/game',
        component:GamePage
    },
    {
        label:'资料',
        path:'/information',
        component:InformationPage
    },
    {
        label:'设置',
        path:'/settings',
        component:SettingsPage
    },
    {
        label:'制作团队',
        path:'/team',
        component:TeamPage
    }
]