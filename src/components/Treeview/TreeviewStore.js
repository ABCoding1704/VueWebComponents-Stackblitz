import { defineStore } from 'pinia';
// let items: Record<ItemKeys, ItemValues>
export const TreeviewItemsStore = defineStore('TreeviewItems', {
    state: () => ({
        Items: (Map),
    })
});
