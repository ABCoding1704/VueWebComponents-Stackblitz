import { defineStore } from 'pinia'

export interface ItemKeys {
    Id: number
}

export interface ItemValues {
    Icon: string,
    Text: string,
    Parent: number,
    SortNumber: number
}

// let items: Record<ItemKeys, ItemValues>
export const TreeviewItemsStore = defineStore('TreeviewItems', {
    state: () => ({
        Items: Map<ItemKeys, ItemValues>,
    })
})