new Vue({
    el: "#app",
    data: {
        University: "Lovely Professional University",
        Grade: "O",
        htmlContent: "<div><h3>Welcome to Vue.js Directives within Templates</h3></div>",
        imgsrc: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    }
})

let instance1 = new Vue({
    el: "#app1",
    data: {
        name: "Vue.js",
        version: "2.6.12"
    }
})

let instance2 = new Vue({
    el: "#app2",
    data: {
        name: "HTML",
        version: "5"
    }
})

let instance3 = new Vue({
    el: "#app3",
    data: {
        name: "CSS",
        version: "3"
    }
})