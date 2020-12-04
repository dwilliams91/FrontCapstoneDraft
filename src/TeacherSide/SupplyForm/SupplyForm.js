import React, { useContext, useEffect, useRef, useState } from "react"
import { SupplyItemsProvider } from "../SupplyProviders/SupplyItemsProvider"
import { SupplyTypeContext } from "../SupplyProviders/SupplyTypeProvider"
import { SupplyItemForm } from "./SupplyItemForm"

export const SupplyForm=()=>{
    const {SupplyTypes, getSupplyTypes} =useContext(SupplyTypeContext)

    const [Type, setType]=useState(0)

    useEffect(()=>{
        getSupplyTypes()
    },[])
    
    // const supplyItem=useRef(null)
    // const supplyItemType=useRef(null)
    
    const handleFieldChange=(event)=>{
        setType(event.target.value)
    }

    return (
       <>
        {console.log(SupplyTypes)}
            <fieldset>
                <div className="form-group">
                    <label>Select Type </label>
                    <select value={Type} id="SupplyType" className="form-control" onChange={handleFieldChange}>
                
                        <option value="0">Select Type</option>
                        {SupplyTypes.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.type}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <SupplyItemForm selectedType={Type}></SupplyItemForm>
       </>
    )
}