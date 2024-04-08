const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Lista Email',
        emails: [],
      }
    },
    methods: {
        fetchEmails(n){
            for(let i = 0; i < n; i++){

                axios
                    .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                    .then((res) => {
                        this.emails.push(res.data.response)
                    })

            }
        },
    },
    created() {
        // this.fetchEmails(10)
    }
  }).mount('#app')