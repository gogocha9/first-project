// keyof
{
    var uk = "gender";
}
// partial<T>
{
    var admin = {
        id: 1,
        name: "Bob",
    };
}
// Required<T>
{
    var admin = {
        id: 1,
        name: "Bob",
        age: 30,
    };
}
// Readonly<T>
{
    var admin = {
        id: 1,
        name: "Bob",
    };
    // admin.id = 4; x
}
// Record<K, T> - ex_01
{
    var score = {
        1: "A",
        2: "C",
        3: "B",
        4: "D",
    };
}
// Record<K, T> - ex_02
{
    function isValid(user) {
        var result = {
            id: user.id > 0,
            name: user.name !== '',
            age: user.age > 0
        };
        return result;
    }
}
// Pick<T, K>
{
    var admin = {
        id: 0,
        name: "Bob",
    };
}
// Omit<T, K>
{
    var admin = {
        id: 0,
        name: "Bob",
    };
}
// Exclude<T1, T2>
{
}
// NonNullable<Type>
{
}
