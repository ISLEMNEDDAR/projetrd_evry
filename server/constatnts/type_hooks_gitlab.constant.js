export const type_system_hooks = {
    group :{
        create : "group_create",
        destroy : "group_destroy",
        rename: "group_rename"
    },
    key : {
        create : "key_create",
        destroy:  "key_destroy"
    },
    project : {
        create : "project_create",
        destroy : "project_destroy",
        rename : "project_rename",
        transfer : "project_transfer",
        update : "project_update"
    },
    user : {
        add_to_group : "user_add_to_group",
        add_to_team : "user_add_to_team",
        create : "user_create",
        destroy : "user_destroy",
        remove_from_group : "user_remove_from_group",
        remove_from_team : "user_remove_from_team",
        rename : "user_rename",
        update_for_group : "user_update_for_group",
        user_update_for_team : "update_for_team"
    }
}