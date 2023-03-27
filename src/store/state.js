export default {
    users: [
        {
            id: 1,
            name: "User one",
            buildings: [
                { id: 1, name: "Building 1", country: "EGY" }
            ],
        },
        {
            id: 2,
            name: "User two",
            buildings: [{ id: 1, name: "Building 2", country: "ARE" }],
        }
    ],
    selectedUser: {
        id: 1,
        name: "User one",
        buildings: [
            { id: 1, name: "Building 1", country: "EGY" }
        ],
    },
    selectedBuilding: null,
    isLoading: false
}