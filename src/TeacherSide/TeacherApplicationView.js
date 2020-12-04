import React from "react"
import { SupplyForm } from "./SupplyForm"
import { SupplyTypeProvider } from "./SupplyProviders/SupplyTypeProvider"

export const TeacherApplicationView=()=>{
    return (
        <>
        <SupplyTypeProvider>
            <SupplyForm/>
        </SupplyTypeProvider>
       
        </>
    )

}