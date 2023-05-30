import axios from "axios";

const api=axios.create({
    baseURL:'https://strapi-deploy-kpio.onrender.com',
    headers:{
        Authorization:`Bearer 5533264ab05bfd5c59af7f0cc64c39ef2dcbf7de57666cac0521dc42003dab403733e13d1114eede98c925d4c8a64b21e43beb25561b843e82cd2fa5679390a95a467dd0eb68162b0de704cd4140989ab5b257f5887dbe7ab58dd98ed4f6a4c11a29abf38449334e2ce5802d90a36b9e3d14dde571cb8a081a33dc149e7182b8`,
        'Content-Type':'application/json'
    },
});

//Categories
export const fetchCategories=async()=> api.get('/api/categories?populate=*')