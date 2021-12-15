const reducer = (state, action) => {
	switch (action.type) {
		case 'CLEAR_CART':
			return { ...state, cart: [] }

		case 'REMOVE_ITEM':
			return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) }

		case 'INCREASE_AMOUNT':
			let increasedCart = state.cart.map(cartItem => {
				if (cartItem.id === action.payload) {
					return { ...cartItem, amount: cartItem.amount + 1 }
				}

				return cartItem
			})

			return { ...state, cart: increasedCart }

		case 'DECREASE_AMOUNT':
			let decreasedCart = state.cart.map(cartItem => {
				if (cartItem.id === action.payload) {
					return { ...cartItem, amount: cartItem.amount - 1 }
				}

				return cartItem
			}).filter(cartItem => cartItem.amount !== 0)

			return { ...state, cart: decreasedCart }

		case 'GET_TOTALS':
			let { total, amount } = state.cart.reduce(
				(cartTotal, cartItem) => {
					const { price, amount } = cartItem
					const itemTotal = price * amount

					cartTotal.total += itemTotal
					cartTotal.amount += amount
					return cartTotal
				},
				{
					total: 0,
					amount: 0,
				}
			)
			total = parseFloat(total.toFixed(2))

			return { ...state, total, amount }


		default:
			break;
	}
}

export default reducer