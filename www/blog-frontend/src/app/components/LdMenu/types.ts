export interface LdMenuItem {
    id: number;
    parent_menu_id: number;
    menu_icon?: string;
    menu_name: string;
    menu_sort: number;
    menu_target?: string;
    menu_url: string;
}