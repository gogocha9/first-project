// Ternary Operator
// Bad Code
{
    function getResult(score) {
        let result;
        if(score > 5) {
            result = 'good';
        } else if(score <= 5) {
            result = 'bad';
        }
        return result;
    }
}

// good Code
{
    function getResult(score) {
        return score > 5 ? 'good' : 'bad';
    }
}

// Nullish coalescing operator
// Bad Code
{
    function printMessage(text) {
        let message = text;
        if(text == null || text == undefined) {
            message = 'Nothing to display';
        }
        console.log(message);
    }
}

// Good Code
{
    function printMessage(text) {
        const message = text ?? 'Nothing to display';
        console.log(message);
    }
}