import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress">
                <assignment-create @add="add" ></assignment-create>
            </assignment-list>
            <div v-show="showCompleted">
                <assignment-list 
                    :assignments="filters.completed" 
                    can-toggle @toggle="showCompleted = !showCompleted" 
                    title="Completed">
                </assignment-list>
            </div>
        </section>
    `,

    data() {
        return {
            assignments: [],


            showCompleted: true
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },


    created() {
        axios.get('http://127.0.0.1:8000/api/test/response')
        .then(response => {
            this.assignments =response.data;
        })
    },

    methods: {
        add(name){
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    },
}