

export const handleErrors = (err: any) => {
    const response = err.response;
    switch (response?.status) {
        case 500:
            window.alert(response.data.message)
            break;

        case 400:
        case 401:
        case 404:
        case 405:
        case 403:
        case 422:
            if (response.data.errors) {
                if (Array.isArray(response.data.errors)) {
                    response.data.errors.forEach((each: any) => {
                        window.alert(each.message)
                    });
                } else if (typeof response.data.errors === "object") {
                    Object.keys(response.data.errors).forEach((field) => {
                        const errors = response.data.errors[field];
                        errors.forEach((errorMessage: any) => {
                            window.alert(errorMessage)
                        });
                    });
                }
            } else if (response.data.error) {
                window.alert(response.data.error)
            } else {
                window.alert(response.data.message)
            }
            break;

        default:
            window.alert(err.message)
            break;
    }
};


export const stat = [
    { id: 1, name: "Easy Order System", icon: "solar:cart-3-bold" },
    { id: 2, name: "On Time delivery", icon: "iconamoon:delivery-fast-fill" },
    { id: 3, name: "100% Refund", icon: "mingcute:card-refund-fill" },
    { id: 4, name: "24/7 Online Support", icon: "fluent:person-support-28-filled" },
]


export const appData = {
    appName: "shop.com"
}