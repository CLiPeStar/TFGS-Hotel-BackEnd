const getMenuFrontEnd = (role = "USER_ROLE") => {
    const menuAdmin = [
        {
            title: "Dashboard!!!",
            icon: "mdi mdi-gauge",
            subMenu: [
                { title: "Main", url: "/" },
                // { title: "ProgressBar", url: "progress" },
                // { title: "Gráfica", url: "grafica1" },
                // { title: "Promesas", url: "promesas" },
                // { title: "Rxjs", url: "rxjs" },
            ],
        },
        {
            title: "Maintenance",
            icon: "mdi mdi-folder-lock-open",
            subMenu: [
                { title: "Users", url: "user" },
                { title: "Hotels", url: "hotel" },
                { title: "Receptionists", url: "receptionists" },
            ],
        },
    ];
    const menuUser = [
        {
            title: "Dashboard!!!",
            icon: "mdi mdi-gauge",
            subMenu: [
                { title: "Main", url: "/" },
                // { title: "ProgressBar", url: "progress" },
                // { title: "Gráfica", url: "grafica1" },
                // { title: "Promesas", url: "promesas" },
                // { title: "Rxjs", url: "rxjs" },
            ],
        },
        {
            title: "Maintenance",
            icon: "mdi mdi-folder-lock-open",
            subMenu: [
                { title: "Hotels", url: "hotel" },
                { title: "Receptionists", url: "receptionists" },
            ],
        },
    ];

    if (role === "ADMIN_ROLE") {
        return menuAdmin;
    }
    return menuUser;
};

module.exports = { getMenuFrontEnd };
