import React from "react"
import { SupplyForm } from "./SupplyForm/SupplyForm"
import { SupplyTypeProvider } from "./SupplyProviders/SupplyTypeProvider"
import {SupplyItemsProvider} from "../TeacherSide/SupplyProviders/SupplyItemsProvider"
import { SupplyItemForm } from "./SupplyForm/SupplyItemForm"
export const TeacherApplicationView = () => {
    return (
        <>
            <SupplyItemsProvider>
                <SupplyTypeProvider>
                    <SupplyForm />
                </SupplyTypeProvider>
            </SupplyItemsProvider>

            

            


        </>
    )

}