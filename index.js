const inputs = document.querySelectorAll("input")

inputs.forEach((node) => {
    node.addEventListener('mousedown', function(event) {
        event.preventDefault()

        let value = node.value.trim()
        if (value == "X") {
            value = "*"
        }

        const results = document.querySelector(".textResult")
        const resultText = results.innerText.trim()
        if (value == "RESET") {
            results.innerText = ""
            return true
        }

        if (value == "DEL") {
            console.log("coucou")
            results.innerText = resultText.slice(0, -1)
            return true
        }


        if (resultText == "0") {
            results.innerText = ""
        }
        results.append(value)

        if (value == "=") {
            let solution = eval(resultText)
            results.innerText = solution
            return true
        }
        console.log(value)
    })
})