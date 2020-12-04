import React, { useContext, useEffect } from "react"
import { SupplyTypeContext } from "./SupplyProviders/SupplyTypeProvider"

export const SupplyForm=()=>{
    const {SupplyTypes, getSupplyTypes} =useContext(SupplyTypeContext)

    useEffect(()=>{
        getSupplyTypes()
    },[])

    return (
       <>
        {console.log(SupplyTypes)}
            <fieldset>
                <div className="form-group">
                    <label>Select Type </label>
                    <select defaultValue="" id="SupplyType" className="form-control" >
                        <option value="0">Select Type</option>
                        {SupplyTypes.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.type}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
       </>
    )
}