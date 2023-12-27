import { create } from 'zustand'
import db from './../../db/flights.json'

export const useItems = create((set) => ({
	items: [db.result.flights[0], db.result.flights[1]],
	loading: false,
	error: null,
	addItems: () => {
		set({ loading: true })
		set((state) => ({
			items: [
				...state.items,
				db.result.flights[state.items.length],
				db.result.flights[state.items.length + 1],
			],
			error: null
		}))
		setTimeout(() => {
			set({ loading: false })
		}, 1000)
	},
	uniqItems: [],
	addUniqItems: (items) => {
		set({ uniqItems: [...items] })
	}
}))

export const useFilters = create((set) => ({
	sort: 0,
	setSort: (value) => {
		set({ sort: value })
	},
	filterPrice: [],
	setFilterPrice: (min, max) => {
		set({ filterPrice: [min, max] })
	},
	filterStops: [],
	setFilterStops: (isChecked, value) => {
		set(state => {
			switch (isChecked) {
				case true:
					return ({
						filterStops: [...state.filterStops, value]
					})
				case false:
					return ({
						filterStops: state.filterStops.filter(item => item !== value)
					})
			}
		})
	},
	filterCompanies: [],
	setFilterCompanies: (isChecked, value) => {
		set(state => {
			switch (isChecked) {
				case true:
					return ({
						filterCompanies: [...state.filterCompanies, value]
					})
				case false:
					return ({
						filterCompanies: state.filterCompanies.filter(item => item !== value)
					})
			}
		})
	},
}))