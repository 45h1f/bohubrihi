document.addEventListener("DOMContentLoaded", function() {
    const validateButton = document.getElementById("validateButton");
    const resultElement = document.getElementById("result");
    const validExampleElement = document.getElementById("validExample");
    const invalidExampleElement = document.getElementById("invalidExample");
    document.getElementById("validationType").addEventListener("change", function() {
        resultElement.textContent = "";
        validExampleElement.textContent = "";
        invalidExampleElement.textContent = "";
    });

    validateButton.addEventListener("click", function() {
        const validationType = document.getElementById("validationType").value;
        const inputText = document.getElementById("inputText").value;

        const isValid = validateInput(inputText, validationType);
        resultElement.textContent = isValid ? "Valid" : "Invalid";

        resultElement.classList.remove("valid", "invalid");
        resultElement.classList.add(isValid ? "valid" : "invalid");

        if (!isValid) {
            showValidExample(validationType);
        } else {
            hideValidExample();
        }
    });

    function validateInput(inputText, validationType) {
        const regexPatterns = {
            'Email': /^[\w\.-]+@[\w\.-]+\.\w+$/,
            'Phone Number': /^\d{10}$/,
            'Post Code': /^\d{4}$/
            // here adding more pattern later
        };

        if (regexPatterns.hasOwnProperty(validationType)) {
            const regexPattern = regexPatterns[validationType];
            return regexPattern.test(inputText);
        } else {
            return false;
        }
    }

    function showValidExample(validationType) {
        const validExamples = {
            'Email': 'example@example.com',
            'Phone Number': '1234567890',
            'Post Code': '1234'
         // here adding more example later
        };

        if (validExamples.hasOwnProperty(validationType)) {
            const validExample = validExamples[validationType];
            validExampleElement.textContent = `Valid example: ${validExample}`;
        } else {
            validExampleElement.textContent = "";
        }
    }

    function hideValidExample() {
        validExampleElement.textContent = "";
    }
});
