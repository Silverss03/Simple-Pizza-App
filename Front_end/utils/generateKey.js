let keyCounter = 1;

const generateKey = () => {
    keyCounter += 1;
    return keyCounter.toString();
};

export default generateKey;
