import React, { useContext, useEffect, useRef, useState } from "react"
import { SupplyItemsProvider } from "../SupplyProviders/SupplyItemsProvider"
import { SupplyTypeContext } from "../SupplyProviders/SupplyTypeProvider"
import { SupplyItemForm } from "./SupplyItemForm"
import { SupplyItemContext } from "../SupplyProviders/SupplyItemsProvider"

export const SupplyForm = () => {
    const { SupplyTypes, getSupplyTypes } = useContext(SupplyTypeContext)
    const { SupplyItems, getSupplyItems } = useContext(SupplyItemContext)

    const [Type, setType] = useState(0)

    useEffect(() => {
        getSupplyTypes()
    }, [])
    useEffect(() => {
        getSupplyItems()

    }, [])

    useEffect(() => {
        const selectTypeParsed = parseInt(Type)
        if (selectTypeParsed === 0) {
            setFilteredSupplyItems(SupplyItems)
        } else {
            setFilteredSupplyItems(SupplyItems.filter(e => e.typeId === selectTypeParsed))
        }
    }, [Type, SupplyItems])

    const [filteredSupplyItems, setFilteredSupplyItems] = useState([])

    const handleFieldChange = (event) => {
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
        </>
    )
}