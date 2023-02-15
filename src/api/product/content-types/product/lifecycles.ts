const setDiscountCost = (event) => {
    const { data } = event.params 
        
    if(data.Discount != null) {
        data.DiscountCost = Math.floor(data.Cost * (1 - (data.Discount / 100)))
    } else {
        data.DiscountCost = data.Cost
    }
}

export default {
    async beforeUpdate(event){ 
        setDiscountCost(event)
    },
    async beforeCreate(event) {
        setDiscountCost(event)
    },
}
