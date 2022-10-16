export default {
    template: `
        <div>
            <button 
                @click="$emit('update:currentTag', tag)"
                v-for="tag in tags" 
                class="border rounded mx-1 px-1 py-px text-xs"
                :class="{'border-blue-500 text-blue-500': tag === currentTag}"
                >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        tags(){
            return ['all', ...new Set(this.initialTags)];
        }
    },
}