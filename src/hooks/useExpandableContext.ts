import { inject } from 'vue';

export const useExpandableContext = () => {
    const context = inject('expandableContext', null);
    if (!context) {
        throw new Error('ExpandableContext must be used within Expandable');
    }
    return context;
};
