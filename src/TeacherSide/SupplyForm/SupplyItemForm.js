import React, { useEffect, useContext,useState } from "react"
import { SupplyItemContext } from "../SupplyProviders/SupplyItemsProvider"

export const SupplyItemForm=({selectedType})=>{
    const {SupplyItems, getSupplyItems}=useContext(SupplyItemContext)

    useEffect(()=>{
        getSupplyItems()
        
    },[])
    useEffect(()=>{
        const selectTypeParsed=parseInt(selectedType)
        if (selectTypeParsed===0){
            setFilteredSupplyItems(SupplyItems)
        } else{
           setFilteredSupplyItems( SupplyItems.filter(e=>e.typeId===selectTypeParsed))
        }
    },[selectedType, SupplyItems])

    const[ filteredSupplyItems, setFilteredSupplyItems]=useState([])

return (
    <fieldset>
        {console.log(SupplyItems)}
    <div className="form-group">
        <label>Select Type </label>
        <select defaultValue="" id="SupplyItem" className="form-control">              
            <option value="0">Select Type</option>
            {filteredSupplyItems.map(e => (
                <option key={e.id} value={e.id}>
                    {e.name}
                </option>
            ))}
        </select>
    </div>
</fieldset>
)

}