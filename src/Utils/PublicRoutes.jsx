/**
 * Use routes as js object 
 * 
*/

import { useRoutes } from "react-router-dom";
import {  PublicRouter1 } from "../Constants/Router.data";

export default function PublicRoutes(){
    

    const routesObj  = PublicRouter1.map( 
        (route)=>{
            if(route?.hasSubRoutes){
                return{
                    id:route.id,
                    path: route.path,
                    element: < route.component />,
                    index:  route?.index ? route.index : false,
                    children: route.hasSubRoutes.map( subRoute =>{
                        return {
                            id:subRoute.id,
                            path: subRoute.path,
                            element: < subRoute.component />,
                            index:  subRoute?.index ? subRoute.index : false
                        }
                    })
                }
            }else{
                return {
                    id:route.id,
                    path: route.path,
                    element: < route.component />,
                    index:  route?.index ? route.index : false
                }
            }
        }
    )
    return useRoutes(routesObj);;
}

function getRouteObj ({id,path, index , element}){
    return {
        id,
        path,
        element: < element />,
        index:  index ? index : false
    }
}