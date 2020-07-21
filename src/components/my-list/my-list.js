import React, {useEffect, useState} from "react";

const MyList = ({item}) => {

    const [items, setItems] = useState([{}])

    useEffect(() => {
        setItems((state) => {
            console.log(state)
            let arr = [...state]
            arr.push(item)
            return {
                arr
            }
        })
    },[item])

    const updateItems = (item) => {

    }
    console.log(items)
    return (
        <div>

        </div>
    )
}

export default MyList