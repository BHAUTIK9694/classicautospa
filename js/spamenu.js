document.querySelectorAll(".tabs button").forEach(element => {
    element.addEventListener("click", (e) => {
        document.querySelector(".tabs .active").classList.remove("active");
        element.classList.add("active");


        let cartype = element.dataset.tab;
        document.querySelector(".golden").style.display = "block";
        document.querySelector(".silver").style.display = "block";

        if (cartype == "coupes") {
            document.querySelector("#master").innerText = "$45";
            document.querySelector("#professional").innerText = "$90";
            document.querySelector("#basic").innerText = "$350";
            document.querySelector("#subscription").innerText = "$135/month";
            document.querySelector("#subscribeBtn").setAttribute("href", "https://buy.stripe.com/7sIcOM1SE03VczS288");
        } else if (cartype == "small-suv") {
            document.querySelector("#master").innerText = "$65";
            document.querySelector("#professional").innerText = "$110";
            document.querySelector("#basic").innerText = "$400";
            document.querySelector("#express").innerText = "$35";
            document.querySelector("#subscription").innerText = "$170/month";
            document.querySelector("#subscribeBtn").setAttribute("href", " https://buy.stripe.com/bIY6qo7cYbMDeI0bIJ");
        } else if (cartype == "crossover") {
            document.querySelector("#master").innerText = "$55";
            document.querySelector("#professional").innerText = "$100";
            document.querySelector("#basic").innerText = "$420";
            document.querySelector("#express").innerText = "$35";
            document.querySelector("#subscription").innerText = "$160/month";
            document.querySelector("#subscribeBtn").setAttribute("href", "#");
            document.querySelector("#subscribeBtn").setAttribute("title", "Temporary unavailable");
        } else if (cartype == "large-suv") {
            document.querySelector("#master").innerText = "$60";
            document.querySelector("#professional").innerText = "$120";
            document.querySelector("#basic").innerText = "$450";
            document.querySelector("#express").innerText = "$40";
            document.querySelector("#subscription").innerText = "$180/month";
            document.querySelector("#subscribeBtn").setAttribute("href", "https://buy.stripe.com/3cs5mk9l6eYP43m7su");
        } else if (cartype == "pickup-truck") {
            document.querySelector("#master").innerText = "$80";
            document.querySelector("#professional").innerText = "$140";
            document.querySelector("#basic").innerText = "$500";
            document.querySelector("#express").innerText = "$45";
            document.querySelector("#subscription").innerText = "$205/month";
            document.querySelector("#subscribeBtn").setAttribute("href", "https://buy.stripe.com/6oEbKI68U3g7eI0bIL");

        }
    });
});
