import countries from './../assets/countriesList';

export default {
    users: [
        {
            id: 1,
            name: "User one",
            buildings: [
                { 
                    id: 1, 
                    name: "Building 1",
                     country: "EGY",
                     position: {
                        lat: 30.033333,
                        lng: 31.233334
                    }
                }
            ],
        },
        {
            id: 2,
            name: "User two",
            buildings: [
                {  
                    id: 1,
                    name: "Building 2", 
                    country: "ARE" ,
                    position: {
                        lat:  24.19299257,
                        lng: 54.370252
                    }
                }
            ],
        }
    ],
    selectedUser: {
        id: 1,
        name: "User one",
        buildings: [
            { 
                id: 1, 
                name: "Building 1",
                country: "EGY",
                position: {
                    lat: 30.033333,
                    lng: 31.233334
                }
            }
        ],
    },
    selectedBuilding: null,
    countriesList: countries
}