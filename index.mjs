// Lambda Function
let response;

export const handler = async (event) => {
    try {
        response = await Promise.resolve('Works');
    } catch (err) {
        console.log(err);
        throw new Error('Something went wrong');
    }
    
    return response;
};